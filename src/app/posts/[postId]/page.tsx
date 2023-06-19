import React from 'react'
import Link from 'next/link';
import { getSortedPostsData, getPostData } from '../../../../lib/posts';
import { notFound } from 'next/navigation';
import getFormattedDate from '../../../../lib/getFormattedDate';
import '../../../app/globals.css';
import './post_styles.css'
import strawfordFont from '../../../app/fonts/strawford.js';
import Image from 'next/image';



export function generateStaticParams() {
    const posts = getSortedPostsData() //deduped!
    return posts.map((post) => ({
        postId: post.id
    }))
}

export function generateMetadata({ params }: { params: { postId: string } }) {

    const posts = getSortedPostsData() //deduped!
    const { postId } = params

    const post = posts.find(post => post.id === postId)

    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }

    return {
        title: post.title,
    }
}


export default async function Post({ params }: { params: { postId: string } }) {
    const posts = getSortedPostsData() //deduped!
    const { postId } = params
    if (!posts.find(post => post.id === postId)) {
        return notFound()
    }
    const { title, date, thumbnail, thumbnailAlt, contentHtml } = await getPostData(postId)
    const pubDate = getFormattedDate(date)


    return (
        <main className={`${strawfordFont.className} container px-6 prose prose-xl prose-slate dark:prose-invert mx-auto dark:text-white`}>
            <div>
                <Image src={thumbnail} className={`thumbnail
                2xl:w-[550px] 2xl:h-[550px]
                xl:w-[480px] xl:h-[480px]
                sm:w-full sm:h-auto
                w-[95vw] h-[290px]      
                object-cover`} width={100} height={100}
                alt={thumbnailAlt}/>
                <p className="text-h3 strawford-bold max-w-[700px] m-auto pb-[45px]">{title}</p>
            </div>
            <p className="m-auto text-h7 strawford-light max-w-[700px] pb-[35px]">
                {pubDate}
            </p>
            <article>
                <section className='max-w-[700px] m-auto' dangerouslySetInnerHTML={{ __html: contentHtml }} />
                <div className='flex'>
                    <Link href='/'>Back to home</Link>
                    <Link href='/writings'>Explore more posts</Link>
                </div>
            </article>
        </main>
    )
}
