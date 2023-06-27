import { FC } from "react"
import { allFeatureds } from "contentlayer/generated"
import { notFound } from "next/navigation"
import { Metadata } from "next" 

interface FeaturedPageProps{
    params: {
        slug: string
    }
}

async function getDocFromParams(slug: string){
    const doc = allFeatureds.find((doc) => doc.slugAsParams === slug)

    if (!doc) notFound 
    return doc
}

const page = async ({ params }: FeaturedPageProps) => {
    const doc = await getDocFromParams(params.slug)
    return <div>{JSON.stringify(doc)}</div>
}

export default page