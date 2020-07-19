import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function NewBlog(props){

  return (
    <Form onSubmit={ (e) => props.handleSubmitNewBlog(e) }>
      <Form.Group controlId="newBlog.title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" 
                      placeholder="Blog Title" 
                      onChange={ (e) => props.setNewBlogTitle(e.target.value) } 
        />
      </Form.Group>
      <Form.Group controlId="newBlog.contet">
        <Form.Label>Content:</Form.Label>
        <Form.Control   as="textarea" 
                        rows="5" 
                        onChange={ (e) => props.setNewBlogContent(e.target.value) } 
        />
      </Form.Group>
      <Form.Group controlId="newBlog.submit">
        <Button type="submit">Submit</Button>
      </Form.Group>
    </Form>
  )
}