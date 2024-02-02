import React from 'react'
import { NavLink } from 'react-router-dom'

function Togglebtn() {
    // const hamclick = () => {
    //     let con1 = document.querySelector(".header")
    //     if (con1) {
    //         con1.classList.toggle("active")
    //     }
    // }
    return (
        <>
            <div className="canvas">

                <div className="nav-end" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <img src="menu.png" alt="" />
                </div>
            </div>


            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">MENU</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" id='canvasclose'></button>
                </div>
                <div class="offcanvas-body">
                    <div className='content'>
                        <ul id='ul'>
                            <NavLink className='nav-link' to='/'>
                                <li id='li'>
                                    <img src="home.png" alt="" /> Home
                                </li>
                            </NavLink>
                            <NavLink className='nav-link' to='/Response'>
                                <li id='li'>
                                    <img src="thumb.png" alt="" /> Share a response
                                </li>
                            </NavLink>
                            <NavLink className='nav-link' to='/Report'>
                                <li id='li'>
                                    <img src="ex.png" alt="" /> Report content
                                </li>
                            </NavLink>
                            <NavLink className='nav-link' >

                                <li id='li'>
                                    <img src="update.png" alt="" />Stay updated
                                </li>
                            </NavLink>
                            <NavLink className='nav-link'>

                                <li id='li'>
                                    <img src="mail.png" alt="" />Share feedback
                                </li>
                            </NavLink>
                        </ul>
                    </div>

                    {/* <div>
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                    </div>
                    <div class="dropdown mt-3">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                            Dropdown button
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div> */}
                </div>
            </div>
            {/* <header className='header  '>
                <div className="container-fluid">
                    <div className="nav-end">
                        <div className="hambtn" onClick={hamclick} >
                            <img src="menu.png" alt="" /></div>
                    </div>
                </div>
                <div className="container2 ">
                    <div className="maincon">


                        <div className="conhead">
                            <p className='pt-1 '>MENU</p>
                            <div className="close mt-3" onClick={hamclick}>
                                <img src="mul.png" alt="" />
                            </div>
                        </div>
                        <div className='content'>
                            <ul id='ul'>
                                <NavLink className='nav-link' to='/'>
                                    <li id='li'>
                                        <img src="home.png" alt="" /> Home
                                    </li>
                                </NavLink>
                                <NavLink className='nav-link' to='/Response'>
                                    <li id='li'>
                                        <img src="thumb.png" alt="" /> Share a response
                                    </li>
                                </NavLink>
                                <NavLink className='nav-link' to='/Report'>

                                    <li id='li'>
                                        <img src="ex.png" alt="" /> Report content
                                    </li>
                                </NavLink>
                                <NavLink className='nav-link' >

                                    <li id='li'>
                                        <img src="update.png" alt="" />Stay updated
                                    </li>
                                </NavLink>
                                <NavLink className='nav-link'>

                                    <li id='li'>
                                        <img src="mail.png" alt="" />Share feedback
                                    </li>
                                </NavLink>
                            </ul>
                        </div>
                    </div>

                    <div className="conback">
                    </div>

                </div>
            </header> */}

        </>
    )
}

export default Togglebtn
