import React, { Component } from 'react';


class Gif extends Component {
  handleUpdate = (event) => {
    console.log(event.target.src);
    const source = /(\w+:\/\/\w+\.\w+\.\w+\/\w+\/)(\w+)(\/\w+\.\w+)/;
    const match = event.target.src.match(source);
    console.log(match[2]);
    this.props.update(match[2]);
  }

  render() {
    const src = `https://media4.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleUpdate} />
    );
  }
}
export default Gif;
