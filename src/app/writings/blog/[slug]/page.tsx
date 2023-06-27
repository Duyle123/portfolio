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
    const doc = allBlogs.find((doc) => doc.slugAsParams === slug)

    if (!doc) notFound 
    return doc
}

const page = async ({ params }: BlogPageProps) => {
    const doc = await getDocFromParams(params.slug)
    return <div>{JSON.stringify(doc)}</div>
}

export default page