// import { Link, Navigate, useParams } from "react-router-dom";

// const services = [
//   {
//     slug: "brand-design",
//     title: "Brand Photography",
//     description:
//       "Create a visual language for your brand with a cohesive library of images for campaigns, websites, social media, and editorial use.",
//     details: "We plan a consistent image direction that makes your brand recognizable, clear, and easy to trust at first glance.",
//   },
//   {
//     slug: "product-design",
//     title: "Product Photography",
//     description:
//       "Show your product at its best with clean, tactile imagery that communicates quality, detail, and the experience of using it.",
//     details: "We create a focused set of images that shows material, function, detail, and the feeling of owning or using the product.",
//   },
//   {
//     slug: "ux-design-strategy",
//     title: "Portraits & People",
//     description:
//       "Portraits with direction and character for founders, teams, artists, and anyone who wants to be represented with confidence.",
//     details: "We create a relaxed, directed environment that leaves room for genuine expression and a strong sense of character.",
//   },
//   {
//     slug: "development",
//     title: "Editorial & Campaigns",
//     description:
//       "Build a visual story across a campaign, launch, or publication with a thoughtful mix of atmosphere, detail, and narrative.",
//     details:
//       "From the first reference to the final edit, we shape a coherent set of images that carries the story across every touchpoint.",
//   },
// ];



// export default function ServiceDetail() {
//   const { slug } = useParams();
//   const service = services.find((item) => item.slug === slug);

//   if (!service) {
//     return <Navigate to="/services" replace />;
//   }

//   return (
//     <article className="w-full bg-white px-5 py-20 sm:py-28 md:px-10 lg:px-16">
//       <div className="mx-auto max-w-4xl">
//         <Link
//           to="/services"
//           className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-[#ff4d00]"
//         >
//           <span aria-hidden="true">←</span>
//           Back to services
//         </Link>

//         <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm shadow-zinc-900/5 sm:p-8 md:p-10">
//           <span className="inline-flex rounded-full bg-[#ff4d00]/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-[#ff4d00]">
//             Photography service
//           </span>

//           <h1 className="mt-6 text-balance bg-linear-to-b from-zinc-950 to-zinc-600 bg-clip-text text-3xl font-semibold leading-[1.15] tracking-tight text-transparent sm:text-5xl">
//             {service.title}
//           </h1>

//           <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">{service.description}</p>

//           <div className="mt-10 rounded-2xl bg-white p-5 ring-1 ring-zinc-200">
//             <h2 className="text-lg font-semibold tracking-tight text-zinc-950">What to expect</h2>
//             <p className="mt-4 text-sm leading-7 text-zinc-600">{service.details}</p>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// }
