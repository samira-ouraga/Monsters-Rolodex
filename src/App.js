import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import './App.css';
import './components/search-box/search-box.component'
import { SearchBox } from './components/search-box/search-box.component';
class App extends Component{
  constructor(){
    super();

    //the aray where json will be saved 
    //state is the thing that carries data from backend to front end     
    this.state = {
      monsters:[],
      searchField : ''
    };

  }
  //when react puts compoenent on a page
  //using API to fill monsters array 
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json()
     .then(users => this.setState({monsters:users}))
     );
  }

  handleChange=(e) => {
    this.setState({searchField: e.target.value})
  }
  render(){
    const {monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
      
    return(
      <div className="App">
        <h1>Rolodex Monsters by Samira</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange= {this.handleChange}
        />
        <CardList monsters={filteredMonsters}/> 
    </div>
    );
  }
}

export default App;
