import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ModelForm from './components/ModelForm'
import ModelList from './components/ModelList'
import ActorForm from './components/ActorForm'
import ActorList from './components/ActorList'
import ArtistForm from './components/ArtistForm'
import ArtistList from './components/ArtistList'
import Home from './components/Home'


function App() {
  return (
    <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/model" component={ModelForm}/>
            <Route exact path="/models" component={ModelList}/>
            <Route exact path="/actor" component={ActorForm}/>
            <Route exact path="/actors" component={ActorList}/>
            <Route exact path="/artist" component={ArtistForm}/>
            <Route exact path="/artists" component={ArtistList}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;