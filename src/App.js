import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LDClient from 'ldclient-js'

const isNewer = (a, b) => Date.parse(a.added) < Date.parse(b.added)

class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedSortOrder: null,
      songs: [
        { name: 'The Dance', added: '2017-11-27' },
        { name: 'Friends In Low Places', added: '2017-11-30' },
        { name: 'Unanswered Prayers', added: '2017-12-02' },
        { name: 'The River', added: '2017-12-03' },
        { name: 'Boot Scoot & Boogy', added: '2020-11-27' },
        { name: 'The Chair', added: '2021-11-30' },
        { name: 'When You Say Nothing At All', added: '2016-12-02' },
        { name: 'Beer For My Horses', added: '2018-12-03' },
      ]
    }
  }
  componentDidMount() {
    const user = {
      key: 'usrkey'
    }
    this.ldclient = LDClient.initialize('6226a1e75f750f152448277d', user)
    this.ldclient.on('ready', this.onLaunchDarklyUpdated.bind(this))
    this.ldclient.on('change', this.onLaunchDarklyUpdated.bind(this))
  }
  onLaunchDarklyUpdated() {
    this.setState({
      featureFlags: {
        defaultSortingIsAdded: this.ldclient.variation('PlayListTest')
      }
    })
  }
  render() {
    if (!this.state.featureFlags) {
      return <div className="App">Loading....</div>
    }

    let sorter
    if (this.state.selectedSortOrder) {
      if (this.state.selectedSortOrder === 'added') {
        sorter = isNewer
      } else if (this.state.selectedSortOrder === 'natural') {
        sorter = undefined
      }
    } else {
      if (this.state.featureFlags.defaultSortingIsAdded) {
        sorter = isNewer
      } else {
        sorter = undefined
      }
    }
    return (
      <div className="App">
        <div
            style={{ fontWeight: sorter === undefined ? 'bold' : 'normal'}}
            onClick={() => this.setState({ selectedSortOrder: 'natural' })}>Natural sorting</div>
        <div
          style={{ fontWeight: sorter === isNewer ? 'bold' : 'normal'}}
          onClick={() => this.setState({ selectedSortOrder: 'added' })}>Time sorting</div>
        <ul>
          {this.state.songs.slice().sort(sorter).map(song =>
             <li>{song.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
