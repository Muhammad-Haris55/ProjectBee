import React from 'react'
import { NavLink } from 'react-router-dom'

function Adminpost() {
    return (
        <>
        <div className="add">
                <div className="col-md-4 mx-auto addform">
                    <div className="addhead">

                        <h3>Admin posting panel</h3>
                        <NavLink className='nav-link' to='/Dashboard'><h6>dashboard</h6></NavLink>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Title of your post</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your title"></input>
                    </div>
                    <input type="text" class="form-control" aria-label="Text input with dropdown button" placeholder='Enter the Url of the post'></input>
                    <button type="button" class="btn btn-primary mt-3">Add post</button>
                </div>
            </div>


        </>
    )
}

export default Adminpost
