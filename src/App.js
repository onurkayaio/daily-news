import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// containers
import Home from "./containers/home";
import News from "./containers/news";

// components
import Header from "./components/header";
import Footer from "./components/footer";
import Gallery from "./containers/gallery";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/news/:id" component={News} />
            <Route exact path="/galleries/:id" component={Gallery} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
