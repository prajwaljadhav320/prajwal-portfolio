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
  "A video production portfolio: story-driven live action, editorial, motion design and color for global brands and creative independents.";
const ogImage =
  "https://remedyeditorial.com/wp-content/uploads/2026/06/Remedy_Editorial_OG_1200x600.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogImage },
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
