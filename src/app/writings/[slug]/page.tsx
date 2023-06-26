import { FC } from "react"
import {allDocs} from 'contentlayer/generated'

interface PageProps{
    params: {
        slug: string
    }
}

async function getDocFromParams(slug: string){
    const doc = allDocs
}

const page: FC<PageProps> = ({params}) => {
    return <div>page</div>
}

export default page