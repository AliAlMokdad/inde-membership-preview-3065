/* InDe - The Living Flag. Self-contained vanilla engine (no React / DCLogic / GSAP-required-globals).
   Renders the four quadrant letters i-n-d-e that morph into white silhouette people acting out
   four scenes (socialise / swim / study / party) and re-form, phase-offset so no quadrant is empty.
   Drop-in: needs the #inde-svg markup present and GSAP on the page. Reads window.INDE_FLAG_OPTS:
     { autoplay:true, defaultSpeed:1, showGrain:false }
   All ids are scoped via getElementById, so keep ONE instance per page. */
(function () {
  "use strict";

  function boot() {
    var opts = window.INDE_FLAG_OPTS || {};
    if (!document.getElementById("inde-svg")) return;        // nothing to mount
    var tries = 0;
    (function wait() {
      if (window.gsap) { buildLivingFlag(opts); return; }
      if (++tries > 150) return;                              // ~6s, then give up (static letters remain)
      setTimeout(wait, 40);
    })();
  }
  if (document.readyState !== "loading") boot();
  else document.addEventListener("DOMContentLoaded", boot);

  function buildLivingFlag(props) {
    var gsap = window.gsap;
    var SVG = "http://www.w3.org/2000/svg";
    var $ = function (id) { return document.getElementById(id); };
    var E = function (tag, a) { var e = document.createElementNS(SVG, tag); for (var k in a) e.setAttribute(k, a[k]); return e; };

    var autoplay = props.autoplay !== false;
    var defaultSpeed = props.defaultSpeed != null ? props.defaultSpeed : 1;
    var showGrain = props.showGrain === true;                // default OFF (perf)
    var userPaused = false, inView = true;                   // hoisted: read by the control handler + the view observer

    ["inde-Q-i", "inde-Q-n", "inde-Q-d", "inde-Q-e"].forEach(function (id) { var g = $(id); if (g) g.innerHTML = ""; });
    var K = [];
    gsap.globalTimeline.timeScale(1); gsap.globalTimeline.paused(false);
    var grainRect = $("inde-grain-rect"); if (grainRect && !showGrain) grainRect.style.display = "none";

    // ---------- spine-based shape engine ----------
    var F = function (n) { return Math.round(n * 10) / 10; };
    var lerpShape = function (A, B, t) {
      return {
        sp: A.sp.map(function (p, i) { return [p[0] + (B.sp[i][0] - p[0]) * t, p[1] + (B.sp[i][1] - p[1]) * t]; }),
        w: A.w.map(function (wv, i) { return wv + (B.w[i] - wv) * t; })
      };
    };
    var buildPath = function (sp, w) {
      var m = sp.length, R = [], L = [];
      for (var i = 0; i < m; i++) {
        var pr = sp[Math.max(0, i - 1)], nx = sp[Math.min(m - 1, i + 1)];
        var tx = nx[0] - pr[0], ty = nx[1] - pr[1];
        var len = Math.hypot(tx, ty) || 1; tx /= len; ty /= len;
        var ox = -ty, oy = tx, hw = w[i] / 2;
        R.push([sp[i][0] + ox * hw, sp[i][1] + oy * hw]);
        L.push([sp[i][0] - ox * hw, sp[i][1] - oy * hw]);
      }
      var out = R.concat(L.reverse());
      var m2 = out.length;
      var d = "M " + F(out[0][0]) + " " + F(out[0][1]);
      for (var j = 0; j < m2; j++) {
        var p0 = out[(j - 1 + m2) % m2], p1 = out[j], p2 = out[(j + 1) % m2], p3 = out[(j + 2) % m2];
        var c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
        var c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
        d += " C " + F(c1[0]) + " " + F(c1[1]) + " " + F(c2[0]) + " " + F(c2[1]) + " " + F(p2[0]) + " " + F(p2[1]);
      }
      return d + " Z";
    };
    var PERSON = { sp: [[0, 0], [0, -30], [0, -58], [0, -78], [0, -92], [0, -108], [0, -124]], w: [30, 36, 28, 42, 18, 40, 8] };
    var DESK = { sp: [[-72, -46], [-48, -46], [-24, -44], [0, -44], [24, -44], [48, -46], [72, -46]], w: [14, 16, 16, 18, 16, 16, 14] };
    var stem = function (h, w) { var sp = []; for (var i = 0; i < 7; i++) sp.push([0, -h * i / 6]); return { sp: sp, w: new Array(7).fill(w) }; };
    var arcPts = function (cx, cy, r, a0, a1) { var sp = []; for (var i = 0; i < 7; i++) { var a = (a0 + (a1 - a0) * i / 6) * Math.PI / 180; sp.push([cx + r * Math.cos(a), cy - r * Math.sin(a)]); } return sp; };

    // ---------- part / quadrant config ----------
    var QUADS = {
      i: { hit: "inde-hit-i", scene: "social", base: [172, 232],
        parts: [
          { base: [172, 146], stroke: { sp: [[0, 0], [0, -7], [0, -14], [0, -21], [0, -28], [0, -35], [0, -42]], w: [16, 44, 58, 60, 58, 44, 16] }, target: PERSON },
          { base: [172, 232], stroke: stem(72, 58), target: PERSON },
          { base: [172, 316], stroke: stem(84, 58), target: PERSON }
        ] },
      n: { hit: "inde-hit-n", scene: "swim", base: [707, 232],
        parts: [
          { base: [642, 330], stroke: stem(150, 58), target: PERSON },
          { base: [770, 330], stroke: { sp: [[0, 0], [0, -78], [0, -150], [-30, -180], [-66, -186], [-102, -174], [-128, -150]], w: [58, 58, 58, 58, 58, 58, 58] }, target: PERSON }
        ] },
      d: { hit: "inde-hit-d", scene: "work", base: [172, 767],
        parts: [
          { base: [150, 800], stroke: { sp: arcPts(0, 0, 62, 26, 334), w: [54, 54, 54, 54, 54, 54, 54] }, target: PERSON },
          { base: [222, 880], stroke: stem(300, 58), target: DESK }
        ] },
      e: { hit: "inde-hit-e", scene: "party", base: [707, 767],
        parts: [
          { base: [648, 762], stroke: { sp: [[6, 0], [23, 0], [40, 0], [57, 0], [74, 0], [91, 0], [106, 0]], w: [50, 50, 50, 50, 50, 50, 50] }, target: PERSON },
          { base: [648, 762], stroke: { sp: [[6, 2], [2, -32], [20, -56], [52, -66], [88, -58], [114, -34], [124, -4]], w: [50, 50, 50, 50, 50, 50, 50] }, target: PERSON },
          { base: [648, 762], stroke: { sp: [[6, 2], [2, 34], [22, 58], [54, 66], [86, 58], [106, 38], [112, 22]], w: [50, 50, 50, 50, 50, 50, 50] }, target: PERSON }
        ] }
    };

    // ---------- materialize parts ----------
    Object.keys(QUADS).forEach(function (key) {
      var Q = QUADS[key];
      var layer = $("inde-Q-" + key);
      if (!layer) return;
      Q.parts.forEach(function (part) {
        var outer = E("g", { transform: "translate(" + part.base[0] + " " + part.base[1] + ")" });
        var idleG = E("g", {});
        var sceneG = E("g", {});
        var pathEl = E("path", { fill: "#FFFFFF", d: buildPath(part.stroke.sp, part.stroke.w) });
        idleG.style.transformBox = "fill-box"; idleG.style.transformOrigin = "50% 100%";
        sceneG.style.transformBox = "fill-box"; sceneG.style.transformOrigin = "50% 100%";
        sceneG.appendChild(pathEl); idleG.appendChild(sceneG); outer.appendChild(idleG); layer.appendChild(outer);
        part.el = pathEl; part.sceneG = sceneG; part.idleG = idleG; part.m = { t: 1 };
        part.render = function () { var s = lerpShape(part.target, part.stroke, part.m.t); part.el.setAttribute("d", buildPath(s.sp, s.w)); };
        K.push(gsap.to(idleG, { y: -4 - Math.random() * 2, rotation: 1 + Math.random(), duration: 1.4 + Math.random() * 0.5, yoyo: true, repeat: -1, ease: "sine.inOut", transformOrigin: "50% 100%" }));
      });
    });

    // ---------- scene extras ----------
    // i — chat bubbles
    var iBubbles = [[150, 168], [196, 168], [172, 232]].map(function (xy) {
      var g = E("g", { transform: "translate(" + xy[0] + " " + xy[1] + ")", opacity: 0 });
      g.append(E("rect", { x: -20, y: -14, width: 40, height: 28, rx: 14, fill: "#FFFFFF" }),
        E("path", { d: "M -5 12 L 3 12 L -1 22 Z", fill: "#FFFFFF" }),
        E("circle", { cx: -8, cy: 0, r: 3, fill: "#F11414" }), E("circle", { cx: 0, cy: 0, r: 3, fill: "#F11414" }), E("circle", { cx: 8, cy: 0, r: 3, fill: "#F11414" }));
      g.style.transformBox = "fill-box"; g.style.transformOrigin = "50% 100%"; $("inde-Q-i").appendChild(g); return g;
    });
    // n — SWIMMING (water/ripples clamped to start >= 418 so nothing pokes left of the cross)
    var water = E("g", { opacity: 0 });
    var wTop = 300, wBot = 466, wl = 72;
    var wd = "M 418 " + wTop;
    for (var x = 418; x <= 1006; x += wl) wd += " Q " + (x + wl * 0.25) + " " + (wTop - 11) + " " + (x + wl * 0.5) + " " + wTop + " Q " + (x + wl * 0.75) + " " + (wTop + 11) + " " + (x + wl) + " " + wTop;
    wd += " L 1006 " + wBot + " L 418 " + wBot + " Z";
    water.appendChild(E("path", { d: wd, fill: "#BFE2F4", opacity: 0.30 }));
    var ripples = [];
    [330, 372, 414].forEach(function (ry) {
      var rd = "M 430 " + ry;
      for (var x2 = 430; x2 <= 1090; x2 += wl) rd += " Q " + (x2 + wl * 0.25) + " " + (ry - 9) + " " + (x2 + wl * 0.5) + " " + ry + " Q " + (x2 + wl * 0.75) + " " + (ry + 9) + " " + (x2 + wl) + " " + ry;
      var rp = E("path", { d: rd, fill: "none", stroke: "#EAF6FD", "stroke-width": 4, "stroke-linecap": "round", opacity: 0.55 });
      water.appendChild(rp); ripples.push(rp);
    });
    $("inde-Q-n").appendChild(water);
    ripples.forEach(function (rp, i) { K.push(gsap.fromTo(rp, { x: 0 }, { x: -wl * 0.6, duration: 2.6 + i * 0.7, repeat: -1, ease: "none" })); });
    var splashes = [[540, 296], [582, 300], [748, 306], [792, 310]].map(function (xy) { var c = E("circle", { cx: xy[0], cy: xy[1], r: 4, fill: "#EAF6FD", opacity: 0 }); c.style.transformBox = "fill-box"; c.style.transformOrigin = "50% 50%"; $("inde-Q-n").appendChild(c); return c; });

    // d — STUDY
    var book = E("g", { transform: "translate(150 782)", opacity: 0 });
    book.append(
      E("path", { d: "M 0 2 Q -42 -8 -50 -2 L -50 14 Q -42 8 0 18 Z", fill: "#FFFFFF" }),
      E("path", { d: "M 0 2 Q 42 -8 50 -2 L 50 14 Q 42 8 0 18 Z", fill: "#FFFFFF" }),
      E("rect", { x: -1.6, y: 1, width: 3.2, height: 17, fill: "#F11414", opacity: 0.18 }));
    var pageFlip = E("path", { d: "M 0 2 Q 40 -7 47 -2 L 47 13 Q 40 7 0 17 Z", fill: "#FFFFFF", opacity: 0.95 });
    book.appendChild(pageFlip); pageFlip.style.transformBox = "fill-box"; pageFlip.style.transformOrigin = "0% 50%";
    $("inde-Q-d").appendChild(book);
    var lamp = E("g", { transform: "translate(248 792)", opacity: 0 });
    var lampPool = E("ellipse", { cx: -98, cy: 2, rx: 54, ry: 10, fill: "#FFFFFF", opacity: 0.16 });
    lamp.append(lampPool,
      E("ellipse", { cx: 0, cy: 2, rx: 16, ry: 5, fill: "#FFFFFF" }),
      E("path", { d: "M -3 0 L -3 -52 L -54 -76 L -49 -82 L 3 -58 L 3 0 Z", fill: "#FFFFFF" }),
      E("path", { d: "M -54 -76 L -82 -50 L -42 -47 Z", fill: "#FFFFFF" }));
    $("inde-Q-d").appendChild(lamp);
    K.push(gsap.to(pageFlip, { scaleX: -1, duration: 1.1, yoyo: true, repeat: -1, ease: "power1.inOut", repeatDelay: 0.5 }));
    K.push(gsap.to(lampPool, { opacity: 0.28, duration: 1.7, yoyo: true, repeat: -1, ease: "sine.inOut" }));

    // e — PARTY
    var garland = E("g", { opacity: 0 });
    var gd = "M 430 566"; var gStep = 80;
    for (var gx = 430; gx <= 990; gx += gStep) gd += " Q " + (gx + gStep / 2) + " 586 " + (gx + gStep) + " 566";
    garland.appendChild(E("path", { d: gd, fill: "none", stroke: "#FFFFFF", "stroke-width": 3, opacity: 0.8 }));
    var fi = 0;
    for (var fx = 470; fx <= 950; fx += gStep) { garland.appendChild(E("path", { d: "M " + (fx - 11) + " 580 L " + (fx + 11) + " 580 L " + fx + " 600 Z", fill: "#FFFFFF", opacity: (fi++ % 2 ? 0.7 : 0.92) })); }
    garland.style.transformBox = "fill-box"; garland.style.transformOrigin = "50% 0%";
    $("inde-Q-e").appendChild(garland);
    K.push(gsap.to(garland, { rotation: 1.1, duration: 2.5, yoyo: true, repeat: -1, ease: "sine.inOut" }));
    var balloons = [[516, 648, 25], [600, 616, 22], [846, 642, 26], [928, 614, 20]].map(function (b, i) {
      var bx = b[0], by = b[1], r = b[2];
      var g = E("g", { transform: "translate(" + bx + " " + by + ")", opacity: 0 });
      g.append(
        E("path", { d: "M 0 " + (r * 1.55) + " Q -4 " + (r * 0.8) + " 0 " + (r * 0.5), fill: "none", stroke: "#FFFFFF", "stroke-width": 2, opacity: 0.55 }),
        E("ellipse", { cx: 0, cy: 0, rx: r, ry: r * 1.18, fill: "#FFFFFF", opacity: 0.92 }),
        E("path", { d: "M -4 " + (r * 1.14) + " L 4 " + (r * 1.14) + " L 0 " + (r * 1.32) + " Z", fill: "#FFFFFF", opacity: 0.92 }));
      $("inde-Q-e").appendChild(g);
      K.push(gsap.to(g, { y: "+=" + (10 + i * 2), rotation: i % 2 ? 2.5 : -2.5, duration: 1.8 + i * 0.3, yoyo: true, repeat: -1, ease: "sine.inOut" }));
      return g;
    });
    var cake = E("g", { transform: "translate(703 876)", opacity: 0 });
    cake.append(
      E("ellipse", { cx: 0, cy: 8, rx: 72, ry: 9, fill: "#FFFFFF", opacity: 0.85 }),
      E("rect", { x: -58, y: -28, width: 116, height: 38, rx: 9, fill: "#FFFFFF" }),
      E("rect", { x: -38, y: -56, width: 76, height: 30, rx: 7, fill: "#FFFFFF" }));
    var flames = [-24, 0, 24].map(function (cx) {
      cake.append(E("rect", { x: cx - 2.5, y: -78, width: 5, height: 24, rx: 2, fill: "#FFFFFF" }));
      var fl = E("path", { d: "M 0 0 Q 5.5 -7 0 -16 Q -5.5 -7 0 0 Z", fill: "#FFFFFF", transform: "translate(" + cx + " -80)" });
      fl.style.transformBox = "fill-box"; fl.style.transformOrigin = "50% 100%"; cake.appendChild(fl); return fl;
    });
    $("inde-Q-e").appendChild(cake);
    flames.forEach(function (fl, i) { K.push(gsap.to(fl, { scaleY: 0.72, scaleX: 1.18, opacity: 0.8, duration: 0.18 + i * 0.03, yoyo: true, repeat: -1, ease: "sine.inOut" })); });
    var confetti = [];
    for (var ci = 0; ci < 14; ci++) {
      var ccx = 442 + Math.random() * 540, cw = 7 + Math.random() * 6;
      var cc = (ci % 5 === 0) ? E("circle", { cx: ccx, cy: 540, r: 3.2, fill: "#FFFFFF", opacity: 0 }) : E("rect", { x: ccx, y: 540, width: cw, height: cw * 0.6, rx: 1.5, fill: "#FFFFFF", opacity: 0 });
      cc.style.transformBox = "fill-box"; cc.style.transformOrigin = "50% 50%"; $("inde-Q-e").appendChild(cc); confetti.push({ el: cc, x: ccx });
    }

    // i — a Danish summer house (sommerhus): a place that is yours. Sits BEHIND the figures.
    var house = E("g", { opacity: 0 });
    house.append(
      E("path", { d: "M 84 264 L 172 188 L 260 264 Z", fill: "#FFFFFF" }),                 // pitched roof
      E("rect", { x: 104, y: 260, width: 136, height: 104, rx: 4, fill: "#FFFFFF" }),       // body
      E("rect", { x: 152, y: 306, width: 40, height: 58, rx: 3, fill: "#F11414" }),         // doorway (the red field shows through)
      E("rect", { x: 118, y: 284, width: 28, height: 26, rx: 3, fill: "#F11414" }),         // window
      E("rect", { x: 170, y: 150, width: 4, height: 42, fill: "#FFFFFF" }),                 // flag pole
      E("path", { d: "M 174 152 L 202 159 L 174 166 Z", fill: "#FFFFFF" })                  // little pennant
    );
    var iQ = $("inde-Q-i"); if (iQ) iQ.insertBefore(house, iQ.firstChild);

    // n — the sun (shines while they swim)
    var sun = E("g", { opacity: 0 });
    var sunRays = E("g", {});
    for (var sa = 0; sa < 8; sa++) { var sang = sa * Math.PI / 4; sunRays.appendChild(E("line", { x1: 928 + Math.cos(sang) * 40, y1: 96 + Math.sin(sang) * 40, x2: 928 + Math.cos(sang) * 56, y2: 96 + Math.sin(sang) * 56, stroke: "#FFFFFF", "stroke-width": 5, "stroke-linecap": "round" })); }
    sun.appendChild(sunRays); sun.appendChild(E("circle", { cx: 928, cy: 96, r: 30, fill: "#FFFFFF" }));
    $("inde-Q-n").appendChild(sun);
    K.push(gsap.to(sunRays, { rotation: 360, duration: 32, repeat: -1, ease: "none", svgOrigin: "928 96" }));

    // d — the spark of an idea (a lightbulb above the reader)
    var bulb = E("g", { transform: "translate(116 612)", opacity: 0 });
    bulb.append(
      E("circle", { cx: 0, cy: 0, r: 23, fill: "#FFFFFF" }),
      E("rect", { x: -10, y: 19, width: 20, height: 11, rx: 3, fill: "#FFFFFF" }),
      E("rect", { x: -7, y: 29, width: 14, height: 6, rx: 2, fill: "#FFFFFF" })
    );
    [-140, -90, -40].forEach(function (deg) { var ba = deg * Math.PI / 180; bulb.appendChild(E("line", { x1: Math.cos(ba) * 31, y1: Math.sin(ba) * 31, x2: Math.cos(ba) * 45, y2: Math.sin(ba) * 45, stroke: "#FFFFFF", "stroke-width": 4, "stroke-linecap": "round" })); });
    $("inde-Q-d").appendChild(bulb);

    // ---------- per-quadrant continuous loop (phase-offset) ----------
    var morphOut = function (tl, Q, at) { Q.parts.forEach(function (p, i) { tl.to(p.m, { t: 0, duration: 0.85, ease: "power3.inOut", onUpdate: p.render }, at + i * 0.07); }); };
    var morphIn = function (tl, Q, at) { Q.parts.forEach(function (p, i) { tl.to(p.m, { t: 1, duration: 0.8, ease: "back.out(1.4)", onUpdate: p.render }, at + i * 0.06); tl.to(p.sceneG, { x: 0, y: 0, rotation: 0, scaleX: 1, scaleY: 1, duration: 0.8, ease: "power3.inOut" }, at + i * 0.06); }); };

    var buildScene = function (key) {
      var Q = QUADS[key], P = Q.parts;
      var tl = gsap.timeline({ repeat: -1 });
      Q.tl = tl; K.push(tl); tl.pause(0);   // held at the resting letter; released after the wake
      var SCENE = { social: 5.0, swim: 6.0, work: 5.6, party: 5.0 }[Q.scene];
      var t = 0.4;
      morphOut(tl, Q, t); t += 1.0;
      var s0 = t;

      if (Q.scene === "social") {
        // people gathered in front of their Danish summer house
        tl.to(house, { opacity: 1, duration: 0.6 }, s0 - 0.3);
        var spots = [[138, 392], [172, 398], [206, 392]];
        P.forEach(function (p, i) { tl.to(p.sceneG, { x: spots[i][0] - p.base[0], y: spots[i][1] - p.base[1], duration: 0.7, ease: "power2.out" }, s0); });
        P.forEach(function (p, i) { tl.to(p.sceneG, { rotation: i === 1 ? 0 : (i ? 6 : -6), duration: 1.2, yoyo: true, repeat: Math.max(1, Math.floor((SCENE - 0.7) / 1.2)), ease: "sine.inOut" }, s0 + 0.7); });
        tl.fromTo(iBubbles[0], { opacity: 0, scale: 0.3 }, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(2)" }, s0 + 1.0).to(iBubbles[0], { opacity: 0, duration: 0.5 }, s0 + SCENE - 0.6);
        tl.to(house, { opacity: 0, duration: 0.4 }, s0 + SCENE - 0.4);
      } else if (Q.scene === "swim") {
        tl.to(water, { opacity: 1, duration: 0.6 }, s0 - 0.3);
        tl.to(sun, { opacity: 1, duration: 0.7 }, s0 - 0.3);
        var spotsW = [[556, 350], [768, 356]];
        P.forEach(function (p, i) { tl.to(p.sceneG, { x: spotsW[i][0] - p.base[0], y: spotsW[i][1] - p.base[1], rotation: i ? 78 : -78, scaleX: 1.04, duration: 0.85, ease: "power2.inOut" }, s0); });
        P.forEach(function (p, i) { var dir = i ? 1 : -1; tl.to(p.sceneG, { rotation: "+=" + (dir * 13), y: "+=9", duration: 0.95, yoyo: true, repeat: Math.max(1, Math.floor((SCENE - 0.9) / 0.95)), ease: "sine.inOut" }, s0 + 0.85); });
        splashes.forEach(function (sp, i) { tl.fromTo(sp, { opacity: 0, scale: 0.4 }, { opacity: 0.85, scale: 1.35, duration: 0.45, yoyo: true, repeat: Math.max(1, Math.floor((SCENE - 1.2) / 0.9)), repeatDelay: 0.45 + (i % 2) * 0.25, ease: "sine.out" }, s0 + 1.0 + i * 0.18); });
        tl.to([water, sun], { opacity: 0, duration: 0.5 }, s0 + SCENE - 0.4);
      } else if (Q.scene === "work") {
        tl.to(P[0].sceneG, { x: 2, y: 4, scaleY: 0.9, duration: 0.7, ease: "power2.out" }, s0);
        tl.to(P[1].m, { t: 0, duration: 0.8, ease: "power2.inOut", onUpdate: P[1].render }, s0);
        tl.to(P[1].sceneG, { x: -50, y: -40, rotation: 0, duration: 0.8, ease: "power2.inOut" }, s0);
        tl.to(P[0].sceneG, { rotation: 4, duration: 1.0, yoyo: true, repeat: Math.max(1, Math.floor(SCENE / 1.0)), ease: "sine.inOut" }, s0 + 0.9);
        tl.to(lamp, { opacity: 1, duration: 0.5 }, s0 + 0.4);
        tl.to(book, { opacity: 1, duration: 0.5 }, s0 + 0.6);
        tl.to(bulb, { opacity: 1, duration: 0.4, ease: "back.out(2)" }, s0 + 1.2);
        tl.to(bulb, { opacity: 0.5, duration: 0.3, yoyo: true, repeat: 3, ease: "power1.inOut" }, s0 + 1.8);   // the idea flickers on
        tl.to([book, lamp, bulb], { opacity: 0, duration: 0.4 }, s0 + SCENE - 0.4);
      } else if (Q.scene === "party") {
        var spotsP = [[630, 836], [700, 832], [790, 836]];
        P.forEach(function (p, i) { tl.to(p.sceneG, { x: spotsP[i][0] - p.base[0], y: spotsP[i][1] - p.base[1], duration: 0.55, ease: "power2.out" }, s0); });
        tl.to(garland, { opacity: 1, duration: 0.5 }, s0 - 0.2);
        balloons.forEach(function (b, i) { tl.to(b, { opacity: 1, duration: 0.5 }, s0 + 0.1 + i * 0.08); });
        tl.to(cake, { opacity: 1, duration: 0.5 }, s0 + 0.3);
        P.forEach(function (p, i) {
          var reps = Math.max(1, Math.floor((SCENE - 0.6) / 0.44));
          tl.to(p.sceneG, { y: "-=36", scaleY: 1.1, duration: 0.22, yoyo: true, repeat: reps, ease: "power1.out" }, s0 + 0.6 + i * 0.12)
            .to(p.sceneG, { rotation: i % 2 ? 12 : -12, duration: 0.44, yoyo: true, repeat: Math.max(1, Math.floor(reps / 2)), ease: "sine.inOut" }, s0 + 0.65 + i * 0.12);
        });
        confetti.forEach(function (cf) {
          var dur = 1.9 + Math.random() * 1.8;
          tl.set(cf.el, { opacity: 0.92 }, s0);
          tl.fromTo(cf.el, { y: -Math.random() * 120 }, { y: 460, rotation: 260 + Math.random() * 300, duration: dur, ease: "none", repeat: Math.ceil(SCENE / dur), modifiers: { y: function (y) { var v = parseFloat(y) % 460; if (v < 0) v += 460; return v; } } }, s0);
          tl.to(cf.el, { opacity: 0, duration: 0.4 }, s0 + SCENE - 0.3);
        });
        tl.to([garland, cake].concat(balloons), { opacity: 0, duration: 0.4 }, s0 + SCENE - 0.4);
      }
      t = s0 + SCENE;
      morphIn(tl, Q, t); t += 0.95;
      tl.to({}, { duration: 0.3 });
      return tl;
    };

    ["i", "n", "d", "e"].forEach(buildScene);
    try { window.__INDE = QUADS; } catch (e) {}

    // ---------- ambient (scoped element refs, not document-global selectors) ----------
    var logoEl = $("inde-logo"), glowEl = $("inde-glow");
    if (logoEl) K.push(gsap.to(logoEl, { scale: 1.014, svgOrigin: "500 500", duration: 3.0, yoyo: true, repeat: -1, ease: "sine.inOut" }));
    if (glowEl) K.push(gsap.to(glowEl, { opacity: "+=0.18", scale: 1.05, transformOrigin: "50% 50%", duration: 3.0, yoyo: true, repeat: -1, ease: "sine.inOut" }));

    // ---------- controls (all optional; guarded) ----------
    var ppBtn = $("inde-pp"), ppGlyph = $("inde-pp-glyph"), speedEl = $("inde-speed"), speedVal = $("inde-speed-val");
    var anims = function () { return K.filter(function (t) { return t && t.timeScale; }); };
    var speed = parseFloat(defaultSpeed) || 1;
    var setSpeed = function (v) { speed = v; anims().forEach(function (t) { t.timeScale(v); }); if (speedVal) speedVal.textContent = (Math.round(v * 10) / 10).toFixed(1) + "×"; };
    if (speedEl) { speedEl.value = speed; speedEl.addEventListener("input", function (e) { setSpeed(parseFloat(e.target.value)); }); }
    setSpeed(speed);
    var isPaused = false;
    var setPlaying = function (play) { isPaused = !play; anims().forEach(function (t) { t.paused(!play); }); if (ppGlyph) ppGlyph.textContent = play ? "❚❚" : "▶"; if (ppBtn) ppBtn.setAttribute("aria-pressed", play ? "false" : "true"); };
    if (ppBtn) {
      ppBtn.addEventListener("click", function () { userPaused = isPaused ? false : true; setPlaying(isPaused); });
      ppBtn.addEventListener("mousedown", function () { ppBtn.style.transform = "scale(0.92)"; });
      ppBtn.addEventListener("mouseup", function () { ppBtn.style.transform = "scale(1)"; });
      ppBtn.addEventListener("mouseleave", function () { ppBtn.style.transform = "scale(1)"; });
    }
    var prefersReduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var willAnimate = !prefersReduce && autoplay;

    if (prefersReduce) {
      // static poster: rewind every quadrant to its clean resting LETTER, then pause
      ["i", "n", "d", "e"].forEach(function (k) { QUADS[k].tl.progress(0).pause(); });
      Object.keys(QUADS).forEach(function (k) { QUADS[k].parts.forEach(function (p) { p.m.t = 1; p.render(); gsap.set(p.sceneG, { x: 0, y: 0, rotation: 0, scaleX: 1, scaleY: 1 }); }); });
      setPlaying(false); userPaused = true;
    } else if (!autoplay) {
      // motion allowed but no autoplay: hold the resting wordmark, paused, until the user plays
      setPlaying(false); userPaused = true;
    }

    // ---------- the flag WAKES: assemble the wordmark, hold a beat, then come alive ----------
    var Q_GROUPS = { i: $("inde-Q-i"), n: $("inde-Q-n"), d: $("inde-Q-d"), e: $("inde-Q-e") };
    if (willAnimate) {
      // FIRST PAINT IS ALWAYS A CLEAN, SOLID WORDMARK. Render each quadrant as its resting LETTER
      // synchronously and hold its scene timeline paused at progress 0. There is no fragile entrance
      // tween, so the flag can never be caught frozen mid-animation no matter how the tab loads.
      // The living scenes are released later by startLife(), only once the flag is actually on screen.
      ["i", "n", "d", "e"].forEach(function (k) {
        QUADS[k].tl.progress(0).pause();
        QUADS[k].parts.forEach(function (p) { p.m.t = 1; p.render(); gsap.set(p.sceneG, { x: 0, y: 0, rotation: 0, scaleX: 1, scaleY: 1 }); });
        if (Q_GROUPS[k]) { Q_GROUPS[k].style.opacity = "1"; gsap.set(Q_GROUPS[k], { opacity: 1, scale: 1 }); }
      });
    }
    var lifeStaggered = false;
    function startLife() {
      if (lifeStaggered) return; lifeStaggered = true;
      // staggered release; the four scene lengths differ (5 / 6 / 5.6 / 5s) so they drift out of sync forever (no dead air)
      var dly = { i: 0, n: 0.35, d: 0.7, e: 1.05 };
      ["i", "n", "d", "e"].forEach(function (k) { gsap.delayedCall(dly[k], function () { if (!userPaused && inView) QUADS[k].tl.play(0); }); });
    }
    var entered = false;
    function wake() {
      if (entered) return; entered = true;
      // the solid wordmark is already on screen; guarantee it is visible, then bring it to life.
      // startLife() releases the four scene loops (letters -> people living Danish scenes -> letters),
      // phase-staggered so the quadrants drift out of sync and something is always mid-scene.
      ["i", "n", "d", "e"].forEach(function (k) { var g = Q_GROUPS[k]; if (g) { g.style.opacity = "1"; gsap.set(g, { opacity: 1, scale: 1 }); } });
      startLife();
    }

    // ---------- view-gated: wake on first view, pause when off-screen (perf + battery) ----------
    var svgEl = $("inde-svg");
    if (willAnimate) {
      if (svgEl && "IntersectionObserver" in window) {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (en) {
            if (en.isIntersecting) {
              inView = true;
              if (!entered) wake();
              else if (!userPaused && lifeStaggered) setPlaying(true);   // resume / start scenes that were held while off-screen
            } else {
              inView = false;
              if (entered && !userPaused) setPlaying(false);
            }
          });
        }, { threshold: 0.05 });
        io.observe(svgEl);
      } else { wake(); }
      // safety: never leave the letters hidden if the observer never fires (e.g. background tab)
      setTimeout(function () { if (!entered) wake(); }, 1500);
    }

    // ---------- hover: speed up + wave ----------
    Object.keys(QUADS).forEach(function (key) {
      var Q = QUADS[key], hit = $(Q.hit); if (!hit) return;
      hit.addEventListener("mouseenter", function () { gsap.to(Q.tl, { timeScale: speed * 2.3, duration: 0.5, overwrite: true }); Q.parts.forEach(function (p, i) { gsap.to(p.idleG, { rotation: i % 2 ? 14 : -14, duration: 0.3, yoyo: true, repeat: 3, ease: "sine.inOut", overwrite: false }); }); });
      hit.addEventListener("mouseleave", function () { gsap.to(Q.tl, { timeScale: speed, duration: 0.5, overwrite: true }); });
    });
  }
})();
