import React from 'react';
import Logout from '../../Components/Logout/logout';
import LogoBurger from '../../Components/Logo/logo';
import Icon from '../../assets/iconCheff.png';
import './cheff.css'


export default function Cheff(){


    return (
        <>
        <div className='global-container-cheff'>
        <header>
                <div className='box-text-logout'> 
                    <Logout text='Cheff' icon={Icon}/>
                </div>
                    <LogoBurger />
            </header>

        </div>
        
        
        
        
        
        </>
    )
}