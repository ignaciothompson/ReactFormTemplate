// import React from "react";
import './sidebar.css';


function Sidebar() {
    return (
        <div className="sidebarContainer">
            <div className='steps'>
                <p className='circle'>1</p>
                <div>
                    <p className='stepNum'>STEP 1</p>
                    <p className='stepTitle'>YOUR INFO</p>
                </div>
            </div>
            <div className='steps'>
                <p className='circle'>2</p>
                <div>
                    <p className='stepNum'>STEP 2</p>
                    <p className='stepTitle'>SELECT A PLAN</p>
                </div>
            </div>
            <div className='steps'>
                <p className='circle'>3</p>
                <div>
                    <p className='stepNum'>STEP 3</p>
                    <p className='stepTitle'>ADD-ONS</p>
                </div>
            </div>
            <div className='steps'>
                <p className='circle'>4</p>
                <div>
                    <p className='stepNum'>STEP 4</p>
                    <p className='stepTitle'>SUMMARY</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;