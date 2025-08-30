import React, { useEffect } from "react";
import { formatHyphenWord } from "../lib/utils";

interface SEOLayoutProps {
  title?: string;
  content?: string;
}

const SEO: React.FC<SEOLayoutProps> = ({
  title = "Admin Panel",
  content = "Manage users, content, and settings efficiently with our powerful admin panel.",
}) => {
  useEffect(() => {
    document.title = title
      ? `${formatHyphenWord(title)} | Youth Pulse Digital`
      : "Youth Pulse Digital";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", content);
  }, [title]);

  return null;
};

export default SEO;
