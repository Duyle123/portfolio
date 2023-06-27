import { FC } from "react"
import { allDocs } from "contentlayer/generated"
import { notFound } from "next/navigation"

import { Metadata } from "next" 

interface PageProps{
    params: {
        slug: string
    }
}

async function getDocFromParams(slug: string){
    const doc = allDocs.find((doc) => doc.slugAsParams === slug)

    if (!doc) notFound 
    return doc
}

const page: FC<PageProps> = ({ params }) => {
    return <div>page</div>
}

export default page