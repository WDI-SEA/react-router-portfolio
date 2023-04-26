
export default function Blog(props) {
   const listPost= props.allPost.map((post) => {
        return <div class="p-3" key={`title - ${post.title}`}>
                    <h4>{post.title}</h4>
                    <h5>{post.author}</h5>
                    <p>{post.body}</p>
                </div>
    })
    return(
        <div class="container px-4 text-center">
            <div class="row gx-5">
    <div class="col">
            <h1>Blog</h1>
        
                {listPost}
            
            <h1>create post here</h1>
            <form>
                
            </form>
        </div>
        </div>
        </div>
    )
}