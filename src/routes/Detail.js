import React from "react";
import "./Detail";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="detail">
          <div className="detail_Data">
            <h3> {location.state.title} </h3>
            <h5> {location.state.summary} </h5>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
console.log("a");

export default Detail;
