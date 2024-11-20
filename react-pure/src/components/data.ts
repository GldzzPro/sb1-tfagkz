type Attendance = {
  Présence: number;
  "Absence justifiée": number;
  "Absence non justifiée": number;
  Retard: number;
  Exclusion: number;
};

type Subject = {
  name: string;
  trimester1: string;
  trimester2: string;
  trimester3: string;
  average: string;
  observation: string;
  min: string;
  max: string;
};
export type Data = {
  studentInfo: {
    name: string;
    class: string;
    email: string;
    phone: string;
  };
  languages: Subject[];
  scientific: Subject[];
  attendance: Attendance;
};

export const data: Data = {
  studentInfo: {
    name: "George Carter",
    class: "1ère année - A",
    email: "OmegaSchool@gmail.com",
    phone: "+21693316652",
  },

  languages: [
    {
      name: "Lecture",
      trimester1: "12.15",
      trimester2: "15",
      trimester3: "15",
      average: "17.50",
      observation:
        "Ton implication et ton effort ants en classe sont très appréciés.",
      min: "15",
      max: "15",
    },
    {
      name: "Ecriture",
      trimester1: "12.15",
      trimester2: "15",
      trimester3: "15",
      average: "",
      observation: "",
      min: "15",
      max: "15",
    },
    {
      name: "Grammaire",
      trimester1: "12.15",
      trimester2: "15",
      trimester3: "15",
      average: "",
      observation: "",
      min: "15",
      max: "15",
    },
    {
      name: "Orthographe",
      trimester1: "12.15",
      trimester2: "15",
      trimester3: "15",
      average: "",
      observation: "",
      min: "15",
      max: "15",
    },
    {
      name: "Vocabulaire",
      trimester1: "12.15",
      trimester2: "15",
      trimester3: "15",
      average: "",
      observation: "",
      min: "15",
      max: "15",
    },
    {
      name: "Expression orale",
      trimester1: "12.15",
      trimester2: "15",
      trimester3: "15",
      average: "",
      observation: "",
      min: "15",
      max: "15",
    },
  ],

  scientific: [
    {
      name: "Algèbre",
      trimester1: "12.15",
      trimester2: "15",
      trimester3: "15",
      average: "17.50",
      observation:
        "Ton implication et ton effort ants en classe sont très appréciés.",
      min: "15",
      max: "15",
    },
    {
      name: "Analyse",
      trimester1: "12.15",
      trimester2: "15",
      trimester3: "15",
      average: "",
      observation: "",
      min: "15",
      max: "15",
    },
    {
      name: "Géométrie",
      trimester1: "12.15",
      trimester2: "15",
      trimester3: "15",
      average: "",
      observation: "",
      min: "15",
      max: "15",
    },
    {
      name: "Probabilités",
      trimester1: "12.15",
      trimester2: "15",
      trimester3: "15",
      average: "",
      observation: "",
      min: "15",
      max: "15",
    },
    {
      name: "Biologie",
      trimester1: "12.15",
      trimester2: "15",
      trimester3: "15",
      average: "",
      observation: "",
      min: "15",
      max: "15",
    },
    {
      name: "Neurosciences",
      trimester1: "12.15",
      trimester2: "15",
      trimester3: "15",
      average: "",
      observation: "",
      min: "15",
      max: "15",
    },
  ],

  attendance: {
    Présence: 30,
    "Absence justifiée": 30,
    "Absence non justifiée": 5,
    Retard: 10,
    Exclusion: 10,
  },
};
