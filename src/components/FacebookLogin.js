import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

class FacebookLoginComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userID: "",
      name: "",
      email: "",
      picture: "",
    };
  }
  componentDidMount() {
    console.log("Component mounted", this);
  }
  responseFacebook = (response) => {
    console.log(response);
    this.setState({
      isLoggedIn: true,
    });
  };
  componentClicked = () => console.log("clicked");

  render() {
    if (this.state.isLoggedIn) {
      return (
        <FacebookLogin
          appId="2817176791850382"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          redirectUri={{ pathname: "/" }}
        />
      );
    } else {
      return null;
    }
  }
}
export default FacebookLoginComp;
