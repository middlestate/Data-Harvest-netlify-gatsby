import React from 'react'
import Content from '../Content'
// import { kebabCase } from 'lodash'
// import { Link } from 'gatsby'

const ArticleTemplate = ({ content, contentComponent, cover, meta_title, meta_desc, tags, title }) => {
  const PostContent = contentComponent || Content
  return (
    <div>
      <div className='hero section'>
        <div
          className='hero-body'
          style={{
            backgroundImage: `url(${cover}) center center`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}>
          <h1 className='title is-size-2 has-text-weight-bold is-bold-light'>{title}</h1>
        </div>
      </div>
      <PostContent content={content} />
    </div>
  )
}

export default ArticleTemplate
