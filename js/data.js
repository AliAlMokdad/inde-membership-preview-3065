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
    blurb: "Arriving is the hardest part. These help you find your feet, understand the system, and feel the ground steady under you, because you are not doing it alone.",
    img: "assets/img/settle.jpg",
    services: [
      {
        name: "First Year Companion",
        icon: "map-pin",
        promise: "A clear path through your first months, in plain language.",
        get: "A simple step by step guide to the things that trip everyone up, CPR, MitID, tax card, bank, doctor, plus a person to ask when the guide is not enough.",
        who: "Anyone who has just moved, or is about to.",
        format: "Digital guide plus a check-in",
        delivery: "Self-serve guide, backed by a volunteer",
        level: "silver",
        status: "building"
      },
      {
        name: "Paperwork Clinic",
        icon: "file-text",
        promise: "Bring the form you do not understand. Leave knowing what to do.",
        get: "Drop-in help reading a letter, a contract, or an official form, so you understand what it asks and what to do next. We help you see clearly and point you to the right office. This is practical guidance, not legal representation.",
        who: "Anyone stuck on Danish bureaucracy or an official letter.",
        format: "Group drop-in and short 1:1 slots",
        delivery: "Trained volunteers and partner advisers",
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
    blurb: "The job market is where internationals lose the most ground. This pillar takes the kind of career and contract support Danish unions are known for, and opens it to internationals who often go without it.",
    img: "assets/img/work.jpg",
    services: [
      {
        name: "Career Sparring",
        icon: "compass",
        promise: "An hour with someone who knows the Danish job market.",
        get: "A focused 1:1 to sharpen your CV and LinkedIn for Danish employers, plan your search, and prepare for interviews, including how hiring really works here.",
        who: "Job seekers and anyone planning their next move.",
        format: "1:1 session, in person or online",
        delivery: "Volunteer coaches and partner advisers",
        level: "silver",
        status: "live"
      },
      {
        name: "Contract Check",
        icon: "scale",
        promise: "Know what you are signing before you sign it.",
        get: "A plain language read of your employment contract, your notice terms, your holiday and pension, and a clear heads up on anything unusual before you sign. Honest, practical guidance so you know what you are agreeing to. This is not formal legal representation.",
        who: "Anyone with a job offer or a contract they are unsure about.",
        format: "1:1 review plus a short written summary",
        delivery: "Pro-bono legal and HR professionals",
        level: "silver",
        status: "building"
      },
      {
        name: "Pay and Negotiation Lab",
        icon: "calculator",
        promise: "Walk into the salary talk knowing your number.",
        get: "Help reading Danish salary benchmarks for your field and level, what is normal beyond base pay, and a simple script to negotiate without burning the offer.",
        who: "Internationals who do not know what fair pay looks like here.",
        format: "Digital tool plus a group workshop",
        delivery: "Partner salary data and volunteer facilitators",
        level: "silver",
        status: "building"
      },
      {
        name: "Partner Career Access",
        icon: "users-group",
        promise: "When you move for someone else, your career still matters.",
        get: "A track built for accompanying spouses and partners, the group most likely to leave Denmark, with job-search help, network introductions, and a route around the permission maze.",
        who: "Spouses and partners of internationals.",
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
        get: "A rolling series on the things that matter, Danish workplace culture, networking that feels natural, taxes for newcomers, and digital tools, taught by people who have done it.",
        who: "Every member, at every stage.",
        format: "Group workshops and recorded sessions",
        delivery: "Volunteer experts and partner trainers",
        level: "free",
        status: "live"
      },
      {
        name: "Leadership Coaching",
        icon: "route",
        promise: "Free coaching to help you lead where you are.",
        get: "Continues the pro-bono coaching InDe already runs, a series of confidential sessions with a coach to work through a real challenge at work or in your transition.",
        who: "Members facing a decision, a change, or a step up.",
        format: "1:1 coaching, several sessions",
        delivery: "Pro-bono professional coaches",
        level: "platinum",
        status: "live"
      },
      {
        name: "Founder Track",
        icon: "rocket",
        promise: "Turn the idea you carried here into a Danish business.",
        get: "Guidance on registering a company as an international, finding the free startup support that already exists, and sparring with founders who started from where you are.",
        who: "Members who want to start or are already building.",
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
    blurb: "The deepest need is the simplest, to belong somewhere and to be counted. This pillar is the events that connect you and the advocacy that speaks for you.",
    img: "assets/img/belong.jpg",
    services: [
      {
        name: "InDe Meetups",
        icon: "calendar-heart",
        promise: "A room full of people who get it.",
        get: "Regular InDe Meetup and InDe Connect events across Denmark, low pressure, warm, and made for people who are far from where they grew up. Come once, come always.",
        who: "Anyone who wants to meet people. No agenda needed.",
        format: "In person events, nationwide",
        delivery: "Volunteer event team and host partners",
        level: "free",
        status: "live"
      },
      {
        name: "Wellbeing Circle",
        icon: "heart-handshake",
        promise: "Space to say the part that is hard.",
        get: "Gentle peer groups and signposting for the quiet weight of moving country, isolation, identity, and burnout. Peer support and clear routes to professional help, not therapy itself.",
        who: "Members who need more than a network.",
        format: "Small group circles plus referrals",
        delivery: "Trained volunteers and wellbeing partners",
        level: "silver",
        status: "building"
      },
      {
        name: "Member Voice",
        icon: "speakerphone",
        promise: "Your experience, carried to the people who write the rules.",
        get: "Tell us what is broken and it feeds InDe's Policy Agenda. You can help shape it, and stand for a role.",
        who: "Every member with something to say.",
        format: "Surveys, forums, and the annual assembly",
        delivery: "Member led, supported by InDe leadership",
        level: "free",
        status: "live"
      }
    ]
  }
];
