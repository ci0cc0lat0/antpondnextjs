import React, {useState} from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Modal from '../components/Modal'
import ListPhrase from '../components/ListPhrase'
import {phrases} from '../components/phrases'

export async function getStaticProps(){
  // inital request
  const res  = await fetch("http://"+process.env.MY_IP+":1337/api/lists?sort=createdAt:DESC")
  const init_post = await res.json()

  // page parsing
  let full_post = []
  const page_amount = init_post.meta.pagination.pageCount
  // collects all pages into a single object 
   for(let i = 1; i <= page_amount; i++){
    console.log(`http://${process.env.MY_IP}:1337/api/lists?sort=createdAt:DESC&pagination[page]=${i}`)
    const temp_res = await fetch(`http://${process.env.MY_IP}:1337/api/lists?sort=createdAt:DESC&pagination[page]=${i}`)
    const temp_post = await temp_res.json()
    temp_post.data.forEach(element => {
      full_post.push(element)
    });

  
  } 

  // return of actual data used
  const post = { data: full_post}
  return {
    props:{
      post,
  },
  revalidate: 60,
}

}



export default function list({post}) {
  //console.log(parse_pages(post))

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
          <Header heading="Musings" testValue="Musings" />
        </Link>
        <hr></hr>

        <p id='listAbout'>Musings Straight From The Source<br></br>Oldest at the bottom<br></br>* Marks a message</p>
      </div>

      <div>
        {/*
        - to get each phrase, we run the phrases import through the map function
        - each object there is given to a listPhrase component
        - When a ListPhrase is clicked, many things happen
         */}
        {post.data.map(phrase=>{
          return <ListPhrase 
          // we pass the function 'childToParent' as a prop
          childToParent={childToParent} 
          // onClick, 'setIsOpen' is set to true as a prop
          onClick={()=>setIsOpen(true)}
          // we pass the phrase and the name is members of the JS object as props
          phrase={phrase.attributes.Title} 
          message={phrase.attributes.Caption}
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
