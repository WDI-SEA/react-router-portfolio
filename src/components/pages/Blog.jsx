import Post from '../Post'


export default function Blog(props) {
    
    
    
    const posts = props.posts.map((post, i) => {
        return (
            <Post key={`post-${i}`} post={post} handleDeletePost={props.handleDeletePost}/>
        )
    })

    return (
        <>
            <h1>Blog</h1>
            {posts}
            <div className='create-container'>
                <h2>Create New Blog</h2>
                <form onSubmit={props.handleCreatePost}>
                    <label htmlFor='title'>Title:</label>
                    <input type='text'
                            name='title'
                            value={props.title}
                            onChange={props.handleTitleChange}
                    
                    /><br></br>
                    <label htmlFor='body'>Body:</label>
                    <input type='text' 
                            name='body'
                            value={props.body}
                            onChange={props.handleBodyChange}
                    
                    /> <br></br>
                    <input type='submit'
                            
                            />
                </form>
                </div>
        </>
    
        
    )
}