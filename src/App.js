import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  decrementalNumber = (counterId) => {
    const counters = [...this.state.counters];
    counters.map((c) => (c.id == counterId ? c.value-- : c));
    this.setState({ counters });
  }

  sumNumbers = (sum) => {
    let sum1 = 0,
      sum2 = 0;
    for (let i = 0; i < this.state.counters.length; i++) {
      sum1 = this.state.counters[i].value;
      sum2 = sum2 + sum1;
    }

    return sum2;
  };

  //这里为什么c后面是大括号呢 是因为两行语句？
  resetAll = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  //这里如果返回counter对象 然后用counters.indexOf(counter)为什么查不到呢 counters返回的是state，counter返回的是{ id:1,value:0}
  incrementalNumber = (counterId) => {
    const counters = [...this.state.counters];
    counters.map((c) => (c.id == counterId ? c.value++ : c));
    this.setState({ counters });
  };

  deleteLine = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id != counterId
    );
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          onCount={this.state.counters.filter((c) => c.value != 0).length}
          onSum={this.sumNumbers}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.deleteLine}
            onRest={this.resetAll}
            onIncremental={this.incrementalNumber}
            onDecremental={this.decrementalNumber}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
