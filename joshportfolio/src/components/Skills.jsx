

const Skills = () => {
    const techItems = [
        {
          label: 'HTML',
          icon: 'html5',
          color: 'blue',
        },
        {
          label: 'JavaScript',
          icon: 'javascript',
          color: 'blue',
        },
        {
          label: 'CSS',
          icon: 'css3',
          color: 'blue',
        },
        {
          label: 'Python',
          icon: 'python',
          color: 'blue',
        },
        {
          label: 'Java',
          icon: 'java',
          color: 'blue',
        },
        {
          label: 'C%23',
          icon: 'csharp',
          color: 'blue',
        },
        {
          label: 'MongoDB',
          icon: 'mongodb',
          color: 'blue',
        },
        {
          label: 'Express',
          icon: 'express',
          color: 'blue',
        },
        {
          label: 'React',
          icon: 'react',
          color: 'blue',
        },
        {
          label: 'Node.js',
          icon: 'nodedotjs',
          color: 'blue',
        },
        {
          label: 'Django',
          icon: 'django',
          color: 'blue',
        },
        {
          label: 'REST',
          icon: 'rest',
          color: 'blue',
        },
        {
          label: 'SQL',
          icon: 'sql',
          color: 'blue',
        },
        {
          label: 'Git',
          icon: 'git',
          color: 'blue',
        },
        {
          label: 'GitHub',
          icon: 'github',
          color: 'blue',
        },
        {
          label: 'Docker',
          icon: 'docker',
          color: 'blue',
        },
        {
          label: 'AWS',
          icon: 'amazonaws',
          color: 'blue',
        },
        {
          label: 'Jira',
          icon: 'jira',
          color: 'blue',
        },
        {
          label: 'Slack',
          icon: 'slack',
          color: 'blue',
        },
        {
          label: 'Zoom',
          icon: 'zoom',
          color: 'blue',
        },
        {
          label: 'Postgres',
          icon: 'postgresql',
          color: 'blue',
        },
        {
          label: 'Bash',
          icon: 'gnubash',
          color: 'blue',
        },
      ];
    
      return (
        <div id='skills' className="flex flex-col justify-center flex-row items-center mb-24 ">
            <div className="text-white text-4xl">Skills</div>
            <div className="flex flex-wrap justify-center items-center gap-1 mt-2 w-4/5">
            {techItems.map((item, index) => (
                <button
                key={index}
                className={`bg-${item.color}-500 hover:bg-${item.color}-900 text-white font-bold py-2 px-4 rounded inline-flex items-center`}
                >
                <img
                    src={`https://img.shields.io/badge/${item.label}-blue?style=flat-square&logo=${item.icon}&logoColor=white&labelColor=blue`}
                    alt={item.label}
                />
                </button>
            ))}
            </div>
        </div>
      );
}

export default Skills