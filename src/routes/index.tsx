import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Snehal Swami — Aspiring AWS Cloud Engineer" },
      { name: "description", content: "Portfolio of Snehal Swami — AWS, Linux, Docker, Kubernetes, Terraform. Designing scalable cloud infrastructure, one deployment at a time." },
      { property: "og:title", content: "Snehal Swami — Aspiring AWS Cloud Engineer" },
      { property: "og:description", content: "Designing scalable cloud infrastructure, one deployment at a time." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Portfolio,
});
