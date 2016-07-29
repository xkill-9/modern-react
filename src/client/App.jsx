import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import youtubeSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBDOQACMO6HVoAWcOX7iAwJomVb79kmhyI';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
    };

    youtubeSearch({ key: API_KEY, term: 'surfboards' }, videos => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default App;
