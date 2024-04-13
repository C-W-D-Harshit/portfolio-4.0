import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://cleverdevloper.in",
      lastModified: new Date(),
    },
  ];
}
