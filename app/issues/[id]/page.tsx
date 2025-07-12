import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";

export default async function IssueDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  if (isNaN(id)) return notFound();

  const issue = await prisma.issue.findUnique({
    where: { id },
  });

  if (!issue) return notFound();

  return (
    <div>
      <p>{issue.title}</p>
      <p>{issue.description}</p>
      <p>{issue.status}</p>
      <p>{issue.createdAt?.toDateString()}</p>
    </div>
  );
}
