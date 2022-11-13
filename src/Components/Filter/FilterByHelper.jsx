import React from 'react'
import { useState } from 'react';
import './filterBy.css'

function FilterByHelper() {
    const [isShowen, setIsShowen] = useState(false)
    return (
        <div className='filter'>
            <div className={isShowen ? "header-active" : "header"}>
                <button type='button' className='btn' onClick={() => setIsShowen(!isShowen)}>
                    <i class="uil uil-filter"></i>
                    <span>Filtrer par</span>
                </button>
                <div className='items'>
                    <button type='button' className='btn-item'>
                        <i class="uil uil-circle footer__icon"></i>
                        <span>Province</span>

                    </button>

                    <button type='button' className='btn-item'>
                        <i class="uil uil-circle footer__icon"></i>

                        <span>Statut</span>
                    </button>

                    <button type='button' className='btn-item'>
                        <i class="uil uil-circle footer__icon"></i>

                        <span>Type</span>
                    </button>

                    <button type='button' className='btn-item'>
                        <i class="uil uil-circle footer__icon"></i>

                        <span>Secteur</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FilterByHelper