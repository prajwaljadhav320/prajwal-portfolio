import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { FeaturedWork } from "@/components/site/FeaturedWork";
import { Services } from "@/components/site/Services";
import { Recent } from "@/components/site/Recent";
import { Numbers } from "@/components/site/Numbers";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Prajwal Jadhav - Motion Designer & Video Editor";

const description =
  "Prajwal Jadhav — Motion Designer and Video Editor creating engaging visual experiences through animation, motion graphics, editing and visual storytelling.";

const ogImage =
  "https://prajwal-portfolio-weld.vercel.app/og-image.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title,
      },

      {
        name: "description",
        content: description,
      },

      // Open Graph
      {
        property: "og:title",
        content: title,
      },

      {
        property: "og:description",
        content: description,
      },

      {
        property: "og:type",
        content: "website",
      },

      {
        property: "og:url",
        content: "https://prajwal-portfolio-weld.vercel.app/",
      },

      {
        property: "og:image",
        content: ogImage,
      },

      {
        property: "og:image:width",
        content: "1200",
      },

      {
        property: "og:image:height",
        content: "630",
      },

      {
        property: "og:image:alt",
        content: "Prajwal Jadhav — Motion Designer & Video Editor",
      },

      // Twitter / X
      {
        name: "twitter:card",
        content: "summary_large_image",
      },

      {
        name: "twitter:title",
        content: title,
      },

      {
        name: "twitter:description",
        content: description,
      },

      {
        name: "twitter:image",
        content: ogImage,
      },
    ],
  }),

  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-transparent text-foreground">
      <Nav />

      <main>
        <Hero />
        <FeaturedWork />
        <Services />
        <Recent />
        <Numbers />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}