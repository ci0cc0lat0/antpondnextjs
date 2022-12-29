import React from 'react'

export default function ListPhrase({childToParent, onClick, phrase, message}) {
  // data is the phrase.caption from the parent. Here we check of length === 0, we dont make it clickable
  const data = message
    if(message.length === 0 ){
        return (
            <h3 className='my-list'>{phrase}</h3>
        )
    } else{
  return (
    // the function 'childToParent' is passed and is given `data`. 
    // onClick is given the function fed in by the parent
    // Lastly, the phrase is the 'title' or part of the list that gets desplayed. 
    <>
      <h3 onClickCapture={()=> childToParent(data)} onClick={onClick} className='my-list hover-effect'>{phrase}</h3>
    </>
  )
    } 
}