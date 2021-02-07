import React, { Component } from 'react'
import { BrowerRouter as Router, Route } from 'react-router-dom'
import Header from './components/partials/Header'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Blog from './components/pages/Blog'
import Projects from './components/pages/Projects'
import Post from './components/pages/Post'
import Project from './components/pages/Project'
import './App.css';

class App extends Component {
  render() {
    let posts = [
      {
        title: 'Natural Bodybuilding', date: `5 February 2020`, post: `What becomes of us when that which we once did doesn't work any longer? 
    That's a crossroads everyone will face. The only thing that one can do to slow their progression towards that point is to 
    be as close to natural as possible. That's why I am a Natural Bodybuilder. Natural Bodybuilding means not using performance-enhancing 
    drugs such as anabolic steroids, which cause exponential muscle growth. Most of the people you see constantly posting physique posts 
    at some point used such steroids, along with taking HGH - Human Growth Hormone - to increase the amount of testosterone in their bodies in order
    to gain a desired physique. Such choices come with high costs: steroid usage can lead to baldness, impotance, renal failure, a weakend
    system as well as a myriad of others health issues. For those reasons, along with a strong stance against interveious drug usage, I decided 
    that natural bodybuilding was my path.`},
      {
        title: 'Full-Stack Software Engineer', date: `6 February 2020`, post: `As a child I was fascinated with computers. My father was away from home most of my adolescense for 
    work, and when he was home he would continue his work on the computer. Because of his profession, my father made sure that we had the latest technological
    advances, from the newest large television, new cellular phones that for a period became smaller and smaller, and he was constantly changing components 
    within his PC tower in order to keep it up-to-date. Well, my older brother and I came to a crossroads around Christmas 2001. I wanted a Nokia phone on VoiceStream and he 
    wanted a Playstation 2 for Christmas. The day arrived. We both received cellphones and a Playstation 2 to share! But the divide that started continued to progress. I
    went futher towards cellphone technology, getting newer and smaller phones, and my brother went further towards cellphone technology. As cellphone technology progressed, 
    I became further entrenched in it, becoming an early adaptor of the iPhone. My brother went on to get Nintendo, XBox and Playstation consoles. And with all of our progress,
    now both of us are developers: my brother self-taught and I by taking a course through General Assembly.`}]

    let about = [{
      birthdate: '15 April 1987',
      birthLocation: 'Hutzel Hospital (then known as the Women Hospital of Detroit)',
      birthPlace: 'Detroit, Michigan',
      almaMater: 'The University of Michigan in Ann Arbor, Michigan',
      degree: `Bachelors of Arts in English Language & Literature`,
      languages: `English, German, Spanish, French and Japanese`,
      astroSign: 'Aries',
      info: `My genuine passion to help others. That is rooted in my Catholic faith's teachings on being a "Servant of Humanity." I have a passion for education, as I come from a long 
      line of educators, and have in the past done work through AIDS Partnership Michigan within their Empowerments Program divisions in groups such as "The REC Boys" and 
      "Young Brothers United (YBU) to educate others about HIV/AIDS Prevention & Treatment. In each group we focused on young MSM (Men who have Sex with Men) of Color between the ages 
      of 18 and 24 - a particularly high-risk group in order to curb the rate of infection among that group. In undergrad I was part of the Undergraduate Research Opportunity Program (UROP)
      that allowed me to assist research fellows at Michigan and futher science and understanding. After graduating, I took the LSAT and moved to Chicago. On sunny Saturday in late June, 
      eight days after moving to the city, I met my future husband on a train platform. And in keeping consistent with my love of cellphone technology, the first words I spoke to him were, 
      "I like your phone case." We moved to California in September of 2018, first living in Long Beach and now Palm Springs and raise a pedigree Alaskan Malamute named Aidan Gideon Nash 
      together. Aidan just turned 6 years old on January 14.`}]

    let projects = [
      {
        title: 'Yellow Patch',
        about: `I created a game using basic HTML, CSS, and vanilla JavaScrip and Canvas in order to create a Grid-based game that would honor my neighbor 
      and honorary grandmother Anita Pettigrew. The game "Yellow Patch" was inspired by her strong German ancestry and diligent work ethic that she puts in every day to keep her lawn the best 
      in the neighborhood. The game is about pomeranians using her lawn as a toilet and the constant toil of keeping those animals off of her lawn.`, image: ""
      },
      {
        title: 'Journal Fitness', about: `Journal Fitness is a web application that utilizes internet-based CSS styling from Bootstrap along with Express/Node to furnish information from the API 
      of Wger (wger.de) in order to allow users the ability to find exercises in either German or English, comment on exercises with tips on how to best perform those exercises, delete those 
      comments should they see fit, create user profiles with secure BCrypt encryption of sensitive password data, and create a list of favorited exercises in order that they might gain new 
      knowledge of fitness. Journal Fitness is a "work-in-progress." Upon completion of my in General Assembly, I plan to augment the CSS from Bootstrap to give the site a more professional feel, 
      and introduce additional functionality by adding the ability for users to create lists of workouts compiled from WGER's API data in order that users will find it handy and really plan their 
      fitness activities.`, image: ""
      }]

    let homeContent = [{
      image: "",
      about: `I'm just a little Black boy from Detroit. Nothing more and nothing less.`,
      favoritePhrases: ['GO Blue!', `I'm from Detroit, Bitch!`, `The worst thing you can do is underestimate me.`, 
        `I don't pray for vengence. I pray that everyone gets exactly what they deserve. Let the Universe decide.`]
      }]
    


    return (
      <div className="App">
        <Header />
        <p>"To have a good Life is to be happy inspite of your limitations"</p>
        <span></span>
        <p>-Patrick Benjamin Nash</p>
        <span></span>
        <Route exact path='/' render={() => <Home homeContent={homeContent} />} />
        <Route exact path='/about' render={() => <About about={about} />} />
        <Route exact path='/blog' render={() => <Blog posts={posts} /> } />
        <Route exact path='/projects' render={() => <Projects projects={projects} />} />
        <Route exact path='/post/:id' render={(props) => <Post {...props} posts={posts} />} />
        <Route exact path='/project/:id' render={(props) => <Project {...props} projects={projects} />} />

      </div>
    )
  }
}

export default App;
