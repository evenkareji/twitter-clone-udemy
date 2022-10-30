import React, { useState } from 'react'
import { Avatar, Button } from '@mui/material'
import './TweetBox.css'
import db from '../../firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('')
  const [tweetImage, setTweetImage] = useState('')

  const sendTweet = (e) => {
    // firebaseのデータベースにデータを追加する
    e.preventDefault()
    addDoc(collection(db, 'posts'), {
      displayName: 'プログラミングチュートリアル',
      username: 'Shin_Enginner',
      verified: true,
      text: tweetMessage,
      avatar: 'http://shincode.info/wp-content/uploads/2021/12/icon.png',
      image: tweetImage,
      timestamp: serverTimestamp(),
    })
    setTweetMessage('')
    setTweetImage('')
  }
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox--input">
          <Avatar />
          <input
            value={tweetMessage}
            placeholder="いまどうしてる？"
            type="text"
            onChange={(e) => setTweetMessage(e.target.value)}
          ></input>
        </div>

        <input
          value={tweetImage}
          className="tweetBox--imageInput"
          placeholder="画像のURLを入力してください"
          type="text"
          onChange={(e) => setTweetImage(e.target.value)}
        ></input>
        <Button
          className="tweetBox--tweetButton"
          type="submit"
          onClick={sendTweet}
        >
          ツイートする
        </Button>
      </form>
    </div>
  )
}

export default TweetBox
