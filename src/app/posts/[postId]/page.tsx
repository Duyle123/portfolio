import React from 'react'
import Link from 'next/link';
import { getSortedPostsData, getPostData } from '../../../../lib/posts';
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
    const { title, date, thumbnail, contentHtml } = await getPostData(postId)
    const pubDate = getFormattedDate(date)


    return (
        <main className={`${strawfordFont.className} container px-6 prose prose-xl prose-slate dark:prose-invert mx-auto dark:text-white`}>
            <p className="text-h3 strawford-bold">{title}</p>
            <p className="mt-0 strawford-light">
                {pubDate}
            </p>
            <article>
                <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
                <div className='flex'>
                    <Link href='/'>Back to home</Link>
                    <Link href='/writings'>Explore more posts</Link>
                </div>
            </article>
        </main>
    )
}
