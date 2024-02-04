import React from 'react'
import ZPanel from './ZPanel'

function Userposts() {
    return (
        <>
            <div className="dashboardx">
                <div className="dbodyx">
                    <ZPanel/>
                    <div className="reqformx">
                        <div className="btnhead mt-1">
                                <span>
                                    <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                        <img src="ham.png" id='sham' alt="" />
                                    </a>
                                </span>
                            </div>


                        <div className="text-center col-xxl-10 col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-2 mainreqx">
                            <div className=" mt-2">
                                <div class="header">
                                    <h2>User Posts</h2>
                                </div>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col" id='colborder'><p>#</p> </th>
                                            <th scope="col" id='colborder'><p>Title</p> </th>
                                            <th scope="col" id='colborder'><p>Platform</p></th>
                                            <th scope="col" id='colborder'><p>Url</p></th>
                                            <th scope="col" id='colborder'><p>Action</p></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colSpan='1' className='change' id='colborder'><p>1</p></td>
                                            <td colSpan='1' id='colborder'><p>Facebook DP</p></td>
                                            <td colSpan='1' id='colborder'><p>Tiktok</p></td>
                                            <td colSpan='1' id='colborder'><p>www.google.com</p></td>
                                            <td colSpan='1' id='lastcol'>
                                                <button class="btn btn-primary mt-2"  id='del'>Approve</button>
                                                <button class="btn btn-danger mt-2" id='del'>Reject</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>


                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>

    )
}

export default Userposts
