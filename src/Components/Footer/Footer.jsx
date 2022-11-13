import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className="footer__container">
            <a href="/" className="foot-logo">
                <i class="uil uil-lightbulb-alt logo">Solved!</i>
            </a>

                <ul className='footer__list'>
                    <li>
                        <i class="uil uil-circle footer__icon"></i>
                        <a href="#about" className='footer__link'>A propos</a>
                    </li>

                    <li>
                        <i class="uil uil-circle footer__icon"></i>
                        <a href="/#map" className='footer__link'>Carte</a>
                    </li>

                </ul>

            
            </div>
            <span className='footer__copy'>
                &#169; Crypticalcoder. All rigths reserved
            </span>
        </footer>
    )
}

export default Footer