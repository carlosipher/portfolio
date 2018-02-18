import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';

export default [
  {
    path: '/',
    component: Home,
    exact: true,
    title: 'Carlotta Dadey',
    description: '',
    socialText: '',
    image: ''
  },
  {
    path: '/mood',
    component: About,
    exact: true,
    title: 'Mood',
    description: '',
    socialText: '',
    image: ''
  },
  {
    path: '/portfolio',
    component: Portfolio,
    exact: true,
    title: 'Portfolio',
    description: '',
    socialText: '',
    image: ''
  }
];
