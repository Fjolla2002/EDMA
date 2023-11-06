import React, { useContext, useRef, useState , useEffect} from 'react';
import { data } from '../../assets/data/dummydata';
import { Context } from '../../Context/Language';
import Input from './Input';
import emailjs from '@emailjs/browser';
import './form.scss';

const Form = () => {
    const [{ lang }] = useContext(Context);
    const form = useRef();
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        user_phone: "",
        message: ""
    });
    const [errors, setErrors] = useState({});
    const [disbledBtn, setDisabledBtn] = useState(false);

    const getErrorMessages = (error) => {
        return data[lang].contactPage.form.inputs.find(input => input.name === error).errors;
    }

    const validInputs = () => {
        return Object.keys(errors).length === 0;
    }

    const handleChanges = (e) => {
        const { name, value } = e.target;
        const data = { ...formData, [name]: value };
        setFormData(data);

        const validation = { ...errors };

        if (name === "user_name" && (!value.trim() || value === "")) {
            validation.user_name = getErrorMessages("user_name")[0].error;
        } else if (name === "user_email") {
            if (!value.trim() || value === "") {
                validation.user_email = getErrorMessages("user_email")[0].error;
            } else if (!/\S+@\S+\S\.\S+/.test(value)) {
                validation.user_email = getErrorMessages("user_email")[1].error;
            } else {
                delete validation.user_email;
            }
        } else if (name === "user_phone") {
            if (!value.trim() || value === "") {
                validation.user_phone = getErrorMessages("user_phone")[0].error;
            } else if (!value.startsWith("0") || value.length !== 10) {
                validation.user_phone = getErrorMessages("user_phone")[1].error;
            } else {
                delete validation.user_phone; 
            }
        } else if (name === "message" && value === "") {
            validation.message = getErrorMessages("message")[0].error;
        } else {
            delete validation[name];
        }

        setErrors(validation);
        setDisabledBtn(!validInputs());
    };

    useEffect(() => {
        const newErrors = {};
        for (const error of Object.keys(errors)) {
            const errorMessages = getErrorMessages(error);
            if (errorMessages && errorMessages.length > 0) {
                newErrors[error] = errorMessages[0].error;
            }
        }
        setErrors(newErrors);
    }, [lang]);

    const resetForm = () => {
        setFormData({
            user_name: "",
            user_email: "",
            user_phone: "",
            message: ""
        });
        setDisabledBtn(false);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        const validation = {};
        if(!formData.user_name.trim() || formData.user_name === ""){
            validation.user_name = data[lang].contactPage.form.inputs[0].errors[0].error;
        }
        if(!formData.user_email.trim() || formData.user_email === ""){
            validation.user_email = data[lang].contactPage.form.inputs[1].errors[0].error;
            console.log(validation.user_email);
        }
        else if(!/\S+@\S+\S\.\S+/.test(formData.user_email)){
            validation.user_email = data[lang].contactPage.form.inputs[1].errors[1].error;
            console.log(validation.user_email);
        }
        if(!formData.user_phone.trim() || formData.user_phone === ""){
            validation.user_phone = data[lang].contactPage.form.inputs[2].errors[0].error;
            console.log(validation.user_phone);
        }
        else if(!formData.user_phone.startsWith("0") || formData.user_phone.length !== 10){
            validation.user_phone = data[lang].contactPage.form.inputs[2].errors[1].error;
            console.log(validation.user_phone);
        }
        if(formData.message === "") {
            validation.message = data[lang].contactPage.form.inputs[3].errors[0].error;
            console.log(validation.message);
        }

        setErrors(validation);

        if(Object.keys(validation).length === 0){
            emailjs.sendForm('service_c4115w6', 'template_i49917j', form.current, '4ZMf9g_yhpgBtCDQ2')
            .then((result) => {
                console.log(result.text);
                console.log(formData);
                resetForm();
            }, (error) => {
                console.log(error.text);
            });
        }
        else {
            setDisabledBtn(true);
        }
    };

    return (
        <div className='form'>
            <form ref={form} onSubmit={sendEmail}>
                <div className='from-inputs'>
                    <Input
                        type="text"
                        name="user_name"
                        label={data[lang].contactPage.form.inputs[0].label}
                        change={handleChanges}
                        value={formData.user_name}
                    />
                    {errors.user_name && <span>{errors.user_name}</span>}
                    <Input
                        type="text"
                        name="user_email"
                        label={data[lang].contactPage.form.inputs[1].label}
                        change={handleChanges}
                        value={formData.user_email}
                    />
                    {errors.user_email && <span>{errors.user_email}</span>}
                    <Input
                        type="text"
                        name="user_phone"
                        label={data[lang].contactPage.form.inputs[2].label}
                        change={handleChanges}
                        value={formData.user_phone}
                    />
                    {errors.user_phone && <span>{errors.user_phone}</span>}
                    <textarea
                        name="message"
                        rows="5"
                        placeholder={data[lang].contactPage.form.inputs[3].label}
                        onChange={handleChanges}
                        value={formData.message}
                    />
                    {errors.message && <span>{errors.message}</span>}
                    <input
                        type='submit'
                        className={`btn ${disbledBtn ? 'disabled-input' : ''}`}
                        value={data[lang].contactPage.form.btnText}
                        disabled={disbledBtn}
                    />
                </div>
            </form>
        </div>
    )
}

export default Form;


