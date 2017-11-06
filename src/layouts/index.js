import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './reset.css'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div
    className='wrapper'
  >
    <Helmet
      title="Pixelstack - Building solutions to your digital problems"
      meta={[
        { name: 'description', content: 'Website and Web Application development' },
        { name: 'keywords', content: 'web development, web applications, react, ruby on rails' },
      ]}
    />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
