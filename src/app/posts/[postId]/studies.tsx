import React from 'react'
import Link from 'next/link';
import { getSortedPostsData, getPostData } from '../../../../lib/academicWritings';
import { notFound } from 'next/navigation';
import getFormattedDate from '../../../../lib/getFormattedDate';
import '../../../app/globals.css';
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
    const { title, date, thumbnail, thumbnailAlt, thumbnailCredit, contentHtml } = await getPostData(postId)
    const pubDate = getFormattedDate(date)

    return (
        <main className={`${strawfordFont.className} container px-6 prose-xl mx-auto dark:text-white`}>
            <div className='overflow-hidden flex h-screen justify-center'>
                <div className='hero-image-container width-screen h-full absolute left-0 z-0 bg-gradient'>
                    <Image src={thumbnail} className={`thumbnail object-cover`} fill={true}
                    alt={thumbnailAlt}/>
                </div>
                <div className='absolute left-0 bg-gradient-to-t from-black h-screen width-screen z-1 w-screen'></div>

                <div className='absolute bottom-0'>

                    <p className="text-h3 text-white strawford-bold max-w-[700px]
                    pl-[1rem] pr-[1rem] mb-2
                    md:pl-0 md:pr-0
                    ">{title}</p>

                    <p className="text-h7 text-white text-left strawford-light w-full max-w-[700px]
                    pl-[1rem] pr-[1rem] mb-2
                    md:pl-[1px] md:pr-[1px]
                    ">{pubDate}</p>

                    <p className='text-gray text-left strawford-light w-full max-w-[700px]
                    pl-[1rem] pr-[1rem]
                    md:pl-[1px] md:pr-[1px]
                    '>{thumbnailCredit}</p>

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
