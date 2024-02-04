import React from 'react'
import { NavLink } from 'react-router-dom';

function Add() {

    return (
        <>
            <div className="add">
                <div className="col-md-4 mx-auto addform">
                    <div className="addhead">
                        <h3>Add a post!</h3>
                        <NavLink className='nav-link' to='/'><h6>Return</h6></NavLink>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Title of your post</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your title"></input>
                    </div>
                    <div class="input-group mb-3">

                        <select id='select' class="form-select" aria-label="Default select example" placeholder='hi'>
                            <option id='select'>Platform</option>
                            <option value="2">Instagram</option>
                            <option value="0">X(Twitter)</option>
                            <option value="3">Facebook</option>
                            <option value="3">Tiktok</option>
                        </select>
                    </div>
                    <input type="text" class="form-control" aria-label="Text input with dropdown button" placeholder='Enter the Url of the post'></input>
                    <button type="button" class="btn btn-primary mt-2">Request to post</button>
                </div>
            </div>

        </>
    )
}

export default Add
