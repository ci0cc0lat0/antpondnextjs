import React, {useState} from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Modal from '../components/Modal'
import ListPhrase from '../components/ListPhrase'
import {phrases} from '../components/phrases'
export default function list() {
  // Modal state that is changed when by clicking a ListPhrase. Default is false
  const [isOpen, setIsOpen] = useState(false)

  // The data is the content of the modal. setData sets the specific content
  const [data, setData] = useState('');

  // a function in which childToParent does the setData of the childrens data
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
        {/*
        - to get each phrase, we run the phrases import through the map function
        - each object there is given to a listPhrase component
        - When a ListPhrase is clicked, many things happen
         */}
        {phrases.map(phrase=>{
          return <ListPhrase 
          // we pass the function 'childToParent' as a prop
          childToParent={childToParent} 
          // onClick, 'setIsOpen' is set to true as a prop
          onClick={()=>setIsOpen(true)}
          // we pass the phrase and the name is members of the JS object as props
          phrase={phrase.name} 
          message={phrase.caption}
          />
        })}
      </div>

      {/*
        - open is a prop that depends on 'isOpen'
        - onClose is an event for when we close the modal
        - data is the data that should be displayed
      */}
      <Modal open = {isOpen} onClose={()=> setIsOpen(false)}>
        {data}
      </Modal>
    </>
  )
}
