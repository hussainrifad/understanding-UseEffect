import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [component, setComponent] = useState('posts');
  
  const handleChange = (para) => {
    setComponent(para);
  }

  // here we are fatching data from the server 

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${component}`)
      .then(response => response.json())
      .then(json => console.log(json))
   
      // when the value of the component changes fetch will rerander
  }, [component]) 

  return (
    <div className='flex flex-row '>
      <div>
          <button onClick={() => handleChange('posts')}>post</button>
          <button onClick={() => handleChange('users')}>users</button>
          <button onClick={() => {setComponent('todos')}}>todos</button>
      </div>
      <div>
       <h1>
        {
          component
        }
       </h1>
      </div>
    </div>
  );
}

export default App;
