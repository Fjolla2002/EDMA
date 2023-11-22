import React, { useState, useContext } from "react";
import { Context } from "../../Context/Language";
import './style.scss';
import Input from '../ContactComponents/Input';
import SectionTitle from '../SectionTitle/SectionTitle';
import { data } from "../../assets/data/dummydata";
import {NavLink} from 'react-router-dom';

const Login = () => {
    const [{lang,users}, dispatch] = useContext(Context);
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const validation = {};
        if(!user.email.trim() || user.email === "") {
            validation.email = data[lang].loginPage.inputs[0].errors[1].error;
        } else {
            if(!/\S+@\S+\S\.\S+/.test(user.email)){
                validation.email = data[lang].loginPage.inputs[0].errors[2].error;
            } 
            else if (!users.find(existingUser => existingUser.email === user.email)){
                validation.email = data[lang].loginPage.inputs[0].errors[0].error;
            } 
        }

        if(!user.password.trim() || user.password === "") {
            validation.password = data[lang].loginPage.inputs[1].errors[0].error;
        } else if(users.find(existingUser => existingUser.email === user.email)){
            if(user.password !== users.find(existingUser => existingUser.email === user.email).password) {
                validation.password = data[lang].loginPage.inputs[1].errors[1].error;
            }
        } 
        
        setErrors(validation); 

        if (Object.keys(validation).length === 0) {
            dispatch({
                type: "LOGIN",
                payload: user,
            });
            setUser({
                email: "",
                password: "",
            });
        }
        
    };

    return (
        <div className="wrapper">
            <div className="container">
                <div className="form-wrapper">
                    <div className="form-title">
                        <SectionTitle
                            title={data[lang].loginPage.title}
                            beforeLine={true}
                            afterLine={true}
                        />
                    </div>
                    <form onSubmit={handleLogin}>
                        <Input
                            type="text"
                            name="email"
                            label={data[lang].loginPage.inputs[0].label}
                            change={handleInputChange}
                            value={user.email}
                        />
                        {errors.email && <span className="error-text">{errors.email}</span>}
                        <Input
                            type="password"
                            name="password"
                            label={data[lang].loginPage.inputs[1].label}
                            change={handleInputChange}
                            value={user.password}
                        />
                        {errors.password && <span className="error-text">{errors.password}</span>}
                        <button type="submit">{data[lang].loginPage.btnText}</button>
                    </form>
                    <div className="has-account">
                        <p>{data[lang].loginPage.accountExists}</p>
                        <NavLink to={data[lang].loginPage.register}>
                            {data[lang].loginPage.signUp}
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
