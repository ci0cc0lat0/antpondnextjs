import { React,useEffect,useRef, useState } from 'react';
import Header from '../components/Header'
import Link from 'next/link'
import AudioComp from '../components/AudioComp';
import {recordings} from '../components/recordings'

 export async function getStaticProps(){
  try{
    const res  = await fetch("http://162.207.101.36:1337/api/records?sort=createdAt:desc&populate=*")
    if(!res.ok) throw new Error("Erm my bad!")
    const post = await res.json()
    return{
      props:{
        post,
      },
      revalidate: 60,
    }
  }
  catch(error){
    console.error('Fetch error:',error)
    throw error
  }
  
} 

export default function records({post}) {
  console.log(post)
  return (
    <>
        <div className="title-flip">
        <Link href="/">
            <Header heading="Records" testValue="Records"/>
        </Link>
        <hr></hr>
        </div>
        {post.data.map(record => {
            return(
                <AudioComp
                audio_name={record.attributes.Title}
                audio_src={record.attributes.source.data.attributes.name}
                audio_caption={record.attributes.Caption}
            />
            )
          
        })}
        

        
    </>
  )
}
