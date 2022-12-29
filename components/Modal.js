import React from 'react'
import ReactDom from 'react-dom';

const modalStyle = {
    maxWidth:'40%',
    minWidth:'max(20%, 300px)',
    maxHeight:'80vh',
    display: 'block',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    backgroundColor: '#eaeaea',
    padding: '25px',
    zIndex: 100,
    textAlign: 'center',
    overflowY:'auto'
}
const overlayStyle = {
    position: 'fixed',
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor: 'rgb(0 ,0 ,0 ,0.5)',
    zIndex: 100
}

export default function Modal({open, children, onClose}) {
    // when open == false, display nothing. Ie, modal doesn't return/exist
    if(!open) return null;
    // is needed to use innterHTML. __html:child where child is the prop
    // <p>{children}</p> could be used, but there is no way to preserve styling 
    // inside of the phrases.js captions. They are read as html, not their own message. 
    function htmlConvert(child){
        return {__html:child}
    }
    // returns a function ReactDom.createPortal(param1, param2)
    // param1 is the created element, param2 is where to render that element
    return ReactDom.createPortal(
    
    <>
        {/*outside modal has style of overlayStyle(darker section), closes on click*/}
        <div onClick={onClose} style={overlayStyle} id="CHAMP">
            <div 
            onClick={
                /*  the modal is the whole screen. Big dark div, small white div.
                    if we click on the dark part, we close the modal.
                    when we click on the white we dont want to close the modal
                    stopPropagation() on the inner div prevents the parent div
                    from activating its own onClick={onClose}
                */
                e => { e.stopPropagation()}
            }
            style={modalStyle}>
                <p dangerouslySetInnerHTML={htmlConvert(children)}></p>
                <span className='close'onClick={onClose}>&times;</span>
            </div>
        </div>
    </>,
    document.getElementById('portal')
  )
}
