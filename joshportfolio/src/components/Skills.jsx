import { useEffect } from 'react';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const skills = [
  { name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: 'javascript-colored.svg' },
  { name: 'Python', link: 'https://www.python.org/', icon: 'python-colored.svg' },
  { name: 'CSharp', link: 'https://docs.microsoft.com/en-us/dotnet/csharp/', icon: 'csharp-colored.svg' },
  { name: 'Git', link: 'https://git-scm.com/', icon: 'git-colored.svg' },
  { name: 'Java', link: 'https://www.oracle.com/java/', icon: 'java-colored.svg' },
  { name: 'HTML5', link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5', icon: 'html5-colored.svg' },
  { name: 'React', link: 'https://reactjs.org/', icon: 'react-colored.svg' },
  { name: 'CSS3', link: 'https://www.w3.org/TR/CSS/#css', icon: 'css3-colored.svg' },
  { name: 'TailwindCSS', link: 'https://tailwindcss.com/', icon: 'tailwindcss-colored.svg' },
  { name: 'Bootstrap', link: 'https://getbootstrap.com/', icon: 'bootstrap-colored.svg' },
  { name: 'Vite', link: 'https://vitejs.dev/', icon: 'vite-colored.svg' },
  { name: 'NodeJS', link: 'https://nodejs.org/en/', icon: 'nodejs-colored.svg' },
  { name: 'Express', link: 'https://expressjs.com/', icon: 'express.svg' },
  { name: 'Oracle', link: 'https://www.oracle.com/uk/index.html', icon: 'oracle-colored.svg' },
  { name: 'MongoDB', link: 'https://www.mongodb.com/', icon: 'mongodb-colored.svg' },
  { name: 'PostgreSQL', link: 'https://www.postgresql.org/', icon: 'postgresql-colored.svg' },
  { name: 'Django', link: 'https://www.djangoproject.com/', icon: 'django-colored.svg' },
  { name: 'AWS', link: 'https://aws.amazon.com', icon: 'aws-colored.svg' },
  { name: 'Docker', link: 'https://www.docker.com/', icon: 'docker-colored.svg' },
  { name: 'Linux', link: 'https://www.linux.org', icon: 'linux-colored.svg' },
  { name: 'MacOS', link: 'https://apple.com', icon: 'macos.svg' },
  { name: 'HTML', link: 'https://apple.com', icon: 'html5-colored.svg' },
  { name: 'CSS', link: 'https://apple.com', icon: 'css3-colored.svg' },
  { name: 'Postgres', link: 'https://apple.com', icon: 'postgresql-colored.svg' },
  { name: 'Node', link: 'https://apple.com', icon: 'nodejs-colored.svg' },

];

const Skills = () => {
  
  useEffect(() => {
    // Initialize the tooltips for each skill
    

    skills.forEach((skill) => {
      tippy(`.${skill.name.toLowerCase()}`, {
        content: skill.name,
        delay: [5, 5], // [showDelay, hideDelay] in milliseconds
      });
    });
  }, []);

  return (
    <div
      id="skills"
      className="flex flex-col justify-center flex-row items-center mb-24"
    >
      <div className="text-white text-4xl">Skills</div>
      <div className="flex flex-wrap justify-center items-center gap-1 mt-2 w-3/5">
        {skills.map((skill) => (
          <a
            key={skill.name}
            href={skill.link}
            target="_blank"
            rel="noreferrer"
            className={skill.name.toLowerCase()}
          >
            <img
              src={`https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/${skill.icon}`}
              width="64"
              height="64"
              alt={skill.name}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Skills;
export { skills };