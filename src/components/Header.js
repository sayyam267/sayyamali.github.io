import PropTypes from 'prop-types'
import React from 'react'
import image from '../images/dp.jpg'
import name from '../audio/name.mp3'

const Header = (props) => {
  const audio = typeof Audio !== 'undefined' && new Audio(name)
  return (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
      <div>
        <img className="logo" src={image} />
        {/* <span className="icon fa-diamond"></span> */}
      </div>
      <div className="content">
        <div className="inner">
          <h1>
            Sayyam Ali{' '}
            <span
              onClick={() => audio.play()}
              className="icon fa-volume-up"
              style={{ cursor: 'pointer' }}
            />
          </h1>
          <p style={{ marginLeft: '21vw', marginRight: '21vw' }}>
            Software Engineer{'      '}
            {/* <a href="https://html5up.net">HTML5 UP</a> and released
          <br />
          for free under the{' '}
          <a href="https://html5up.net/license">Creative Commons</a> license. */}
          </p>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('intro')
              }}
            >
              Intro
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('work')
              }}
            >
              Work
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('about')
              }}
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('contact')
              }}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
