import type { CollectionEntry } from "astro:content";

const getSortedPubs = (pubs: CollectionEntry<"pub">[]) => {
  return pubs.sort((a, b) => {
    if (a.data.published_year === b.data.published_year) {
      if (a.data.published_month === b.data.published_month) {
        return a.data.title.localeCompare(b.data.title);
      }
      if (!a.data.published_month) return 1;
      else if (!b.data.published_month) return -1;
      return b.data.published_month - a.data.published_month;
    }
    return Math.floor(b.data.published_year) - Math.floor(a.data.published_year);
  });
};


export default getSortedPubs;
