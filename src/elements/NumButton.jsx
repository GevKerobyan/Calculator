import React from 'react'
const numButtonStyle = {
  width: '31px',
  height: '31px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '1px 1px 5px rgb(32, 33, 66)',
  color: ' rgb(32, 33, 66)',
  fontWeight: 'bold',
  fontSize: '15px',
  backgroundColor: 'antiquewhite',
  borderRadius: '15px',
  margin: '5px',
}

function NumButton({ element, content, setText, text, handleNumClick }) {

  // const handleInnerClick= () => {
  //   click; 
  //   press
  // }
  return (
    <div
      value={element}
      style={numButtonStyle}
      onClick={handleNumClick}
      // (e) => setText(text += e.target.innerText)
    >
      {content.toString()}
    </div>
  )
}

export default NumButton