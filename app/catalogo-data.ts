/**
 * Catálogo central de YAWELMAQ.
 *
 * PARA AÑADIR UN NUEVO PRODUCTO O CATEGORÍA:
 * 1. Categoría nueva: Añade un nuevo objeto al arreglo `categories` con:
 *    - `slug`: identificador único en minúsculas sin espacios (ej: "plomeria", "electricidad").
 *    - `name`: Nombre visible (ej: "Plomería y Grifería").
 *    - `tag`: Etiqueta breve (ej: "Novedad", "Obra", "Top venta").
 *    - `description`: Descripción corta de la categoría.
 *    - `image`: URL de la imagen de portada.
 *    - `products`: Arreglo de productos pertenecientes a esta categoría.
 *
 * 2. Producto nuevo: Añade un objeto dentro de `products` de la categoría deseada:
 *    - `name`: Nombre de la herramienta o material.
 *    - `code`: Código de inventario único (ej: "PL-501").
 *    - `image`: URL de la foto.
 *    - `description`: Breve detalle o especificaciones.
 *    - `price`: (Opcional) Precio visible (ej: "$25.00" o "Consultar").
 *    - `inStock`: (Opcional) true/false para indicar disponibilidad.
 */

export type Product = {
  name: string;
  code: string;
  image: string;
  description: string;
  price?: string;
  inStock?: boolean;
  badge?: string;
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
      { name: "Taladro Percutor Pro 18V", code: "TL-101", image: "https://images.unsplash.com/photo-1581147036324-c17ac5f7d3d2?auto=format&fit=crop&w=900&q=80", description: "Potencia para concreto y metal.", inStock: true },
      { name: "Taladro Inalámbrico Max", code: "TL-102", image: "https://images.unsplash.com/photo-1581147036324-c17ac5f7d3d2?auto=format&fit=crop&w=900&q=80", description: "Ligero, versátil y con batería duradera.", inStock: true },
      { name: "Taladro de Impacto X", code: "TL-103", image: "https://images.unsplash.com/photo-1581147036324-c17ac5f7d3d2?auto=format&fit=crop&w=900&q=80", description: "Rendimiento ideal para montaje pesado.", inStock: true },
      { name: "Taladro de Mano Compacto", code: "TL-104", image: "https://images.unsplash.com/photo-1581147036324-c17ac5f7d3d2?auto=format&fit=crop&w=900&q=80", description: "Diseño compacto para trabajo ágil.", inStock: true },
      { name: "Taladro Control Digital", code: "TL-105", image: "https://images.unsplash.com/photo-1581147036324-c17ac5f7d3d2?auto=format&fit=crop&w=900&q=80", description: "Precisión y control para detalle fino.", inStock: true },
      { name: "Taladro de Banco", code: "TL-106", image: "https://images.unsplash.com/photo-1581147036324-c17ac5f7d3d2?auto=format&fit=crop&w=900&q=80", description: "Estabilidad para perforaciones de precisión.", inStock: true },
      { name: "Taladro Profesional 20V", code: "TL-107", image: "https://images.unsplash.com/photo-1581147036324-c17ac5f7d3d2?auto=format&fit=crop&w=900&q=80", description: "Máxima torsión para tareas exigentes.", inStock: true },
      { name: "Taladro de Madera", code: "TL-108", image: "https://images.unsplash.com/photo-1581147036324-c17ac5f7d3d2?auto=format&fit=crop&w=900&q=80", description: "Ideal para carpintería y remodelación.", inStock: true },
      { name: "Taladro de Carpintería", code: "TL-109", image: "https://images.unsplash.com/photo-1581147036324-c17ac5f7d3d2?auto=format&fit=crop&w=900&q=80", description: "Rápido, preciso y muy maniobrable.", inStock: true },
      { name: "Taladro Multifunción", code: "TL-110", image: "https://images.unsplash.com/photo-1581147036324-c17ac5f7d3d2?auto=format&fit=crop&w=900&q=80", description: "Versatilidad para múltiples materiales.", inStock: true },
    ],
  },
  {
    slug: "sierras",
    name: "Sierras",
    tag: "Durabilidad",
    description: "Corte limpio y rendimiento profesional.",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80",
    products: [
      { name: "Sierra Circular Pro", code: "SR-201", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80", description: "Corte potente para madera y acero.", inStock: true },
      { name: "Sierra Caladora Plus", code: "SR-202", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80", description: "Precisión y control para cortes exactos.", inStock: true },
      { name: "Sierra de Inglete", code: "SR-203", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80", description: "Perfecta para enmarcado y acabados.", inStock: true },
      { name: "Sierra Oscilante", code: "SR-204", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80", description: "Versátil para metales y materiales duros.", inStock: true },
      { name: "Sierra de Paneles", code: "SR-205", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80", description: "Rendimiento profesional en madera.", inStock: true },
      { name: "Sierra de Madera Deluxe", code: "SR-206", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80", description: "Corte suave y dimensiones firmes.", inStock: true },
      { name: "Sierra Máxima 2400", code: "SR-207", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80", description: "Agilidad para trabajos continuos.", inStock: true },
      { name: "Sierra de Precisión", code: "SR-208", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80", description: "Perfecta para acabados finos.", inStock: true },
      { name: "Sierra de Mano", code: "SR-209", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80", description: "Eficiente para cortes rápidos.", inStock: true },
      { name: "Sierra Eléctrica Compacta", code: "SR-210", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80", description: "Diseño práctico y alto rendimiento.", inStock: true },
    ],
  },
  {
    slug: "accesorios",
    name: "Accesorios",
    tag: "Inventario",
    description: "Todo para completar tus proyectos con confianza.",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80",
    products: [
      { name: "Disco de Corte", code: "AC-301", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80", description: "Rendimiento sostenido y corte limpio.", inStock: true },
      { name: "Broca de Metal", code: "AC-302", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80", description: "Ideal para trabajos de perforación.", inStock: true },
      { name: "Lija Industrial", code: "AC-303", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80", description: "Acabado fino y superficie uniforme.", inStock: true },
      { name: "Broca de Concreto", code: "AC-304", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80", description: "Precisión para cementos y bloques.", inStock: true },
      { name: "Guarda de Corte", code: "AC-305", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80", description: "Mayor seguridad en cada tarea.", inStock: true },
      { name: "Mango de Impacto", code: "AC-306", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80", description: "Ergonomía y agarre para trabajo continuo.", inStock: true },
      { name: "Lima de Acero", code: "AC-307", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80", description: "Acabado profesional y ajustado.", inStock: true },
      { name: "Adaptador Universal", code: "AC-308", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80", description: "Compatibilidad con herramientas múltiples.", inStock: true },
      { name: "Kit de Accesorios", code: "AC-309", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80", description: "Completa tu kit para cualquier obra.", inStock: true },
      { name: "Base de Soporte", code: "AC-310", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80", description: "Mayor estabilidad para trabajos pesados.", inStock: true },
    ],
  },
  {
    slug: "herramientas",
    name: "Herramientas",
    tag: "Calidad",
    description: "Equipo fiable para trabajo intenso y diario.",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80",
    products: [
      { name: "Llave de Impacto", code: "HR-401", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80", description: "Torque fuerte para montaje y mantenimiento.", inStock: true },
      { name: "Atornillador Pro", code: "HR-402", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80", description: "Precisión para tornillos y detalles.", inStock: true },
      { name: "Pulidora Angular", code: "HR-403", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80", description: "Desbaste y acabado profesional.", inStock: true },
      { name: "Rotomartillo Max", code: "HR-404", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80", description: "Fuerza para trabajos pesados.", inStock: true },
      { name: "Amoladora Compacta", code: "HR-405", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80", description: "Potencia y maniobrabilidad en un solo equipo.", inStock: true },
      { name: "Martillo Demoledor", code: "HR-406", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80", description: "Resistencia y acabado para obra fuerte.", inStock: true },
      { name: "Sierra de Mano Eléctrica", code: "HR-407", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80", description: "Rápido corte y gran maniobrabilidad.", inStock: true },
      { name: "Llave Ajustable XL", code: "HR-408", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80", description: "Versátil para mantenimiento general.", inStock: true },
      { name: "Kit de Herramienta Rápida", code: "HR-409", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80", description: "Inventario esencial para cada taller.", inStock: true },
      { name: "Taladro de Trabajo Pesado", code: "HR-410", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80", description: "Durabilidad y fuerza para tareas intensivas.", inStock: true },
    ],
  },
];

/** Categorías destacadas para la grilla del home (por defecto todas o las primeras N). */
export const featuredCategories = categories;

/** Funciones auxiliares para consultar el catálogo */
export function getAllCategories(): Category[] {
  return categories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug.toLowerCase() === slug.toLowerCase());
}

export function getAllProducts(): (Product & { categoryName: string; categorySlug: string })[] {
  return categories.flatMap((cat) =>
    cat.products.map((p) => ({
      ...p,
      categoryName: cat.name,
      categorySlug: cat.slug,
    }))
  );
}

export function getProductByCode(code: string): Product | undefined {
  for (const cat of categories) {
    const found = cat.products.find((p) => p.code.toLowerCase() === code.toLowerCase());
    if (found) return found;
  }
  return undefined;
}

