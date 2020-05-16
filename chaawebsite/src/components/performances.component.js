import React, { Component } from 'react';
import ReactPlayer from "react-player";



export default class Performances extends Component {
   
    render(){
        return( 
            <div>
                <div id="vidContainer">
                    <hr></hr>
                    <div id = "performText">PAST PERFORMANCES</div>
                    <hr></hr>
                    <br></br>
                    <br></br>
                    <p>2019-2020: Black Mirror - Hang the DJ</p>
                    <div className="videos">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=ThiC7lqqEMw"
                        />
                    </div>
                    <br></br>
                    <br></br>
                    <p>2018-2019: La La Land</p>
                    <div className="videos">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=dl9YzfdFiFk"
                        />
                    </div>
                    <br></br>
                    <br></br>
                    <p>2017-2018: Rang De Basanti</p>
                    <div className="videos">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=JO6iM4jB9zI"
                        />
                    </div>
                    <br></br>
                    <br></br>
                    <p>2016-2017: Nil Battey Sannata</p>
                    <div className="videos">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=5ZXWKr2CjTg"
                        />
                    </div>
                    <br></br>
                    <br></br>
                    <p>2015-2016: Step Up</p>
                    <div className="videos">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=n4Ic16herzw"
                        />
                    </div>
                    <br></br>
                    <br></br>
                    <p>2014-2015: V For Vendetta </p>
                    <div className="videos">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=k7_XaQbUrOs"
                        />
                    </div>
                    <br></br>
                    <br></br>
                    <p>2013-2014: Ms. Congeniality </p>
                    <div className="videos">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=8UTa5Rymizw"
                        />
                    </div>
                    <br></br>
                    <br></br>
                    <p>2012-2013: Pareshaan</p>
                    <div className="videos">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=VBYxzRn66mU"
                        />
                    </div>
                    <br></br>
                    <br></br>
                    <p>2011-2012: Alien Shit</p>
                    <div className="videos">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=yxzrNOI9AJ4"
                        />
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        )
    }
}