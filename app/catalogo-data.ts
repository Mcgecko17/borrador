export type Product = {
  name: string;
  code: string;
  image: string;
  description: string;
};

export type Category = {
  slug: string;
  name: string;
  tag: string;
  description: string;
  image: string;
  products: Product[];
};

export const categories: Category[] = [
  {
    slug: "taladros",
    name: "Taladros",
    tag: "Top venta",
    description: "Potencia y precisión para obra y mantenimiento.",
    image: "https://images.unsplash.com/photo-1581147036324-c17ac5f7d3d2?auto=format&fit=crop&w=900&q=80",
    products: [
      { name: "Taladro Percutor Pro 18V", code: "TL-101", image: "https://images.unsplash.com/photo-1581147036324-c17ac5f7d3d2?auto=format&fit=crop&w=900&q=80", description: "Potencia para concreto y metal." },
      { name: "Taladro Inalámbrico Max", code: "TL-102", image: "https://images.unsplash.com/photo-1581147036324-c17ac5f7d3d2?auto=format&fit=crop&w=900&q=80", description: "Ligero, versátil y con batería duradera." },
      { name: "Taladro de Impacto X", code: "TL-103", image: "https://images.unsplash.com/photo-1581147036324-c17ac5f7d3d2?auto=format&fit=crop&w=900&q=80", description: "Rendimiento ideal para montaje pesado." },
      { name: "Taladro de Mano Compacto", code: "TL-104", image: "https://images.unsplash.com/photo-1581147036324-c17ac5f7d3d2?auto=format&fit=crop&w=900&q=80", description: "Diseño compacto para trabajo ágil." },
      { name: "Taladro Control Digital", code: "TL-105", image: "https://images.unsplash.com/photo-1581147036324-c17ac5f7d3d2?auto=format&fit=crop&w=900&q=80", description: "Precisión y control para detalle fino." },
      { name: "Taladro de Banco", code: "TL-106", image: "https://images.unsplash.com/photo-1581147036324-c17ac5f7d3d2?auto=format&fit=crop&w=900&q=80", description: "Estabilidad para perforaciones de precisión." },
      { name: "Taladro Profesional 20V", code: "TL-107", image: "https://images.unsplash.com/photo-1581147036324-c17ac5f7d3d2?auto=format&fit=crop&w=900&q=80", description: "Máxima torsión para tareas exigentes." },
      { name: "Taladro de Madera", code: "TL-108", image: "https://images.unsplash.com/photo-1581147036324-c17ac5f7d3d2?auto=format&fit=crop&w=900&q=80", description: "Ideal para carpintería y remodelación." },
      { name: "Taladro de Carpintería", code: "TL-109", image: "https://images.unsplash.com/photo-1581147036324-c17ac5f7d3d2?auto=format&fit=crop&w=900&q=80", description: "Rápido, preciso y muy maniobrable." },
      { name: "Taladro Multifunción", code: "TL-110", image: "https://images.unsplash.com/photo-1581147036324-c17ac5f7d3d2?auto=format&fit=crop&w=900&q=80", description: "Versatilidad para múltiples materiales." },
    ],
  },
  {
    slug: "sierras",
    name: "Sierras",
    tag: "Durabilidad",
    description: "Corte limpio y rendimiento profesional.",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80",
    products: [
      { name: "Sierra Circular Pro", code: "SR-201", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80", description: "Corte potente para madera y acero." },
      { name: "Sierra Caladora Plus", code: "SR-202", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80", description: "Precisión y control para cortes exactos." },
      { name: "Sierra de Inglete", code: "SR-203", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80", description: "Perfecta para enmarcado y acabados." },
      { name: "Sierra Oscilante", code: "SR-204", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80", description: "Versátil para metales y materiales duros." },
      { name: "Sierra de Paneles", code: "SR-205", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80", description: "Rendimiento profesional en madera." },
      { name: "Sierra de Madera Deluxe", code: "SR-206", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80", description: "Corte suave y dimensiones firmes." },
      { name: "Sierra Máxima 2400", code: "SR-207", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80", description: "Agilidad para trabajos continuos." },
      { name: "Sierra de Precisión", code: "SR-208", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80", description: "Perfecta para acabados finos." },
      { name: "Sierra de Mano", code: "SR-209", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80", description: "Eficiente para cortes rápidos." },
      { name: "Sierra Eléctrica Compacta", code: "SR-210", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80", description: "Diseño práctico y alto rendimiento." },
    ],
  },
  {
    slug: "accesorios",
    name: "Accesorios",
    tag: "Inventario",
    description: "Todo para completar tus proyectos con confianza.",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80",
    products: [
      { name: "Disco de Corte", code: "AC-301", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80", description: "Rendimiento sostenido y corte limpio." },
      { name: "Broca de Metal", code: "AC-302", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80", description: "Ideal para trabajos de perforación." },
      { name: "Lija Industrial", code: "AC-303", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80", description: "Acabado fino y superficie uniforme." },
      { name: "Broca de Concreto", code: "AC-304", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80", description: "Precisión para cementos y bloques." },
      { name: "Guarda de Corte", code: "AC-305", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80", description: "Mayor seguridad en cada tarea." },
      { name: "Mango de Impacto", code: "AC-306", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80", description: "Ergonomía y agarre para trabajo continuo." },
      { name: "Lima de Acero", code: "AC-307", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80", description: "Acabado profesional y ajustado." },
      { name: "Adaptador Universal", code: "AC-308", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80", description: "Compatibilidad con herramientas múltiples." },
      { name: "Kit de Accesorios", code: "AC-309", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80", description: "Completa tu kit para cualquier obra." },
      { name: "Base de Soporte", code: "AC-310", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80", description: "Mayor estabilidad para trabajos pesados." },
    ],
  },
  {
    slug: "herramientas",
    name: "Herramientas",
    tag: "Calidad",
    description: "Equipo fiable para trabajo intenso y diario.",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80",
    products: [
      { name: "Llave de Impacto", code: "HR-401", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80", description: "Torque fuerte para montaje y mantenimiento." },
      { name: "Atornillador Pro", code: "HR-402", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80", description: "Precisión para tornillos y detalles." },
      { name: "Pulidora Angular", code: "HR-403", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80", description: "Desbaste y acabado profesional." },
      { name: "Rotomartillo Max", code: "HR-404", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80", description: "Fuerza para trabajos pesados." },
      { name: "Amoladora Compacta", code: "HR-405", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80", description: "Potencia y maniobrabilidad en un solo equipo." },
      { name: "Martillo Demoledor", code: "HR-406", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80", description: "Resistencia y acabado para obra fuerte." },
      { name: "Sierra de Mano Eléctrica", code: "HR-407", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80", description: "Rápido corte y gran maniobrabilidad." },
      { name: "Llave Ajustable XL", code: "HR-408", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80", description: "Versátil para mantenimiento general." },
      { name: "Kit de Herramienta Rápida", code: "HR-409", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80", description: "Inventario esencial para cada taller." },
      { name: "Taladro de Trabajo Pesado", code: "HR-410", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80", description: "Durabilidad y fuerza para tareas intensivas." },
    ],
  },
];

export const featuredCategories = categories.slice(0, 4);
