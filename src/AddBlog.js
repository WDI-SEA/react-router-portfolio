import React, { useState } from 'react'

const AddBlog = props => {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} />
      </form>
    </div>   
  )
}

export default AddBlog;