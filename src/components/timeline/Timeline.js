import React from 'react'
import Post from './Post'
import { useState, useEffect } from 'react'
import './Timeline.css'
import TweetBox from './TweetBox'
import db from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'
function Timeline() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const postData = collection(db, 'posts')
    getDocs(postData).then((querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()))
    })
    console.log('mount')
  }, [])

  // console.log('aaa')
  return (
    <div className="timeline">
      {/* Header */}
      <div className="timeline--header">
        <h2>ホーム</h2>
      </div>
      {/* TweetBox*/}
      <TweetBox />
      {/* Post */}
      {posts.map((post) => (
        <Post
          key={post.text}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  )
}

export default Timeline
