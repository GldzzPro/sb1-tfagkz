// app/ClientProvider.tsx
"use client"; // Mark as Client Component

import { ReactNode } from "react";
import { JssProvider, SheetsRegistry } from "react-jss";

const sheets = new SheetsRegistry();

const ClientProvider = ({ children }: { children: ReactNode }) => {
  return (
    <JssProvider registry={sheets}>
      <style id="server-side-styles">{sheets.toString()}</style>
      {children}
    </JssProvider>
  );
};

export default ClientProvider;
