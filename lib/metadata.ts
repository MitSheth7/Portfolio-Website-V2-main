import type { Metadata } from "next";

export const portfolioMetadata: Metadata = {
  metadataBase: new URL("https://portfolio-website-v2-main.vercel.app/"),
  title: {
    default: "Mit Sheth",
    template: "%s | Mit Sheth",
  },
  description: "Developer, writer, and creator.",
  openGraph: {
    title: "Mit Sheth",
    description: "Developer, writer, and creator.",
    url: "https://portfolio-website-v2-main.vercel.app/",
    siteName: "Mit Sheth",
    locale: "en-US",
    type: "website",
  },
};

export const blogMetadata: Metadata = {
  title: "Who am I",
  description: "Read About Me!",
};
