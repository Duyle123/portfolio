import React from 'react'
import Link from 'next/link'
import getFormattedDate from '../../../lib/getFormattedDate'
import Image from 'next/image'

// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63)
const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

type Props = {
    post: WritingPost;
}

export default function WritingsItem({post}: Props) {
    const {id, title, date, thumbnail, thumbnailAlt} = post  
    const formattedDate = getFormattedDate(date)
    
    return (
        <li className='mb-10'>
            <Link href={`/posts/${id}`} className='flex flex-wrap gap-10'>
              <div className="image-container 
              2xl:w-[280px] 2xl:h-[280px] 
              xl:w-[180px] xl:h-[180px]
              lg:w-[180px] lg:h-[280px]
              md:w-[280px] md:h-[280px]
              sm:w-[280px] sm:h-[280px]

              ">
                <Image
                alt={thumbnailAlt}
                src={thumbnail}
                placeholder="blur"
                blurDataURL={rgbDataURL(237, 181, 6)}
                width={300}
                height={300}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                />
              </div>
              <div className="post-description pt-5 
              2xl:w-[300px]">
                <div className='text-h5 strawford-bold'>{title}</div>
                <div className='text-gray'>{formattedDate}</div>
                <div></div>
              </div>
                
            </Link>
            
        </li>
        
    )
}