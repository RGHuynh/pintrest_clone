import React from 'react';
import './searchButtonComp.css';

export default function SearchButtonComp(){
    return(
        <form className="form-inline">
            <div className="input-group">
                <input type="text" className="form-control form-control-lg" placeholder="Search for..."></input>
            </div>
        </form>
    )
}
