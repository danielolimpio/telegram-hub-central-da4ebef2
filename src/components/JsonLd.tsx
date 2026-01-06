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
        urlTemplate: `${url}/all-groups?q={search_term_string}`
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
