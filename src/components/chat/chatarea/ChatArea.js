import React from 'react'

// core components

import Body from './body'
import Footer from './footer'
import Header from './header'

import './style.scss'

const ChatArea = () => (
  <div className="wrapper-chatarea">
    <div className="header-chatarea">
      <Header roomName="Engineering" />
    </div>
    <div className="body-chatarea">
      <Body />
    </div>
    <div className="footer-chatarea">
      <Footer />
    </div>
  </div>
)

export default ChatArea
