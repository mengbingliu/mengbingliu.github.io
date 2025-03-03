import { slugifyStr } from "@utils/slugify";
import React, { useState } from 'react';
import MiniPubCard from "@components/MiniPubCard";

interface Author {
    name: string;
    url?: string;
}

interface PubData {
    title: string;
    authors: Author[];
    published_year: number;
    published_place: string;
    og_image: string;
    homepage: string;
    bibtex: string;
    links: { name: string; url?: string }[];
    paper_id: string;
}

interface MiniPubSectionProps {
    pubs: PubData[];
}


// export default function MiniPubSection({ pubs }: MiniPubSectionProps) {
//     return (
//         <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
//             {pubs.map((pub, index) => (
//                 <MiniPubCard key={index} frontmatter={pub} />
//             ))}
//         </div>
//     );
// }

const MiniPubSection = ({ pubs }: MiniPubSectionProps) => {
    return (
        <p>
            MiniPubSection
        </p>
        // <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        //     {pubs.map((pub, index) => (
        //         <MiniPubCard key={index} frontmatter={pub} />
        //     ))}
        // </div>
    );
}


export default MiniPubSection;