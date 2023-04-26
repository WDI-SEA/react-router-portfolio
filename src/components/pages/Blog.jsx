import { useState } from 'react'
import Post from './Post'

export default function Blog(props) {


    const [newPostTitle, setNewPostTitle] = useState({})
    const [newPostBody, setNewPostBody] = useState({})
    const handleTitleChange = (e) => {
        let title = e.target.value;
        setNewPostTitle({title});
    }   
    const handleBodyChange = (e) => {
        let content = e.target.value;
        setNewPostBody({body})
    }

    const { id } = Post

    return (
        <form key={`${id}`}>
            <label htmlFor="post-title">Title:</label>
            <input type="text" onChange={handleTitleChange}>

            <label htmlFor="post-body">Body:</label>
                
            </input>
        </form>
    )
}