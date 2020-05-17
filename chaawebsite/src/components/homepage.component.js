import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faCircle } from '@fortawesome/free-solid-svg-icons'
// import { Slide } from 'react-slideshow-image';
import Logo from './diwali.jpeg';
import pic1 from './album/circle.jpeg';
import pic2 from './album/christmas.JPG';
import pic3 from './album/ADZ.jpg';
import pic4 from './album/mixer.jpeg'
import pic5 from './album/giselle.jpg';
import pic6 from './album/formal.JPG';
import pic7 from './album/jazba.JPG';
import pic8 from './album/soraya.jpg';
import pic9 from './album/wall.jpg';
import pic10 from './album/offcampus.jpeg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import RenderSmoothImage from 'render-smooth-image-react';
import 'render-smooth-image-react/build/style.css';
import {boolean, number } from '@storybook/addon-knobs';

const tooglesGroupId = 'Toggles';
const valuesGroupId = 'Values';

const getConfigurableProps = () => ({
    showArrows: boolean('showArrows', true, tooglesGroupId),
    showStatus: boolean('showStatus', false, tooglesGroupId),
    showIndicators: boolean('showIndicators', true, tooglesGroupId),
    infiniteLoop: boolean('infiniteLoop', true, tooglesGroupId),
    showThumbs: boolean('showThumbs', true, tooglesGroupId),
    useKeyboardArrows: boolean('useKeyboardArrows', true, tooglesGroupId),
    autoPlay: boolean('autoPlay', true, tooglesGroupId),
    stopOnHover: boolean('stopOnHover', false, tooglesGroupId),
    swipeable: boolean('swipeable', true, tooglesGroupId),
    dynamicHeight: boolean('dynamicHeight', true, tooglesGroupId),
    emulateTouch: boolean('emulateTouch', true, tooglesGroupId),
    thumbWidth: number('thumbWidth', 100, {}, valuesGroupId),
    selectedItem: number('selectedItem', 0, {}, valuesGroupId),
    interval: number('interval', 3500, {}, valuesGroupId),
    transitionTime: number('transitionTime', 300, {}, valuesGroupId),
    swipeScrollTolerance: number('swipeScrollTolerance', 5, {}, valuesGroupId),
});
 
// const slideImages = [
//     pic1,
//     pic2,
//     pic3,
//     pic4,
//     pic5,
//     pic6,
//     pic7,
//     pic8,
//     pic9,
//     pic10
//   ];

//   const images = [{ source: './album/circle.jpeg' }, { source: '/album/christmas.JPG' }];

//   const properties = {
//     duration: 3000,
//     transitionDuration: 500,
//     infinite: true,
//     indicators: true,
//     scale: 0.4,
//     arrows: true
//   }
  
export default class Homepage extends Component {
    render(){
        return( 
            <div> 
                <div>
                    <div>
                        <div className = "imageWrapper">
                            <RenderSmoothImage
                                alt=""
                                src={Logo}
                            />
                            {/* <div className="caption">
                                <p>WASHU CHAAHAT</p>
                            </div>
                            <div className="motto">
                                <p><FontAwesomeIcon icon={faCircle} color = "white" className="faIcons"/> PASSION DON'T QUIT <FontAwesomeIcon icon={faCircle} color = "white" className="faIcons"/></p>
                            </div> */}
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <hr></hr>
                <div className = "headingsText">ABOUT CHAAHAT</div>
                <hr></hr>
                <div className = 'aboutContainer'>
                    <p>WashU​ ​Chaahat​ ​is​ ​a​ ​completely​ ​student-run​ ​and​ ​non-profit​ ​organization​ ​at​ ​Washington University​ ​in​ ​St.​ ​Louis​ ​that​ ​performs​ ​at​ ​various​ ​on​ ​and​ ​off​ ​campus​ ​events​ ​in​ ​association​ ​with Washington​ ​University.​ ​Chaahat,​ ​which​ ​means​ ​“passion”​ ​in​ ​Hindi,​ ​is​ ​a​ ​Bollywood​ ​​fusion​​ ​team, performing​ ​styles​ ​of​ ​dance​ ​including​ ​but​ ​not​ ​limited​ ​to​ Bollywood ​film​ ​dance,​ ​contemporary,​ ​classical, raas,​ ​and​ ​hip​ ​hop.​</p>
                    <br></br>
                    <p>​In​ ​addition​ ​to​ ​performing​ ​at​ ​Diwali,​ ​WashU's​ ​largest​ ​student-run​ ​show, Chaahat​ ​is​ ​part​ ​of​ ​a​ ​vibrant​ ​intercollegiate​ ​circuit​ ​and​ ​travels​ ​nationally​ ​to​ ​compete​ ​against​ ​dance teams​ ​from​ ​other​ ​universities.​ ​In​ ​the​ ​past,​ ​Chaahat​ ​has​ ​traveled​ ​to​ ​Madison,​ Chicago, Berkeley, Atlanta, and Minneapolis​ ​to​ ​compete​ ​in​ ​various competitions.</p>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div id = "wrapper">
                    <Carousel {...getConfigurableProps()}>
                        <div>
                            <RenderSmoothImage alt="" src={pic1} />
                        </div>
                        <div>
                            <RenderSmoothImage alt="" src={pic2} />
                        </div>
                        <div>
                            <RenderSmoothImage alt="" src={pic3} />
                        </div>
                        <div>
                            <RenderSmoothImage alt="" src={pic4} />
                        </div>
                        <div>
                            <RenderSmoothImage alt="" src={pic5} />
                        </div>
                        <div>
                            <RenderSmoothImage alt="" src={pic6} />
                        </div>
                        <div>
                            <RenderSmoothImage alt="" src={pic7} />
                        </div>
                        <div>
                            <RenderSmoothImage alt="" src={pic8} />
                        </div>
                        <div>
                            <RenderSmoothImage alt="" src={pic9} />
                        </div>
                        <div>
                            <RenderSmoothImage alt="" src={pic10} />
                        </div>
                    </Carousel>
                    </div>
                    {/* <div className = "slide-container">
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
                    </div> */}
                <br></br>
                <br></br>
            </div>  
        )
    }
}
