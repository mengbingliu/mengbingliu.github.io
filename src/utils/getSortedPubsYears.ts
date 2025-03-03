import type { CollectionEntry } from "astro:content";

const getSortedPubsYears = (pubs: CollectionEntry<"pub">[]) => {

  const pubs_sort = pubs.sort((a, b) => {
    if (a.data.published_year === b.data.published_year) {
      if (a.data.published_month === b.data.published_month) {
        return a.data.title.localeCompare(b.data.title);
      }
      if (!a.data.published_month) return 1;
      else if (!b.data.published_month) return -1;
      return b.data.published_month - a.data.published_month;
    }
    return b.data.published_year - a.data.published_year;
  });

  const years = pubs_sort.map(pub => pub.data.published_year);
  const unique_years = [...new Set(years)].sort((a, b) => b - a);
  return { pubs_sort, unique_years };

};

export default getSortedPubsYears;
