"use client";
import { StudentReportCard } from "@/components/student-report-card";
import { Tag } from "@/components/tag";

export default function StudentRecap() {
  return (
    <>
      <Tag text={"ghar bechway "} bg="red" color="white" />
      <StudentReportCard />
    </>
  );
}
