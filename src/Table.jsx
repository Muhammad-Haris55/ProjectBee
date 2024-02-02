import React from 'react'

function Table() {
    return (
        <>
            <table class="table mt-1">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title </th>
                        {/* <th scope="col">Platform</th> */}
                        <th scope="col">Url</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan='1' id='colborder'>1</td>
                        <td colSpan='1' id='colborder'>Facebook DP</td>
                        {/* <td colSpan='1' id='colborder'>Tiktok</td> */}
                        <td colSpan='1' id='colborder'>www.google.com</td>
                        <td colSpan='1' id='lastcol'>

                            <button class="btn btn-danger mt-2" style={{ fontSize: '13px' }}>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Table
