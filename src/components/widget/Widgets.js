import React from 'react'
import { Search } from '@mui/icons-material'
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed'
import './Widgets.css'
function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets--input">
        <Search className="widgets--searchIcon" />
        <input placeholder="キーワード検索" type="text" />
      </div>

      <div className="widgets--widgetContainer">
        <h2>いまどうしてる？</h2>

        {/* ライブラリを追加 */}
        <TwitterTweetEmbed tweetId={'1475764828208009220'} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Shin_Enginner"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={'https://twitter.com/Shin_Enginner'}
          options={{ text: '#React.js勉強中', via: 'Shin_Engineer' }}
        />
      </div>
    </div>
  )
}

export default Widgets
