import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    const idxPosProductId = 1;
    const idxPosStyleId = 2;
    const ids = window.location.pathname.split('/');

    this.state = {
      productId: ids[idxPosProductId],
      styleId: ids[idxPosStyleId],
      details: {},
      style: {},
      styles: {}
    };
  }
  render() {
    return (
      <h1>Hello!</h1>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));