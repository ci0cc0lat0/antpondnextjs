import { React,useEffect,useRef, useState } from 'react';
import Header from '../components/Header'
import Link from 'next/link'



export default function AudioComp({audio_name, audio_src, audio_caption}) {


    // For use on load
    const audio_ref = useRef(null);
    function lower_volume(){
      audio_ref.current.volume = 0.5
    }

    // a toggle for the expanding caption
    const [is_expanded, set_expanded] = useState(false)
    function toggle_expanded(){
        set_expanded(!is_expanded)
    }

    function renderCaption(caption){
      if ((caption === undefined) || (caption == null) || caption.length === 0 ) return
      else{
        return (
          <div className='audio-caption' onClick={toggle_expanded}>
             <p>&#9660;</p>
             <div className={is_expanded ? "audio-caption audio-show" : "audio-caption audio-dropdown" }>
              <p>{caption}</p>
             </div>
          </div>
        )
      }
    }

    // load effects
    useEffect(()=>{
        lower_volume()

    })
  return (
    <>
    <div className='audio-container'>
            <div className='audio-title-container'>
                <h2 className="audio-title">{audio_name}</h2>
            </div>
            <div className='audio-tag-container'>
                <audio controls ref={audio_ref} className="audio-tag">
                    <source src={audio_src} type="audio/mpeg"/>
                </audio>
            </div>
            {renderCaption(audio_caption)}
        </div>
    </>
  )
}
