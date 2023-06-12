import React from 'react'
import WritingsFeaturedInfo from '../writings/featured/WritingsFeaturedInfo'
import Image from 'next/image'
import Link from 'next/link'

export default function WritingsFeatured() {
  return (
    <div className='border-b-2 pb-20'>
      <Link className='flex flex-col flex-wrap' href={WritingsFeaturedInfo.link}>
        <div>
          <Image src={WritingsFeaturedInfo.thumbnail} className={`thumbnail xl:w-[720px] xl:h-[450px] object-cover pb-7 mt-10`} alt={WritingsFeaturedInfo.thumbnailAlt}></Image>
        </div>
        <div className='strawford-bold text-h4 pb-4'>{WritingsFeaturedInfo.title}</div>
        <div className='pb-2 pl-1 pr-1 text-gray'>{WritingsFeaturedInfo.date}</div>
        <div className='pl-1 pr-1'>{WritingsFeaturedInfo.description}</div>
      </Link>
        
    </div>
  )
}
