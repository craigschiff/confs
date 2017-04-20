import React, { Component } from 'react';
import './App.css';
import MainEvents from './components/MainEvents'
import NavbarMain from './components/NavbarMain'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'


class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <NavbarMain />
          </Col>
        </Row>
        <Row>
          <MainEvents />
        </Row>
      </Grid>
    );
  }
}

export default App;
