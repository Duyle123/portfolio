import { FC } from "react"
import { allResearch } from "contentlayer/generated"
import { notFound } from "next/navigation"
import { Metadata } from "next" 

interface ResearchPageProps{
    params: {
        slug: string
    }
}

async function getDocFromParams(slug: string){
    const doc = allResearch.find((doc) => doc.slugAsParams === slug)

    if (!doc) notFound 
    return doc
}

const page = async ({ params }: ResearchPageProps) => {
    const doc = await getDocFromParams(params.slug)
    return <div>{JSON.stringify(doc)}</div>
}

export default page