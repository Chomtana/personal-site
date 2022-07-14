import uniq from "lodash.uniq"



export let WORKING_EXPERIENCE = [
  {
    title: "Blockchain startup entrepreneur",
    at: "Self-initiate projects",
    note: "",
    from: new Date(2021, 1, 1),
    to: new Date(),
    level: 3,
  },
  {
    title: "Full stack developer",
    at: "Siamoutlet",
    note: "",
    from: new Date(2019, 1, 1),
    to: new Date(2021, 1, 1),
    website: "https://siamoutlet.com",
    level: 3,
    projects: [
      {
        title: "Kaokonlakao website",
        description: "A website for kaokonlakao thailand biggest running event started by P'Toon.",
        website: "https://kaokonlakao.com",
        skills: ["vue", "laravel"],
      },
      {
        title: "Tabshier pay",
        description: "A payment gateway system used by Kaokonlakao, Thailand smiles with you and other organizations.",
        skills: ["entity-framework", "dotnet-core", "payment-gateway"],
      },
      {
        title: "Thailand smiles with you preorder system",
        description: "A preorder system for buying special limited Leicester City special shirt integrated with Tabshier pay and has ability to issue tax invoices.",
        website: "https://preorder.thailandsmileswithyou.com",
        skills: ["vue", "nuxt", "go"]
      },
      {
        title: "KoyToon wedding registration system",
        description: "A registration system designed to secure KoyToon wedding event from bad person by using QR Code scanning.",
        skills: ["entity-framework", "dotnet-core", "react"],
      },
      {
        title: "Big mountain music festival 2020 card distribution and preorder system",
        description: "A system designed to distribute BMMF 2020 preorder card quickly using QR Code scanning and handle BMMF 2020 merchandise preorder and tax invoice.",
        skills: ["entity-framework", "dotnet-core", "vue", "react"],
      },
      {
        title: "Big mountain music festival 2020 refund system",
        description: "A system designed to handle BMMF 2020 refund registration due to COVID-19 outbreak.",
        website: "https://refund.bkkio.com/",
        skills: ["entity-framework", "dotnet-core", "vue"],
      },
      {
        title: "C-Vitt Ruamkao registration system",
        description: "A registration system for C-Vitt Ruamkao free tutoring at Bitec Bangna.",
        website: "https://c-vittruamkao.com/",
        skills: ["laravel"],
      },
      {
        title: "Kaokonlakao volunteer website",
        description: "A system for volunteer to help checking virtual run submissions whether it is fake or not.",
        website: "https://volunteer.kaokonlakao.com",
        skills: ["vue", "nuxt"],
      },
    ]
  },
  {
    title: "Full stack developer",
    at: "Somsritshirt",
    note: "",
    from: new Date(2017, 1, 1),
    to: new Date(2019, 1, 1),
    website: "https://somsritshirt.com",
    level: 2,
    projects: [
      {
        title: "Somsritshirt frontend",
        description: "https://somsritshirt.com responsive and optimized website for a screening company.",
        website: "https://somsritshirt.com",
        skills: ["pug", "php"]
      },
      {
        title: "Somsritshirt backend",
        description: "Backend of a screening company mainly consist of orders and screening workflow management.",
        skills: ["laravel"],
      }
    ],
  }
];



