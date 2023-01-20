export default function Comments (props){
    const comments = props.comments.map((comment,idx)=>{
        return(
            <div key={`${props.key}${idx}`}>
                <p>{comment}</p>
            </div>
        )
    })
    return(
        <>
            {comments}
        </>
    )
}