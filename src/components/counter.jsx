import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-1" style={ { paddingTop: "5px",textAlign:"center" }}>
          <h4
            className={
              this.props.counter.value == 0 ? "bg-warning" : "bg-danger"
            }
          >
            {this.props.counter.value == 0 ? "zero" : this.props.counter.value}
          </h4>
        </div>
        <div className="col-11">
          <button
            onClick={() => this.props.onIncrease(this.props.counter.id)}
            className="btn btn-primary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrease(this.props.counter.id)}
            className="btn btn-primary btn-sm m-2"
            disabled={ this.props.counter.value === 0 ? 'disabled' : ''}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
