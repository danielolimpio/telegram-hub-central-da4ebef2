import { jsxs, jsx } from "react/jsx-runtime";
import { Head } from "vite-react-ssg";
const SEOHead = ({
  title,
  description,
  canonical,
  ogImage = "https://gruposdotelegram.org/og-image.png"
}) => {
  const baseUrl = "https://gruposdotelegram.org";
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;
  return /* @__PURE__ */ jsxs(Head, { children: [
    /* @__PURE__ */ jsx("title", { children: title }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: description }),
    /* @__PURE__ */ jsx("link", { rel: "canonical", href: fullCanonical }),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: title }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: description }),
    /* @__PURE__ */ jsx("meta", { property: "og:url", content: fullCanonical }),
    /* @__PURE__ */ jsx("meta", { property: "og:image", content: ogImage }),
    /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "Grupos do Telegram" }),
    /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "pt_BR" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: title }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: description }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: ogImage }),
    /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow" }),
    /* @__PURE__ */ jsx("meta", { name: "author", content: "Grupos do Telegram" })
  ] });
};
export {
  SEOHead as S
};
