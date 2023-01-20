# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) React Router 

## Recap

What have we learned so far?
* Single Page Applications have specific URLs that are routed to display different content.
* React Router is a third-party library that we can install and use with React.
* Since React Router isn't built in to React, we must import all necessary components.
* React Router makes it easy for us to route URLs to components.
* React Router automatically manipulates modern browser history mechanics.

Now let's put that to the test!

## Your Task: Implement Router

Let's build a basic portfolio website. It can display your actual work or just dummy information, you can style it with a framework or your own custom CSS as a bonus.

Your portfolio needs to have these pages:

- Homepage: A main welcome page
- Blog: A page displaying a few blog posts
- About: A page about you and your skills
- Projects: A page with a screenshot and a little bit of info about each project

<details>
<summary> Want a routing chart? </summary>

| **URL Route** | **Component**  | **Content Description**                                                   |
| :------------ | :------------- | :------------------------------------------------------------------------ |
| /             | `<Home />`     | A main welcome page                                            |
| /about     | `<About />` | A page about you and your skills                        |
| /blog     | `<Blog />` | A page displaying a few blog posts                        |
| /projects      | `<Projects />`  |  A page with a screenshot and a little bit of info about each project                         |
</details>

**TODOs:**

- Create an organizational structure so that each page in the website is a component.
- Create a navigation menu of list items that Route to each page.
- The main App should hold an array of `post` objects, each with a title and a body, both strings.
- The blog page should be rendered so that you can pass props (the `post` objects) into it. Then render each post nicely.

## Getting Started

* fork and clone this repo
* cd into `react-router-portfolio`
* create a new react app with `npx create-react-app .`


**if you forget the dot in the** `npx create-react-app .` **command your react app will be created in a nested directory - use the dot to create the app at the current working directory**


## Don't Forget...

* Do you have [react-router-dom](https://www.npmjs.com/package/react-router-dom) npm installed for this project?

* Here is how to render a component with `props` inside of a `<Route>` element:

```js
<Route path="/blog" element={<Blog posts={posts} /> }/>
```

more info is to be found at the [react router docs](https://reactrouter.com/docs/en/v6/getting-started/overview).

## Bonuses

- Have the ability to edit, post, and delete new blog posts
- Have a button on the About page that downloads a resume file
- Make it pretty!
