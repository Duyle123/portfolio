import { FC } from "react"
import { allBlogs } from "contentlayer/generated"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

import strawfordFont from "@/app/fonts/strawford"
import { Mdx } from "@/components/ui/mdx-components"
import { Metadata } from "next"

import { env } from "@/env.mjs"
import { absoluteUrl } from "@/lib/utils"

interface BlogPageProps{
    params: {
        slug: string
    }
}

async function getDocFromParams(slug: string){
    const blog = allBlogs.find((doc) => doc.slugAsParams === slug)

    if (!blog) notFound()
    return blog
}

//========================== Create MetaData ===========================
export async function generateMetadata({
    params,
  }: BlogPageProps): Promise<Metadata> {
    const doc = await getDocFromParams(params)
  
    if (!doc) {
      return {}
    }
  
    const url = env.NEXT_PUBLIC_APP_URL
  
    const ogUrl = new URL(`${url}/api/og`)
    ogUrl.searchParams.set("heading", doc.description ?? doc.title)
    ogUrl.searchParams.set("type", "Documentation")
    ogUrl.searchParams.set("mode", "dark")
  
    return {
      title: doc.title,
      description: doc.description,
      openGraph: {
        title: doc.title,
        description: doc.description,
        type: "article",
        url: absoluteUrl(doc.slug),
        images: [
          {
            url: ogUrl.toString(),
            width: 1200,
            height: 630,
            alt: doc.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: doc.title,
        description: doc.description,
        images: [ogUrl.toString()],
      },
    }
  }
  


const page = async ({ params }: BlogPageProps) => {
    const blog = await getDocFromParams(params.slug)

    return (
        <main className={`${strawfordFont.className} container px-6 prose-xl mx-auto dark:text-white`}>
        <div className='overflow-hidden flex h-screen justify-center'>
            <div className='hero-image-container width-screen h-full absolute left-0 z-0 bg-gradient'>
                <Image src={blog.thumbnail} className={`thumbnail object-cover`} fill={true}
                alt={blog.thumbnailAlt}/>
            </div>
            <div className='absolute left-0 bg-gradient-to-t from-black h-screen width-screen z-1 w-screen'></div>

            <div className='absolute bottom-0'>

                <p className="text-h3 text-white strawford-bold max-w-[700px]
                pl-[1rem] pr-[1rem] mb-2
                md:pl-0 md:pr-0
                ">{blog.title}</p>

                <p className="text-h7 text-white text-left strawford-light w-full max-w-[700px]
                pl-[1rem] pr-[1rem] mb-2
                md:pl-[1px] md:pr-[1px]
                ">{blog.pubDate}</p>

                <p className='text-gray text-left strawford-light w-full max-w-[700px]
                pl-[1rem] pr-[1rem]
                md:pl-[1px] md:pr-[1px]
                '>{blog.thumbnailCredit}</p>

            </div>
            
        </div>
        <article>
            <section className='max-w-[700px] m-auto pt-[50px]' dangerouslySetInnerHTML={{ __html: contentHtml }} />
            <div className='flex'>
                <Link href='/'>Back to home</Link>
                <Link href='/writings'>Explore more posts</Link>
            </div>
        </article>
    </main>
    )
}

export default page