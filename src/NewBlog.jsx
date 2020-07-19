import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function NewBlog(props){
  return (
    <Form>
      <Form.Group controlId="newBlog.title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Blog Title" />
      </Form.Group>
      <Form.Group controlId="newBlog.contet">
        <Form.Label>Content:</Form.Label>
        <Form.Control as="textarea" rows="5" />
      </Form.Group>
      <Form.Group controlId="newBlog.submit">
        <Button type="submit">Submit</Button>
      </Form.Group>
    </Form>
  )
}