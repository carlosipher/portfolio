import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';

export default [
  {
    path: '/',
    component: Home,
    exact: true,
    title: 'Footwear designer',
    description: '',
    socialText: '',
    image: ''
  },
  {
    path: '/about',
    component: About,
    exact: true,
    title: 'Carlotta Dadey',
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
