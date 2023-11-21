
import React, { Component } from "react";
import { useState } from "react";
import axios from "axios";
class Register extends Component {
    
    state = { 
        chekBoxes1:false,
        chekBoxes2:false,
        FirstName:'',
        LastName:'',
        Email:'',
        Username:'',
        Password:'',
        Repassword:'',
        canProceed:false,
     

     } 





     handleCheckboxChange1 = () => {
        this.setState((prevState) => ({
          chekBoxes1: !prevState.chekBoxes1,
        }));
      };
      handleCheckboxChange2= () => {
        this.setState((prevState) => ({
          chekBoxes2: !prevState.chekBoxes2,
        }));
      };

      handleProceed = ()=>
      {
        const data = {
            FirstName : this.state.FirstName,
            LastName : this.state.LastName,
            Email:this.state.Email,
            Username:this.state.Username,
            Password:this.state.Password
        };    



            if(this.state.FirstName!=="" && this.state.LastName !== '' && this.state.Email !== "" && this.state.Username !== '' && this.state.Password !== '')
            {
               
                if(this.state.Repassword === "")
                {
                    alert("Re-type Password!")
                }
                else if(this.state.chekBoxes1 === true && this.state.chekBoxes2 === true)
                {
                    if(this.state.Password === this.state.Repassword)
                    {
                        if(this.state.Password.length < 5)
                        {
                            alert("Password Is Weak")
                        }
                        else
                        {
                            const tempEmail = this.state.Email
                            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
       
                            const isValid = emailPattern.test(tempEmail);
                            if(isValid === false)
                            {
                                alert("Enter A Valid Email Address!")
                            }

                            else{
                                axios.post('http://localhost:3001/RegisterData', data)
                                .then(response => {
                                    console.log('success')
                                    console.log('Data:', response.data);
                                    if (response.data.message === 'User Exists')
                                    { 
                                        alert("Sorry Username Taken");
                                    } else if (response.data.message === 'Success') { 
                                        alert("Thank You " + this.state.Username);
                                    }
                                    
                                    else if(response.data.message == 'Email Exists')
                                    {
                                        alert("Sorry Email Already Exists")
                                    }
                                })
                                .catch(error => {
                                    console.error('Error:', error);
                                });
                            }
                         
                            
                           

                        }
                    }
                    else
                    {
                        alert("Passwords Don't Match!")
                    }
                }
                   
                else
                {
                    alert('Please Check Checkboxes')
                }
            }
            else
            {
                alert("Please Fill All Details!")
            }
      }

     
     
   
    render() { 
        
        

        return (
            <React.Fragment>
                <img src="/images/pdctb8wcsok5vtnkk4qabf8ac6dokdy6yepm4kqin9jafzjw3c4rafwbu4qieqre--removebg.png" width={600} height={400} style={{marginLeft:'940px', marginTop:'30px'}}></img>
                <div className="container" style={{ marginTop: '40px' }}>
                <input
                        className="form-control"
                        placeholder="First Name"
                        size={80}
                        onChange={event => this.setState({ FirstName: event.target.value })} 
                    ></input><br/><br/><br/>
                    <input
                        className="form-control"
                        placeholder="Last Name"
                        size={80}
                        onChange={event => this.setState({ LastName: event.target.value })} 
                    ></input><br/><br/><br/>
                    <input
                        className="form-control"
                        placeholder="Email"
                        size={80}
                        onChange={event => this.setState({ Email: event.target.value })} 
                    ></input><br/><br/><br/>
                    <input
                        className="form-control"
                        placeholder="prefered username"
                        size={80}
                        onChange={event => this.setState({ Username: event.target.value })} 
                    ></input><br/><br/><br/>
                    <input
                        className="form-control"
                        type="password"
                        placeholder="password"
                        size={80}
                        onChange={event => this.setState({ Password: event.target.value })} 
                    ></input><br/><br/><br/>
                    <input
                        className="form-control"
                        type="password"
                        size={80}
                        onChange={e => this.setState({ Repassword: e.target.value })} 
                    ></input><br/><br/><br/>
                    <div className="row">
                    <div className="col-2">
                    <input class="form-check-input" type="checkbox" value="" id="simpleCheckbox1"  onChange={this.handleCheckboxChange1} style={{marginLeft:'0px'}}/>
                        <label class="form-check-label" for="simpleCheckbox" style={{marginLeft:'20px'}}>
                        <h6  style={{color:'white'}}>I'm Over 16</h6>
                        </label>
                        </div>
                        
                    <div className="col-8">
                        <input class="form-check-input" type="checkbox" value="" id="simpleCheckbox2"  onChange={this.handleCheckboxChange2} style={{marginRight:'30px'}}/>
                        <label class="form-check-label" for="simpleCheckbox" style={{marginRight:'360px'}}>
                        <h6 style={{color:'white'}}>Terms And Conditions</h6>
                        </label>
                    </div><br/><br/><br/>
                    <div className="col-6">
                        <button className="custom-button-class-signUp"  style={{width:'200px', height:'48px', marginLeft:'400px'} } onClick={this.handleProceed}>Sign Up</button>
                    </div>
                    <div className="col-3">
                        <a href="/LogIn" style={{marginRight:'500px', marginTop:'120px'}}><h6>Log In</h6></a>
                    </div>
                    </div>
                  
                </div>
            </React.Fragment>
        );
    }
}
 
export default Register;