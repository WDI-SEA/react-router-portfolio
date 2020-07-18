import React from 'react';
import { ExternalLink } from 'react-external-link';

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <h3>GitHub:</h3>
      <a href="https://github.com/codesmith888?tab=repositories" />
      <h3>Addition Rocket:</h3>
      <p>This is an educational math game focusing on addition fluency. 
        The player answers as many addition problems as they can in one minute, and the game tracks
        the number of correct answers the player gets each round. Players can choose between 3 levels: 
        (Level 1 - Addition within Ten, Level Two - Addition within Twenty, Level Three - Addition within Fifty). 
        The number of correctly answered questions will determine how big the player’s winning rocket is and how 
        fast it moves when it launches at then end of the game. Less than 10 correct answers and your rocket does not take off…</p>
      <h4>Game:</h4>
      <ExternalLink href="https://codesmith888.github.io/Addition-Rocket/"></ExternalLink>
      <h4>ReadMe:</h4>
      <ExternalLink href="https://github.com/codesmith888/Addition-Rocket"></ExternalLink>
      <h3>Adulting 101: Dinner Party Edition</h3>
      <p>This is a full-stack web application created using Nodejs. Users can choose ingredients they would like to use from home
         in order to create custom menus. The application uses the RecipePuppy API (recipepuppy.com/about/api/) in order to pull 
         recipes from the web. Each custom made menu includes the name of the recipe, an image and a link to the external site where 
         the recipe is hosted. Users can favorite recipes and menus, as well as edit recipe names and menu names. Enjoy!</p>
      <h4>App:</h4>
      <ExternalLink href="https://adulting101-dinnerpartyedition.herokuapp.com/"></ExternalLink>
      <h4>ReadMe:</h4>
      <ExternalLink href="https://github.com/codesmith888/Adulting-101_Dinner_Party_Edition"></ExternalLink>
    </div>
  )
}

export default Projects;