export const site = {
  name: "Aldeota Locações",
  phoneDisplay: "(85) 9 8619-7339",
  phoneE164: "5585986197339",
  address: "R. Monsenhor Bruno, 1365",
  district: "Meireles, Fortaleza - CE",
  city: "Fortaleza",
  state: "CE",
  postalCode: "60115-191",
  whatsappMessage: "Olá! Gostaria de solicitar um orçamento de locação de equipamentos.",
};

export const equipment = [
  {
    id: "andaimes",
    title: "Andaimes",
    description: "Soluções práticas para trabalhos em altura e diferentes etapas da obra.",
    kind: "scaffold" as const,
  },
  {
    id: "escoras",
    title: "Escoras metálicas",
    description: "Apoio para escoramento e serviços estruturais em obras de vários portes.",
    kind: "props" as const,
  },
  {
    id: "concretagem",
    title: "Concretagem",
    description: "Equipamentos de apoio para preparação, formas e execução de concreto.",
    kind: "mixer" as const,
  },
  {
    id: "compactacao",
    title: "Compactação",
    description: "Equipamentos para compactação de solo e preparação de áreas.",
    kind: "compactor" as const,
  },
  {
    id: "ferramentas",
    title: "Ferramentas elétricas",
    description: "Ferramentas para apoiar diferentes serviços na rotina da construção civil.",
    kind: "drill" as const,
  },
];
