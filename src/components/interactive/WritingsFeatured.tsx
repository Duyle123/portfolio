import React from 'react'
import WritingsFeaturedInfo from '../writings/featured/WritingsFeaturedInfo'
import Image from 'next/image'
import Link from 'next/link'

export default function WritingsFeatured() {
  return (
    <div className=''>
      <Link className='hover:text-gray flex flex-col' href=''>
        <Image src={WritingsFeaturedInfo.thumbnail} className={`thumbnail xl:w-[720px] xl:h-[580px] object-cover pb-7 mt-10`} alt={WritingsFeaturedInfo.thumbnailAlt}></Image>
        <div className='strawford-bold text-h5 pb-4'>{WritingsFeaturedInfo.title}</div>
        <div>{WritingsFeaturedInfo.date}</div>
        <div>{WritingsFeaturedInfo.description}</div>
      </Link>
        
    </div>
  )
}
