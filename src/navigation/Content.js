// Content.js

import React, { Component } from 'react'
import { Route } from 'react-router-dom'


import About from '../pages/About'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import Projects from '../pages/Projects'

let Posts = [
	{
		title: 'This is a blog post', 
		content: 'Lorem ipsum dolor amet twee offal drinking vinegar artisan taxidermy everyday carry chartreuse pabst blue bottle sartorial. Chia kombucha kinfolk hell of leggings, bicycle rights vape cliche kitsch crucifix squid helvetica shaman. Forage butcher biodiesel pickled occupy echo park. Church-key swag vegan, mlkshk cornhole marfa man bun hella vaporware succulents portland migas fashion axe waistcoat. Pork belly banh mi venmo forage banjo man bun helvetica skateboard celiac hexagon roof party aesthetic meggings. Vape hella blog locavore meggings iPhone tacos jianbing. Tumeric kombucha literally authentic echo park kinfolk squid, offal master cleanse plaid intelligentsia.'
	},
	{
		title: '10 THINGS YOU NEED TO KNOW ABOUT SOMETHING DUMB', 
		content: 'Fam squid 90\'s jean shorts polaroid, selfies DIY. Pour-over truffaut 3 wolf moon, austin coloring book master cleanse la croix portland venmo cray lo-fi blog messenger bag plaid. Roof party microdosing hoodie lomo trust fund poke migas fam drinking vinegar paleo raw denim everyday carry cardigan mixtape flexitarian. Ugh vice prism asymmetrical, bicycle rights schlitz fashion axe whatever four loko yr unicorn tousled. Adaptogen migas marfa readymade gluten-free roof party subway tile lumbersexual green juice street art food truck whatever tbh put a bird on it meh. Ethical bespoke 90\'s synth, pop-up neutra kogi lumbersexual everyday carry activated charcoal four dollar toast bitters cred. Four loko gastropub williamsburg, retro kombucha photo booth cred gluten-free health goth trust fund.'
	},
	{
		title: 'THIS BLOG POST ISN\'T AT ALL WHAT YOU THINK IT\'S ABOUT', 
		content: 'Neutra unicorn banjo snackwave PBR&B. Literally retro seitan truffaut, af activated charcoal edison bulb jean shorts lyft prism vaporware church-key. Post-ironic keytar deep v, 90\'s blog kinfolk polaroid art party affogato try-hard glossier cold-pressed typewriter. Crucifix migas asymmetrical, kombucha poutine small batch activated charcoal echo park blog selvage williamsburg. Chillwave vexillologist enamel pin, direct trade whatever taxidermy biodiesel pork belly paleo meggings. Man bun tacos biodiesel flexitarian.'
	}
]


class Content extends Component {
	render() {
		return(
			<div className="container">
				<Route exact path="/" component={Home} />
				<Route path="/Blog" render={ () => <Blog posts={Posts} /> }/>
				<Route exact path="/Projects" component={Projects} />
				<Route exact path="/About" component={About} />
			</div>
		)
	}
}

export default Content;