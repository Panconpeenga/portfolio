import React, {Component} from 'react';
import Title from './components/Title';
import Boxes from './components/Boxes';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Ppl from './components/Ppl';
import Particles from 'react-particles-js';
import './App.css'
const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#000000',
      // value: {r:0, g:0, b:0},
      // value: {h:0, s:100%, l:100%},
      // value: ["#f00", "#0f0", "#00f"],
      // value: true
    },
    line_linked: {
      enable: true,
      distance: 200,
      color: '#000000',
      opacity: .2,
      width: 1,
    }
  }
};

class App extends Component {
  constructor () {
    super();
    this.state = {
      people: []
    };
  }

  componentDidMount () {
    window.fetch('https://swapi.co/api/people/')
      .then(results => {
        return results.json();
      })
      .then(data => { this.setState({people: data}); })
      .catch(function (error) {
        console.log(error);
      });
  }

  render () {
    return (
      <div className='tc'>
        <Particles className='particles' params={particlesOptions}/>
        <Navbar />
        <Title />
        <a name='about'><AboutMe /></a>
        <div>
          <a name='contact'>
            <Boxes
              linkName={'GitHub Profile'}
              link={'https://github.com/Panconpeenga'}
              imgLink={'https://cdn4.iconfinder.com/data/icons/socialcones/508/Github-128.png'}
              description={'Some of the projects that I am currently working on.'}
            />
            <Boxes
              linkName={'Codepen Profile'}
              link={'https://codepen.io/Panconpeenga/'}
              imgLink={'https://cdn1.iconfinder.com/data/icons/feather-2/24/codepen-128.png'}
              description={'These are earlier projects I worked on when going through the freecodecamp course.'}
            />
          </a>
        </div>
        <div>
          <Ppl people={this.state.people} />
        </div>
      </div>
    );
  }
}
export default App;
