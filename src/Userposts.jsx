import React from 'react'
import ZPanel from './ZPanel'

function Userposts() {
    return (
        <>
            <div className="dashboardx">
                <div className="dbodyx">
                    <ZPanel/>
                    <div className="reqformx">
                        {/* <button type="button" class="btn btn-primary mt-1" id='postbtn'>Add Post</button> */}

                        <div className="text-center col-md-10 mx-auto mt-1 mainreqx">
                            <div className="card mt-2">
                                <div class="header">
                                    <h2>User Posts</h2>
                                </div>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Title </th>
                                            <th scope="col">Platform</th>
                                            <th scope="col">Url</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colSpan='1' id='colborder'>1</td>
                                            <td colSpan='1' id='colborder'>Facebook DP</td>
                                            <td colSpan='1' id='colborder'>Tiktok</td>
                                            <td colSpan='1' id='colborder'>www.google.com</td>
                                            <td colSpan='1' id='lastcol'>
                                                <button class="btn btn-primary mt-2" style={{ fontSize: '12px' }}>Approve</button>
                                                <button class="btn btn-danger mt-2" style={{ fontSize: '12px' }}>Reject</button>
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
