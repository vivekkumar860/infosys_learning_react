import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <React.Fragment>
        <section className='card-container'>
            <span initials='vk'></span>
            <header>Vivek</header>
            <main>
                <ul>
                    <li><span>Birthday</span>SEP 24,2004</li>
                    <li><span>Address</span>India</li>
                    <li><span>Age</span>20</li>
                </ul>
            </main>
        </section>
       </React.Fragment>
       
    )
  }
}

export default Card;
