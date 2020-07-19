import React from 'react';
import { Button } from 'react-bootstrap';

export default function DeleteBlog(props){
  return(
    <Button type="button"
            className="btn btn-danger btn-sm"
            onClick= { () => props.handleClickDeleteBlog() }
    >Delete</Button>
  )
}