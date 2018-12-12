import React, { Component } from "react";
import API from "../../utils/API";

class Watchlist extends Component {
  state = {
    books: []
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res => this.setState({ books: res.data }))
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
 <div>here</div>
    );
  }
}

export default Watchlist;
