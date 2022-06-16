import { useState } from "react"

export default function Blog(props) {
    const [newPost, setNewPost] = useState({
        title: '',
        body: ''
    })

    const [post, setPost] = useState(props.posts)

    const posts = props.posts.map((post, i) => {
        return (
            <li key={`post${i}`} style={{ listStyle: 'none' }}>
                <h3>{post.title}</h3>
                {post.body}
            </li>
        )
    })

    const handleChange = e => {
        setNewPost({ ...newPost, [e.target.name]: e.target.value })
        //this will not work because it will write over whats inside the newPost.
        //this code will write over the object deleting the object that holds title and body
        // setNewPost(e.target.value)
    }

    const addBlog = (e) => {
        e.preventDefault()
        let newList = post
        newList.push(newPost)
        setPost(newList)
        setNewPost({ title: '', body: '' })
        console.log('NewList:', newList)
        console.log('Post:', post)
    }

    return (
        <>
            <h1>Blog</h1>
            <ul>
                {posts}
                <h3>Create a Blog</h3>
                <form onSubmit={addBlog}>
                    <label htmlFor='title'>Title</label>
                    <input
                        type='text'
                        id='title'
                        value={newPost.title}
                        onChange={handleChange}
                        name="title"
                    />


                    <label htmlFor='body'>Body</label>
                    <input
                        type='text'
                        id='body'
                        value={newPost.body}
                        onChange={handleChange}
                        name="body"
                    />

                    <button type='submit'>Add to Blog</button>
                </form>
            </ul>
        </>
    )
}