import React from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";
import SelectedBeast from "./component/SelectedBeast";
import DataForm from "./component/DataForm";
import JsonData from "./component/data.json";

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      selected: {
        title: '',
        image_url: '',
        description: '',
      },
      chosen: null,
      filtered: null,
    };
  }
  showCard = (beastObject) => {
    this.setState({
      show: true,
      selected: beastObject
    });
  }
  hideCard = () => {
    this.setState({
      show: false,
    });

  }
  filterData = (form) => {
    if (form === 0) {
      this.setState({ filtered: null })
    } else {
      console.log('form==', typeof form);;
      let filteredArr = JsonData.filter(element => element.horns == form);
      console.log('====================================', filteredArr);
      this.setState({ filtered: filteredArr })
    }
  }
  render() {
    // console.log(this.state.JsonData);
    console.log('==================================== staaaaaaaaaaaaaaaaaaat', this.state.filtered);
    return (
      <>
        < Header />
        <DataForm filterData={this.filterData} />
        < Main showCard={this.showCard} filtered={this.state.filtered} />
        <SelectedBeast show={this.state.show} hideCard={this.hideCard} selected={this.state.selected} />
        < Footer />
      </>
    )
  }
}

export default App;