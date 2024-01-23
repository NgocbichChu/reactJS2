import React, { Component } from "react";
import data from "./dataGlasses.json";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Img: "./glassesImage/model.jpg",
      ImgChange: "",
      data: null,
      selectedDescription: "",
    };
  }

  data = () => {
    this.setState({ data });
  };

  handleChangeGlasses = (ImgChange, selectedDescription) => {
    this.setState({
      ImgChange: ImgChange,
      selectedDescription,
    });
  };

  render() {
    const { data, selectedDescription } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid model" src={this.state.Img} alt="" />
            <img
              className="img-fluid glass"
              src={this.state.ImgChange}
              alt=""
            />

            {/* <div className="des">
              <h3>namw</h3>
              <h4>gia</h4>
              <h5>mo ta</h5>
            </div> */}
          </div>
          <div className="col-md-6">
            <div className="buttonGlasses">
              <button
                className="btn "
                onClick={() => {
                  this.handleChangeGlasses("./glassesImage/v1.png");
                }}
              >
                <img
                  src="./glassesImage/g1.jpg"
                  alt=""
                  style={{ width: "80px" }}
                />
              </button>
              <button
                className="btn "
                onClick={() => {
                  this.handleChangeGlasses("./glassesImage/v2.png");
                }}
              >
                <img
                  src="./glassesImage/g2.jpg"
                  alt=""
                  style={{ width: "80px" }}
                />
              </button>
              <button
                className="btn "
                onClick={() => {
                  this.handleChangeGlasses("./glassesImage/v3.png");
                }}
              >
                <img
                  src="./glassesImage/g3.jpg"
                  alt=""
                  style={{ width: "80px" }}
                />
              </button>
              <button
                className="btn "
                onClick={() => {
                  this.handleChangeGlasses("./glassesImage/v4.png");
                }}
              >
                <img
                  src="./glassesImage/g4.jpg"
                  alt=""
                  style={{ width: "80px" }}
                />
              </button>
              <button
                className="btn "
                onClick={() => {
                  this.handleChangeGlasses("./glassesImage/v5.png");
                }}
              >
                <img
                  src="./glassesImage/g5.jpg"
                  alt=""
                  style={{ width: "80px" }}
                />
              </button>
              <button
                className="btn "
                onClick={() => {
                  this.handleChangeGlasses("./glassesImage/v6.png");
                }}
              >
                <img
                  src="./glassesImage/g6.jpg"
                  alt=""
                  style={{ width: "80px" }}
                />
              </button>
              <button
                className="btn "
                onClick={() => {
                  this.handleChangeGlasses("./glassesImage/v7.png");
                }}
              >
                <img
                  src="./glassesImage/g7.jpg"
                  alt=""
                  style={{ width: "80px" }}
                />
              </button>
              <button
                className="btn "
                onClick={() => {
                  this.handleChangeGlasses("./glassesImage/v8.png");
                }}
              >
                <img
                  src="./glassesImage/g8.jpg"
                  alt=""
                  style={{ width: "80px" }}
                />
              </button>
              <button
                className="btn "
                onClick={() => {
                  this.handleChangeGlasses("./glassesImage/v9.png");
                }}
              >
                <img
                  src="./glassesImage/g9.jpg"
                  alt=""
                  style={{ width: "80px" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
