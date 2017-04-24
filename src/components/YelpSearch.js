import React from 'react'
import { Link } from 'react-router-dom'
import NavbarMain from './NavbarMain'
import YelpApi from 'v3-yelp-api';

const credentials = {
    appId:"Z-pOkZQ39nrB3w4EzbSZ1w",
    app: "oGPCBKQObjckOAXGePmRETEy5H9BNXJ6Nv8hukcfutsFsH9U1l9aWYSroI70D4v6"
}

const yelp = New YelpApi(credentials)

let params = {
    query: 'food',
    location: '51.5007,0.1246',
    price: '2',
    limit: 10
}

yelp.search(params)
 .then(data => data)
 .catch(err => err)

export default class YelpSearch extends React.Component {
  render() {
    return(
      <div>

      </div>
    )
  }
}
