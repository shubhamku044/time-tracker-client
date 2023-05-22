import React, { useState } from 'react';
import Timer from './Timer';

function App() {
  const [desc, setDesc] = useState('');
  const [projects, setProject] = useState<Array<any>>([]);
  return (
    <div className="App">
      <div>
        <input
          type='text'
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const myDate = new Date();
            setProject(prj => [...prj, {
              name: desc,
              startDate: myDate.toString(),
              startTime: `${myDate.getHours().toString().padStart(2, '0')}:${myDate.getMinutes().toString().padStart(2, '0')}:${myDate.getSeconds().toString().padStart(2, '0')}`
            }]);
          }}
        >
          start
        </button>
      </div>
      <div>
        {
          projects.map(({ name, startTime }, index) => {
            return (
              <Timer key={index} name={name} startTime={startTime} />            
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
