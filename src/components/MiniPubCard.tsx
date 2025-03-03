import { slugifyStr } from "@utils/slugify";
import React, { useState } from 'react';

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

interface StructuredMetaDataProps {
    title: string;
    authors: Author[];
    published_year: number;
    published_place: string;
    og_image: string;
    homepage: string;
}

const StructuredMetaData = ({ title, authors, published_year, published_place, og_image, homepage }: StructuredMetaDataProps) => {
    const structuredData = {
        "@context": "http://schema.org",
        "@type": "ScholarlyArticle",
        "headline": title,
        "author": authors.map((author: { name: string; url?: string }, index: number, array: Author[]) => ({
            "@type": "Person",
            "name": author.name.endsWith("*") ? author.name.slice(0, -1) : author.name,
            "url": author.url || undefined  // Only include the URL if it exists
        })),
        "datePublished": published_year.toString(),
        "publisher": published_place,
        "image": og_image,
        "url": homepage
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}

interface PubCardProps {
    href?: string;
    frontmatter: PubData;
    secHeading?: boolean;
}

export default function MiniPubCard({ href, frontmatter, secHeading = true }: PubCardProps) {
    const { title, authors, published_year, published_place, bibtex, links, homepage, paper_id, og_image } = frontmatter;
    const [showBibtex, setShowBibtex] = useState(false);

    const headerProps = {
        style: { viewTransitionName: slugifyStr(title) },
        className: "text-lg font-medium decoration-dashed hover:underline",
    };

    let toggleBibtex = () => {
        setShowBibtex(!showBibtex);
    };

    const showGoogleCitations = () => {
        let citation_url = "https://img.shields.io/endpoint?logo=Google%20Scholar&url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FLiXin97%2Flixin97.github.io@google-scholar-stats%2Fgs_data_Hxf8sNkAAAAJ:" + paper_id + ".json&labelColor=f6f6f6&color=9cf&style=flat&label=citations";
        return (
            // <p>{citation_url}</p>
            // <a href="https://scholar.google.com/citations?user=Hxf8sNkAAAAJ">
            //     <img src={citation_url} alt="Google Scholar Citations" ></img>
            // </a>
            // <a href="default.asp"><img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;"></a>

            <div>
                <a href="https://scholar.google.com/citations?user=Hxf8sNkAAAAJ" className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0">
                    <img src={citation_url} alt="Google Scholar Citations"></img>
                </a>
            </div>

        );
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(bibtex).then(() => {
            alert('BibTeX entry copied to clipboard!');
        }, (err) => {
            console.error('Could not copy text: ', err);
        });
    };


    const renderAuthorName = (author: Author) => {
        const isXinLi = author.name === "Xin Li" || author.name === "Xin Li*";
        const displayName = (
            isXinLi ? <strong>{author.name}</strong> : author.name
        );

        return author.url ? (
            <a href={author.url} className="decoration-dashed hover:underline">
                {displayName}
            </a>
        ) : displayName;
    };

    return (

        <div>

            <a className="decoration-dashed hover:text-skin-accent underline"
                href={homepage}
            // className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
            >
                {title}.
            </a>
            &nbsp;
            {authors.map((author, index) => (
                <span key={index} className="text-sm">
                    {renderAuthorName(author)}
                    {index === authors.length - 1 ? '.' : ', '}
                </span>
            ))}
            &nbsp;
            <span className="text-sm">
                <strong>{published_place}</strong>, {published_year.toString()}.&nbsp;
            </span>
            {
                links.map((link, index) => (
                    <span key={index} className="text-sm font-light">
                        {index === 0 ? "Links: " : ""}
                        {
                            link.url ? (
                                <a href={link.url} className="decoration-dashed hover:underline">
                                    {link.name}
                                </a>
                            ) : link.name
                        }
                        {index === links.length - 1 ? "" : " / "}
                    </span>
                ))
            }
            <div className="mb-2"></div>
        </div>
    );
}