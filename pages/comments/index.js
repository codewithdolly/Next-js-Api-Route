//get request

import React, { useState } from "react";

const CommentsPage = () => {
  const [comment, setComment] = useState([]);

  const fetchComments = async () => {
    const response = await fetch("/api/comments")
    const data= await response.json()
    setComment(data)
  };

  return (
    <>
      <button onClick={fetchComments}>Load Comments</button>
      {comment.map((comment)=>{
          return(
              <div key={comment.id}>
                  <p>{comment.id}. {comment.text}</p>
              </div>
          )
      })}
    </>
  );
};

export default CommentsPage;

