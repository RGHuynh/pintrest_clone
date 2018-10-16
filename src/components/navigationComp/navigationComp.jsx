import React, {Component} from 'react';
import NavigationBtnComp from './navigationBtnComp/navigationBtnComp';
import SearchButtonComp from './searchButtonComp/searchButtonComp';

export default class NavigationComp extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand static-top">
                <a className="navbar-brand ">Logo</a>
                    <SearchButtonComp />
                    <NavigationBtnComp />
            </nav>
        );
    }
}