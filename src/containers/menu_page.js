import React from "react";
import "./../css/menuPage.css";
import cookie from "react-cookies";
import axios from "axios";

import HomePageNav from "./../components/home_nav_bar";
import ShowBox from "./../components/show_box_home";
import MenuBoxes from "./../components/menu_boxes_component";

//--------------------------Component -----------------------------------------
class MenuPage extends React.Component {
  //--------------------------Constructor-------------------------------------------
  constructor(props){
    super(props);

    this.state = {
      foodtruck:{},
      currentItem:{}
    }
    // Save foodtruck in cookie to variable
    var foodtruckID  = cookie.load("foodtruckCurrent",{path:"/"});
    //------------------------------Axios Foodtruck Inialization-----------------------------
      // Find all foodtrucks in database and save into variable
    axios.get("/api/trucks").then((response)=>{
      var trucks = response.data;
        // Loop through each truck object
      for(var i = 0; i<trucks.length;i++){
        // If the selected truck's id matches the looped trucks
          //Save the currently looped truck into the state
        if(foodtruckID === trucks[i].objectID){
          this.setState({foodtruck:trucks[i]});
          this.props.SetTruck(trucks[i]);
          break;
        }
      }
    });
    //----------------------Binders---------------------------------------------------------------------------------

    this.SetItem = this.SetItem.bind(this);
  }
//-----------------------------------------Saved Selected Item to Cookie and State--------------------------------------
  SetItem(item){
    this.setState({item:item});
    cookie.save("currentItem",item);
    this.props.changeURL("modify");
  }

//------------------------------------------------Renderer----------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
  render(){
    return(
      <div>

        <HomePageNav  PostAddress = {this.props.PostAddress}  changeZip = {this.props.zip} changeAddress = {this.props.changeAddress} SetAddress = {this.props.SetAddress} address = {this.props.address}changeFlag = {this.changeFlag}  changeURL = {this.props.changeURL} googleMap={this.state.flag} navStyle ="white"/>

        <ShowBox foodtruck = {this.state.foodtruck} />

        <div className="menux">
          <MenuBoxes SetItem={this.SetItem} foodtruck = {this.state.foodtruck} />
        </div>

    </div>
    )
  }
}


export default MenuPage;
