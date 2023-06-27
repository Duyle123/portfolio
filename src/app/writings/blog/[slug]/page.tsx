import { FC } from "react"
import { allBlogs } from "contentlayer/generated"
import { notFound } from "next/navigation"
import { Metadata } from "next" 

interface BlogPageProps{
    params: {
        slug: string
    }
}

async function getDocFromParams(slug: string){
    const blog = allBlogs.find((doc) => doc.slugAsParams === slug)

    if (!blog) notFound 
    return blog
}

const page = async ({ params }: BlogPageProps) => {
    const blog = await getDocFromParams(params.slug)

    return (
        <div>
            <h1>{blog.title}</h1>

        </div>
    )
}

export default page