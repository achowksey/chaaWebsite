import React, { Component } from 'react';
import pic1 from './photos/members/1.jpg';
import pic2 from './photos/members/2.jpg';
import pic3 from './photos/members/3.jpg';
import pic4 from './photos/members/4.jpg';
import pic5 from './photos/members/5.jpg';
import pic6 from './photos/members/6.JPG';
import pic7 from './photos/members/7.jpg';
import pic8 from './photos/members/8.jpg';
import pic9 from './photos/members/9.JPG';
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


export default class Members extends Component {
   
    render(){
        return( 
            <div> 
                <hr></hr>
                <div className = "headingsText"> MEET THE TEAM </div>
                <hr></hr>
                <div className = "membersJoinWrapper">
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
                <div className = "carouselWrapper">
                    <Carousel {...getConfigurableProps()}>
                        <div>
                            <div className="overlay">CHAAHAT 2011-2012</div>
                            <img alt="" src={pic1} />
                        </div>
                        <div>
                            <div className="overlay">CHAAHAT 2012-2013</div>
                            <img alt="" src={pic2} />
                        </div>
                        <div>
                            <div className="overlay">CHAAHAT 2013-2014</div>
                            <img alt="" src={pic3} />
                        </div>
                        <div>
                            <div className="overlay">CHAAHAT 2014-2015</div>
                            <img alt="" src={pic4} />
                        </div>
                        <div>
                            <div className="overlay">CHAAHAT 2015-2016</div>
                            <img alt="" src={pic5} />
                        </div>
                        <div>
                            <div className="overlay">CHAAHAT 2016-2017</div>
                            <img alt="" src={pic6} />
                        </div>
                        <div>
                            <div className="overlay">CHAAHAT 2017-2018</div>
                            <img alt="" src={pic7} />
                        </div>
                        <div>
                            <div className="overlay">CHAAHAT 2018-2019</div>
                            <img alt="" src={pic8} />
                        </div>
                        {/* <div>
                            <div className="overlay">CHAAHAT 2019-2020</div>
                            <RenderSmoothImage alt="" src={pic9} />
                        </div> */}
                    </Carousel>
                </div>
                <br></br>
                <br></br>
            </div>  
        )
    }
}