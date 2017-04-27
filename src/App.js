import React, { Component } from 'react';
import MainEvents from './components/MainEvents'
import NavbarMain from './components/NavbarMain'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Styling from '../public/Main.css'


class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
            <NavbarMain />
        </Row>
        <Row>
          <MainEvents />
        </Row>
      </Grid>
    );
  }
}

export default App;
