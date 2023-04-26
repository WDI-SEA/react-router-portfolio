import { useState } from "react";
export default function NewBlog(props) {
    // const [newBlog, setNewBlog] = useState([])
    const [newBlogTitle, setNewBlogTitle] = useState({})
    const [newBlogContent, setNewBlogContent] = useState({})
    const handleTitleChange = e => {
        // console.log("title: " + e.target.value);
        let title = e.target.value;
        setNewBlogTitle({title});
    }   
    const handleContentChange = e => {
        // console.log("content: " + e.target.value);
        let content = e.target.value;
        setNewBlogContent({content})
    }

    return (
        <div>
            <form onSubmit={() => props.handleNewBlog(newBlogTitle, newBlogContent)}>
                <label htmlFor="new-blog-title">Title: </label>
                <input type="text" onChange={handleTitleChange}/>
                <label htmlFor="new-blog-title">Content: </label>
                <input type="text" onChange={handleContentChange}/>
                <button type="submit">Publish</button>
            </form>
        </div>
    )
}