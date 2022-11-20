import React, { useState, useEffect } from "react";
import SearchBox from '../Components/SearchBox';
import CardList from "../Components/CardList";
import Scroll from '../Components/Scroll';
import './App.css';

function App() {
    // React Hooks version of State
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users))
    }, []);

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    };

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ? 
        <h1>Loading</h1> :
        (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <CardList  robots={filteredRobots}/>
                </Scroll>
            </div>
        )
}

export default App;