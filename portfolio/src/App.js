import React, { Component } from 'react';
import axios from 'axios';

import Home from './pages/Home';
import Fetch from './components/Fetch';

class App extends Component {
  state = {
    data: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
    dataLoaded: false,
  };

  componentDidMount() {
    this.getDataFromDb();
    // if (!this.state.intervalIsSet) {
    //   let interval = setInterval(this.getDataFromDb, 1000);
    //   this.setState({ intervalIsSet: interval });
    // }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  getDataFromDb = () => {
    fetch('http://localhost:3001/api/getData')
      .then((data) => data.json())
      .then((res) => this.setState({ data: res.data }))
  };

  mapContent = (content) => {
    return content.map( item => (
      <li>{item}</li>
    ));
  }

  mapSectionContent = (sectionContent) => {
    return sectionContent.map( item => (
      <div>
        {item.title !== "null" && <p><b>{item.title}</b></p>}
        {item.dates !== "null" && <p>{item.dates}</p>}
        <ul>
        {this.mapContent(item.content)}
        </ul>
      </div>
    ));
  }

  mapSection = (sections) => {
    return sections.map( item => (
      <div>
        <h2>{item.title}</h2>
        <div>
          {this.mapSectionContent(item.sectionContent)}
        </div>
      </div>
    ));
  }

  mapResume = () => {
    if (this.state.data.length > 0) {
      return (
        <div>
          <h1>{this.state.data[0].name}</h1>
          <div>
            {this.mapSection(this.state.data[0].sections)}
          </div>

        </div>
      );
    }
    return <div>Nothing to see here</div>
  }


  render () {
    const { data } = this.state;
    return (
      <div>
        {this.mapResume()}
      </div>
    );
  }
}

//   return (
//     <div className="App">
//       <Home />
//     </div>
//   );
// }

export default App;
