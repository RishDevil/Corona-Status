import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import CountUp from "react-countup";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, value, c, time } = this.props;
    var date = "";
    date = new Date(parseInt(time)).toString();

    var classbody = "card ";

    switch (this.props.c) {
      case 0:
        classbody += "bg-success ";
        break;
      case 1:
        classbody += "bg-danger ";
        break;
      case 2:
        classbody += "bg-primary ";
        break;
      case 3:
        classbody += "bg-warning ";
        break;
    }
    return (
      <div class={classbody}>
        <div class="card-body ">
          <h4 class="card-title ">{title}</h4>
          <p class="card-text">
            {value > 0 ? <CountUp end={parseInt(value)} duration={5} /> : ""}
          </p>
          {/* <p> {date == "" ? "" : date}</p> */}
        </div>
      </div>
    );
  }
}

export default Card;

// function Card(props) {
//   const { title, value, c } = props;
//   //   const [values, setValue] = useState(0);
//   //   useEffect(() => {
//   //     setValue(parseInt(props.value));
//   //     console.log(props.value);
//   //   }, []);

//   var classbody = "card ";

//   switch (c) {
//     case 0:
//       classbody += "bg-success ";
//       break;
//     case 1:
//       classbody += "bg-danger ";
//       break;
//     case 2:
//       classbody += "bg-primary ";
//       break;
//     case 3:
//       classbody += "bg-warning ";
//       break;
//   }
//   console.log(value);
//   return (
// <div class={classbody}>
//   <div class="card-body ">
//     <h4 class="card-title ">{title}</h4>
//     <p class="card-text">
//       <CountUp end={value} duration={5} delay={2} />
//     </p>
//   </div>
// </div>
//   );
// }

// export default Card;
