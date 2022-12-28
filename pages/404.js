import React from 'react'
import Header from '../components/Header'
import Link from 'next/link'

export default function custom404() {
  return (
    <>
    <div className='title-flip'>
        <Link href="/">
          <Header heading="404" testValue="404"/>
        </Link>
        
        <p id="listAbout"> Page not found, try another page...</p>
    </div>
    </>
  )
}
