import React from 'react';
import Cards from '../src/components/cards';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            serchList :"",
            robots : []
        };
    };













render(){
    return(
        <div>
            <h1>RoboFriends</h1>
            < Cards/> 
        </div>
    );
};


};


export default App;
