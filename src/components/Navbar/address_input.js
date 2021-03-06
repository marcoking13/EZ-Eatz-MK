import React from "react";
import cookies from "react-cookies";

class AddressInput extends React.Component{


  render(){
    // if there is no address passed down then check cookie to retrieve user's address
    // if there is no cookie default text will appear
    if(!this.props.addressAvailable){
        // Cookie of address
      var address = cookies.load("address",{path:"/"});
      // if there is no cookie then make address default text say Enter Address
      if(!address || address === undefined){
        address = "Enter Address";
      }
      // Returns the JSX of the addressbox with no input
      return (
        <div className="moveUpNav pt20px">

          <div className="p5px pt20px text-center w200px" onClick = {()=>{
            this.props.changeAddressInput(true);
            }}>{address}
          </div>

        </div>
        );
        // if address box is active then show JSX of input and search button
      }else{

        return(
          <div  className="container-fluid inputFormation">
            <form>
              <div className="row ">
                <div className="col-3"/>
                <div className="col-4 p0">
                  <br />
                  <input type="text" onChange={(e)=>{this.props.changeAddress(e)}}  className="form-control " value = {this.props.address}placeholder="Enter street, state and city" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                </div>

                <div className="col-3 p0">
                  <br />
                  <button className="button ui  black w100 fl " onClick = {(event)=>{
                    event.preventDefault();
                    cookies.remove("address",{path:"/"});
                    cookies.save("address",this.props.address,{path:"/"});
                    this.props.changeAddressInput(false);
                    this.props.PostAddress(this.props.address,JSON.parse(cookies.load("account",{path:"/"})));
                    this.props.SetAddress(this.props.address);
                  }}
                  >Search</button>
                </div>
              </div>
            </form>
          </div>
      );

    }

  }
}

export default AddressInput;
