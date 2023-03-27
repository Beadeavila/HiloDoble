import React, { useState } from "react";
import './Contact.css'
import FormButton from "./FormButton";

function Contact() { 
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        suggestionOrMessage: "",
        });

    const handleInputChange = (inquiry) => {
        const { name, value } = inquiry.target;
        setFormData({ ...formData, [name]: value });
        };

    const handleSubmit = (inquiry) => {
        inquiry.preventDefault();
        if (formData.name && formData.surname && formData.email && formData.suggestionOrMessage) {
            console.log("Datos enviados:", formData);
        } else {    
            alert("Por favor complete todos los campos requeridos");
        }
        };

    return (
        <>
            <div className='pageTitle'>
                <h2 className='textCharacteristics'>Contacta</h2>
                <div className='purpleRec'></div>
            </div>
            <div className='contentBox'>  
                <p className='bodyText'>¿Tienes alguna duda, propuesta o sugerencia? Buscamos la respuesta indicada a tu mensaje, para ello contacta con nosotros o escríbenos mediante el formulario.</p>
                <div className='contactFormBox'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className='contactFormTxt'>
                                Nombre: 
                                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required/>
                            </label>
                        </div>

                        <div>
                            <label className='contactFormTxt'>
                                Apellidos:
                                <input type="text" name="surname" value={formData.surname} onChange={handleInputChange} required/>
                            </label>
                        </div>

                        <br></br>

                        <div>
                            <label className='contactFormTxt'>
                                Correo electrónico: 
                                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required/>
                            </label>
                        </div>

                        <br></br>

                        <div>
                            <label className='contactFormTxt'>
                                Sugerencia o mensaje:
                                <textarea name="suggestionOrMessage" value={formData.suggestionOrMessage} onChange={handleInputChange} required/>
                            </label>
                        </div>
                    </form>
                    <FormButton text='Enviar' className='FormBtn' type='submit'/>
                </div>
            </div>
        </>
    )
}

export default Contact