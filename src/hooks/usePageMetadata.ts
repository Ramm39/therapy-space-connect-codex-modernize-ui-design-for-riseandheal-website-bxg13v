import { useEffect } from "react";

type PageMetadata = {
  title: string;
  description?: string;
};

const setMetaDescription = (description?: string) => {
  if (!description) return;
  let tag = document.querySelector<HTMLMetaElement>("meta[name='description']");

  if (!tag) {
    tag = document.createElement("meta");
    tag.name = "description";
    document.head.appendChild(tag);
  }

  tag.content = description;
};

export const usePageMetadata = ({ title, description }: PageMetadata) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    setMetaDescription(description);
  }, [title, description]);
};

