import React from 'react'
import Panel from './ZPanel';
import { NavLink } from 'react-router-dom';
import Table from './Table';
function Dashboard() {

    return (

        <>
            <div className="dashboardx">
                <div className="dbodyx">
                    <Panel/>
                    <div className="reqformx">
                        <NavLink to='/Adminpost' className='nav-link'>

                            <button type="button" class="btn btn-primary mt-2" id='postbtn'>Add Post</button>
                        </NavLink>

                        <div className="text-center col-md-10 mx-auto mt-2 mainreqx">
                            <div className="card mt-1">
                                <div class="header">
                                    <h2>Active posts for Twitter</h2>
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

export default Dashboard
