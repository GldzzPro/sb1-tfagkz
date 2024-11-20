import { createUseStyles } from "react-jss";
import { Data, data } from "./components/data";
import { StudentReportCard } from "./components/student-report-card";
import { Tag } from "./components/tag";
import { ReactElement, ReactNode, useEffect, useState } from "react";

const useStyles = createUseStyles({
  hhh: {
    width: "100%",
    height: "100vh",
    border: "none",
  },
});

type X = typeof import("./components/index").dd;
type fefe = keyof X;

const ss = Pdf({ data: { data }, path: "data" });

type FE = Awaited<ReturnType<X["data"]>>;

function Pdf<K extends keyof X>({
  data,
  path,
}: {
  data: Awaited<ReturnType<X[K]>>;
  path: K;
}) {
  const { hhh } = useStyles();
  return (
    <iframe
      src={path}
      className={hhh}
      onLoad={(e) => {
        const dataEl = document.createElement("script");
        dataEl.id = "data";
        dataEl.type = "application/json";
        dataEl.textContent = JSON.stringify(data);
        const iframe = e.target as HTMLIFrameElement;
        iframe.contentWindow!.document.body.appendChild(dataEl);
      }}
    ></iframe>
  );
}

function Home() {
  return (
    <>
      <Tag text="ghjart bechway" bg="red" color="white" />
      <Pdf path="?recap" data={data} />;
    </>
  );
}

function Standalone<T>({
  Component,
}: {
  Component: React.ComponentType<{ data: T }>;
}) {
  const [el, setEl] = useState<ReactNode>(null);
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const dataEl = document.getElementById("data");
      if (dataEl) {
        const data = JSON.parse(dataEl.textContent!);
        setEl(<Component data={data} />);
      }
    });
    observer.observe(document.body, { childList: true });
    return () => observer.disconnect();
  }, [Component]);
  return el;
}

function App() {
  const path = location.search;
  return !path ? (
    <Home />
  ) : path == "?recap" ? (
    <Standalone Component={StudentReportCard} />
  ) : (
    <></>
  );
}

export default App;
