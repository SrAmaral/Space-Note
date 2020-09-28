import React from 'react'

import {Link} from 'react-router-dom'

import './style.css'

import ListImg from '../../assets/images/icons/listWhite.svg'
import TextImg from '../../assets/images/icons/file-text.svg'
import PlusImg from '../../assets/images/icons/plus.svg'

function FabHome() {
  return (
		<div className="fab-container">
			<div className="fab fab-icon-holder">
				<img src={PlusImg} alt="add note"/>
			</div>

			<ul className="fab-options">
				<li>
					<span className="fab-label">Todo Note</span>
					<Link to="/TodoNote" >
						<div className="fab-icon-holder">
							<img src={ListImg} alt="add todo"/>
						</div>
					</Link>
				</li>
				<li>
					<span className="fab-label">Text Note</span>
					<Link to="/TextNote">
						<div className="fab-icon-holder">
							<img src={TextImg} alt="add todo"/>
						</div>
					</Link>
				</li>
			</ul>
		</div>
  )
}

export default FabHome

