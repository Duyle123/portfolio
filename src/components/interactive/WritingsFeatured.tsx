import React from 'react'
import WritingsFeaturedInfo from '../writings/featured/WritingsFeaturedInfo'
import Image from 'next/image'
import Link from 'next/link'

export default function WritingsFeatured() {
  return (
    <div className='col-span-8'>
      <Link className='hover:text-gray' href=''>
        <Image src={WritingsFeaturedInfo.thumbnail} className={`thumbnail xl:w-[720px] xl:h-[580px] object-cover`} alt={WritingsFeaturedInfo.thumbnailAlt}></Image>
        <div className='strawford-bold text-h5'>{WritingsFeaturedInfo.title}</div>
        <div>{WritingsFeaturedInfo.date}</div>
        <div>{WritingsFeaturedInfo.description}</div>
      </Link>
        
    </div>
  )
}
