import React, {Component} from 'react';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      email : "",
      regex : new RegExp('(?<=@)[^.]+(?=\.)'),
      isValidMail : false,
      vendor : '',
      mailVendorList : ['google', 'Microsoft', 'Yahoo']
    }
    this.checkIsEmail = this.checkIsEmail.bind(this)
    this.mailVendor = this.mailVendor.bind(this)
  }

  checkIsEmail = () => {
    let mail = this.state.regex.exec(this.state.email)
    if(mail !== null){
      this.setState({
        isValidMail : true,
        vendor : mail
      })
    } else {
      this.setState({
        isValidMail : false,
        vendor : ''
      })
    }
  }

  mailVendor = () => {
    if(this.state.vendor === "gmail"){
      return "Google"
    }
    else if(this.state.vendor === "outlook"){
      return "Microsoft"
    }
    else if(this.state.vendor === "ymail"){
      return "Yahoo"
    }
    else {
      return "Tidak ada di list"
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
              `dengan Domain ${this.state.vendor}` : "Maaf itu bukan alamat email"
            }
        </div>
      </div>
    );
  }
}

export default App;
