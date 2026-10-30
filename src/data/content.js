import data from "../../db.json";

const image = (value) => {
  if (!value) return null;
  return typeof value === "string" ? { url: value } : value;
};

const normalizeAuthor = (author) =>
  author
    ? {
        ...author,
        avatar: image(author.avatar),
      }
    : author;

const content = {
  ...data,
  contact: {
    ...data.contact,
    whatsapp: data.contact?.whatsapp ?? data.contact?.whatsappNumber ?? "",
  },
  projects: (data.projects ?? []).map((project) => ({
    ...project,
    image: image(project.image),
  })),
  blogs: (data.blogs ?? []).map((post) => ({
    ...post,
    image: image(post.image),
    author: normalizeAuthor(post.author),
    authors: post.authors?.map(normalizeAuthor),
  })),
  gallery: (data.gallery ?? []).map((item) => image(item.image)),
  socials: (data.socials ?? []).map((social, index) => ({
    ...social,
    id: social.id ?? index + 1,
  })),
  testimonials: data.testimonials ?? [],
};

export const getMediaUrl = (media) =>
  typeof media === "string" ? media : media?.url ?? "";

export default content;
