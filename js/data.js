/* InDe membership data.
   Services grouped by pillar. Each service carries the membership LEVEL that
   unlocks it (free | silver | platinum) and an honest STATUS (live | building).
   The flagship Denmark Buddy lives in its own featured band, not in this grid. */

const TIER_LABELS = { free: "Free", silver: "Silver", platinum: "Platinum" };
const STATUS_LABELS = { live: "Live now", building: "Building now" };

const PILLARS = [
  {
    id: "settle",
    index: "01",
    title: "Settle in",
    tagline: "The first year, made less lonely.",
    blurb: "Arriving is the hardest part. These help you understand the system and feel the ground steady under you, because you are not doing it alone.",
    img: "assets/img/settle.jpg",
    services: [
      {
        name: "First Year Companion",
        icon: "map-pin",
        promise: "Know what to sort out, and in what order.",
        get: "You get a step-by-step checklist for the things that trip everyone up: CPR, MitID, tax card, bank, and doctor, in the right order. You also get a person to ask when the checklist is not enough.",
        who: "Anyone who has just arrived, or is about to.",
        format: "Digital checklist plus a check-in call",
        delivery: "Self-serve guide, backed by a volunteer who has done it",
        level: "silver",
        status: "building"
      },
      {
        name: "Paperwork Clinic",
        icon: "file-text",
        promise: "Bring the form you do not understand. Leave knowing what to do.",
        get: "You get someone to read a letter, a contract, or an official form with you, so you know what it asks, what to do next, and which office to take it to. This is practical guidance, not legal representation.",
        who: "Anyone stuck on Danish paperwork or an official letter.",
        format: "Group drop-in plus short 1:1 slots",
        delivery: "Trained volunteers and partner advisers, in plain English",
        level: "free",
        status: "building"
      }
    ]
  },
  {
    id: "work",
    index: "02",
    title: "Work and earn",
    tagline: "Your career, protected and pushed forward.",
    blurb: "The job market is where internationals lose the most ground. This pillar takes the career and contract support Danish unions are known for, and opens it to internationals who often go without.",
    img: "assets/img/work.jpg",
    services: [
      {
        name: "Career Sparring",
        icon: "compass",
        promise: "An hour with someone who knows the Danish job market.",
        get: "You get a focused 1:1 to sharpen your CV and LinkedIn for Danish employers, plan your search, and prepare for interviews, including how hiring really works here.",
        who: "Job seekers and anyone planning their next move.",
        format: "1:1 session, in person or online",
        delivery: "Volunteer coaches and partner advisers",
        level: "silver",
        status: "live"
      },
      {
        name: "Contract Check",
        icon: "scale",
        promise: "Understand your job contract before you sign it.",
        get: "You get a plain-English read of your employment contract: your notice terms, your holiday and pension, and a clear heads-up on anything unusual before you sign. This is practical guidance, not legal representation.",
        who: "Anyone with a job offer or a contract they are unsure about.",
        format: "1:1 review plus a short written summary",
        delivery: "Pro-bono legal and HR professionals",
        level: "silver",
        status: "building"
      },
      {
        name: "Pay and Negotiation Lab",
        icon: "calculator",
        promise: "Walk into the pay conversation knowing what is fair.",
        get: "You get help reading Danish salary benchmarks for your field and level, what counts beyond base pay, and a simple script to negotiate without losing the offer.",
        who: "Internationals who do not know what fair pay looks like here.",
        format: "Digital tool plus a group workshop",
        delivery: "Public Danish salary benchmarks and volunteer facilitators",
        level: "silver",
        status: "building"
      },
      {
        name: "Partner Career Access",
        icon: "users-group",
        promise: "You moved for them. Your work still matters.",
        get: "You get a track built for accompanying spouses and partners, with job-search help, introductions to people who can open doors, and a clear path through the work-permission rules.",
        who: "Spouses and partners who came to Denmark for someone else.",
        format: "Group programme plus 1:1 support",
        delivery: "Volunteers, partner organisations, and advocacy",
        level: "platinum",
        status: "building"
      }
    ]
  },
  {
    id: "grow",
    index: "03",
    title: "Grow and build",
    tagline: "Skills, confidence, and the courage to start something.",
    blurb: "Once you are steady, the question becomes what next. These help you build skills, lead, and even start a business in a country you are still learning.",
    img: "assets/img/grow.jpg",
    services: [
      {
        name: "InDe Workshops",
        icon: "presentation",
        promise: "Short, practical sessions on what living and working here really takes.",
        get: "You get a rolling series on what matters: Danish workplace culture, networking that feels natural, taxes for newcomers, and the digital tools you need, taught by people who have done it.",
        who: "Every member, at every stage.",
        format: "Group workshops plus recorded sessions",
        delivery: "Volunteer experts and partner trainers",
        level: "free",
        status: "live"
      },
      {
        name: "Leadership Coaching",
        icon: "route",
        promise: "Talk through a real work challenge with a coach, at no cost.",
        get: "You get confidential pro-bono coaching: sessions with a coach to work through a real challenge at work or in your move to Denmark.",
        who: "Members facing a decision, a change, or a step up.",
        format: "1:1 coaching, several sessions",
        delivery: "Pro-bono professional coaches",
        level: "platinum",
        status: "live"
      },
      {
        name: "Founder Track",
        icon: "rocket",
        promise: "Start the company you carried here, with people who have started one.",
        get: "You get guidance on registering a company as an international, finding the free startup support that already exists, and sparring with founders who began where you are now.",
        who: "Members who want to start, or are already building.",
        format: "Group sessions plus 1:1 founder sparring",
        delivery: "Volunteer founders and startup partners",
        level: "platinum",
        status: "building"
      }
    ]
  },
  {
    id: "belong",
    index: "04",
    title: "Belong and be heard",
    tagline: "A community now, and a voice in the rules.",
    blurb: "The deepest need is the simplest, to belong somewhere and be counted. This pillar is the events that connect you and the advocacy that speaks for you.",
    img: "assets/img/belong.jpg",
    services: [
      {
        name: "InDe Meetups",
        icon: "calendar-heart",
        promise: "A room full of people who get it.",
        get: "You get regular InDe Meetup and InDe Connect events across Denmark, warm and low-pressure, made for people far from where they grew up. Come once, or come every time.",
        who: "Anyone who wants to meet people. No agenda needed.",
        format: "In-person events, nationwide",
        delivery: "Volunteer event team and host partners",
        level: "free",
        status: "live"
      },
      {
        name: "Wellbeing Circle",
        icon: "heart-handshake",
        promise: "A quiet space for the weight that moving country brings.",
        get: "You get gentle peer groups for the quiet side of moving country: isolation, identity, and burnout. This is peer support and a clear route to professional help, not therapy itself.",
        who: "Members who need more than a network.",
        format: "Small group circles plus referrals",
        delivery: "Trained volunteers and wellbeing partners",
        level: "silver",
        status: "building"
      },
      {
        name: "Member Voice",
        icon: "speakerphone",
        promise: "Your experience, carried to the people who make the decisions.",
        get: "You get to tell us what is not working, and it feeds InDe's policy agenda. You can help shape that agenda, and stand for a role yourself.",
        who: "Every member with something to say.",
        format: "Surveys, forums, and the annual assembly",
        delivery: "Member-led, supported by InDe leadership",
        level: "free",
        status: "live"
      }
    ]
  }
];
