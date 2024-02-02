import React from 'react'
import { NavLink } from 'react-router-dom'
import Togglebtn from './Togglebtn'
import Dropdown from './Dropdown'

function Display() {
    return (
        <>
            <div className="dmain">
                <div className="dbox col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-8  mx-auto">
                    <div className="top">
                        <div className="timg">
                            <img src="bee.png" alt="" />
                        </div>
                        <Dropdown />

                        <Togglebtn />

                    </div>
                    <div className="socialmedia mt-2">
                        <NavLink href="">
                            <div className="mbox" >
                                <div className="iconbox" id='navli' tabindex="1" >
                                    <img src="tw.png" alt="" />
                                </div>
                            </div>
                        </NavLink>
                        <div className="line"></div>
                        <NavLink href="">

                            <div className="mbox">
                                <div className="iconbox" tabindex="1">
                                    <img src="insta2.png" id='insta' alt="" />
                                </div>

                            </div>
                        </NavLink>
                        <div className="line"></div>
                        <NavLink href="">

                            <div className="mbox">
                                <div className="iconbox" tabindex="1">
                                    <img src="tiktok.png" alt="" />
                                </div>


                            </div>
                        </NavLink>
                        <div className="line"></div>
                        <NavLink href="">

                            <div className="mbox">
                                <div className="iconbox" tabindex="1">
                                    <img src="fb.png" alt="" />
                                </div>

                            </div>
                        </NavLink>
                    </div>
                    <div className="dbody mt-2">
                        <div className="bodybtns">
                            <button className='dbtn'>
                                <img src="chat2.png" alt="" />
                                <p className='mt-2'>Reply on a post</p>
                            </button>
                            <button className='dbtn2'>
                                <div id='dbtn2img'>
                                </div>
                                <p>Auto Pilot</p>

                            </button>
                        </div>
                        <div className="mpost">

                            <div className="post">

                            </div>
                        </div>
                        <div className="bodybtns">
                            <button className='dbtn'>
                                <img src="chat2.png" alt="" />
                                <p className='mt-2'>Reply on a post</p>
                            </button>
                            <button className='dbtn2'>
                                <div id='dbtn3img'>
                                </div>
                                <p>New Post</p>
                            </button>
                        </div>


                    </div>
                </div>
            </div>
            {/* <script src='Display2.js'></script> */}
        </>

    )
}

export default Display