export let COMPETITIONS = [
  {
    title: "13th Thailand Olympaid in Informatics (TOI13)",
    reward: "Silver Medal",
    description: "An thailand olympic competition focusing in algorithm. Passed into a camp before selecting thailand representative to participate in International Olympaid in Informatics (IOI).",
    // website: "https://kaokonlakao.com",
    skills: ["algorithm", "c++"],
    level: 3,
  },
  {
    title: "Chainlink Fall Hackathon 2021",
    reward: "Chainlink On the Rise Winners",
    description: "A global blockchain hackathon focused on different areas including NFT",
    website: "https://devpost.com/software/naga-product-tbd",
    skills: ["blockchain", "solidity"],
    level: 3,
  },
  {
    title: "SCB10X Bangkok Blockathon",
    reward: "2nd Runner Up",
    description: "A blockchain focused hackathon organized by SCB 10X",
    website: "https://techsauce.co/pr-news/scb-10x-bangkok-blockathon-2021-killswitch",
    skills: ["blockchain", "solidity"],
    level: 3,
  },
  {
    title: "Shopee Code League 2020 (Team xXxThailandInwZaxXx)",
    reward: "4th Place of Student Category",
    description: "The biggest 2-month online data science, data analytics and algorithm in asia.",
    website: "https://careers.shopee.sg/codeleague",
    level: 3,
  },
  {
    title: "13th FSTT Chatbot Competition",
    reward: "First place",
    description: "A thailand chatbot competition organized by G-Able, FSTT and TOT.",
    website: "https://contest.thaifstt.org",
    level: 3,
  },
  {
    title: "12th FSTT Chatbot Competition",
    reward: "Third place",
    description: "A thailand chatbot competition organized by G-Able, FSTT and TOT.",
    website: "https://contest.thaifstt.org",
    level: 2,
  },
  {
    title: "Startup Thailand League 2019",
    reward: "Accepted for demo day",
    description: "A biggest startup competition for university students in thailand.",
    level: 3,
  },
  {
    title: "PyCon Thailand 2019 Staff",
    reward: "Web Design & Maintenance Support",
    description: "A thailand biggest conference for python programming language",
    website: "https://2019.th.pycon.org/staff",
    isVolunteer: true,
    level: 2,
  },
  {
    title: "Contribute to mxgraph open source",
    description: "Help fix an issue in mxgraph open source project. Mxgraph is an open source draw.io (popular diagraming website).",
    website: "https://github.com/jgraph/mxgraph/pull/205",
    isOpenSource: true,
    isVolunteer: true,
    level: 2,
  },
  {
    title: "dialogflow-proxy",
    description: "An open source api application that let static site client communicate with Dialogflow to build chatbot without leaking credentials.",
    website: "https://github.com/Chomtana/dialogflow-proxy",
    isOpenSource: true,
    level: 2,
  },
  {
    title: "ChomChat (not yet public)",
    description: "An chatbot building tool that let you build very complex chatbot by using just javascript knowledge and without designing any state machine.",
    isOpenSource: true,
    level: 2,
  },
  {
    title: "Line Hack 2020",
    description: "A developer hackathon organized by Line in Thailand",
    level: 2,
  },
  {
    title: "Christmas Codewar 2020",
    reward: "First place",
    description: "A annually speed coding competition organized by a member of PyCon Thailand community.",
    website: "https://www.facebook.com/events/378389163599006/",
    level: 2,
  },
  {
    title: "Christmas Codewar 2019",
    reward: "First place",
    description: "A annually speed coding competition organized by a member of PyCon Thailand community.",
    website: "https://www.ticketmelon.com/codewarfederation/christmascodewar2019",
    level: 2,
  },
  {
    title: "Christmas Codewar 2018",
    reward: "First place",
    description: "A annually speed coding competition organized by a member of PyCon Thailand community.",
    website: "https://www.facebook.com/events/the-company-bangkok/286045502037500/",
    level: 2,
  },
  {
    title: "CIMB 3D Hackathon 2018",
    description: "A software development hackathon organized by CIMB at Singapore",
    website: "https://github.com/Chomtana/phone-movement-cimb-2018",
    level: 1,
  },
  {
    title: "Data Science Hackathon 2018 by RISE",
    description: "A data science hackathon organized by RISE.",
    website: "https://www.facebook.com/datarockie/posts/2383280655018831/",
    level: 1,
  },
  {
    title: "งานศิลปหัตถกรรมนักเรียน สาขาเขียนโปรแกรมคอมพิวเตอร์",
    description: "High school coding competition",
    level: 1,
  },
  {
    title: "งานศิลปหัตถกรรมนักเรียน สาขาเขียนโปรแกรมคอมพิวเตอร์",
    description: "High school coding competition",
    level: 1,
  },
  {
    title: "งานศิลปหัตถกรรมนักเรียน สาขาเขียนโปรแกรมคอมพิวเตอร์",
    description: "High school coding competition",
    level: 1,
  },
  {
    title: "งานศิลปหัตถกรรมนักเรียน สาขาโครงงานคอมพิวเตอร์",
    description: "High school software development project competition",
    level: 1,
  },
  {
    title: "งานศิลปหัตถกรรมนักเรียน สาขาโครงงานวิทยาศาสตร์",
    description: "High school scientific project competition",
    level: 1,
  },
  {
    title: "EventX library (Archived)",
    description: "An open source library trying to make advanced web event such as resize event write easier.",
    website: "https://github.com/Chomtana/EventX",
    isOpenSource: true,
    level: 1,
  },
]



