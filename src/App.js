import React, {Component} from 'react';
import Title from './components/Title';
import Boxes from './components/Boxes';
import Navbar from './components/Navbar/Navbar';
import Icon from './components/icon.png';
import AboutMe from './components/AboutMe';
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
      value: '#ffffff',
      // value: {r:0, g:0, b:0},
      // value: {h:0, s:100%, l:100%},
      // value: ["#f00", "#0f0", "#00f"],
      // value: true
    },
    line_linked: {
      enable: true,
      distance: 200,
      color: '#ffffff',
      opacity: .2,
      width: 1,
    }
  }
};

class App extends Component {
  constructor () {
    super();
    this.state = {
      route: 'home'
    };
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  componentDidMount () {
  }

  render () {
    const {route} = this.state;
    return (
      <div className='tc'>
        <Particles className='particles' params={particlesOptions}/>
        <Navbar onRouteChange={this.onRouteChange}/>
        {route === 'home'
        ?  <div>
          <Title />
          <AboutMe />
          </div>
          :
          (route === 'projects'
            ?  <div>
          <Boxes
            linkName={'Background Generator'}
            link={'https://panconpeenga.github.io/background-generator/'}
            imgLink={'https://pbs.twimg.com/profile_images/1137245922981797888/-EeirZL9_400x400.jpg'}
            description={'Gradient generator where colors can be input manually. A random color generator is also included!'}
            />
            <Boxes
              linkName={'Messing With Star Wars API'}
              link={'https://panconpeenga.github.io/swapi_practice/'}
              imgLink={<Icon />}
              description={'Stand alone site displaying results of Star Wars API'}
              />
          </div>
          :
        <div>
          <Boxes
            className={'top-padding'}
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
        </div>)
      }
      </div>
    );
  }
}
export default App;
