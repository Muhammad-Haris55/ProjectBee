import React from 'react'
import Table from './Table'
import ZPanel from './ZPanel'
import { NavLink } from 'react-router-dom'

function Fbtable() {
    return (
        <>
            <div className="dashboardx">
                <div className="dbodyx">
                    <ZPanel />
                    <div className="reqformx">
                         <NavLink to='/Adminpost' className='nav-link'>

                        <button type="button" class="btn btn-primary mt-2" id='postbtn'>Add Post</button>
                    </NavLink>

                        <div className="text-center col-md-10 mx-auto mt-1 mainreqx">
                            <div className="card mt-1">
                                <div class="header">
                                    <h2>Active posts for Facebook</h2>
                                </div>
                                <Table />

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Fbtable
