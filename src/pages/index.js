import React from 'react'
import Link from 'gatsby-link'
import logoSrc from '../assets/logo.svg'

const IndexPage = () => (
  <section className='home-content'>
    <img className='brand__logo' src={logoSrc} />
    <p>Building solutions to your digital problems<br />through websites and web applications</p>
    <ul className='contact-list'>
      <li><a href="mailto:hello@pixelstack.com">Contact</a></li>
      <li><a href="twitter.com/pixelstackcom">Twitter</a></li>
    </ul>
  </section>
)

export default IndexPage
