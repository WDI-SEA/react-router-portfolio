import React, { useState } from 'react';
import DeleteBlog from './DeleteBlog';
import { Form, Button, Container } from 'react-bootstrap';

export default function ShowBlog(props){

  const displayBlog = (
    <div key={`blog-${props.index}`}>
      <h3 key={`title-${props.index}`}> { props.blog.title } </h3>
      <p key={`paragraph-${props.index}`}> { props.blog.content } </p>
      <Container className="d-flex justify-content-between">
        <Button type="button"
                onClick={ () => props.changeDisplayEditForm(props.index) }
                >
          Edit
        </Button>

        <DeleteBlog handleClickDeleteBlog={ () => props.handleClickDeleteBlog(props.index) }
                    index={ props.index }
                    key={ props.index }
                    />
    </Container>
    </div>
  )

  const editBlog = (
    <Form onSubmit={ (e) => { props.handleSubmitEditBlog(e, props.index) } }>
      <Form.Group controlId="editBlog.title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" 
                      placeholder={ props.blog.title } 
                      onChange={ (e) => props.setEditBlogTitle(e.target.value, props.index) } 
        />
    </Form.Group>
    <Form.Group controlId="editBlog.contet">
        <Form.Label>Content:</Form.Label>
        <Form.Control   as="textarea" 
                        placeholder={ props.blog.content } 
                        onChange={ (e) => props.setEditBlogContent(e.target.value, props.index) } 
        />
      </Form.Group>
      <Container className="d-flex justify-content-between">
        <Form.Group controlId="editBlog.submit">
          <Button type="submit">Submit Edits</Button>
        </Form.Group>
        <Button type="button"
                  onClick={ () => props.changeDisplayEditForm(false) }
        >
          Cancel
        </Button>
      </Container>
    </Form>
  )

  return (
    <div key={`blog-${props.index}`}>
      { (props.displayEditForm  === props.index) ? editBlog : displayBlog }
    </div>
    )
}
