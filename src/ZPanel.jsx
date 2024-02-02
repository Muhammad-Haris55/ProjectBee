import React from 'react'
import { NavLink } from 'react-router-dom';


function ZPanel() {
    // let side=document.getElementsByClassName('.sidebar')
    const toggleSidebar = () => {
        side.body.classList.toggle("open");
    }
    return (
        <>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-2 dcol1">
                <nav class="sidebar" id="side">
                    <div className="sidebar-inner">
                        <header class="sidebar-header">
                            <button
                                type="button"
                                class="sidebar-burger"
                                onClick={toggleSidebar}
                                id="hambutton"
                            ></button>
                        </header>
                        <nav class="sidebar-menu">
                            <div className="beehead">
                                <NavLink className='nav-link' to='/'>

                                <img id='bee' src="bee.png" alt="" />
                                </NavLink>
                            </div>
                            <hr />
                            <p style={{ fontSize: '15px', paddingTop: '', marginLeft: '10px' }}>Social Platforms</p>
                            <button type="button" id="sbutton">
                                <img src="tw.png" alt="" />
                                <NavLink className="nav-link" to="/Twitter"><span id='spam'>Twitter</span></NavLink>
                            </button>
                            <button type="button" id="sbutton">
                                <img src="insta.png" />
                                <NavLink className="nav-link" to="/Instagram"><span id="spam">Instagram</span></NavLink>

                            </button>
                            <button type="button" id="sbutton">
                                <img src="fb.png" />
                                <NavLink className='nav-link' to='/Facebook'><span id='spam'>Facebook</span></NavLink>
                                
                            </button>
                            <button type="button" id="sbutton">
                                <img src="tiktok.png" />
                                <NavLink className='nav-link' to='/Tiktok'><span id='spam'>Tiktok</span></NavLink>
                                
                            </button>
                            <hr />
                            <button type="button" id="sbutton">
                                <img src="use.png" />
                                <NavLink className='nav-link' to='/Userposts'><span id='spam'>User table</span></NavLink>
                                
                            </button>
                            <hr />
                            <button type="button" id="sbutton">
                                <NavLink className="nav-link" to="/"><span id='spam' >Sign Out</span>
                                </NavLink>
                            </button>
                            <hr />
                        </nav>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default ZPanel