import React from "react";
import { Link } from "react-router";

import Footer from "./shared/Footer";
import Nav from "./shared/Nav";

export default class Layout extends React.Component {
  render() {
    console.log("layout");
    return (
      <div>

        <Nav/>

        <div class="container navMargin">
          <div class="row">
            <div class="col-lg-12">
              <h1>Clarence Page</h1>

              {this.props.children}

            </div>
          </div>
          <Footer/>
        </div>
      </div>

    );
  }
}