import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from './components/Form';
import './App.css';

export default class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        showForm: false,
        post: {
          name: "",
          description: "",
          level: "Junior",
          salary: 30000
        },
        jobs: []
      };
    }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState(prevState => ({
      post: { ...prevState.post, [name]: value }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState(prevState => ({
      jobs: [...prevState.jobs, prevState.post],
      post: { name: "", description: "", level: "", salary: 30000},
      showForm: false
    }));
    console.log(this.state.showForm)
  };

  toggleForm = () => {
    this.setState(prevState => ({
      showForm: !prevState.showForm
    }))
    console.log(this.state.showForm)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">🎉 Find Your Dream Dev Job 🌵</h1>
        </header>
        <nav>
        { !this.state.showForm && <button onClick={this.toggleForm}className="btn btn-primary">Post Job!</button> }

        </nav>
          <div className="form-container">

          {
            this.state.showForm && <Form
            handleChange={this.handleChange}
            post={this.state.post}
            handleSubmit={this.handleSubmit}
            />

          }

        </div>
        <div className="post-container">
          <ul>
            {this.state.jobs.map((job, index) => (
              <li key={index}>
                <ul className="post-tile">
                  <li className="post-tile-name">{job.name}</li>
                  <li className="post-tile-level">{job.level}</li>
                  <li className="post-tile-description">{job.description}</li>
                  <li className="post-tile-salary">£{job.salary}</li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
