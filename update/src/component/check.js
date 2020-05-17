import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import CountUp from "react-countup";

class Check extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      n: [],
    };
  }

  componentDidMount = () => {
    var a = this.props.all;

    this.setState({
      n: a,
    });
  };

  render() {
    const { data } = this.props;

    return (
      <tr>
        <td>{data.country}</td>
        <td style={{ color: "blue" }}>
          {data.cases > 0 ? (
            <CountUp end={parseInt(data.cases)} duration={5} />
          ) : (
            data.cases
          )}
        </td>
        <td style={{ color: "yellow" }}>
          {" "}
          {data.active > 0 ? (
            <CountUp end={parseInt(data.active)} duration={5} />
          ) : (
            data.active
          )}
        </td>
        <td style={{ color: "red" }}>
          {" "}
          {data.deaths > 0 ? (
            <CountUp end={parseInt(data.deaths)} duration={5} />
          ) : (
            data.deaths
          )}
        </td>
        <td style={{ color: "green" }}>
          {" "}
          {data.recovered > 0 ? (
            <CountUp end={parseInt(data.recovered)} duration={5} />
          ) : (
            data.recovered
          )}
        </td>
        <td style={{ color: "#FA8072" }}>{data.critical}</td>
        <td style={{ color: "#B8860B" }}>
          {data.todayCases > 0 ? "+" + data.todayCases : data.todayCases}
        </td>
        <td style={{ color: "#DC143C" }}>
          {" "}
          {data.todayDeaths > 0 ? "+" + data.todayDeaths : data.todayDeaths}
        </td>
      </tr>
    );
  }
}

export default Check;
