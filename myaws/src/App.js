import React from 'react';
import awsconfig from './aws-exports'

import './App.css';
import * as firebase from 'firebase';
import Amplify, { Analytics } from 'aws-amplify';
import { withAuthenticator, S3Album } from 'aws-amplify-react';
import Storage from '@aws-amplify/storage'
import Auth from '@aws-amplify/auth'

Amplify.configure(awsconfig);

const config={

  apiKey: "AIzaSyCztPfexNvALx3rCugajf4_SAqUNcJukDw",
  authDomain: "awsapp-df1cd.firebaseapp.com",
  databaseURL: "https://awsapp-df1cd.firebaseio.com"
  
  

}
firebase.initializeApp(config);

// Storage.configure(amplifyConfig.Storage.AWSS3)
class App extends React.Component{


state={
photo:""
}

uploadFile = (evt) => {
  const file = evt.target.files[0];
  const name = file.name;
  console.log(name);
  console.log(file.path);

  Storage.put(name, file).then(() => {
    this.setState({ file: name });
  })
}

componentDidMount() {
  Analytics.record('Amplify_CLI');
}

render() {
  return (
    <div className="App">
    <p> Pick a file</p>
    <input type="file" onChange={this.uploadFile} />

    <S3Album level="private" path='' />
    
  </div>
  );
}
}



export default App;
