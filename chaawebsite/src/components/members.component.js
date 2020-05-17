import React, { Component } from 'react';
// import { Slide } from 'react-slideshow-image';
// import formal from './profPic.JPG';
import pic1 from './pastTeams/1.jpg';
import pic2 from './pastTeams/2.jpg';
import pic3 from './pastTeams/3.jpg';
import pic4 from './pastTeams/4.jpg';
import pic5 from './pastTeams/5.jpg';
import pic6 from './pastTeams/6.jpg';
import pic7 from './pastTeams/7.jpg';
import pic8 from './pastTeams/8.jpg';
import pic9 from './pastTeams/9.JPG';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
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


export default class Members extends Component {
   
    render(){
        return( 
            <div> 
                <hr></hr>
                <div className = "headingsText"> MEET THE TEAM </div>
                <hr></hr>
                {/* <div>
                    <div>
                        <div>
                            <img
                                alt=""
                                src={formal}
                                width="100%"
                            />
                        </div>
                    </div>
                </div>
                <br></br> */}
                <div id = "membersWrapper">
                    <p className="overlay">CHAAHAT 2019-2020</p>
                    <RenderSmoothImage
                        alt=""
                        src={pic9}
                    />
                    <br></br>
                    <hr></hr>
                    <div className = "membersClasses">CLASS OF 2020</div>
                    <div className = "membersClassesNames">SORAYA MOSS | SUMIL NAIR | RITHVIK KONDAI</div>
                    <br></br>
                    <div className = "membersClasses">CLASS OF 2021</div>
                    <div className = "membersClassesNames">GABY CORNEJO | GISELLE GISSER | NIKITA JOSHI | OLIVIA SMITH | PRIYANKA CHILUKURI | WENDY BORNHOEFT</div>
                    <br></br>
                    <div className = "membersClasses">CLASS OF 2022</div>
                    <div className = "membersClassesNames">AKSHAT CHOWKSEY | RENEE BLACHMAN | SARAH AUCHES | SHUBHAM TAYAL</div>
                    <br></br>
                    <div className = "membersClasses">CLASS OF 2023</div>
                    <div className = "membersClassesNames">ANEESH SYAL | ARUNI SONI | JASMINA DULIMAN | NANDINI JAIN | RITHU SREENATH | RUJUTA IDATE | SAGUNA RAINA | SAMEER CHAPARALA | SARAH RIDER | SASHRIK SRIBHASHYAM</div>
                    <br></br>
                </div>
                <br></br>
                <br></br>
                <hr></hr>
                <div className = "headingsText"> THROUGH THE YEARS </div>
                <hr></hr>
                <br></br>
                <div id = "wrapper">
                    <Carousel {...getConfigurableProps()}>
                        <div>
                            <div className="overlay">CHAAHAT 2011-2012</div>
                            <RenderSmoothImage alt="" src={pic1} />
                        </div>
                        <div>
                            <div className="overlay">CHAAHAT 2012-2013</div>
                            <RenderSmoothImage alt="" src={pic2} />
                        </div>
                        <div>
                            <div className="overlay">CHAAHAT 2013-2014</div>
                            <RenderSmoothImage alt="" src={pic3} />
                        </div>
                        <div>
                            <div className="overlay">CHAAHAT 2014-2015</div>
                            <RenderSmoothImage alt="" src={pic4} />
                        </div>
                        <div>
                            <div className="overlay">CHAAHAT 2015-2016</div>
                            <RenderSmoothImage alt="" src={pic5} />
                        </div>
                        <div>
                            <div className="overlay">CHAAHAT 2016-2017</div>
                            <RenderSmoothImage alt="" src={pic6} />
                        </div>
                        <div>
                            <div className="overlay">CHAAHAT 2017-2018</div>
                            <RenderSmoothImage alt="" src={pic7} />
                        </div>
                        <div>
                            <div className="overlay">CHAAHAT 2018-2019</div>
                            <RenderSmoothImage alt="" src={pic8} />
                        </div>
                        {/* <div>
                            <div className="overlay">CHAAHAT 2019-2020</div>
                            <RenderSmoothImage alt="" src={pic9} />
                        </div> */}
                    </Carousel>
                </div>
                 {/* <div className = "slide-container">
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
                    </Slide>}
                    {/* </div> */}
                <br></br>
                <br></br>
            </div>  
        )
    }
}