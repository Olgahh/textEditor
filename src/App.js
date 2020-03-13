import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

const stylings = ["bold", "italic", "underline"];

const colors = ["yellow", "blue", "red", "black", "purple"];

class App extends Component {
  state = {
    // bold: false,
    // italic: false,
    // underline: false,
    color: "black"
  };
  getColor = color => this.setState({ color: color });
  getStyling = style => this.setState({ [style]: !this.state[style] });

  render() {
    const colorBoxes = colors.map(color => {
      const isCurrentColor = color === this.state.color;
      const size = isCurrentColor ? 40 : 30;
      return (
        <button
          className="btn mx-1 mb-5"
          style={{ backgroundColor: color, height: size, width: 30 }}
          key={color}
          onClick={() => this.getColor(color)}
        />
      );
    });
    const stylingBoxes = stylings.map(style => {
      return (
        <button
          // className="btn btn-light"
          className={`btn mx-1 mt-5 ${
            this.state[style] ? "btn-success" : "btn-outline-success"
          }`}
          style={styles[style]}
          key={style}
          onClick={() => this.getStyling(style)}
        >
          {style}
        </button>
      );
    });

    return (
      <body className="mx-5 px-5" style={{ backgroundColor: "pink" }}>
        <div className="App">
          <div className="my-3">{stylingBoxes}</div>
          <textarea
            style={{
              color: this.state.color,
              fontStyle: this.state.italic ? "italic" : "",
              fontWeight: this.state.bold ? "bold" : "",
              textDecorationLine: this.state.underline ? "underline" : ""
            }}
          />
          <div className="my-3">{colorBoxes}</div>
        </div>
      </body>
    );
  }
}
export default App;
