"use client";

import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    width: "100%",
    maxWidth: "800px",
    margin: "0 auto",
    aspectRatio: "1 / 1.4142",
    backgroundColor: "white",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    overflow: "hidden",
  },
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    backgroundColor: "#3B82F6",
    color: "white",
    padding: "1rem",
  },
  headerContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "0.5rem",
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: 0,
  },
  schoolLogo: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  logoCircle: {
    width: "2rem",
    height: "2rem",
    borderRadius: "50%",
    backgroundColor: "#E5E7EB",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.8rem",
  },
  schoolName: {
    fontSize: "0.8rem",
  },
  academicYear: {
    fontSize: "0.7rem",
    margin: 0,
  },
  main: {
    flex: 1,
    padding: "0.5rem",
    overflowY: "auto",
  },
  studentInfo: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0.5rem",
    marginBottom: "0.5rem",
    fontSize: "0.7rem",
  },
  infoItem: {
    margin: "0 0 0.25rem",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0.5rem",
    borderTop: "1px solid #E5E7EB",
    fontSize: "0.6rem",
  },
  footerSection: {
    "& p": {
      margin: "0 0 0.25rem",
    },
  },
  table: {
    marginBottom: "1rem",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow:
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  },
  tableHeader: {
    backgroundColor: "#3B82F6",
    color: "white",
    fontWeight: "bold",
    padding: "0.5rem 1rem",
  },
  tableContent: {
    padding: 0,
  },
  tableBase: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "0.7rem",
  },
  tableCell: {
    padding: "0.25rem",
    borderBottom: "1px solid #E5E7EB",
  },
  tableCellHeader: {
    extend: "tableCell",
    fontWeight: "bold",
    textAlign: "left",
  },
  attendanceChart: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
  },
  attendanceItem: {
    textAlign: "center",
  },
  attendanceCircle: {
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "50%",
    border: "2px solid #3B82F6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.75rem",
    fontWeight: "bold",
  },
  attendanceLabel: {
    marginTop: "0.25rem",
    fontSize: "0.6rem",
  },
});

const SubjectTable = ({ title, subjects }) => {
  const classes = useStyles();
  return (
    <div className={classes.table}>
      <div className={classes.tableHeader}>{title}</div>
      <div className={classes.tableContent}>
        <table className={classes.tableBase}>
          <thead>
            <tr>
              <th className={classes.tableCellHeader}>Matière</th>
              <th className={classes.tableCellHeader}>Trim 1</th>
              <th className={classes.tableCellHeader}>Trim 2</th>
              <th className={classes.tableCellHeader}>Trim 3</th>
              <th className={classes.tableCellHeader}>M.Matière</th>
              <th className={classes.tableCellHeader}>Observation</th>
              <th className={classes.tableCellHeader}>Min M</th>
              <th className={classes.tableCellHeader}>Haut M</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject, index) => (
              <tr key={index}>
                <td className={classes.tableCell}>{subject.name}</td>
                <td className={classes.tableCell}>{subject.trimester1}</td>
                <td className={classes.tableCell}>{subject.trimester2}</td>
                <td className={classes.tableCell}>{subject.trimester3}</td>
                <td className={classes.tableCell}>{subject.average}</td>
                <td className={classes.tableCell}>{subject.observation}</td>
                <td className={classes.tableCell}>{subject.min}</td>
                <td className={classes.tableCell}>{subject.max}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AttendanceChart = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.attendanceChart}>
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className={classes.attendanceItem}>
          <div className={classes.attendanceCircle}>{value}</div>
          <div className={classes.attendanceLabel}>{key}</div>
        </div>
      ))}
    </div>
  );
};

export function StudentReportCard() {
  const classes = useStyles();

  const studentInfo = {
    name: "George Carter",
    class: "1ère année - A",
    email: "OmegaSchool@gmail.com",
    phone: "+21693316652",
  };

  const languages = [
    {
      name: "Lecture",
      trimester1: "12.15",
      trimester2: "15",
      trimester3: "15",
      average: "17.50",
      observation:
        "Ton implication et ton effort constants en classe sont très appréciés.",
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
  ];

  const scientific = [
    {
      name: "Algèbre",
      trimester1: "12.15",
      trimester2: "15",
      trimester3: "15",
      average: "17.50",
      observation:
        "Ton implication et ton effort constants en classe sont très appréciés.",
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
  ];

  const attendance = {
    Présence: 30,
    "Absence justifiée": 30,
    "Absence non justifiée": 5,
    Retard: 10,
    Exclusion: 10,
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.header}>
          <div className={classes.headerContent}>
            <h1 className={classes.title}>
              Bulletin de notes officiel de l'étudiant
            </h1>
            <div className={classes.schoolLogo}>
              <div className={classes.logoCircle}>SO</div>
              <span className={classes.schoolName}>School Omegup</span>
            </div>
          </div>
          <p className={classes.academicYear}>
            Année académique : août 2024 - juin 2025
          </p>
        </div>
        <div className={classes.main}>
          <div className={classes.studentInfo}>
            <div>
              <p className={classes.infoItem}>
                <strong>Élève:</strong> {studentInfo.name}
              </p>
              <p className={classes.infoItem}>
                <strong>Classe:</strong> {studentInfo.class}
              </p>
            </div>
            <div>
              <p className={classes.infoItem}>
                <strong>Email:</strong> {studentInfo.email}
              </p>
              <p className={classes.infoItem}>
                <strong>Téléphone:</strong> {studentInfo.phone}
              </p>
            </div>
          </div>
          <SubjectTable title="Langues" subjects={languages} />
          <SubjectTable title="Scientifique" subjects={scientific} />
          <div className={classes.table}>
            <div className={classes.tableHeader}>Moyenne annuelle</div>
            <div className={classes.tableContent}>
              <table className={classes.tableBase}>
                <thead>
                  <tr>
                    <th className={classes.tableCellHeader}>Trimestre 1</th>
                    <th className={classes.tableCellHeader}>Trimestre 2</th>
                    <th className={classes.tableCellHeader}>Trimestre 3</th>
                    <th className={classes.tableCellHeader}>Certificat</th>
                    <th className={classes.tableCellHeader}>Observation</th>
                    <th className={classes.tableCellHeader}>Min M</th>
                    <th className={classes.tableCellHeader}>Haut M</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.tableCell}>5.50</td>
                    <td className={classes.tableCell}>19.75</td>
                    <td className={classes.tableCell}>19.75</td>
                    <td className={classes.tableCell}>
                      Attestation de remerciement
                    </td>
                    <td className={classes.tableCell}>
                      Ton travail autonome et efficace est remarquable.
                    </td>
                    <td className={classes.tableCell}>5.50</td>
                    <td className={classes.tableCell}>19.75</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <AttendanceChart data={attendance} />
        </div>
        <div className={classes.footer}>
          <div className={classes.footerSection}>
            <p>
              <strong>Tuteurs</strong>
            </p>
            <p>Signature : Zarzis Dans 26/15/2024</p>
          </div>
          <div className={classes.footerSection}>
            <p>
              <strong>Directeur</strong>
            </p>
            <p>Nom & prénom : Julien Leroux</p>
            <p>Signature : Zarzis Dans 26/15/2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
