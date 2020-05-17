import React, { Component } from 'react';
import jazba from './join.jpeg';
import RenderSmoothImage from 'render-smooth-image-react';
import 'render-smooth-image-react/build/style.css';

export default class Join extends Component {
   
    render(){
        return( 
            <div> 
                <hr></hr>
                <div className = "headingsText">JOIN OUR FAMILY</div>
                <hr></hr>
                <div>
                    <div>
                        <div className = "imageWrapper">
                            <RenderSmoothImage
                                alt=""
                                src={jazba}
                            />
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
            </div>  
        )
    }
}