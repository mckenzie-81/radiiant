// src/SeoManager.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import seo from "./seo/seo.json";

const SeoManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Clean trailing slashes
    const path = pathname.replace(/\/$/, "") || "/";

    const pageKey = path === "/" ? "home" : path.slice(1); // e.g. '/about' → 'about'
    const meta = seo[pageKey];

    if (meta) {
      document.title = meta.title;
      const descTag = document.querySelector("meta[name='description']");
      if (descTag) {
        descTag.setAttribute("content", meta.description);
      } else {
        const tag = document.createElement("meta");
        tag.name = "description";
        tag.content = meta.description;
        document.head.appendChild(tag);
      }
    }
  }, [pathname]);

  return null;
};

export default SeoManager;
