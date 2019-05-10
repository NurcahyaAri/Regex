import React, {Component} from 'react';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      email : "",
      regex : new RegExp('@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'),
      isValidMail : false,
      vendor : ''
    }
    this.checkIsEmail = this.checkIsEmail.bind(this)
  }

  checkIsEmail = () => {
    let mail = this.state.regex.exec(this.state.email)
    if(mail !== null){
      this.setState({
        isValidMail : true,
        vendor : mail[4]
      })
    } else {
      this.setState({
        isValidMail : false,
        vendor : ''
      })
    }
  }

  render(){
    return (
      <div className="container">
        <div class="form-group">
          <label for="exampleInputEmail1">Enter A Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="exampleInputEmail1" 
            onChange = {e => {
              this.setState({
                email : e.target.value
              }, () => {
                this.checkIsEmail()
              })
            }}
            placeholder="Enter email"/>
        </div>  
        email yang anda ketikan adalah : {this.state.email}
        <div id="responseData">
            {
              this.state.isValidMail? 
              `dengan vendor ${this.state.vendor}` : "Maaf itu bukan alamat email"
            }
        </div>
      </div>
    );
  }
}

export default App;
