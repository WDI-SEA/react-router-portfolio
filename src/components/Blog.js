import React, { Component } from "react";
import { Link } from "react-router-dom";
import ChoosenBlog from "./ChoosenBlog";

export default class blog extends Component {
  state = {
    post: [
      {
        title: <h2>Being Non-Binary</h2>,
        author: "Anonymous",
        body: "Ehh its a Heteronomative World 🤷🏽",
        comments: ["First!", "Pronouns They/They", "Heeeeeyyyy, Im NB too!"],
      },
      {
        title: <h2>Coding Baby!</h2>,
        author: "Me12543",
        body: "who really knows how to code though? is it impossible to learn?",
        comments: ["First!", "yea, idk anything"],
      },
      {
        title: <h2>What am I doing?!</h2>,
        author: "irishCloud69",
        body: "Do we even know what anyoe is doing here!?",
        comments: ["Facts!📠", "yea, idk anything", "life is a simulation"],
      },
    ],
  };
  render() {
    const allBlogPost = this.props.blog.map((blog) => {
      return (
        <div>
          <br />
          <li>
            {blog.title} By: {blog.author} <br /> {blog.body}
          </li>
          <br />
         <strong> Comments: </strong>
          <li>
            {blog.comments[0]}
          </li>
          <li>
            {blog.comments[1]}
          </li>
          <li>
            {blog.comments[2]}
          </li>
        </div>
      );
    });
    return (
      <div>
        <h1>Blog Page</h1>
        <ul>{allBlogPost}</ul>
      </div>
    );
  }
}
