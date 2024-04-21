import { React,useEffect,useRef, useState } from 'react';
import Header from '../components/Header'
import Link from 'next/link'
import AudioComp from '../components/AudioComp';
import {recordings} from '../components/recordings'


export default function records() {
  return (
    <>
        <div className="title-flip">
        <Link href="/">
            <Header heading="Records" testValue="Records"/>
        </Link>
        <hr></hr>
        </div>
        {recordings.map(record => {
            return(
                <AudioComp
                audio_name={record.name}
                audio_src={record.src}
                audio_caption={record.caption}
            />
            )
          
        })}
        

        
    </>
  )
}
