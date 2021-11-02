import React from 'react'

import Header from '../Header'

import './style.scss'

const View = ({ children }) => {
    return (
        <div className='l_view__container'>
            
            <Header />
            {children}

        </div>
    )
}

export default View
