import React, {Component, useState} from "react";
import {Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";


function Login (){
    
    const LoginFormStyle = {
        width: '400px',
        position: 'absolute',
        top:'50%',
        left: '50%',
        transform:' translate(-50%, -50%)'
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        
    }
    const { t, i18n } = useTranslation();

    return(
        <div style={LoginFormStyle}>
            <h3>{t('login.login')}</h3>
            <form>
                <label for="userId" name="userId">{t('login.userId')}</label>
                <input type="text" id="userId" name="userId"placeholder="enter your id" required/><br/><br/>
                <label for="password" name="password">{t('login.password')}&nbsp;</label>
                <input type="password" id="password" name="password"placeholder="enter your password" required/><br/><br/>
                <Link to="/"><button onSubmit = {handleSubmit}>{t('login.login')}</button></Link>                      
            </form>
        </div>
    )
    
}

export default Login;