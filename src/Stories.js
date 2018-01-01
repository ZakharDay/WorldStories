import React from 'react'

export default class Stories extends React.Component {

  constructor(props) {
    super(props)
    const authURL = "https://www.instagram.com/oauth/authorize/?client_id=79a9886651e94b4081decc663f1e91fd&redirect_uri=http://hack.exchange&response_type=code"
    const clientID = "79a9886651e94b4081decc663f1e91fd"
    const token = "5ec080db374a46ab9f217e477aac9b66"
    this.props = {
      authURL: authURL,
      clientID: clientID,
      token: token
    }
    this.state = {}
  }
  
  componentDidMount() {
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
}
