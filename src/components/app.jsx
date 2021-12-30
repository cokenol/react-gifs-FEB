import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "VIPdgcooFJHtC"
    };
    this.search("stitch");
  }

  search = (query) => {
    // TODO API CALL GIPHY
    giphy('7QBoqzAb2bbDeBOex90sjREtLQIoGM0j').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      // Res contains gif data!
      this.setState({
        gifs: result.data
      });
    });
  }

  select = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    const { selectedGifId, gifs } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} updateFunction={this.select} />
        </div>
      </div>
    );
  }
}

export default App;
