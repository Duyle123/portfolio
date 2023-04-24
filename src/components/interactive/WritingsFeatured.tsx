import React from 'react'
import WritingsFeaturedInfo from '../writings/featured/WritingsFeaturedInfo'
import Image from 'next/image'
import Link from 'next/link'

export default function WritingsFeatured() {
  return (
    <div className='border-b-2 pb-20'>
      <Link className='flex flex-col flex-wrap' href=''>
        <Image src={WritingsFeaturedInfo.thumbnail} className={`thumbnail xl:w-[720px] xl:h-[450px] object-cover pb-7 mt-10`} alt={WritingsFeaturedInfo.thumbnailAlt}></Image>
        <div className='strawford-bold text-h4 pb-4'>{WritingsFeaturedInfo.title}</div>
        <div className='pb-2 text-gray'>{WritingsFeaturedInfo.date}</div>
        <div>{WritingsFeaturedInfo.description}</div>
      </Link>
        
    </div>
  )
}
