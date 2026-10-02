import catalog from "./service-catalog.json";
export interface PricingItem {
  service: string;
  price: string;
  note?: string;
}
export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}
export interface Service {
  id: string;
  title: string;
  slug: string;
  sourceSlug: string;
  category:
    "undergraduate" | "graduate" | "healthcare" | "professional" | "support";
  shortDescription: string;
  longDescription: string;
  icon: string;
  heroStatement: string;
  features: string[];
  fieldsServed?: string[];
}
export const services = catalog as Service[];
export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
export function getServicesByCategory(category: Service["category"]) {
  return services.filter(
    (s) =>
      s.category === category &&
      !["pa-school", "nursing-programs"].includes(s.slug),
  );
}
export function getServicesByCategories() {
  return {
    undergraduate: getServicesByCategory("undergraduate"),
    graduate: getServicesByCategory("graduate"),
    healthcare: getServicesByCategory("healthcare"),
    professional: getServicesByCategory("professional"),
    support: getServicesByCategory("support"),
  };
}
