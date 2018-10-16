import React from 'react';
import NavigationListComp from './navigationListComp'
import './navigationBtnComp.css';

export default function NavigationBtnComp(){
    return(
        <ul className="navbar-nav ml-3 md-0">
            <NavigationListComp />
            <NavigationListComp />
        </ul>
    )
} 