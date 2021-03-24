import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainNavigation.css';

function MainNavigation(props) {
    const { isOpen } = props;
    const updateMenuState = () => {
        console.log('updateMenuState');
    }
    
    if (isOpen) {
        return (
            <div className='NavWrapperCss'>
                <NavLink className='menuLinkCss' onClick={() => {props.setIsOpen(false)}} to='/'>Home</NavLink>
                <NavLink className='menuLinkCss' onClick={() => {props.setIsOpen(false)}} to='/portraits'>Portraits</NavLink>
                <NavLink className='menuLinkCss' onClick={() => {props.setIsOpen(false)}} to='/travel'>Travel</NavLink>
                <NavLink className='menuLinkCss' onClick={() => {props.setIsOpen(false)}} to='/journalism'>Photo Journalism</NavLink>
                <NavLink className='menuLinkCss' onClick={() => {props.setIsOpen(false)}} to='/photoessay'>Photo Essay</NavLink>
                <NavLink className='menuLinkCss' onClick={() => {props.setIsOpen(false)}} to='/videos'>Videos</NavLink>
            </div>
        )
    } else {
        return (<></>)
    }
}

export default MainNavigation;