import React from 'react'

class Stories extends React.Component {

  constructor(props) {
    super(props)
    const authURL = "https://www.instagram.com/oauth/authorize/?client_id=79a9886651e94b4081decc663f1e91fd&redirect_uri=http://hack.exchange&response_type=code"
    const clientID = "79a9886651e94b4081decc663f1e91fd"
    this.props = {
      authURL: authURL,
      clientID: clientID
    }
    this.state = {token: ""}
  }
  
  componentDidMount() {
    this.state = {token: this.httpGet(this.props.authURL)}
  }
  
  httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
  }
  
  render() {
    return(
      <div>{this.state.token}</div>
    ) 

}
