import prajwalIcon from "@/assets/prajwalicon.svg";
import prajwalIconWhite from "@/assets/prajwalicon-white.svg";
/**
 * ALL SITE CONTENT LIVES HERE.
 * Swap text, images and video links below — nothing else needs to change.
 */

export const site = {
  brand: {
    wordmark: "PRAJWAL",
    logoMark: prajwalIcon,
    logoWhite: prajwalIconWhite,
  },

  nav: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    headline: "I make ideas move.",
    intro:
      "I'm a Motion Designer and Video Editor creating engaging visual experiences through animation, motion graphics, editing and visual storytelling.",
    reel: {
      video:
        "https://player.vimeo.com/progressive_redirect/playback/1182749701/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&log_user=0&signature=efea96cae001854c5ef91405c2ebfe612dc3e9927081ce8866cd785213a2c1ff",
      poster:
        "https://remedyeditorial.com/wp-content/uploads/2026/06/Remedy_Splash-scaled.webp",
    },
  },

  work: {
    title: "Selected work",
    intro:
      "A collection of motion-led projects exploring animation, storytelling, typography, editing and visual design. Each project starts with an idea and ends with something designed to move.",
    cta: { label: "View all work +", href: "#contact" },
    projects: [
      {
        client: "Brand Film",
        title: "Motion Campaign",
        vimeo:
  "https://player.vimeo.com/video/1226724267?autoplay=1&loop=1&muted=1&autopause=0&controls=0",
        poster:
          "https://remedyeditorial.com/wp-content/uploads/2026/05/Annies.jpg",
        video:
          "https://player.vimeo.com/progressive_redirect/playback/1182748895/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&log_user=0&signature=80811e5d52087cc5be135ff9c73936c88c7987c7c272fcc48d6c11cf5011a5e6",
      },
      {
  client: "Social Media",
  title: "Motion Graphics Series",
  vimeo:
    "https://player.vimeo.com/video/1226901560?autoplay=1&loop=1&muted=1&autopause=0&controls=0",
  poster: "https://remedyeditorial.com/wp-content/uploads/2026/05/AMD.jpg",
  video:
    "https://player.vimeo.com/progressive_redirect/playback/1183140673/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&log_user=0&signature=80c39a52c1fb7600edf5c7f0410e552cb4a36acdefbccab2b231b6dabad80b0b",
},
      {
        client: "Product Film",
        title: "Promotional Animation",
        vimeo:
        "https://player.vimeo.com/video/1226905431?autoplay=1&loop=1&muted=1&autopause=0&controls=0",
        poster:
          "https://remedyeditorial.com/wp-content/uploads/2026/05/Intel14thGen-scaled.jpg",
        video:
          "https://player.vimeo.com/progressive_redirect/playback/1198246204/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&log_user=0&signature=11fb16c1784f45e136c1fe4167cd51cfefb061810b44daed78ddeb30218836bf",
      },
    ],
  },

  services: {
    title: "What I do",
    body: "I turn ideas, visuals and raw footage into purposeful motion. From a single animated graphic to a complete video, I combine design, timing and storytelling to create content that feels clear, engaging and visually memorable.",
    image:
      "/services.jpg",
    cta: { label: "See what I do", href: "#contact" },
  },

  recent: {
  title: "What I've been up to",
  note: "Currently creating, experimenting and finding new ways to make things move.",
  items: [
    {
      image: "/recent-01.jpg",
      caption: "Motion design — exploring new ideas",
    },
    {
      image: "/recent-02.jpg",
      caption: "Visual design — experimenting with composition",
    },
    {
      image: "/recent-03.jpg",
      caption: "Motion graphics — creating visual stories",
    },
    {
      image: "/recent-04.jpg",
      caption: "Creative exploration — design in progress",
    },
    {
      image: "/recent-05.jpg",
      caption: "Visual storytelling — bringing ideas to life",
    },
  ],
},

  numbers: {
    title: "By the numbers",
    stats: [
      { value: "01", label: "frame at a time." },
      { value: "∞", label: "ways to make an idea move." },
      { value: "24", label: "frames every second." },
      { value: "100%", label: "obsessed with timing." },
    ],
  },

  contact: {
  title: "Let's create something that moves.",
  body: "Have a project, idea, or collaboration in mind? Let's talk and turn it into something worth watching.",
  email: "prajwaljadhav320@gmail.com",
  phone: "9930378277",
  cta: { label: "Get in touch" },
},

  footer: {
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/iamprajwall" },
      { label: "Behance", href: "https://www.behance.net/prajwaljadhav5" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/prajwal-jadhav-a76128222/" },
    ],
    legal: ["Cookie Policy", "Privacy Statement", "Terms and Conditions"],
    copyright: "© Copyright 2026 Prajwal. All rights reserved.",
  },
};
