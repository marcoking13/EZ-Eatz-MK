import React from "react";

import "./../css/home_page.css";



class ShowBox extends React.Component {
    // JSX for the menu showcase
    // Shows the background image, name, rating, and checkout button
    renderStars(){
      var html = [];
      var stars;
      if(!this.props.foodtruck.stars){
        stars = 3;
      }else{
        stars = this.props.foodtruck.stars;
      }
      for(var i =0; i < stars; i++){
        html.push(<img alt="star" className="starL" src="assets/images/star.png"/>)
      }
      return html;
    }
  render(){
    // background of foodtruck
    var background = this.props.foodtruck.background;
    return(
      <div className="showCaseBox">

        <img alt="banner" className="banner"src={background}/>

          <div className="row menuBoxB">
            <div className="col-3"/>

            <div className="col-6 jumbotron">
                <img  alt = "logo"src={this.props.foodtruck.logo}className="logoMenu"/>
                <h4 className="menuTitle">{this.props.foodtruck.name}</h4>

                <div className="row">
                  <div className="col-4"/>

                  <div className="col-4">
                      {this.renderStars()}
                  </div>

                  <div className="col-4"/>
                </div>
                <p className="menuTitle mt5 type">All American</p>

                <div className="buttonContainer">
                  <button className="menuOP btn-secondary btn"
                    onClick = {()=>{
                      var formattedAddress = this.props.truck.address.street + "," + this.props.truck.address.state + "," + this.props.truck.address.zip
                      this.props.SetAddress(formattedAddress);
                      this.props.changeURL("map");
                      console.log(formattedAddress);

                    }}

                  >View in Maps</button>

                </div>

            </div>

            <div className="col-3"/>

          </div>

    </div>
  );
  }
}

export default ShowBox;