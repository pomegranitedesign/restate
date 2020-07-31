import React from 'react'
import styled from 'styled-components'
import Filter from '../components/Filter'

const Properties = (props) => {
	return (
		<div>
			<Title>Premium Property Finder</Title>
			<Filter />
		</div>
	)
}

const Title = styled.h1`
	text-align: center;
	color: #2e2e2e;
	font-weight: 900;
	margin-top: 60px;
	font-size: 50px;
`

export default Properties
