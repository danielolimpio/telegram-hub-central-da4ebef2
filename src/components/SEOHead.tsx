import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}

const SEOHead = ({ 
  title, 
  description, 
  canonical,
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png"
}: SEOHeadProps) => {
  const baseUrl = "https://gruposdotelegram.org";
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : undefined;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Update or create canonical link
    if (fullCanonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute("href", fullCanonical);
    }

    // Update Open Graph tags
    const updateOrCreateMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    updateOrCreateMeta("og:title", title);
    updateOrCreateMeta("og:description", description);
    if (fullCanonical) {
      updateOrCreateMeta("og:url", fullCanonical);
    }
    updateOrCreateMeta("og:image", ogImage);

    // Update Twitter tags
    const updateOrCreateTwitterMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    updateOrCreateTwitterMeta("twitter:title", title);
    updateOrCreateTwitterMeta("twitter:description", description);
    updateOrCreateTwitterMeta("twitter:image", ogImage);
  }, [title, description, fullCanonical, ogImage]);

  return null;
};

export default SEOHead;
