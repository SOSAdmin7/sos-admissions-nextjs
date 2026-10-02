import verified from "./verified-testimonials.json";
export interface Testimonial {
  id: string;
  clientName: string;
  clientTitle: string;
  serviceId: string;
  serviceName: string;
  content: string;
  outcome: string;
  rating: number;
  featured: boolean;
  sourceUrl: string;
  location?: string;
  schoolsAdmitted?: string[];
  image?: string;
  year?: number;
}
export const testimonials: Testimonial[] = verified;
export function getTestimonialsByService(id: string) {
  return testimonials.filter((t) => t.serviceId === id);
}
export function getFeaturedTestimonials() {
  return testimonials.filter((t) => t.featured);
}
