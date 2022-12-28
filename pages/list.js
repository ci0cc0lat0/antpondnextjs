import React, {useState} from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Modal from '../components/Modal'
import ListPhrase from '../components/ListPhrase'
import {phrases} from '../components/phrases'
export default function list() {
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState('');
  const childToParent = (childData) => setData(childData)

  return (
    <>
      <div className='title-flip'>
        <Link href="/">
          <Header heading="List" testValue="List" />
        </Link>
        <hr></hr>
        <p id='listAbout'>More than a <strike>simple list</strike><br></br>Oldest at the bottom<br></br>* Marks a message</p>
      </div>

      <div>
        {phrases.map(phrase=>{
          return <ListPhrase 
          childToParent={childToParent} 
          onClick={()=>setIsOpen(true)}
          phrase={phrase.name} 
          message={phrase.caption}
          />
        })}
      </div>

      <Modal open = {isOpen} onClose={()=> setIsOpen(false)}>
        {data}
      </Modal>
    </>
  )
}
