import React, { useState } from 'react'


const Commentbox = () => {
  const [commmentText, setcommmentText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setcommmentText(e.target[0].value);
  };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <button type="submit">Send A Comment</button>
        </form>
        <p>{commmentText}</p>
    </div>
  )
}

export default Commentbox