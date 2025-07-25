import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Vivek",
      initials: "vk",
      info: [
        { title: "Birthday", text: "Sep24, 2004" },
        { title: "Address", text: "India" },
        { title: "Age", text: "20" },
        { title: "Email", text: "vivek@gmail.com" },

      ],
    };
  }
  render() {
    const {
        firstName,
        initials,
        info
    }= this.state
    return (
      <React.Fragment>
        <section className="card-container">
          <span initials={initials}></span>
          <header>{firstName}</header>
          <main>
            <ul>
                {info.map((row,index) => {
                    return(
                        <li key={index}>
                             <span>{row.title}</span>
                             {row.text?row.text:'n/a'}
                         </li>
                    )
                })}
              
            </ul>
          </main>
        </section>
      </React.Fragment>
    );
  }
}

export default Card;
