import React from "react";
import Post from "./Post";
import { Box } from "@chakra-ui/core";


const Blog = (props) => {
    return(
        <div>
            {props.blogs.map(item => (
                <Box key={item}>{item}</Box>
            ))}
        </div>
    )
}

export default Blog;