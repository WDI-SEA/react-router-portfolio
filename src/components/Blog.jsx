import React, { useState } from 'react'

export default function Blog({ createPosts, posts }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleTitleChange = e => {
    const value = e.target.value
    setTitle(value)
  }

  const handleChange = e => {
    const value = e.target.value
    setContent(value)
  }

  const handleSubmit = e => {
    createPosts(e, title, content)
    setTitle('')
    setContent('')
  }

  const allPosts = posts.map((post, i) => {
    const { title, content } = post
    return (
      <div key={`${post}${i}`}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    )
  })

  return (
    <div>
      <h2>Blog</h2>
      <form onSubmit={handleSubmit} id='blogForm'>
        <label htmlFor='title'>Title: </label>
        <input
          type='text'
          id='title'
          name='title'
          value={title}
          onChange={handleTitleChange}
        />
        <button>Submit</button>
      </form>
      <textarea
        rows='4'
        form='blogForm'
        value={content}
        onChange={handleChange}
      />

      <div>{allPosts}</div>
    </div>
  )
}
