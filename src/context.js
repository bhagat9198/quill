import React, {createContext, useContext, useState} from 'react';

export const PostContext = createContext();

export function usePostContext() {
  return useContext(PostContext)
}

export const PostProvider = ({children}) => {
  const [posts, setPosts] = useState([]); 

  const addPost = data => {
    setPosts(prevState => [...prevState, data])
  }
  // console.log(posts);

  return(
    <PostContext.Provider value={{posts, addPost}}>
      {children}
    </PostContext.Provider>
  )
}