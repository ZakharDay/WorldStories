import React from 'react'
import { render } from 'react-dom'
import Hello from './Hello'
import Stories from './Stories'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
}

const authURL = "https://www.instagram.com/oauth/authorize/?client_id=79a9886651e94b4081decc663f1e91fd&redirect_uri=http://hack.exchange&response_type=code"



const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
    <Stories />
  </div>
)

render(<App />, document.getElementById('root'))
