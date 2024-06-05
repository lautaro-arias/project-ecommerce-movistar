import React from 'react'

const Filter = () => {
    return (
        <div className="  md:hidden mb-12 flex gap-8">
            <div className="dropdown dropdown-right  dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-primary m-1">Click</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Filter;