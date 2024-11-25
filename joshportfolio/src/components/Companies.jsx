import React from 'react';
import { motion } from 'framer-motion';
import { skills } from './Skills';

const Companies = () => {
  const containerVariants = {
    hidden: { 
      x: -100,
      opacity: 0 
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      x: -50,
      opacity: 0 
    },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  const companyData = [
    {
      name: 'Skyvera',
      position: 'Software Developer',
      period: '06/2024 - Current',
      location: 'Toronto',
      description: 'Designed and developed AI agents to revolutionize the software development process, enabling predictive issue resolution and intelligent feature enhancements.',
      technologies: [
        { label: 'Python', icon: 'python', color: 'blue' },
        { label: 'JavaScript', icon: 'javascript', color: 'blue' },
        { label: 'React', icon: 'react', color: 'blue' },
      ],
    },
    {
      name: 'Messagepoint',
      position: 'Software Developer',
      period: '03/2019 - 08/2023',
      location: 'Toronto',
      description: 'Designed and implemented robust and scalable RESTful APIs using Java Spring framework for a SaaS application.',
      technologies: [
        { label: 'Java', icon: 'java', color: 'blue' },
        { label: 'Python', icon: 'python', color: 'blue' },
        { label: 'AWS', icon: 'aws', color: 'blue' },
        { label: 'PostgreSQL', icon: 'postgresql', color: 'blue' },
      ],
    },
    {
      name: 'Johnson Controls',
      position: 'Software Automation Developer',
      period: '08/2017 - 03/2019',
      location: 'Toronto',
      description: 'Developed Java APIs and Python libraries to support test frameworks like Cucumber and Robot Framework.',
      technologies: [
        { label: 'Java', icon: 'java', color: 'blue' },
        { label: 'Python', icon: 'python', color: 'blue' },
        { label: 'Jenkins', icon: 'jenkins', color: 'blue' },
      ],
    },
  ];

  return (
    <section id="experience" className="relative flex items-center w-full bg-blue-900">
      <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 md:px-16 max-w-7xl">
        <div className="relative flex-col items-start m-auto align-middle">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-24">
            <motion.div 
              className="relative items-center gap-12 m-auto md:inline-flex"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <div className="max-w-xl text-center md:text-left">
                <h2 
                  className="text-4xl text-white mb-8"
                  variants={itemVariants}
                >
                  Professional Experience
                </h2>
                <div className="flex flex-col gap-8">
                  {companyData.map((company, index) => (
                    <motion.div 
                      key={index} 
                      className="flex flex-col items-start"
                      variants={itemVariants}
                    >
                      <h3 className="text-xl text-white mb-2">{company.name}</h3>
                      <div className="text-gray-300 mb-2">
                        <div>{company.position}</div>
                        <div>{company.period} | {company.location}</div>
                      </div>
                      <p className="text-gray-400 mb-4">{company.description}</p>
                      <div className="flex mt-2 gap-2">
                        {company.technologies.map((tech, idx) => {
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
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
