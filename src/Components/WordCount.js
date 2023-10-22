import React, { useState } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./WordCount.css"


function WordCount() {
  const [text , setText] = useState('');

  function handleChange(event){
    setText(event.target.value);
  }
  function countWords(str){
    return str.trim().split(/\s+/).length;
  }


  return (
    <div>
      <div className='container box shadow rounded'>
        <h2 className='text '>Resonsive Paragraph Word Counter</h2>
        <textarea
          className='texare'
          name='text'
          id='textfill'
          cols='50'
          rows='10'
          placeholder=''
          onChange = {handleChange}
          value = {text} />

          <p className='wordcount'>Word Count :- {countWords(text) -1 }</p>
      </div>
    </div>
  )
}

export default WordCount
