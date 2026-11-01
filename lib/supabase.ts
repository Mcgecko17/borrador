import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey =
  process.env.SUPABASE_SECRET_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Faltan variables de entorno de Supabase. Configurá NEXT_PUBLIC_SUPABASE_URL y una de estas claves: SUPABASE_SECRET_KEY o NEXT_PUBLIC_SUPABASE_ANON_KEY."
  );
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface ProductoDB {
  id_producto: number;
  codigo_producto: string;
  marca_producto: string;
  nombre_producto: string;
  precio_producto: number;
  stock_producto: number;
}

export interface MarcaInfo {
  name: string;
  slug: string;
  productCount: number;
  imageUrl: string;
  products: ProductoDB[];
}

export const STORAGE_BASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL ||
  "https://fbqmxoergxfifhcemzlw.supabase.co/storage/v1/object/public/imagenesferreteriayawelmaq";

/** Devuelve la URL de la imagen del producto según su código en Supabase Storage */
export function getProductImageUrl(codigo: string): string {
  if (!codigo) return "/wallpaperflare.com_wallpaper.jpg";
  return `${STORAGE_BASE_URL}/${codigo.trim()}.webp`;
}

/** Devuelve la URL del logo/foto de la marca en Supabase Storage */
export function getBrandImageUrl(marca: string): string {
  if (!marca) return "/wallpaperflare.com_wallpaper.jpg";
  return `${STORAGE_BASE_URL}/marcas/${marca.trim().toLowerCase()}.webp`;
}

/** Obtiene todos los productos de la tabla 'productos' en Supabase */
export async function getProductos(): Promise<ProductoDB[]> {
  try {
    const { data, error } = await supabase
      .from("productos")
      .select("*")
      .order("id_producto", { ascending: true });

    if (error) {
      console.error("Error al obtener productos de Supabase:", error.message);
      return [];
    }

    return (data as ProductoDB[]) || [];
  } catch (err) {
    console.error("Excepción al consultar Supabase:", err);
    return [];
  }
}

/**
 * Convierte un nombre de marca en un slug URL-safe:
 * - Normaliza diacríticos (ü→u, á→a, etc.)
 * - Pasa a minúsculas
 * - Reemplaza espacios y caracteres no-alfanuméricos por "-"
 * - Limpia guiones al inicio/fin
 */
export function toSlug(name: string): string {
  return name
    .normalize("NFD")                      // descompone diacríticos: "ü" → "u" + combinador
    .replace(/[\u0300-\u036f]/g, "")       // elimina los combinadores diacríticos
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")           // cualquier carácter no-alfanumérico → "-"
    .replace(/^-+|-+$/g, "");             // quita guiones al inicio/fin
}

/**
 * Regex que detecta nombres de marca que son datos basura o placeholders genéricos.
 * Captura variantes como: "sin marca", "no identificada", "n/a", "otro/s",
 * "desconocido", "ninguno", cadenas de 1 carácter, etc.
 * No requiere mantener una lista manual de marcas específicas.
 */
const MARCA_INVALIDA_RE =
  /^(sin[\s_-]*marca|no[\s_-]*identific\w*|n\/?a|otros?|desconocid\w*|ninguno|indefinid\w*|vari\w*|gen[eé]rico|unknown|none|null|-)$|^.{1}$/i;

/** Devuelve true si el nombre de marca debe ser ignorado */
function esMarcaInvalida(nombre: string): boolean {
  return MARCA_INVALIDA_RE.test(nombre.trim());
}

/** Agrupa los productos por marca y devuelve la información de cada marca */
export async function getMarcas(): Promise<MarcaInfo[]> {
  const productos = await getProductos();

  const marcasMap = new Map<string, ProductoDB[]>();

  for (const prod of productos) {
    const rawBrand = prod.marca_producto?.trim();
    if (!rawBrand) continue;

    // Ignorar marcas que sean datos basura o placeholders genéricos
    if (esMarcaInvalida(rawBrand)) continue;

    const brandName = rawBrand.charAt(0).toUpperCase() + rawBrand.slice(1);
    if (!marcasMap.has(brandName)) {
      marcasMap.set(brandName, []);
    }
    marcasMap.get(brandName)!.push(prod);
  }

  const marcas: MarcaInfo[] = [];

  for (const [name, prods] of marcasMap.entries()) {
    marcas.push({
      name,
      slug: toSlug(name),
      productCount: prods.length,
      imageUrl: getBrandImageUrl(name),
      products: prods,
    });
  }

  return marcas;
}

/** Obtiene los productos correspondientes a un slug de marca (ej: 'bosch') */
export async function getProductosByMarcaSlug(slug: string): Promise<{
  marcaName: string;
  products: ProductoDB[];
} | null> {
  const marcas = await getMarcas();
  const cleanSlug = toSlug(slug);
  const found = marcas.find((m) => m.slug === cleanSlug);

  if (!found) return null;

  return {
    marcaName: found.name,
    products: found.products,
  };
}