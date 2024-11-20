import React, { useEffect } from 'react';
import monsterAdoptionGif from '../assets/monsterAdoption.gif';
import mernPizzaGif from '../assets/mernPizza.gif';
import gamingDealsGif from '../assets/gamingDeals.gif';
import jediGamePng from '../assets/JediGame.png';
import { skills } from './Skills';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const Projects = () => {
  useEffect(() => {
    // Initialize the tooltips for each skill in the project technologies
    skills.forEach((skill) => {
      tippy(`.${skill.name.toLowerCase()}`, {
        content: skill.name,
        delay: [5, 5], // [showDelay, hideDelay] in milliseconds
      });
    });
  }, []);

  const projectData = [
    {
      name: 'Monster Pet Adoption',
      githubLink: 'https://github.com/JoshHutchison/MonsterAdoption',
      liveLink: '',
      imageSrc: monsterAdoptionGif,
      description: 'A Monster Pet Adoption Website, presenting various monsters to be adopted.',
      technologies: [
        { label: 'React', icon: 'react', color: 'blue' },
        { label: 'Python', icon: 'python', color: 'blue' },
        { label: 'Django', icon: 'django', color: 'blue' },
        { label: 'PostgreSQL', icon: 'postgresql', color: 'blue' },
      ],
    },
    {
      name: 'Gaming Deals',
      githubLink: 'https://github.com/JoshHutchison/GamingDeals',
      liveLink: '',
      imageSrc: gamingDealsGif,
      description: 'A Gaming Deals Website, offering a comprehensive list of gaming discounts and deals from various sources.',
      technologies: [
        { label: 'HTML5', icon: 'html5', color: 'blue' },
        { label: 'CSS3', icon: 'css3', color: 'blue' },
        { label: 'JavaScript', icon: 'javascript', color: 'blue' },
        { label: 'MongoDB', icon: 'mongodb', color: 'blue' },
        { label: 'Express', icon: 'express', color: 'black' },
      ],
    },
    {
      name: 'Pizza Shop',
      githubLink: 'https://github.com/JoshHutchison/Pizza-HAUS',
      liveLink: 'https://pizzahaus.netlify.app/',
      imageSrc: mernPizzaGif,
      description: 'A Pizza Shop Website using React.js for the front-end and integrated it with a MongoDB database.',
      technologies: [
        { label: 'React', icon: 'react', color: 'blue' },
        { label: 'NodeJS', icon: 'nodejs', color: 'blue' },
        { label: 'MongoDB', icon: 'mongodb', color: 'blue' },
      ],
    },
    {
      name: 'Jedi Game',
      githubLink: 'https://github.com/JoshHutchison/Jedi-survival',
      liveLink: 'https://jedi-survive.surge.sh/',
      imageSrc: jediGamePng,
      description: 'A survival game where the player reflects blaster shots with their lightsaber.',
      technologies: [
        { label: 'HTML5', icon: 'html5', color: 'blue' },
        { label: 'JavaScript', icon: 'javascript', color: 'blue' },
        { label: 'CSS3', icon: 'css3', color: 'blue' },
        { label: 'HTML5 Canvas API', icon: 'html5', color: 'blue' },
      ],
    },
  ];

  return (
    <section id="apps" className="relative flex items-center w-full bg-black">
      <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 md:px-16 max-w-7xl">
        <div className="relative flex-col items-start m-auto align-middle">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-24">
            <div className="relative items-center gap-12 m-auto md:inline-flex">
              <div className="max-w-xl text-center md:text-left">
                <h2 className="text-4xl text-white mb-8">Projects</h2>
                <div className="flex flex-col gap-8">
                  {projectData.map((project, index) => (
                    <div key={index} className="flex flex-col items-start">
                      <h3 className="text-xl text-white mb-2">{project.name}</h3>
                      <div className="w-full relative">
                        <img
                          src={project.imageSrc}
                          alt={project.name}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 bg-black bg-opacity-80 hover:opacity-100 rounded-lg">
                          <p className="text-white text-center p-4">{project.description}</p>
                        </div>
                      </div>
                      <div className="flex mt-2 gap-2">
                        {project.technologies.map((tech, idx) => {
                          const foundSkill = skills.find((skill) => skill.name === tech.label);
                          if (foundSkill) {
                            return (
                              <div key={idx} className={`${foundSkill.name.toLowerCase()}`}>
                                <img
                                  src={`https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/${foundSkill.icon}`}
                                  width="24"
                                  height="24"
                                  alt={foundSkill.name}
                                  title={foundSkill.name}
                                />
                              </div>
                            );
                          }
                          return null;
                        })}
                      </div>
                      <div className="flex gap-4 mt-2">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-600">
                          Github
                        </a>
                        {project.liveLink && (
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-600">
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
