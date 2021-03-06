/* eslint-disable react/no-array-index-key */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// core components
import Body from './body'
import Footer from './footer'
import Header from './header'
import Message from '../Message'

import './style.scss'

// eslint-disable-next-line arrow-body-style
const ChatArea = ({ chat: { room, messages } }) => {
  return (
    <div className="wrapper-chatarea">
      <div className="header-chatarea">
        <Header roomName={room} />
      </div>
      <div className="body-chatarea">
        <Body>
          {messages.map((message, index) => (
            <Message key={index} message={message} />
          ))}
        </Body>
      </div>
      <div className="footer-chatarea">
        <Footer />
      </div>
    </div>
  )
}
ChatArea.defaultProps = {
  chat: null,
}
ChatArea.propTypes = {
  chat: PropTypes.shape({
    room: PropTypes.string.isRequired,
    messages: PropTypes.array.isRequired,
  }),
}
const mapStateToProps = state => ({
  chat: state.chat,
})

export default connect(mapStateToProps)(ChatArea)
