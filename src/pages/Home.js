import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import image from '../assets/images/home-image.png'

const Home = () => {
	return (
		<Wrapper>
			<div>
				<h1>
					Find Your Property <b>Easy and Fast</b>
				</h1>
				<Button type="primary">
					<Link to="/properties">Get Started</Link>
				</Button>
			</div>
			<img src={image} alt="Home Image" />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 80vh;
	h1 {
		font-weight: 400;
		margin-right: 50px;
	}

	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
		img {
			margin-bottom: 80px;
		}
		h1 {
			margin: 0;
			text-align: center;
			margin-bottom: 20px;
		}
		button {
			width: 100%;
		}
	}
`

export default Home
