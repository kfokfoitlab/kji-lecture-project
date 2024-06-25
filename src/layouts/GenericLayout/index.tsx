import React from "react";

export default function GenericLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
