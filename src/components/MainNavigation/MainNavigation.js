import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainNavigation.css';

function MainNavigation(props) {
    const { isOpen } = props;

    if (isOpen) {
        return (
            <div className='NavWrapperCss'>
                <NavLink className='menuLinkCss' onClick={() => { props.setIsOpen(false) }} to='/'>Home</NavLink>
                <NavLink className='menuLinkCss' onClick={() => { props.setIsOpen(false) }} to='/stills'>Stills</NavLink>
                <NavLink className='menuLinkCss' onClick={() => { props.setIsOpen(false) }} to='/Motion'>Motion</NavLink>
                <NavLink className='menuLinkCss' onClick={() => { props.setIsOpen(false) }} to='/photoessay'>Photo Essay</NavLink>
                <NavLink className='menuLinkCss' onClick={() => { props.setIsOpen(false) }} to='/contact'>Contact Me</NavLink>
            </div>
        )
    } else {
        return (<></>)
    }
}

export default MainNavigation;