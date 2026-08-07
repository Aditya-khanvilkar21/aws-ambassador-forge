import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

const TITLE = "Snehal Swami — Aspiring AWS Cloud Engineer";
const DESCRIPTION =
  "Portfolio of Snehal Swami — AWS, Linux, Docker, Kubernetes, Terraform. Designing scalable cloud infrastructure, one deployment at a time.";
const OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/20d94107-f559-4a70-b4bb-24b68e2a821b/id-preview-a8b1541e--4a3f4df8-471d-4f04-8eac-083843e0be44.lovable.app-1781891374303.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://snehalswami.in/" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: "https://snehalswami.in/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Snehal Swami",
          jobTitle: "AWS Cloud Engineer",
          url: "https://snehalswami.in/",
          email: "mailto:snehalswami1192@gmail.com",
          sameAs: [
            "https://www.linkedin.com/in/snehal-swami-798a5a381",
            "https://github.com/snehalswami",
          ],
        }),
      },
    ],
  }),
  component: Portfolio,
});
