import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import formal from './profPic.JPG';
import pic1 from './pastTeams/1.jpg';
import pic2 from './pastTeams/2.jpg';
import pic3 from './pastTeams/3.jpg';
import pic4 from './pastTeams/4.jpg';
import pic5 from './pastTeams/5.jpg';
import pic6 from './pastTeams/6.jpg';
import pic7 from './pastTeams/7.jpg';
import pic8 from './pastTeams/8.jpg';

const slideImages = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
  ];


  const properties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
  }


export default class Members extends Component {
   
    render(){
        return( 
            <div> 
                <br></br>
                <h1 className = "theTeam">PAST TEAMS</h1>
                <hr></hr>
                <br></br>
                 <div className = "slide-container">
                    <Slide {...properties}>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                                <span>CHAAHAT I</span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                                <span>CHAAHAT II</span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                                <span>CHAAHAT III</span>  
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
                                <span>CHAAHAT IV</span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
                                <span>CHAAHAT V</span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[5]})`}}>
                                <span>CHAAHAT VI</span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[6]})`}}>
                                <span>CHAAHAT VII</span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[7]})`}}>
                                <span>CHAAHAT VIII</span>
                            </div>
                        </div>
                    </Slide>
                    </div>
            </div>  
        )
    }
}