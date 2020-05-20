import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   tags: ["tag1", "tag2", "tag3"],
  // };

  // styles = {
  //   fontSize: 15,
  //   fontWeight: "bold",
  // };

  // handleIncrement = () => {
  //   // console.log("Increment clicked!!", this);
  //   // this.state.value++; it won't work
  //   this.setState({
  //     value: this.state.value + 1,
  //   });
  // };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>"There are no tags"</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>tag</li>
  //       ))}
  //     </ul>
  //   );
  // }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value == 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value == 0 ? "Zero" : value;
  }

  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-info btn-sm m-2"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-dark btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            X
          </button>
        </div>
        {/* {this.state.tags.length === 0 && "Please create a new Tag"}
        <ul>{this.renderTags()}</ul> */}
      </div>
    );
  }
}

export default Counter;
