import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button'
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Únete a la newsletter para recibir las mejores ofertas para tus vacaciones
            </p>
            <p className='footer-subscription-text'>
                Puedes darte de baja en cualquier momento.
            </p>
            <div className='input-areas'>
                <form className='footer-email-form'>
                    <input type="email" name="email" className='footer-input' placeholder='Tu Email' />
                    <Button buttonStyle='btn--outline'>Suscríbete</Button>
                </form>
            </div>
        </section>
        <div class='footer-links'>
            <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                    <h2>Conócenos</h2>
                    <Link to='/sign-up'>Cómo funciona</Link>
                    <Link to='/'>Testimonios</Link>
                    <Link to='/'>Carrera</Link>
                    <Link to='/'>Inversores</Link>
                </div>
                <div class='footer-link-items'>
                    <h2>Contacto</h2>
                    <Link to='/'>Contacto</Link>
                    <Link to='/'>Soporte</Link>
                    <Link to='/'>Destinos</Link>
                    <Link to='/'>Patrocinadores</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                    <h2>Videos</h2>
                    <Link to='/'>Envia tu video</Link>
                    <Link to='/'>Embajadores</Link>
                    <Link to='/'>Agencia</Link>
                    <Link to='/'>Influencers</Link>
                </div>
                <div class='footer-link-items'>
                    <h2>Redes sociales</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to="/" className='social-logo'>
                        TRVL <i className='fab fa-typo3'></i>
                    </Link>
                </div>
                <small className='website-rights'>TRVL © 2022</small>
                <div className='social-icons'>
                    <a href="https://www.facebook.com" className='social-icon-link facebook'
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    >
                        <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href="https://www.instagram.com" className='social-icon-link instagram'
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    >
                        <i className='fab fa-instagram'></i>
                    </a>
                    <a
                    className='social-icon-link youtube'
                    href='https://www.youtube.com'
                    target='_blank'
                    rel="noreferrer"
                    aria-label='Youtube'
                    >
                        <i className='fab fa-youtube' />
                    </a>
                    <a
                    className='social-icon-link twitter'
                    href='https://www.twitter.com'
                    target='_blank'
                    rel="noreferrer"
                    >
                        <i className='fab fa-twitter' />
                    </a>
                    <a
                    className='social-icon-link linkedin'
                    href='https://www.linkedin.com'
                    target='_blank'
                    rel="noreferrer"
                    >
                        <i class='fab fa-linkedin' />
                    </a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer