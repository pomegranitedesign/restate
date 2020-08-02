import React from 'react'
import styled from 'styled-components'
import Property from './Property'

const PropertyList = (props) => {
	return (
		<Wrapper>
			<Property title="2 Bedroom Duplex for Sale" />
			<Property title="4 Bedroom Condo for Sale" />
			<Property title="2 Bedroom Apartment" />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	max-width: 80%;
	margin: 50px auto;
	border-radius: 5px;
	box-shadow: 0px 10px 20px -10px black;
	padding: 40px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-column-gap: 80px;
`

export default PropertyList
