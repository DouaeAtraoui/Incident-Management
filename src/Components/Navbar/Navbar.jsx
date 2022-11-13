import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";


function Navbar() {
    const [menu, showMenu] = useState(false)
    return (

        <nav className="nav-container">
            <a href="/" className="nav-logo">
                <i class="uil uil-lightbulb-alt logo">Solved!</i>
            </a>


            <div className={menu ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list">

                    <li className="nav__item">
                        <a href="/" className="nav__link">
                            <i className="uil uil-home nav__icon"></i>Accueil
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="/#about" className="nav__link">
                            <i className="uil uil-file-alt nav__icon"></i>A propos
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="/login" className="nav__link">
                            <i className="uil uil-user nav__icon"></i>Connexion
                        </a>
                    </li>

                    <li className="nav__item">
                        <Link to={`/dashboard`} className="nav__link">
                            <i class="uil uil-dashboard nav__icon"></i>Tableau de bord
                        </Link>
                    </li>


                </ul>

                <i class="uil uil-times nav__close " onClick={() => showMenu(!menu)}></i>


            </div>

            {!menu && (
                <div className='nav__toggle' onClick={() => showMenu(!menu)}>
                    <i class="uil uil-apps" ></i>
                </div>
            )}


        </nav>

    )
}

export default Navbar