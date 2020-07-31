import React, { useState } from 'react'
import { Layout as AntdLayout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import realEstateImage from '../../assets/images/real-estate.svg'

const { Header, Footer, Sider, Content } = AntdLayout

const Layout = ({ children }) => {
	const [ activePage, setActivePage ] = useState('1')
	return (
		<Wrapper>
			<StyledHeader>
				<Link to="/">
					<img
						className="logo"
						src={realEstateImage}
						alt="REstate logo"
					/>
				</Link>
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={[ '1' ]}
					selectedKeys={[ activePage ]}
				>
					<Menu.Item key="1" onClick={() => setActivePage('1')}>
						<Link to="/">Home</Link>
					</Menu.Item>

					<Menu.Item key="2" onClick={() => setActivePage('2')}>
						<Link to="/properties">Properties</Link>
					</Menu.Item>

					<Menu.Item key="3" onClick={() => setActivePage('3')}>
						<Link to="/contacts">Contacts</Link>
					</Menu.Item>
				</Menu>
			</StyledHeader>
			<Content>{children}</Content>
			<StyledFooter>
				<p>Copyright 2020@DmitriyShin.io</p>
			</StyledFooter>
		</Wrapper>
	)
}

const Wrapper = styled.div``

const StyledHeader = styled(Header)`
	h1 {
		color: #ffffff;	
	}

	.logo {
		width: 80px;
		height: 31px;
		margin: 16px 24px 16px 0;
		float: left;
	}
`

const StyledFooter = styled(Footer)`
	text-align: center;
	position: fixed;
	bottom: 0;
	width: 100%;
	p {
		color: #c9c9c9;
	}
`

export default Layout
