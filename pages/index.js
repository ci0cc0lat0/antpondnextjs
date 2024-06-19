import React from 'react'
import Link from 'next/link'
import Header from '../components/Header.js'

export default function index() {
  return (
    <div className="title-flip">
      <a href="">
      <Header heading="The" testValue="The"/>
      <Header heading="Ant" testValue="Ant"/>
      <Header heading="Pond" testValue="Pond"/>
      </a>
      <hr></hr>
      <Link href="/gallery">
        <Header heading="Gallery" testValue='Gallery'/>
      </Link>
      <Link href="/muses">
        <Header heading="Muses" testValue='Muses'/>
      </Link>
      <Link href="/records">
        <Header heading="Records" testValue='Records'/>
      </Link>
      <Header heading="Pages" testValue='Pages'/>
      <Header>
        
      </Header>
      
    </div>
  )
}
