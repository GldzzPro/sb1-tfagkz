import PDFWrapper from "@/components/pdf-wrapper";
import { StudentReportCard } from "@/components/student-report-card";
import { Tag } from "@/components/tag";
import IframeSandbox from "./IframeSandbox";

export default function Home() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">PDF Generator Demo</h1>
      <Tag text={"ghar bechway "} bg="red" color="white" />
      {/* <IframeSandbox path="/pdf/StudentRecap" /> */}
    </main>
  );
}
