import React, { Component } from 'react';
import Axios from 'axios';
import Apod from './components/Apod';
import './App.css';

const apiUrl = 'https://api.nasa.gov/planetary/apod';
const apiKey = 'oyawjteM6olB2SkfPrIIzcnHK0uMhjOhCydyA0gR';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    Axios
      .get(`${apiUrl}?api_key=${apiKey}&count=5`)
      .then((Response) => {
        const responseData = Response.data;

        this.setState({ data: responseData });
      });
  }

  render() {
    const { data } = this.state;
    const apods = data.map(item => <Apod item={item} key={Date.parse(item.date)} />);

    return (
      <section className="section section--apod">
        {apods}
      </section>
    );
  }
}

export default App;
