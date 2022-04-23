//get request

import React, { useState } from "react";

const CommentsPage = () => {
  const [comments, setComments] = useState([]); //get
  const [comment, setComment]= useState('')//Post

  const fetchComments = async () => {
    const response = await fetch("/api/comments")
    const data= await response.json()
    setComments(data)
  };


  const SubmitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      header: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };


  return (
    <>
    <input type="text" value={comment} onChange={(e)=>{setComment(e.target.value)}} />
    <button onClick={SubmitComment}>Submit Comment</button><br />
      <button onClick={fetchComments}>Load Comments</button>
      {comments.map((comment)=>{
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

