import { FC } from "react"
import { allBlogDocs } from "contentlayer/generated"
import { notFound } from "next/navigation"

import { Metadata } from "next" 

interface PageProps{
    params: {
        slug: string[]
    }
}

async function getDocFromParams(params){
    const slug = params.slug?.join("/") || ""
    const blogDoc = allBlogDocs.find((blogDoc) => blogDoc.slugAsParams === slug)

    if (!blogDoc) notFound 
    return blogDoc

}

const page: FC<PageProps> = ({params}: PageProps) => {
    const blogDoc = getDocFromParams(params.slug)

    return <div>{JSON.stringify(blogDoc)}</div>
}

export default page