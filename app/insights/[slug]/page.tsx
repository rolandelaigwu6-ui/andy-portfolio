import { notFound } from "next/navigation";

export const metadata = {
  title: "Article | Insights",
  description:
    "Insights on strategic communications, media, leadership, and creative entrepreneurship.",
};

export default function ArticleDetail() {
  // No articles have been supplied yet (agent.md §9).
  notFound();
}
