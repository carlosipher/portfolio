import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import pages from './pages';
import RouteWrapper from './elements/RouteWrapper';
import Navigation from './elements/Navigation';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ready: false
    }
  }

  componentDidMount() {
    setTimeout(() => this.setReady(), 200);
  }

  setReady() {
    this.setState({ ready: true });
  }

  clickNavigation() {
    this.setState({ navigating: true });
    setTimeout(() => this.setState({ navigating: false }), 200);
  }

  render() {
    return (
      <this.props.router context={{}} location={this.props.location}>
        <div className={`Container ${this.state.ready ? 'Ready': 'Loading'} ${this.state.navigating ? 'Navigating' : ''}`}>
          <div className="Content">
            <Navigation {...this.props} navigationClick={e => this.clickNavigation(e)} />
            <Switch>
              { pages
                .map(route => (
                  <Route
                    key={route.path || 'notfound'}
                    path={route.path}
                    exact={route.exact}
                  >
                    <RouteWrapper preload={route.preload} {...route} {...this.props}>
                      <route.component {...this.props} />
                    </RouteWrapper>
                  </Route>
                ))
              }
            </Switch>
          </div>
        </div>
      </this.props.router>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    key: PropTypes.string.isRequired
  })
};

export default App;
