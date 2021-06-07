import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
 
  render() {
    return (
      <div>
        <button onClick={this.props.onRest} className="btn btn-primary btn-sm">
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={() => this.props.onDelete(counter.id)}
            onIncrease={() => this.props.onIncremental(counter.id)}
            onDecrease={() => this.props.onDecremental(counter.id)}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
