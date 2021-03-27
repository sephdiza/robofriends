import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import './App.css'
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'


const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');


useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setRobots(users))
  }
,[])

const onSearchChange = (e) => { 
  setSearchfield(e.target.value)
}

const filteredRobots = robots.filter(robot => {
  return robot.name
    .toLowerCase()
    .includes(searchfield.toLowerCase());
  })

return !robots.length ?
  <h1>Loading...</h1> :
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <Searchbox searchChange={onSearchChange}/>
      <Scroll>
        <ErrorBoundry>
          <CardList robots = {filteredRobots}/>
        </ErrorBoundry>
      </Scroll>
    </div>  

}

 
export default App;