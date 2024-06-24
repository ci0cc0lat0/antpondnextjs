import React from 'react'
import Link from 'next/link'


export default function GalleryImage({name,tag}) {
  const encoded_URL = encodeURI(name)
  return (
    <>
        <div className='gallery-images'>
            <Link href={`/${encoded_URL}`} target="_blank" rel="noreferrer">
            <img loading="lazy" src={`/${encoded_URL}`} className={`each-img ${tag}` } />
            </Link>
        </div>
    </>
  )
}
