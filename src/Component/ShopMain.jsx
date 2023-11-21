import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from 'react-router-dom';


function ShopMain()
{
    const {state} = useLocation();
    const { Username } = state || {};
    const[num,setNum] = useState(0);
    const [id,setid] = useState('')
    const [cartTot,setCartTot] = useState(0);
    const[gtavNum , setgtavNum] = useState(0);
    const[reddeadredemptionNum , setreddeadredemptionNum] = useState(0);
    const[gtatrilogyNum , setgtatrilogyNum] = useState(0);
    const[fc24Num , setfc24Num] = useState(0);
    const[fs2020Num , setfs2020Num] = useState(0);
    
    
    const [cart, setCart] = useState([[], []]);
  
    const increase =  (str) => {
        
        setid(str);
       
      }
    const decrease = (str)=>
    {
       
        
        
    }

    const addToCart = (item_No, id, num) => {
        if (num > 0) {
          const updatedCart = [...cart]; 
          if (!updatedCart[item_No]) {
            updatedCart[item_No] = [];
          }
          
          updatedCart[item_No].push(id);
          updatedCart[item_No].push(num);
          setCart(updatedCart); 
          
        }
        setCartTot(cartTot + num)
      };
    

    

     
        return (
            <React.Fragment>
                
                

                <div className="row">
                    <div className="col-8">
                    <center><img src="/images/pdctb8wcsok5vtnkk4qabf8ac6dokdy6yepm4kqin9jafzjw3c4rafwbu4qieqre--removebg.png" width={500} height={300} style={{marginLeft:'770px'}}></img></center>

                    </div>
                    <div className="col-2">
                    <div class="dropdown" style={{marginLeft:'650px', marginTop:'30px', width:'50px'}}>
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                       {Username ? Username : 'Log In'}
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="/MyProfile">{Username ? 'My Profile':""}</a></li>
                        <li><a class="dropdown-item" href="/Register">{Username ? '':'Log In / Sign Up'}</a></li>
                        <li><a class="dropdown-item" href="#">{Username ? 'Log Out':""}</a></li>
                    </ul>
                    </div>

                    </div>
                    <div style={{marginTop:'100px'}} className="col-1">
                        <div className="card-container-temp">
                        <button className="custom-button-class-checkout" onClick={()=>alert(cart)}>Cart</button>
                        <div className="cart-description">
                            <label>Your Cart<br/> {cartTot}</label>
                            <br/>
                            <div>
                                {cart.map((item, index) => (
                                    <div className="row" key={index}>
                                    {item.map((property, propIndex) => (
                                        <div className="col-2" style={{marginLeft:'-5px'}} key={propIndex}>
                                        {property}
                                        </div>
                                    ))}
                                    </div>
                                ))}
                                </div>
                        </div>
                        </div>

                    </div>
                    <div style={{marginTop:'110px', marginLeft:'-115px'}} className="col-1">
                        <label>{cartTot}</label>

                    </div>
                   
                </div>
                <br/>
                <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{background:'url(https://media.istockphoto.com/id/1301156172/photo/light-blue-watercolor-background.jpg?s=612x612&w=0&k=20&c=wQGMe2NQExwSkQ3W_pVw4eSijzvCZUUUBF1-mrOltzE=)', border:'2px solid',borderColor:'white'}}>
                <a class="navbar-brand" href="/ShopMain" style={{marginLeft:'30px'}}>Home</a>
                
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">My Orders </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Requests</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Forum</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/UserDisplayData">User Data</a>
                    </li>
                    
                    </ul>
                </div>
                </nav><br/><br/>
                <div className="row">
                <div class="input-group">
                <div id="search-autocomplete" class="form-outline" className="col-3">
                    <input type="search" id="form1" class="form-control" style={{marginLeft:'62px', border:'3px solid', borderColor:'grey'}} placeholder="Search"/>
                    
                </div>
                <div className="col-4" style={{marginLeft:'83px', marginTop:'-2px'}}>
                <button type="button" class="custom-button-class-search" onClick={()=>alert(Username)}>Go 
                    <i class="fas fa-search"></i>
                </button>
                </div>
                </div>
                </div><br/><br/><br/><br/>
                <div className="row">
                    
                    <div className="col-3">
                    <div class="card" id="gtav" style={{width:'30rem', height:'32.4rem', marginLeft:'60px', border:'4px solid', borderColor:'grey',background: 'url("https://wallpapercave.com/wp/wp3665670.jpg")',  backgroundSize: 'cover', backgroundRepeat: 'no-repeat'} }>
                    <div class="card-body">    
                    <div class="image-container">
                    <img src="https://assets.xboxservices.com/assets/0b/17/0b179504-412d-4af7-9e00-3e3d92633577.jpg?n=GTA-V_GLP-Page-Hero-1084_1920x1080.jpg"  width={100} height={310} style={{width:'100%', marginTop:'-1px', border:'4px solid', boxShadow: '4px 4px 4px #87CEEB'}}/>
                    <div className="image-description">
                    <h7>Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overal</h7>
                    <div className="row">
                            <div className="col-5">
                         
                                <button className="custom-button-class" style={{marginTop:'10px'}}  onClick={()=>{addToCart(0,id,gtavNum)}}><h9>Add To Cart</h9></button>

                            </div>
                            <br/><br/>
                            <div className="col-2" style={{marginTop:'20px', marginLeft:'50px'}}>
                                <p><h11>Add</h11></p>
                            </div>
                            <br/>
                            <div className="col-1" style={{marginLeft:'-9px', marginTop:'15px'}}>
                                <button className="btn btn-primary"
                                        onClick={()=>
                                        {   setgtavNum(gtavNum+1)
                                            increase('gtav')
                                        }}
                                
                                >+</button>
                            </div>
                            <br/>
                            <div className="col-1" style={{marginLeft:'15px', marginTop:'20px'}}>
                                <label>{gtavNum}</label>
                            </div>
                            <div className="col-1" style={{marginLeft:'-10px', marginTop:'14.5px'}}>
                            <button className="btn btn-primary"
                                onClick={() => {
                                    decrease("gtav");
                                    if (gtavNum > 0) {
                                        setgtavNum(gtavNum - 1);
                                    }
                                }}
                            >
                                -
                            </button>
                            </div>
                        </div>
                        <div className="row">
                            
                            <div className="col-5" style={{marginLeft:'270px', marginTop:'10px'}}>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                               Add To Wishlist
                            </label>
                            </div>
                                                        </div>
                        </div>
                     
                    </div>
                    </div>
                    <br/>  
                    
                        <div style={{marginTop:'-210px', marginLeft:'10px' , color:'#696969'}}>
                        <h4 class="card-title" style={{color:'black', textShadow:'2px 2px 2px grey'}}>Gta V</h4 >
                        <p class="card-text" >Experince one of the most sold out games today. Featured Los Santos </p>
                        <div className="row">
                               
                                <div style={{marginLeft:'375px', color:'black', fontWeight:'bold'}}><h9>$ 11.99</h9></div>
                          

                        </div>
                        </div>

                        
                        <br/><br/>
                        






                        
                    </div>
                    </div>
                    </div>
                    <div className="col-3">
                    <div class="card" id="reddeadredemption2" style={{width:'30rem', height:'32.4rem', marginLeft:'60px', border:'4px solid', borderColor:'grey',background: 'url("https://wallpapercave.com/wp/wp3665670.jpg")',  backgroundSize: 'cover', backgroundRepeat: 'no-repeat'} }>
                    <div class="card-body">    
                    <div class="image-container">
                    <img src="https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg?t=1695140956"  width={100} height={310} style={{width:'100%', marginTop:'-1px', border:'4px solid', boxShadow: '4px 4px 4px #87CEEB'}}/>
                    <div className="image-description">
                    <h7>Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and a prequel to the 2010 game Red Dead Redemption</h7>
                    <div className="row">
                            <div className="col-5">
                         
                                <button className="custom-button-class" style={{marginTop:'10px'}} onClick={()=>{addToCart(1,id , reddeadredemptionNum)}}><h9>Add To Cart</h9></button>

                            </div>
                            <br/><br/>
                            <div className="col-2" style={{marginTop:'20px', marginLeft:'50px'}}>
                                <p><h11>Add</h11></p>
                            </div>
                            <br/>
                            <div className="col-1" style={{marginLeft:'-9px', marginTop:'15px'}}>
                                <button className="btn btn-primary"
                                        onClick={()=>
                                            {   setreddeadredemptionNum(reddeadredemptionNum+1)
                                                increase('reddeadredemption2')
                                            }}
                                
                                >+</button>
                            </div>
                            <br/>
                            <div className="col-1" style={{marginLeft:'15px', marginTop:'20px'}}>
                                <label>{reddeadredemptionNum}</label>
                            </div>
                            <div className="col-1" style={{marginLeft:'-10px', marginTop:'14.5px'}}>
                                <button className="btn btn-primary"
                                        onClick={() => {
                                            decrease("reddeadredemption2");
                                            if (reddeadredemptionNum > 0) {
                                                setreddeadredemptionNum(reddeadredemptionNum - 1);
                                            }
                                        }}
                                
                                >-</button>
                            </div>
                        </div>
                        <div className="row">
                            
                            <div className="col-5" style={{marginLeft:'270px', marginTop:'10px'}}>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                               Add To Wishlist
                            </label>
                            </div>
                                                        </div>
                        </div>
                     
                    </div>
                    </div>
                    <br/>  
                    
                        <div style={{marginTop:'-210px', marginLeft:'10px' , color:'#696969'}}>
                        <h4 class="card-title" style={{color:'black', textShadow:'2px 2px 2px grey'}}>Red Dead Redemption 2</h4 >
                        <p class="card-text" >Experince one of the most sold out games today. The third installment of the iconic series </p>
                        <div className="row">
                               
                                <div style={{marginLeft:'375px', color:'black', fontWeight:'bold'}}><h9>$ 11.99</h9></div>
                          

                        </div>
                        </div>

                        
                        <br/><br/>
                        






                        
                    </div>
                    </div>
                    </div>
                    <div className="col-3">
                    <div class="card" id="gtatrilogy" style={{width:'30rem', height:'32.4rem', marginLeft:'60px', border:'4px solid', borderColor:'grey',background: 'url("https://wallpapercave.com/wp/wp3665670.jpg")',  backgroundSize: 'cover', backgroundRepeat: 'no-repeat'} }>
                    <div class="card-body">    
                    <div class="image-container">
                    <img src="https://cdn2.unrealengine.com/egs-grandtheftautothetrilogythedefinitiveedition-rockstargames-s1-2560x1440-26130472112f.jpg"  width={100} height={310} style={{width:'100%', marginTop:'-1px', border:'4px solid', boxShadow: '4px 4px 4px #87CEEB'}}/>
                    <div className="image-description">
                    <h7>Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overal</h7>
                    <div className="row">
                            <div className="col-5">
                         
                                <button className="custom-button-class" style={{marginTop:'10px'}} onClick={()=>{addToCart(2,id,gtatrilogyNum)}}><h9>Add To Cart</h9></button>

                            </div>
                            <br/><br/>
                            <div className="col-2" style={{marginTop:'20px', marginLeft:'50px'}}>
                                <p><h11>Add</h11></p>
                            </div>
                            <br/>
                            <div className="col-1" style={{marginLeft:'-9px', marginTop:'15px'}}>
                                <button className="btn btn-primary"
                                        onClick={()=>
                                            {   setgtatrilogyNum(gtatrilogyNum + 1)
                                                increase('gtatrilogy')
                                            }}
                                
                                >+</button>
                            </div>
                            <br/>
                            <div className="col-1" style={{marginLeft:'15px', marginTop:'20px'}}>
                                <label>{gtatrilogyNum}</label>
                            </div>
                            <div className="col-1" style={{marginLeft:'-10px', marginTop:'14.5px'}}>
                                <button className="btn btn-primary"
                                        onClick={() => {
                                            decrease("reddeadredemption2");
                                            if (gtatrilogyNum > 0) {
                                                setgtatrilogyNum(gtatrilogyNum-1);
                                            }
                                        }}
                                
                                >-</button>
                            </div>
                        </div>
                        <div className="row">
                            
                            <div className="col-5" style={{marginLeft:'270px', marginTop:'10px'}}>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                               Add To Wishlist
                            </label>
                            </div>
                                                        </div>
                        </div>
                     
                    </div>
                    </div>
                    <br/>  
                    
                        <div style={{marginTop:'-210px', marginLeft:'10px' , color:'#696969'}}>
                        <h4 class="card-title" style={{color:'black', textShadow:'2px 2px 2px grey'}}>Gta Triology</h4 >
                        <p class="card-text" >Experince one of the most sold out games today. Featured Los Santos </p>
                        <div className="row">
                               
                                <div style={{marginLeft:'375px', color:'black', fontWeight:'bold'}}><h9>$ 11.99</h9></div>
                          

                        </div>
                        </div>

                        
                        <br/><br/>
                        






                        
                    </div>
                    </div>
                    </div>
                    <div className="col-3">
                    <div class="card" id="fc24" style={{width:'30rem', height:'32.4rem', marginLeft:'60px', border:'4px solid', borderColor:'grey',background: 'url("https://wallpapercave.com/wp/wp3665670.jpg")',  backgroundSize: 'cover', backgroundRepeat: 'no-repeat'} }>
                    <div class="card-body">    
                    <div class="image-container">
                    <img src="https://assets-prd.ignimgs.com/2023/07/10/fc24-1689029623566.jpg"  width={100} height={310} style={{width:'100%', marginTop:'-1px', border:'4px solid', boxShadow: '4px 4px 4px #87CEEB'}}/>
                    <div className="image-description">
                    <h7>Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overal</h7>
                    <div className="row">
                            <div className="col-5">
                         
                                <button className="custom-button-class" style={{marginTop:'10px'}} onClick={()=>{addToCart(3,id,fc24Num)}}><h9>Add To Cart</h9></button>

                            </div>
                            <br/><br/>
                            <div className="col-2" style={{marginTop:'20px', marginLeft:'50px'}}>
                                <p><h11>Add</h11></p>
                            </div>
                            <br/>
                            <div className="col-1" style={{marginLeft:'-9px', marginTop:'15px'}}>
                                <button className="btn btn-primary"
                                         onClick={()=>
                                            {   setfc24Num(fc24Num + 1)
                                                increase('fc24')
                                            }}
                                
                                >+</button>
                            </div>
                            <br/>
                            <div className="col-1" style={{marginLeft:'15px', marginTop:'20px'}}>
                                <label>{fc24Num}</label>
                            </div>
                            <div className="col-1" style={{marginLeft:'-10px', marginTop:'14.5px'}}>
                                <button className="btn btn-primary"
                                        onClick={() => {
                                            decrease("fc24");
                                            if (fc24Num > 0) {
                                                setfc24Num(fc24Num - 1);
                                            }
                                        }}
                                
                                >-</button>
                            </div>
                        </div>
                        <div className="row">
                            
                            <div className="col-5" style={{marginLeft:'270px', marginTop:'10px'}}>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                               Add To Wishlist
                            </label>
                            </div>
                                                        </div>
                        </div>
                     
                    </div>
                    </div>
                    <br/>  
                    
                        <div style={{marginTop:'-210px', marginLeft:'10px' , color:'#696969'}}>
                        <h4 class="card-title" style={{color:'black', textShadow:'2px 2px 2px grey'}}>FC 24</h4 >
                        <p class="card-text" >Experince one of the most sold out games today. Featured Los Santos </p>
                        <div className="row">
                               
                                <div style={{marginLeft:'375px', color:'black', fontWeight:'bold'}}><h9>$ 11.99</h9></div>
                          

                        </div>
                        </div>

                        
                        <br/><br/>
                        






                        
                    </div>
                    </div>
                    </div>
                </div><br/><br/><br/><br/><br/>
                <div className="row">
                    <div className="col-3">
                    <div class="card"  id="flightsimulator2020" style={{width:'30rem', height:'32.4rem', marginLeft:'60px', border:'4px solid', borderColor:'grey',background: 'url("https://wallpapercave.com/wp/wp3665670.jpg")',  backgroundSize: 'cover', backgroundRepeat: 'no-repeat'} }>
                    <div class="card-body">    
                    <div class="image-container">
                    <img src="https://store-images.s-microsoft.com/image/apps.13568.13812224868484781.17992d5a-54a4-4eb9-b62c-fbb7cee6d597.2f281734-d35f-4c07-b654-fa7be94aaa7f"  width={100} height={310} style={{width:'100%', marginTop:'-1px', border:'4px solid', boxShadow: '4px 4px 4px #87CEEB'}}/>
                    <div className="image-description">
                    <h7>Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overal</h7>
                    <div className="row">
                            <div className="col-5">
                         
                                <button className="custom-button-class" style={{marginTop:'10px'}} onClick={()=>{addToCart(3,id,fs2020Num)}}><h9>Add To Cart</h9></button>

                            </div>
                            <br/><br/>
                            <div className="col-2" style={{marginTop:'20px', marginLeft:'50px'}}>
                                <p><h11>Add</h11></p>
                            </div>
                            <br/>
                            <div className="col-1" style={{marginLeft:'-9px', marginTop:'15px'}}>
                                <button className="btn btn-primary"
                                        onClick={()=>
                                            {   setfs2020Num(fs2020Num + 1)
                                                increase('fs2020')
                                            }}
                                
                                >+</button>
                            </div>
                            <br/>
                            <div className="col-1" style={{marginLeft:'15px', marginTop:'20px'}}>
                                <label>{fs2020Num}</label>
                            </div>
                            <div className="col-1" style={{marginLeft:'-10px', marginTop:'14.5px'}}>
                                <button className="btn btn-primary"
                                        onClick={() => {
                                            decrease("fs2020");
                                            if (fs2020Num > 0) {
                                                fs2020Num(fs2020Num - 1);
                                            }
                                        }}
                                
                                >-</button>
                            </div>
                        </div>
                        <div className="row">
                            
                            <div className="col-5" style={{marginLeft:'270px', marginTop:'10px'}}>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                               Add To Wishlist
                            </label>
                            </div>
                                                        </div>
                        </div>
                     
                    </div>
                    </div>
                    <br/>  
                    
                        <div style={{marginTop:'-210px', marginLeft:'10px' , color:'#696969'}}>
                        <h4 class="card-title" style={{color:'black', textShadow:'2px 2px 2px grey'}}>Flight Simulator 2020</h4 >
                        <p class="card-text" >Experince one of the most sold out games today. Featured Los Santos </p>
                        <div className="row">
                               
                                <div style={{marginLeft:'375px', color:'black', fontWeight:'bold'}}><h9>$ 11.99</h9></div>
                          

                        </div>
                        </div>

                        
                        <br/><br/>
                        






                        
                    </div>
                    </div>
                    </div>
                    <div className="col-3">
                    <div class="card" id="godofwar" style={{width:'30rem', height:'32.4rem', marginLeft:'60px', border:'4px solid', borderColor:'grey',background: 'url("https://wallpapercave.com/wp/wp3665670.jpg")',  backgroundSize: 'cover', backgroundRepeat: 'no-repeat'} }>
                    <div class="card-body">    
                    <div class="image-container">
                    <img src="https://media.gamestop.com/i/gamestop/god-of-warHeroTM/god-of-war.jpg?$POI$&w=768&aspect=.66:1"  width={100} height={310} style={{width:'100%', marginTop:'-1px', border:'4px solid', boxShadow: '4px 4px 4px #87CEEB'}}/>
                    <div className="image-description">
                    <h7>Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overal</h7>
                    <div className="row">
                            <div className="col-5">
                         
                                <button className="custom-button-class" style={{marginTop:'10px'}}><h9>Add To Cart</h9></button>

                            </div>
                            <br/><br/>
                            <div className="col-2" style={{marginTop:'20px', marginLeft:'50px'}}>
                                <p><h11>Add</h11></p>
                            </div>
                            <br/>
                            <div className="col-1" style={{marginLeft:'-9px', marginTop:'15px'}}>
                                <button className="btn btn-primary"
                                        onClick={increase}
                                
                                >+</button>
                            </div>
                            <br/>
                            <div className="col-1" style={{marginLeft:'15px', marginTop:'20px'}}>
                                <label>{num}</label>
                            </div>
                            <div className="col-1" style={{marginLeft:'-10px', marginTop:'14.5px'}}>
                                <button className="btn btn-primary"
                                        onClick={decrease}
                                
                                >-</button>
                            </div>
                        </div>
                        <div className="row">
                            
                            <div className="col-5" style={{marginLeft:'270px', marginTop:'10px'}}>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                               Add To Wishlist
                            </label>
                            </div>
                                                        </div>
                        </div>
                     
                    </div>
                    </div>
                    <br/>  
                    
                        <div style={{marginTop:'-210px', marginLeft:'10px' , color:'#696969'}}>
                        <h4 class="card-title" style={{color:'black', textShadow:'2px 2px 2px grey'}}>Gta V</h4 >
                        <p class="card-text" >Experince one of the most sold out games today. Featured Los Santos </p>
                        <div className="row">
                               
                                <div style={{marginLeft:'375px', color:'black', fontWeight:'bold'}}><h9>$ 11.99</h9></div>
                          

                        </div>
                        </div>

                        
                        <br/><br/>
                        






                        
                    </div>
                    </div>
                    </div>
                    <div className="col-3">
                    <div class="card"  style={{width:'30rem', height:'32.4rem', marginLeft:'60px', border:'4px solid', borderColor:'grey',background: 'url("https://wallpapercave.com/wp/wp3665670.jpg")',  backgroundSize: 'cover', backgroundRepeat: 'no-repeat'} }>
                    <div class="card-body">    
                    <div class="image-container">
                    <img src="https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png"  width={100} height={310} style={{width:'100%', marginTop:'-1px', border:'4px solid', boxShadow: '4px 4px 4px #87CEEB'}}/>
                    <div className="image-description">
                    <h7>Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overal</h7>
                    <div className="row">
                            <div className="col-5">
                         
                                <button className="custom-button-class" style={{marginTop:'10px'}}><h9>Add To Cart</h9></button>

                            </div>
                            <br/><br/>
                            <div className="col-2" style={{marginTop:'20px', marginLeft:'50px'}}>
                                <p><h11>Add</h11></p>
                            </div>
                            <br/>
                            <div className="col-1" style={{marginLeft:'-9px', marginTop:'15px'}}>
                                <button className="btn btn-primary"
                                        onClick={increase}
                                
                                >+</button>
                            </div>
                            <br/>
                            <div className="col-1" style={{marginLeft:'15px', marginTop:'20px'}}>
                                <label>{num}</label>
                            </div>
                            <div className="col-1" style={{marginLeft:'-10px', marginTop:'14.5px'}}>
                                <button className="btn btn-primary"
                                        onClick={decrease}
                                
                                >-</button>
                            </div>
                        </div>
                        <div className="row">
                            
                            <div className="col-5" style={{marginLeft:'270px', marginTop:'10px'}}>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                               Add To Wishlist
                            </label>
                            </div>
                                                        </div>
                        </div>
                     
                    </div>
                    </div>
                    <br/>  
                    
                        <div style={{marginTop:'-210px', marginLeft:'10px' , color:'#696969'}}>
                        <h4 class="card-title" style={{color:'black', textShadow:'2px 2px 2px grey'}}>Gta V</h4 >
                        <p class="card-text" >Experince one of the most sold out games today. Featured Los Santos </p>
                        <div className="row">
                               
                                <div style={{marginLeft:'375px', color:'black', fontWeight:'bold'}}><h9>$ 11.99</h9></div>
                          

                        </div>
                        </div>

                        
                        <br/><br/>
                        






                        
                    </div>
                    </div>
                    </div>
                    <div className="col-3">
                    <div class="card"  style={{width:'30rem', height:'32.4rem', marginLeft:'60px', border:'4px solid', borderColor:'grey',background: 'url("https://wallpapercave.com/wp/wp3665670.jpg")',  backgroundSize: 'cover', backgroundRepeat: 'no-repeat'} }>
                    <div class="card-body">    
                    <div class="image-container">
                    <img src="https://assets.xboxservices.com/assets/0b/17/0b179504-412d-4af7-9e00-3e3d92633577.jpg?n=GTA-V_GLP-Page-Hero-1084_1920x1080.jpg"  width={100} height={310} style={{width:'100%', marginTop:'-1px', border:'4px solid', boxShadow: '4px 4px 4px #87CEEB'}}/>
                    <div className="image-description">
                    <h7>Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overal</h7>
                    <div className="row">
                            <div className="col-5">
                         
                                <button className="custom-button-class" style={{marginTop:'10px'}}><h9>Add To Cart</h9></button>

                            </div>
                            <br/><br/>
                            <div className="col-2" style={{marginTop:'20px', marginLeft:'50px'}}>
                                <p><h11>Add</h11></p>
                            </div>
                            <br/>
                            <div className="col-1" style={{marginLeft:'-9px', marginTop:'15px'}}>
                                <button className="btn btn-primary"
                                        onClick={increase}
                                
                                >+</button>
                            </div>
                            <br/>
                            <div className="col-1" style={{marginLeft:'15px', marginTop:'20px'}}>
                                <label>{num}</label>
                            </div>
                            <div className="col-1" style={{marginLeft:'-10px', marginTop:'14.5px'}}>
                                <button className="btn btn-primary"
                                        onClick={decrease}
                                
                                >-</button>
                            </div>
                        </div>
                        <div className="row">
                            
                            <div className="col-5" style={{marginLeft:'270px', marginTop:'10px'}}>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                               Add To Wishlist
                            </label>
                            </div>
                                                        </div>
                        </div>
                     
                    </div>
                    </div>
                    <br/>  
                    
                        <div style={{marginTop:'-210px', marginLeft:'10px' , color:'#696969'}}>
                        <h4 class="card-title" style={{color:'black', textShadow:'2px 2px 2px grey'}}>Gta V</h4 >
                        <p class="card-text" >Experince one of the most sold out games today. Featured Los Santos </p>
                        <div className="row">
                               
                                <div style={{marginLeft:'375px', color:'black', fontWeight:'bold'}}><h9>$ 11.99</h9></div>
                          

                        </div>
                        </div>

                        
                        <br/><br/>
                        






                        
                    </div>
                    </div>
                    </div>
                </div>
                <br/><br/><br/><br/><br/>
                <div className="row">
                    <div className="col-3">
                    <div class="card"  style={{width:'30rem', height:'32.4rem', marginLeft:'60px', border:'4px solid', borderColor:'grey',background: 'url("https://wallpapercave.com/wp/wp3665670.jpg")',  backgroundSize: 'cover', backgroundRepeat: 'no-repeat'} }>
                    <div class="card-body">    
                    <div class="image-container">
                    <img src="https://assets.xboxservices.com/assets/0b/17/0b179504-412d-4af7-9e00-3e3d92633577.jpg?n=GTA-V_GLP-Page-Hero-1084_1920x1080.jpg"  width={100} height={310} style={{width:'100%', marginTop:'-1px', border:'4px solid', boxShadow: '4px 4px 4px #87CEEB'}}/>
                    <div className="image-description">
                    <h7>Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overal</h7>
                    <div className="row">
                            <div className="col-5">
                         
                                <button className="custom-button-class" style={{marginTop:'10px'}}><h9>Add To Cart</h9></button>

                            </div>
                            <br/><br/>
                            <div className="col-2" style={{marginTop:'20px', marginLeft:'50px'}}>
                                <p><h11>Add</h11></p>
                            </div>
                            <br/>
                            <div className="col-1" style={{marginLeft:'-9px', marginTop:'15px'}}>
                                <button className="btn btn-primary"
                                        onClick={increase}
                                
                                >+</button>
                            </div>
                            <br/>
                            <div className="col-1" style={{marginLeft:'15px', marginTop:'20px'}}>
                                <label>{num}</label>
                            </div>
                            <div className="col-1" style={{marginLeft:'-10px', marginTop:'14.5px'}}>
                                <button className="btn btn-primary"
                                        onClick={decrease}
                                
                                >-</button>
                            </div>
                        </div>
                        <div className="row">
                            
                            <div className="col-5" style={{marginLeft:'270px', marginTop:'10px'}}>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                               Add To Wishlist
                            </label>
                            </div>
                                                        </div>
                        </div>
                     
                    </div>
                    </div>
                    <br/>  
                    
                        <div style={{marginTop:'-210px', marginLeft:'10px' , color:'#696969'}}>
                        <h4 class="card-title" style={{color:'black', textShadow:'2px 2px 2px grey'}}>Gta V</h4 >
                        <p class="card-text" >Experince one of the most sold out games today. Featured Los Santos </p>
                        <div className="row">
                               
                                <div style={{marginLeft:'375px', color:'black', fontWeight:'bold'}}><h9>$ 11.99</h9></div>
                          

                        </div>
                        </div>

                        
                        <br/><br/>
                        






                        
                    </div>
                    </div>
                    </div>
                    <div className="col-3">
                    <div class="card"  style={{width:'30rem', height:'32.4rem', marginLeft:'60px', border:'4px solid', borderColor:'grey',background: 'url("https://wallpapercave.com/wp/wp3665670.jpg")',  backgroundSize: 'cover', backgroundRepeat: 'no-repeat'} }>
                    <div class="card-body">    
                    <div class="image-container">
                    <img src="https://assets.xboxservices.com/assets/0b/17/0b179504-412d-4af7-9e00-3e3d92633577.jpg?n=GTA-V_GLP-Page-Hero-1084_1920x1080.jpg"  width={100} height={310} style={{width:'100%', marginTop:'-1px', border:'4px solid', boxShadow: '4px 4px 4px #87CEEB'}}/>
                    <div className="image-description">
                    <h7>Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overal</h7>
                    <div className="row">
                            <div className="col-5">
                         
                                <button className="custom-button-class" style={{marginTop:'10px'}}><h9>Add To Cart</h9></button>

                            </div>
                            <br/><br/>
                            <div className="col-2" style={{marginTop:'20px', marginLeft:'50px'}}>
                                <p><h11>Add</h11></p>
                            </div>
                            <br/>
                            <div className="col-1" style={{marginLeft:'-9px', marginTop:'15px'}}>
                                <button className="btn btn-primary"
                                        onClick={increase}
                                
                                >+</button>
                            </div>
                            <br/>
                            <div className="col-1" style={{marginLeft:'15px', marginTop:'20px'}}>
                                <label>{num}</label>
                            </div>
                            <div className="col-1" style={{marginLeft:'-10px', marginTop:'14.5px'}}>
                                <button className="btn btn-primary"
                                        onClick={decrease}
                                
                                >-</button>
                            </div>
                        </div>
                        <div className="row">
                            
                            <div className="col-5" style={{marginLeft:'270px', marginTop:'10px'}}>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                               Add To Wishlist
                            </label>
                            </div>
                                                        </div>
                        </div>
                     
                    </div>
                    </div>
                    <br/>  
                    
                        <div style={{marginTop:'-210px', marginLeft:'10px' , color:'#696969'}}>
                        <h4 class="card-title" style={{color:'black', textShadow:'2px 2px 2px grey'}}>Gta V</h4 >
                        <p class="card-text" >Experince one of the most sold out games today. Featured Los Santos </p>
                        <div className="row">
                               
                                <div style={{marginLeft:'375px', color:'black', fontWeight:'bold'}}><h9>$ 11.99</h9></div>
                          

                        </div>
                        </div>

                        
                        <br/><br/>
                        






                        
                    </div>
                    </div>
                    </div>
                    <div className="col-3">
                    <div class="card"  style={{width:'30rem', height:'32.4rem', marginLeft:'60px', border:'4px solid', borderColor:'grey',background: 'url("https://wallpapercave.com/wp/wp3665670.jpg")',  backgroundSize: 'cover', backgroundRepeat: 'no-repeat'} }>
                    <div class="card-body">    
                    <div class="image-container">
                    <img src="https://assets.xboxservices.com/assets/0b/17/0b179504-412d-4af7-9e00-3e3d92633577.jpg?n=GTA-V_GLP-Page-Hero-1084_1920x1080.jpg"  width={100} height={310} style={{width:'100%', marginTop:'-1px', border:'4px solid', boxShadow: '4px 4px 4px #87CEEB'}}/>
                    <div className="image-description">
                    <h7>Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overal</h7>
                    <div className="row">
                            <div className="col-5">
                         
                                <button className="custom-button-class" style={{marginTop:'10px'}}><h9>Add To Cart</h9></button>

                            </div>
                            <br/><br/>
                            <div className="col-2" style={{marginTop:'20px', marginLeft:'50px'}}>
                                <p><h11>Add</h11></p>
                            </div>
                            <br/>
                            <div className="col-1" style={{marginLeft:'-9px', marginTop:'15px'}}>
                                <button className="btn btn-primary"
                                        onClick={increase}
                                
                                >+</button>
                            </div>
                            <br/>
                            <div className="col-1" style={{marginLeft:'15px', marginTop:'20px'}}>
                                <label>{num}</label>
                            </div>
                            <div className="col-1" style={{marginLeft:'-10px', marginTop:'14.5px'}}>
                                <button className="btn btn-primary"
                                        onClick={decrease}
                                
                                >-</button>
                            </div>
                        </div>
                        <div className="row">
                            
                            <div className="col-5" style={{marginLeft:'270px', marginTop:'10px'}}>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                               Add To Wishlist
                            </label>
                            </div>
                                                        </div>
                        </div>
                     
                    </div>
                    </div>
                    <br/>  
                    
                        <div style={{marginTop:'-210px', marginLeft:'10px' , color:'#696969'}}>
                        <h4 class="card-title" style={{color:'black', textShadow:'2px 2px 2px grey'}}>Gta V</h4 >
                        <p class="card-text" >Experince one of the most sold out games today. Featured Los Santos </p>
                        <div className="row">
                               
                                <div style={{marginLeft:'375px', color:'black', fontWeight:'bold'}}><h9>$ 11.99</h9></div>
                          

                        </div>
                        </div>

                        
                        <br/><br/>
                        






                        
                    </div>
                    </div>
                    </div>
                    <div className="col-3">
                    <div class="card"  style={{width:'30rem', height:'32.4rem', marginLeft:'60px', border:'4px solid', borderColor:'grey',background: 'url("https://wallpapercave.com/wp/wp3665670.jpg")',  backgroundSize: 'cover', backgroundRepeat: 'no-repeat'} }>
                    <div class="card-body">    
                    <div class="image-container">
                    <img src="https://assets.xboxservices.com/assets/0b/17/0b179504-412d-4af7-9e00-3e3d92633577.jpg?n=GTA-V_GLP-Page-Hero-1084_1920x1080.jpg"  width={100} height={310} style={{width:'100%', marginTop:'-1px', border:'4px solid', boxShadow: '4px 4px 4px #87CEEB'}}/>
                    <div className="image-description">
                    <h7>Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overal</h7>
                    <div className="row">
                            <div className="col-5">
                         
                                <button className="custom-button-class" style={{marginTop:'10px'}}><h9>Add To Cart</h9></button>

                            </div>
                            <br/><br/>
                            <div className="col-2" style={{marginTop:'20px', marginLeft:'50px'}}>
                                <p><h11>Add</h11></p>
                            </div>
                            <br/>
                            <div className="col-1" style={{marginLeft:'-9px', marginTop:'15px'}}>
                                <button className="btn btn-primary"
                                        onClick={increase}
                                
                                >+</button>
                            </div>
                            <br/>
                            <div className="col-1" style={{marginLeft:'15px', marginTop:'20px'}}>
                                <label>{num}</label>
                            </div>
                            <div className="col-1" style={{marginLeft:'-10px', marginTop:'14.5px'}}>
                                <button className="btn btn-primary"
                                        onClick={decrease}
                                
                                >-</button>
                            </div>
                        </div>
                        <div className="row">
                            
                            <div className="col-5" style={{marginLeft:'270px', marginTop:'10px'}}>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                               Add To Wishlist
                            </label>
                            </div>
                                                        </div>
                        </div>
                     
                    </div>
                    </div>
                    <br/>  
                    
                        <div style={{marginTop:'-210px', marginLeft:'10px' , color:'#696969'}}>
                        <h4 class="card-title" style={{color:'black', textShadow:'2px 2px 2px grey'}}>Gta V</h4 >
                        <p class="card-text" >Experince one of the most sold out games today. Featured Los Santos </p>
                        <div className="row">
                               
                                <div style={{marginLeft:'375px', color:'black', fontWeight:'bold'}}><h9>$ 11.99</h9></div>
                          

                        </div>
                        </div>

                        
                        <br/><br/>
                        






                        
                    </div>
                    
                    </div>
                    </div>
                </div>
                <br/><br/><br/><br/>

            </React.Fragment>
        );
    

}
export default ShopMain;