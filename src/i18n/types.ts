interface MahoyData {
  title: string;
  metadata: Metadata;
  links: MahoyLink;
  footer: MahoyFooter;
  index: MahoyIndex;
}

interface MahoySocialMedia {
  name: string;
  alt: string;
  href: string;
}

interface MahoyFooter {
  socialMedia: MahoySocialMedia[];
}

interface MahoyLink {
  services: string;
  methodology: string;
  contact: string;
}

interface MahoyHero {
  heroTitle: string;
  heroText: string;
  heroButton: string;
}

interface MahoyIndex {
  heroes: MahoyHero;
  services: MahoyService[];
  process: MahoyProcessStep[];
  contact: MahoyContact;
}

interface MahoyService {
  icon: string;
  title: string;
  description: string;
}

interface MahoyProcessStep {
  step: string;
  title: string;
  description: string;
}

interface MahoyContact {
  title: string;
  description: string;
  email: {
    gmail: string;
    href: string;
    name: string;
  };
  telephone: {
    tel: string;
    href: string;
    alt: string;
    name: string;
  };
}

// ----------

interface Metadata {
  title: string;
  description: string;
  locale: string;
  structuredData: any;
}
