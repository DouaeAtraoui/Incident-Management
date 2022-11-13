import React from 'react';
import {useNavigate} from 'react-router-dom';
import './userCard.css';

function UserCard() {
  const navigate = useNavigate();
  return (
    <div className='card_login'>
        <div className="card">
          <img src='assets/admin.jpg' alt='Vous êtes admin' className='card-img'/>
          <h1 className='card-title'>Vous êtes un Administrateur</h1>
          <button 
                type='button' 
                className='card-btn'
                onClick={()=> navigate("/Admin")}
              >Connexion
              </button>
        </div>

        <div className="card">
          <img src='assets/helper.jpg' alt='Vous êtes professionnel' className='card-img'/>
          <h1 className='card-title'>Vous êtes un Professionnel</h1>
              <button 
                type='button' 
                className='card-btn'
                onClick={()=> navigate("/Helper")}
              >Connexion
              </button>
        </div>
    </div>
  )
}

export default UserCard