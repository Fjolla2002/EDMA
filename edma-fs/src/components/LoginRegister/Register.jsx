import React, { useState, useContext } from "react";
import { Context } from "../../Context/Language";
import './style.scss';
import Input from '../ContactComponents/Input';
import SectionTitle from '../SectionTitle/SectionTitle';
import { data } from "../../assets/data/dummydata";
import {NavLink} from 'react-router-dom';

const Registration = () => {
    const [{lang,users}, dispatch] = useContext(Context);
    const [newUserData, setNewUserData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [errors, setErrors] = useState({});
    const [successfullySend, setSuccessfullySend] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUserData({
            ...newUserData,
            [name]: value
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();

        const validation = {};
        if(!newUserData.username.trim() || newUserData.username === "") {
            validation.username = data[lang].registerPage.inputs[0].errors[0].error;
        } 
        if(users.some(user => user.email === newUserData.email)){
            validation.email = data[lang].registerPage.inputs[1].errors[0].error;
        } else if(!newUserData.email.trim() || newUserData.email === "") {
            validation.email = data[lang].registerPage.inputs[1].errors[1].error;
        } else if(!/\S+@\S+\S\.\S+/.test(newUserData.email)){
            validation.email = data[lang].registerPage.inputs[1].errors[2].error;
        } 
        if(!newUserData.password.trim() || newUserData.password === "") {
            validation.password = data[lang].registerPage.inputs[2].errors[0].error;
        } else if(newUserData.password.length < 8) {
            validation.password = data[lang].registerPage.inputs[2].errors[1].error;
        }
        if(!newUserData.confirmPassword.trim() || newUserData.confirmPassword === "") {
            validation.confirmPassword = data[lang].registerPage.inputs[3].errors[0].error;
        } else if(newUserData.password !== newUserData.confirmPassword) {
            validation.confirmPassword = data[lang].registerPage.inputs[3].errors[1].error;
        } 
        
        setErrors(validation); 
        setSuccessfullySend("");

        if(Object.keys(validation).length === 0){
            dispatch({
                type: "REGISTER",
                payload: newUserData,
            });
            setSuccessfullySend("You are registered successfully!")
            setNewUserData({
                username: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
        }
        
    };

    return (
        <div className="wrapper">
            <div className="container">
                <div className="form-wrapper">
                    <div className="form-title">
                        <SectionTitle
                            title={data[lang].registerPage.title}
                            beforeLine={true}
                            afterLine={true}
                        />
                    </div>
                    <form onSubmit={handleRegister}>
                        <Input
                            type="text"
                            name="username"
                            label={data[lang].registerPage.inputs[0].label}
                            change={handleInputChange}
                            value={newUserData.username}
                        />
                        {errors.username && <span className="error-text">{errors.username}</span>}
                        <Input
                            type="text"
                            name="email"
                            label={data[lang].registerPage.inputs[1].label}
                            change={handleInputChange}
                            value={newUserData.email}
                        />
                        {errors.email && <span className="error-text">{errors.email}</span>}
                        <Input
                            type="password"
                            name="password"
                            label={data[lang].registerPage.inputs[2].label}
                            change={handleInputChange}
                            value={newUserData.password}
                        />
                        {errors.password && <span className="error-text">{errors.password}</span>}
                        <Input
                            type="password"
                            name="confirmPassword"
                            label={data[lang].registerPage.inputs[3].label}
                            change={handleInputChange}
                            value={newUserData.confirmPassword}
                        />
                        {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
                        <button type="submit">{data[lang].registerPage.btnText}</button>
                        {successfullySend && <span className="success-text">{successfullySend}</span>}
                    </form>
                    <div className="has-account">
                        <p>{data[lang].registerPage.accountExists}</p>
                        <NavLink to={data[lang].registerPage.loginPath}>
                            {data[lang].registerPage.login}
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
