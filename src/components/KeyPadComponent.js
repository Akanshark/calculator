import React, { Component } from "react";

class KeyPadComponent extends Component {
  render() {
    return (
      <div className="button">
        <button name="1" onClick={e => this.state.onClick(e.target.name)}>
          1
        </button>
        <button name="2" onClick={e => this.state.onClick(e.target.name)}>
          2
        </button>
        <button name="3" onClick={e => this.state.onClick(e.target.name)}>
          3
        </button>
        <button name="add" onClick={e => this.state.onClick(e.target.name)}>
          Add(+)
        </button>
        <br />
        <button name="4" onClick={e => this.state.onClick(e.target.name)}>
          4
        </button>

        <button name="5" onClick={e => this.state.onClick(e.target.name)}>
          5
        </button>
        <button name="6" onClick={e => this.state.onClick(e.target.name)}>
          6
        </button>
        <button
          name="subtract"
          onClick={e => this.state.onClick(e.target.name)}
        >
          Subtract(-)
        </button>
        <br />
        <button name="7" onClick={e => this.state.onClick(e.target.name)}>
          7
        </button>
        <button name="8" onClick={e => this.state.onClick(e.target.name)}>
          8
        </button>
        <button name="9" onClick={e => this.state.onClick(e.target.name)}>
          9
        </button>
        <button
          name="multiply"
          onClick={e => this.state.onClick(e.target.name)}
        >
          Multiply(*)
        </button>
        <br />
        <button name="clear" onClick={e => this.state.onClick(e.target.name)}>
          Clear
        </button>
        <button name="0" onClick={e => this.state.onClick(e.target.name)}>
          0
        </button>
        <button name="=" onClick={e => this.state.onClick(e.target.name)}>
          =
        </button>
        <button name="divide" onClick={e => this.state.onClick(e.target.name)}>
          Divide(/)
        </button>
        <br />
        <br />
      </div>
    );
  }
}

export default KeyPadComponent;
