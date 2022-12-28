import React from 'react'
import Link from 'next/link'


export default function GalleryImage({name,tag}) {
  return (
    <>
        <div className='gallery-images'>
            <Link href={`/${name}`} target="_blank" rel="noreferrer">
            <img loading="lazy" src={`/${name}`} className={`each-img ${tag}` } />
            </Link>
        </div>
    </>
  )
}
