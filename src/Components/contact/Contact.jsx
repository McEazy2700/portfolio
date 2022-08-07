import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion';
import { Icons } from '../icons/Icons'
import { Alert } from '@mui/material';
import emailjs from '@emailjs/browser';
import Tag from '../tag/Tag'
import './Contact.css'

const Contact = () => {
    const [isSent, setIsSent] = useState(false)
    const [sendFailed, setSendFailed] = useState(false)
    const form = useRef();
    const sendEmail = (e)=>{
        e.preventDefault();

        emailjs.sendForm('service_kowprxk', 'template_oksg0uk', form.current, '44SX_hL7Cj01MEBEo')
            .then((result) => {
                console.log(result.text);
                setIsSent(true)
                // setTimeout(setIsSent(false), 10000)
            }, (error) => {
                console.log(error.text);
                setSendFailed(true)
                // setTimeout(setSendFailed(false), 10000)
            });
        e.target.reset()
    }
  return (
    <>
    <section className="portfolio__contact section__padding" id='contact'>
        <motion.div 
        initial={{ opacity: 0, y: '10px'}}
        whileInView={{ opacity: 1, y: '0'}}
        transition={{ duration: 0.4 }}
        className="portfolio__contact-info">
            <div className="portfolio__contact-info_text">
                <h2>Ezekiel Victor</h2>
                <p>FullStack Developer</p>
            </div>
            <div className="portfolio__contact-info_icons">
                <Icons />
            </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, x: '10px'}}
        whileInView={{ opacity: 1, x: '0'}}
        transition={{ duration: 0.4 }}
        className="portfolio__contact-form">
            <Tag name="contact">
            <div className="portfolio__form-wraper">
                <form ref={form} onSubmit={sendEmail} action="">
                    <div className="portfolio__contact-form-items">
                        <div className="form__item">
                            <input type="text" name='name' id='name' placeholder='Name' />
                        </div>
                        <div className="form__item">
                            <input type="email" name="email" id="email" placeholder='Email' />
                        </div>
                        <div className="form__item">
                            <textarea name="message" id="message" placeholder='Message' cols="30" rows="10"/>
                        </div>
                    </div>
                    <div className="form__buttom"><button type='submit'>Send Message</button></div>
                </form>
            </div>
            </Tag>
        </motion.div>
    </section>
        <div className="send__status">
            {isSent && <Alert severity='success'>Success! Your email has been sent.</Alert>}
            {sendFailed && <Alert severity='error'>Failure! Sorry there was an error in sending your mail.</Alert>}
        </div>
    </>
  )
}

export default Contact