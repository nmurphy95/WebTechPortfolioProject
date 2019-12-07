import React, { Component } from 'react';
import { contentEditable } from '../util/Editable';
import axios from 'axios';
import strings from '../util/strings';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            id: 0,
            message: null,
            intervalIsSet: false,
            idToDelete: null,
            idToUpdate: null,
            objectToUpdate: null,
            dataLoaded: false,
          };
          this.handleSave = this.handleSave.bind(this);
    }



    
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

  handleSave = (element) => {
    const { data } = this.state;
    console.log(element.innerText);
    console.log(element.id);
    data[0][element.id] = element.innerText;
    this.setState({ data: data }, () => {
      this.updateDb();
    });
  }

  getDataFromDb = () => {
    fetch('http://localhost:3001/api/getData')
      .then((data) => data.json())
      .then((res) => this.setState({ data: res.data }))
      .then(() => console.log(this.state.data));
  };

  updateDb = () => {
    console.log(this.state.data[0]);
    axios.post(strings.PUT_DATA, {
      id: 4,
      update: this.state.data,
    })
      .then((res) => console.log(res));
    axios.delete(strings.DELETE_DATA, {
      id: this.state.data[0].id,
    });
  };

  mapContent = (content, index) => {
    this.parentIndex = index;
    let EditableLI = contentEditable('li');
    return content.map( (item, index) => (
      this.props.isLoggedIn
        ? <EditableLI value={item} key={index} id={"sections[" + this.parentIndex + "].sectionContent.content[" + index + "]"} onSave={this.handleSave}/>
        : <li key={index}>{item}</li>
      
    ));
  }

  mapSectionContent = (sectionContent, index) => {
    this.parentIndex = index;
    if (this.props.isLoggedIn) {
      let EditableP = contentEditable('p');
      return sectionContent.map( (item, index) => (
        <div key={index}>
          {item.title !== "null" && <EditableP value={item.title} style={{fontWeight: 'bold' }} key={index + item.title} id={"sections[" + this.parentIndex + "].sectionContent[" + index + "].title"} onSave={this.handleSave}/>}
          {item.dates !== "null" && <EditableP value={item.dates} key={index + item.dates[2]} id={"sections[" + this.parentIndex + "].sectionContent[" + index + "].dates"} onSave={this.handleSave} />}
          <ul>
          {this.mapContent(item.content, index)}
          </ul>
        </div>
      ));
    } else {
        return sectionContent.map( (item, index) => (
          <div key={index + item.title}>
            {item.title !== "null" && <p><b>{item.title}</b></p>}
            {item.dates !== "null" && <p>{item.dates}</p>}
            <ul>
            {this.mapContent(item.content)}
            </ul>
          </div>
        ));
    }
  }
    
  mapSection = (sections) => {
    let EditableH2 = contentEditable('h2');
    return sections.map( (item,index) => (
      <div key={index + ".sections"}>
        {this.props.isLoggedIn 
          ? <EditableH2 value={item.title} id={"sections[" + index + "].title"} onSave={this.handleSave} />
          :<h2>{item.title}</h2>}
        <div>
          {this.mapSectionContent(item.sectionContent, index)}
        </div>
      </div>
    ));
  }
    
  mapResume = () => {
    if (this.state.data.length > 0) {
      let EditableH1 = contentEditable('h1');
      return (
        <div key="name">
          {this.props.isLoggedIn 
            ? <EditableH1 value={this.state.data[0].name} id="name" onSave={this.handleSave} />
            : <h1>{this.state.data[0].name}</h1>}
          <div>
            {this.mapSection(this.state.data[0].sections)}
          </div>

        </div>
      );
    }
    return <div>Nothing to see here</div>
  }
    
    
  render () {

    return (
      <div>
        {this.mapResume()}
      </div>
    );
  }
}

export default Home;