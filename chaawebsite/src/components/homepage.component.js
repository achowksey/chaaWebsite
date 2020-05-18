import React, { Component } from 'react';
import main from './photos/homepage/diwali.jpeg';
import pic1 from './photos/homepage/circle.jpeg';
import pic2 from './photos/homepage/christmas.JPG';
import pic3 from './photos/homepage/ADZ.jpg';
import pic4 from './photos/homepage/mixer.jpeg'
import pic5 from './photos/homepage/giselle.jpg';
import pic6 from './photos/homepage/formal.JPG';
import pic7 from './photos/homepage/jazba.JPG';
import pic8 from './photos/homepage/soraya.jpg';
import pic9 from './photos/homepage/wall.jpg';
import pic10 from './photos/homepage/offcampus.jpeg';
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
    showIndicators: boolean('showIndicators', false, tooglesGroupId),
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
  
export default class Homepage extends Component {
    render(){
        return( 
            <div> 
                <div className = "imageWrapper">
                    <RenderSmoothImage
                        alt=""
                        src={main}
                    />
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
                <div className = "carouselWrapper">
                    <Carousel {...getConfigurableProps()}>
                        <div>
                            <img alt="" src={pic1} />
                        </div>
                        <div>
                            <img alt="" src={pic2} />
                        </div>
                        <div>
                            <img alt="" src={pic3} />
                        </div>
                        <div>
                            <img alt="" src={pic4} />
                        </div>
                        <div>
                            <img alt="" src={pic5} />
                        </div>
                        <div>
                            <img alt="" src={pic6} />
                        </div>
                        <div>
                            <img alt="" src={pic7} />
                        </div>
                        <div>
                            <img alt="" src={pic8} />
                        </div>
                        <div>
                            <img alt="" src={pic9} />
                        </div>
                        <div>
                            <img alt="" src={pic10} />
                        </div>
                    </Carousel>
                    </div>
                <br></br>
                <br></br>
            </div>  
        )
    }
}
