

import React from 'react';

import monsterAdoptionGif from '../assets/monsterAdoption.gif'
import mernPizzaGif from '../assets/mernPizza.gif'
import gamingDealsGif from '../assets/gamingDeals.gif'
import jediGamePng from '../assets/JediGame.png'


const Projects = () => {
  const projectData = [
    {
      name: 'Monster Adoption',
      githubLink: 'https://github.com/JoshHutchison/MonsterAdoption',
      liveLink: 'https://github.com/JoshHutchison/MonsterAdoption', 
      imageSrc: monsterAdoptionGif,
    },
    {
      name: 'Gaming Deals',
      githubLink: 'https://github.com/JoshHutchison/GamingDeals',
      liveLink: 'https://github.com/JoshHutchison/GamingDeals', 
      imageSrc: gamingDealsGif, 
    },
    {
      name: 'MERN Pizza Haus',
      githubLink: 'https://github.com/JoshHutchison/Pizza-HAUS',
      liveLink: 'https://github.com/JoshHutchison/Pizza-HAUS', 
      imageSrc: mernPizzaGif, 
    },
    {
      name: 'Jedi Game',
      githubLink: 'https://github.com/JoshHutchison/Jedi-survival',
      liveLink: 'https://jedi-survive.surge.sh/',
      imageSrc: jediGamePng, 
    }
  ];

  return (
    <div id='apps' className="text-white my-4 text-center">
      <h2 className="text-4xl mb-4">Projects</h2>
      <div className="flex flex-wrap justify-center items-start gap-4">
        {projectData.map((project, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className="mb-2">{project.name}</h3>
            
            <div className="w-64 h-40">
              <img
                src={project.imageSrc}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-center gap-2 mb-2">
              <a href={project.githubLink} target="_blank">Github</a>
              <span>&nbsp;</span>
              <p>|</p>
              <span>&nbsp;</span>
              <a href={project.liveLink} target="_blank">Live</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
        }

export default Projects;
