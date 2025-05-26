import React, { Suspense } from 'react'
import Loading from '../component/Loading'
// import Post from '../component/Post'
// import Post from '../component/Post'

// const Post =React.lazy(()=>import("../component/Post"))

const Post = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("../component/Post"));
      }, 1000);
    })
);

const PostPage = () => {

  return (
    <div>
        <Suspense fallback={<Loading/>}>
          <Post/>
        </Suspense>
        
    </div>
  )
}

export default PostPage