export let EDUCATION = [
  {
    title: "Chulalongkorn University",
    major: "Computer Engineering",
    gpa: 3.86,
    from: new Date(2018, 8, 1),
    to: new Date(2022, 5, 1),
    website: "https://www.chula.ac.th/",
    level: 3,
    projects: [
      {
        title: "Practice Human Protein Atlas Image Classification",
        description: "Pratice a multi-label image classification kaggle competition.",
        website: "https://www.kaggle.com/c/human-protein-atlas-image-classification",
        skills: ["data-science", "computer-vision", "machine-learning"],
      },
      {
        title: "Ja Boom Mine Game",
        description: "A game developed using java. Craft item and use your sword or place bomb to kill enemies.",
        website: "https://github.com/Chomtana/ProgMeth-Project",
        skills: ["game", "java"],
      },
      {
        title: "CUBlood registration system",
        description: "Frontend and backend for CUBlood registration system.",
        website: "https://cublood.clubs.chula.ac.th",
        skills: ["react", "loopback"],
      },
    ]
  },
  {
    title: "Kanchanapisek Wittayalai Nakhon Pathom School",
    major: "Middle and High School",
    gpa: 3.93,
    from: new Date(2012, 5, 1),
    to: new Date(2018, 3, 1),
    website: "http://kjn.ac.th/",
    level: 2,
    projects: [
      {
        title: "Speed analyser",
        description: "A high accuracy tool for analysing running time and speed.",
        website: "https://github.com/Chomtana/speed-analyser-web",
        skills: ["embedding-system", "web"]
      },
      {
        title: "เรื่องของเรา...ไม่รู้ไม่ได้แล้ว",
        description: "An education media focused on learning about health and sexual.",
        website: "https://github.com/Chomtana/highschool-web-anamai",
        skills: ["web"]
      },
      {
        title: "Force Simulator",
        description: "An education physic simulation focused on force, fiction and slope.",
        website: "https://github.com/Chomtana/force-simulator",
        skills: ["web"],
      }
    ],
  },
  {
    title: "Konpitacksuksa School",
    major: "Elementary School",
    from: new Date(2003, 5, 1),
    to: new Date(2012, 3, 1),
    website: "http://www.kornpitack.ac.th",
    level: 1,
    projects: [],
  }
]



export let WORKING_PROJECTS = WORKING_EXPERIENCE.map(c => c.projects || []).flat();
export let EDUCATION_PROJECTS = EDUCATION.map(c => c.projects || []).flat();

export let SKILLS = uniq(COMPETITIONS.concat(WORKING_PROJECTS, EDUCATION_PROJECTS).map(c => c.skills || []).flat());

console.log(WORKING_PROJECTS);
console.log(SKILLS)

export function resumeSearch(type, query) {
  let originalArray = [];

  switch (type) {
    case 'WORKING_EXPERIENCE': originalArray = WORKING_EXPERIENCE; break;
    case 'COMPETITIONS': originalArray = COMPETITIONS; break;
    case 'EDUCATION': originalArray = EDUCATION; break;
    case 'WORKING_PROJECTS': originalArray = WORKING_PROJECTS; break;
    case 'EDUCATION_PROJECTS': originalArray = EDUCATION_PROJECTS; break;
  }

  return originalArray.filter(c => eval(query));
}