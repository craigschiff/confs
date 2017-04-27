import React, { Component } from 'react';
import MainEvents from './components/MainEvents'
import NavbarMain from './components/NavbarMain'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
<<<<<<< HEAD
import Col from 'react-bootstrap/lib/Col'
import styles from '../public/Main.css'
=======
>>>>>>> 50d1919fd05fc7fe177f4e7f94ab3ddf21f19ca1


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
