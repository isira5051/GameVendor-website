
import React, { Component } from "react";
class Home
 extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <img src="https://o.remove.bg/downloads/1b655a48-6dd1-4c25-af61-07ece751e175/pdctb8wcsok5vtnkk4qabf8ac6dokdy6yepm4kqin9jafzjw3c4rafwbu4qieqre--removebg-preview.png" width={600} height={400} style={{marginLeft:'940px', marginTop:'300px'}}></img>
               
                <br/><br/><br/><br/>
                <div className="row">
                    <div className="col-6">
                    <a href="/Register"><button className="custom-button-class" style={{marginLeft:'1000px', backgroundColor:'white'}}>Register</button></a><br/>
                    </div>
                    <div className="col-6">
                    <a href="/LogIn"><button className="custom-button-class" style={{marginLeft:'30px', backgroundColor:'white'}}>Log In</button><br/></a>
                    </div>
                </div>



            </React.Fragment>
        );
    }
}
 
export default Home
;