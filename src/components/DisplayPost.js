import React, { useEffect, useRef } from 'react'
import { usePostContext } from '../context'
import toHtml from 'string-to-html';

export default function DisplayPost() {
  const usePost = usePostContext();
  const containerRef = useRef(null);
  useEffect(() => {
    // console.log(usePostContext);
    console.log(usePost.posts);
    containerRef.current.innerHTML = '';
    usePost.posts.map(p => {
      const eachPost = new toHtml(p)
      containerRef.current.appendChild(eachPost);
      
    })
    console.log(containerRef.current);
  }, [usePost.posts]);

  // const eachPost = new formatStringToHtml(usePost.posts[0]).format();
  // console.log(eachPost);
  const display = () => {
    
  }


  return (
    <div ref={containerRef} >
      {/* {display()} */}
      {/* {usePost.posts.map(p => new formatStringToHtml(p).format())} */}
    </div>
  )
}
