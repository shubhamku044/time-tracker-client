import { useState } from 'react';

const apiUrl = new URL(import.meta.env.VITE_API_KEY as string);

const Projects = () => {
  const [projectName, setProjectName] = useState<string>('');

  const createProject = async () => {
    try {
      await fetch(`${apiUrl}/projects`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: projectName })
      });
      setProjectName('');
    } catch (err) {
      console.log('Got error while creating project', err);
    }
  };

  return (
    <div>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setProjectName(e.target.value);
        }}
        value={projectName}
      />
      <button
        onClick={() => createProject()}
      >
        Create Project
      </button>
    </div >
  );
};

export default Projects;
