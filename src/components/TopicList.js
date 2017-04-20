import React from 'react';
import { connect } from 'react-redux'
import Search from '../actions/Search'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'


class TopicList extends React.Component {
  constructor(){
    super()
    this.showTopics = this.showTopics.bind(this)
    
  }
}
