import { jsx } from "react/jsx-runtime";
import { Head } from "vite-react-ssg";
const OrganizationSchema = ({
  name = "Grupos do Telegram",
  url = "https://gruposdotelegram.org",
  logo = "https://gruposdotelegram.org/og-image.png",
  description = "Diretório de grupos do Telegram verificados em diversas categorias"
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    description,
    sameAs: []
  };
  return /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(schema) }) });
};
const BreadcrumbSchema = ({ items }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
  return /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(schema) }) });
};
const FAQSchema = ({ items }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
  return /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(schema) }) });
};
const WebSiteSchema = ({
  name = "Grupos do Telegram",
  url = "https://gruposdotelegram.org",
  description = "Encontre os melhores grupos do Telegram em 2025"
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${url}/all-groups?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
  return /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(schema) }) });
};
const CategorySchema = ({ name, description, url }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: "Grupos do Telegram",
      url: "https://gruposdotelegram.org"
    }
  };
  return /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(schema) }) });
};
export {
  BreadcrumbSchema as B,
  CategorySchema as C,
  FAQSchema as F,
  OrganizationSchema as O,
  WebSiteSchema as W
};
