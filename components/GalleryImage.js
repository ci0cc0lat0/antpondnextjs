import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function GalleryImage({name,tag}) {
  const encoded_URL = encodeURI(name)
  return (
    <>
        <div className='gallery-images'>
            <Link href={`/${encoded_URL}`} target="_blank" rel="noreferrer">
            <Image loading="lazy" src={`/${encoded_URL}`} width={500} height={500} className={`each-img ${tag}` } />
            </Link>
        </div>
    </>
  )
}
