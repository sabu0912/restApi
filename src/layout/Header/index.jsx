import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'


const Header = () => {
    return (
      <div className='l_header'>
        <div className='container__logo'>
          <h1 className='title__header'>LOGO</h1>
        </div>
				<div className='l_header__nav'>
					<div>
						{/* <p>Home</p> */}
						<Link to='/'>Home</Link>
					</div>
					<div>
						{/* <p>Personajes</p> */}
						<Link to='/avatar'>Avatar</Link>
					</div>
					<div>
						{/* <p>Avatar</p> */}
						<Link to='/personajes'>Personajes</Link>
					</div>
				</div>
			</div>
    )
}

export default Header
