import React, { Component } from 'react';
import jazba from './photos/join/join.jpeg';
import RenderSmoothImage from 'render-smooth-image-react';
import 'render-smooth-image-react/build/style.css';

export default class Join extends Component {
   
    render(){
        return( 
            <div> 
                <hr></hr>
                <div className = "headingsText">JOIN OUR FAMILY</div>
                <hr></hr>
                <div className = "membersJoinWrapper">
                    <RenderSmoothImage
                        alt=""
                        src={jazba}
                    />
                    <br></br>
                    <hr></hr>
                    <div className = "tryoutsText">WE ARE CURRENTLY NOT HOLDING TRYOUTS</div>
                    <div className = "tryoutsText">PLEASE CHECK BACK LATER FOR UPDATES</div>
                    <br></br>
                </div>
                <br></br>
                <br></br>
            </div>  
        )
    }
}