import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { DataProvider } from "@/context/DataContext";

const queryClient = new QueryClient();

export default function GlobalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // @ts-ignore
  return (
    <QueryClientProvider client={queryClient}>
      <DataProvider>{children}</DataProvider>
    </QueryClientProvider>
  );
}
