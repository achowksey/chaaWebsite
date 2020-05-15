import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import Logo from './diwali.jpg';
import pic1 from './album/circle.jpeg';
import pic2 from './album/christmas.JPG';
import pic3 from './album/ADZ.jpg';
import pic4 from './album/mixer.jpeg'
import pic5 from './album/giselle.jpg';
import pic6 from './album/formal.jpeg';
import pic7 from './album/jazba.JPG';
import pic8 from './album/soraya.jpg';
import pic9 from './album/wall.jpg';
import pic10 from './album/offcampus.jpeg';
 
const slideImages = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
    pic9,
    pic10
  ];

  const properties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
  }

export default class Homepage extends Component {
   
    render(){
        return( 
            <div> 
                <div id="container">
                    <div id="box-search">
                        <div className="thumbnail">
                            <img id = "image"
                                alt=""
                                src={Logo}
                                width="1440"
                                height="635.21"
                            />
                            <div className="caption">
                                <p>WASHU CHAAHAT</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className = "about">ABOUT US</div>
                <div className = 'aboutContainer'>
                    <hr></hr>
                    <p>WashU​ ​Chaahat​ ​is​ ​a​ ​completely​ ​student-run​ ​and​ ​non-profit​ ​organization​ ​at​ ​Washington University​ ​in​ ​St.​ ​Louis​ ​that​ ​performs​ ​at​ ​various​ ​on​ ​and​ ​off​ ​campus​ ​events​ ​in​ ​association​ ​with Washington​ ​University.​ ​Chaahat,​ ​which​ ​means​ ​“passion”​ ​in​ ​Hindi,​ ​is​ ​a​ ​Bollywood​ ​​fusion​​ ​team, performing​ ​styles​ ​of​ ​dance​ ​including​ ​but​ ​not​ ​limited​ ​to​ Bollywood ​film​ ​dance,​ ​contemporary,​ ​classical, raas,​ ​and​ ​hip​ ​hop.​</p>
                    <br></br>
                    <p>​In​ ​addition​ ​to​ ​performing​ ​at​ ​Diwali,​ ​WashU's​ ​largest​ ​student-run​ ​show, Chaahat​ ​is​ ​part​ ​of​ ​a​ ​vibrant​ ​intercollegiate​ ​circuit​ ​and​ ​travels​ ​nationally​ ​to​ ​compete​ ​against​ ​dance teams​ ​from​ ​other​ ​universities.​ ​In​ ​the​ ​past,​ ​Chaahat​ ​has​ ​traveled​ ​to​ ​Madison,​ Chicago, Berkeley, Atlanta, and Minneapolis​ ​to​ ​compete​ ​in​ ​various competitions.</p>
                </div>
                <br></br>
                <br></br>
                <br></br>
                    <div className = "slide-container">
                    <Slide {...properties}>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[5]})`}}>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[6]})`}}>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[7]})`}}>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[8]})`}}>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${slideImages[9]})`}}>
                            </div>
                        </div>
                    </Slide>
                    </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>  
        )
    }
}