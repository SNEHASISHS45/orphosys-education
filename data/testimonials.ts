export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Arunima Roy",
    role: "Parent",
    content: "Orphosys has completely changed the way my child thinks and learns. The brain development programs are truly effective and the teachers are very supportive.",
    rating: 5,
  },
  {
    id: "2",
    name: "Sanjay Mukherjee",
    role: "Franchise Owner",
    content: "The most professional team I've encountered in the education sector. Their methodology is scientific and results are visible within months.",
    rating: 5,
  },
  {
    id: "3",
    name: "Soma Sen",
    role: "Parent",
    content: "A unique approach to learning. My son looks forward to his classes every weekend. Highly recommended for overall cognitive development.",
    rating: 5,
  },
];
