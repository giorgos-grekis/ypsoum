'use client'
import React from "react";
import Link from "next/link";
// import { useRouter } from "next/router";

interface WdLink {
    href: string;
    children: string;
    className?: string;
}

// const getProperLink = (href: string, locale: string | undefined) => {
//     if (href.startsWith("http")) {
//         return href
//     }
//     if (href.startsWith("/")) {
//         href = `${href.substring(1)}`;
//     }
//     return `/${locale}/${href}`
// }

const WdLink = ({ href:link, children, className }: WdLink) => {
    // const router = useRouter();
    // const locale = router?.locale;

    // console.log('router: ', router);


    // const link = getProperLink(href, locale);

    return (
        <Link href={link} locale={false} className={className}>
            {children}
        </Link>
    );
};

export default WdLink;




