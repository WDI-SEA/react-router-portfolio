import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <Link to='/'>Home</Link>{' | '}
        <Link to='/About'>About</Link>{' | '}
        <Link to='/Blog'>Blog</Link>{' | '}
        <Link to='/Projects'>Projects</Link>

    </div>
  )
}
