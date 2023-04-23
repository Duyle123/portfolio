import React from 'react'
import Link from 'next/link'
import getFormattedDate from '../../../lib/getFormattedDate'

type Props = {
    post: WritingPost;
}
export default function WritingsItem({post}: Props) {
    const {id, title, date} = post  
    const formattedDate = getFormattedDate(date)
    
    return (
        <li>
            <Link href={`/posts/${id}`}>{title}</Link>
            <div>{formattedDate}</div>
            <div>WritingsItem</div>
        </li>
        
    )
}