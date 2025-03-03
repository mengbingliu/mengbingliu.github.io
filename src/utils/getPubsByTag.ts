import type { CollectionEntry } from "astro:content";
import getSortedPubs from "./getSortedPubs";
import { slugifyAll } from "./slugify";

const getPubsByTag = (pubs: CollectionEntry<"pub">[], tag: string) =>
  getSortedPubs(
    pubs.filter(pub => slugifyAll(pub.data.tags).includes(tag))
  );

export default getPubsByTag;
