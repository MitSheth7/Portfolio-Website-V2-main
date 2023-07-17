import type { Metadata } from "next";

export const portfolioMetadata: Metadata = {
  metadataBase: new URL("https://omaranwar.me"),
  title: {
    default: "Mit Sheth",
    template: "%s | Omar Anwar",
  },
  description: "Developer, writer, and creator.",
  openGraph: {
    title: "Mit Sheth",
    description: "Developer, writer, and creator.",
    url: "https://omaranwar.me",
    siteName: "Mit Sheth",
    locale: "en-US",
    type: "website",
  },
};

export const blogMetadata: Metadata = {
  title: "Who am I",
  description: "Read About Me!",
};
