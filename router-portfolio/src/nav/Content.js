import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import About from '../pages/About';
import Blog from '../pages/Blog';
import Home from '../pages/Home';
import Projects from '../pages/Projects';

class Content extends Component {
	render() {
		let posts = [{
			title: 'CSS', 
			body: 'Make it pretty'
		}, {
			title: 'HTML', 
			body: 'Give it some meaning'
		}, {
			title: 'JavaScript', 
			body: 'Make it work'
		}, {
			title: 'Whiteboarding',
			body: 'OMG FIZZBUZZ IS SO HARD FML'
		}]
		let myStuff = ['Pew Pew', 'Beer Savor', 'React Group Project', 'Who Fuckin Knows']
		let lnf = ['JavaScript',
			'Python',
			'HTML',
			'CSS',
			'Node.js',
			'Express',
			'EJS',
			'ES6',
			'React',
			'JQuery',
			'PostgreSQL',
			'React',
			'Redux',
			'JSX',
			'AJAX',
			'Phaser.io',
			'Bootstrap',
			'Materialize',
			'APIs',
			'RESTful Routing'
		]
		return (
			<div className="App">
				<Route exact path="/" component={Home} />
				<Route path="/about" render={
					() => (<About lnf={lnf} />)
				} />
				<Route path="/blog" render={
					() => (<Blog posts={posts} />)
				} />
				<Route path="/projects" render={
					() => (<Projects projects={myStuff} />)
				} />
			</div>
		)
	}

}

export default Content