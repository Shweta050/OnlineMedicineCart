import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, withRouter} from 'react-router-dom';
import axios from 'axios';

class Category extends Component {
    constructor() {
        super();
        this.state = {
            categories: [],
        };
    }


    componentDidMount() {
        let initialCategory= [];
        fetch(`http://localhost:5000/category`)
        .then(response => {
            return response.json();
        }).then(data => {
            initialCategory = data.results.map((category) => {
            return category
        });
        console.log(initialCategory);
        this.setState({
            categories: initialCategory,
        });
    });
}

  render() {
    
    return( 
        <Category state={this.state}/>
    );
  }
}
  export default Category;


