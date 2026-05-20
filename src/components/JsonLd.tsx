import { Head } from "vite-react-ssg";

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
}

export const OrganizationSchema = ({
  name = "Grupos do Telegram",
  url = "https://gruposdotelegram.org",
  logo = "https://gruposdotelegram.org/og-image.png",
  description = "Diretório de grupos do Telegram verificados em diversas categorias"
}: OrganizationSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    description,
    sameAs: []
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Head>
  );
};

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
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

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Head>
  );
};

interface SiteNavigationItem {
  name: string;
  url: string;
  description?: string;
}

interface SiteNavigationSchemaProps {
  items: SiteNavigationItem[];
}

export const SiteNavigationSchema = ({ items }: SiteNavigationSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Navegação principal - Grupos do Telegram",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "SiteNavigationElement",
      position: index + 1,
      name: item.name,
      url: item.url,
      ...(item.description ? { description: item.description } : {})
    }))
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Head>
  );
};

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  items: FAQItem[];
}

export const FAQSchema = ({ items }: FAQSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(item => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Head>
  );
};

interface WebSiteSchemaProps {
  name?: string;
  url?: string;
  description?: string;
}

export const WebSiteSchema = ({
  name = "Grupos do Telegram",
  url = "https://gruposdotelegram.org",
  description = "Encontre os melhores grupos do Telegram em 2025"
}: WebSiteSchemaProps) => {
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
        urlTemplate: `${url}/todos-grupos?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Head>
  );
};

interface CategorySchemaProps {
  name: string;
  description: string;
  url: string;
}

export const CategorySchema = ({ name, description, url }: CategorySchemaProps) => {
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

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Head>
  );
};

interface ItemPageSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  category?: string;
}

export const ItemPageSchema = ({
  name,
  description,
  url,
  image,
  category
}: ItemPageSchemaProps) => {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    name,
    description,
    url,
    ...(image ? { image } : {}),
    mainEntity: {
      "@type": "Organization",
      name,
      description,
      ...(image ? { image } : {}),
      ...(category ? { category } : {})
    },
    isPartOf: {
      "@type": "WebSite",
      name: "Grupos do Telegram",
      url: "https://gruposdotelegram.org"
    }
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Head>
  );
};
