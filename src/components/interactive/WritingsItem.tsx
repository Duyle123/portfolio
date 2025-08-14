import React from "react";
import Link from "next/link";
import Image from "next/image";

// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

// ---- Define the prop type (fixes TS error) ----
export interface WritingPost {
  id: string;
  title: string;
  date?: string;
  thumbnail?: string;      // may be optional in your data source
  thumbnailAlt?: string;   // optional; we’ll default it safely
}

type Props = {
  post: WritingPost;
};

export default function WritingsItem({ post }: Props) {
  const {
    id,
    title,
    date,
    thumbnail,
    thumbnailAlt,
  } = post;

  // Safe fallbacks in case your data is missing fields
  const imgSrc = thumbnail ?? "/placeholder.png"; // add a public/placeholder.png if you don't have one
  const imgAlt = thumbnailAlt ?? title ?? "Post thumbnail";

  // If imgSrc is an external URL and you haven't configured next.config.js images.domains,
  // set `unoptimized` to avoid build-time errors. Flip to false after configuring domains.
  const isExternal = /^https?:\/\//i.test(imgSrc);

  return (
    <li className="mb-10">
      <Link href={`/posts/${id}`} className="flex flex-wrap gap-10">
        <div
          className="image-container 
            2xl:w-[280px] 2xl:h-[280px] 
            xl:w-[180px]  xl:h-[180px]
            lg:w-[180px]  lg:h-[280px]
            md:w-[280px]  md:h-[280px]
            sm:w-[280px]  sm:h-[280px]"
        >
          <Image
            alt={imgAlt}
            src={imgSrc}
            placeholder="blur"
            blurDataURL={rgbDataURL(237, 181, 6)}
            width={300}
            height={300}
            unoptimized={isExternal} // remove or set to false if you configured images.domains
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        <div className="post-description pt-5 2xl:w-[300px]">
          <div className="text-h5 strawford-bold">{title}</div>
          {date ? <div className="text-sm opacity-70">{date}</div> : null}
        </div>
      </Link>
    </li>
  );
}

/* If you're on older Next.js where <Link> doesn't accept className directly,
   use legacyBehavior + <a>:

  <Link href={`/posts/${id}`} legacyBehavior>
    <a className="flex flex-wrap gap-10"> ... </a>
  </Link>
*/
