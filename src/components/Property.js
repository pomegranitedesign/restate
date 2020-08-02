import React from 'react'
import { Card } from 'antd'
import styled from 'styled-components'

const Property = ({ title }) => {
	return (
		<StyledCard
			headStyle={{ borderBottom: '1px solid #2e2e2e' }}
			bordered
			title={title}
		>
			<p>StyledCard Content</p>
		</StyledCard>
	)
}

const StyledCard = styled(Card)`
  border-radius: 3px;
  border: 1px solid #2e2e2e;
`

export default Property
