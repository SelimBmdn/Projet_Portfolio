import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/components/InputCompenent.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Navbar from './NavBar';

const InputCompenent = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_k1wivu4', 'template_kn6jhlw', form.current, 'eUaDdbmPqEWY1xGVc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };



    return (
        <form className='all_input' ref={form} onSubmit={sendEmail}>

            <label>Nom</label>
            <div className='input_name'>
            <input type="text" name="user_name" placeholder='Entrer votre Nom Prenom/Entreprise' />
            </div>

            {/*<div className='input_mail_and_number'>*/}

            <label>Email</label>
            <div className='input_email'>
            <input type="email" name="user_email" placeholder='Entrer votre Email' />
            </div>

            <label>Numéro de téléphone</label>
            <div className='input_number'>
            <input className='input_phone' type="phone" name="user_phone" placeholder='Entrer votre numéro de téléphone' />
            </div>

           {/*</div>*/}
            
            <label>Message</label>
            <div className='input_message'>
            <textarea name="message" placeholder='Entrer votre message' />
            
            </div>

            <button  type="submit"  value="Send"  />

        </form>
    );

};
export default InputCompenent;

/*
const InputCompenent = () => {
  
    const [data, setData] = useState({name: "", email: "", phone: "", message: ""});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name]: value})

    }
  
    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Votre message a été envoyer")
        console.log(data)

    }

    return ( 

           <form method='post' onSubmit={handleSubmit} className='all_input'>
                            <div className='input_name'>
                            <input name="name" onChange={handleChange} value={data.name} type="text"  placeholder='Entrer votre Nom Prenom/Entreprise'/>
                            </div>

                            <div className='input_mail_and_number'>
                                <div className='input_email'>
                                    
                                <input name="email" onChange={handleChange} value={data.email} type="email" placeholder='Entrer votre Email'/>
                                </div>
                                <div className='input_number'>
                                <input name="phone" onChange={handleChange} value={data.phone} type="phone" placeholder='Entrer votre numéro de téléphone'/>
                                </div>
                            </div>

                            <div className='input_message'>
                            <textarea name="message" cols="30" rows="10" onChange={handleChange} value={data.message} placeholder='Entrer votre message' />
                            </div>

                            <div className='send'>
                            <button name='send'>Envoyer</button>
                        </div>

                        {/*<p>{data.name} {data.email} {data.phone} {data.message}</p>/}
                        </form>
        
    )
  
}

export default InputCompenent; */