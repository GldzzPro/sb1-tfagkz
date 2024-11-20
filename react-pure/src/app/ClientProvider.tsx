// app/ClientProvider.tsx
"use client"; // Mark as Client Component

import { ReactNode } from "react";
import { JssProvider } from "react-jss";

const ClientProvider = ({ children }: { children: ReactNode }) => {
  return <JssProvider>{children}</JssProvider>;
};

export default ClientProvider;
