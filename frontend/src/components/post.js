import React from 'react'

const post=({post}) =>{

    return (
        <div>
         Welcome to Articles componenets 
         {post.map((post , key) =>(
             <>
             <h2>{post.posterId}</h2>
             <h2>{post.createdAt}</h2>
             </>
         ))}
        </div>
      )
    }
  

export default post;