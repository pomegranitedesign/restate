import React, { useState, Component } from 'react'
import styled from 'styled-components'
import InputRange from 'react-input-range'

class Filter extends Component {
	state = {
		value: { min: 40000, max: 3000000 }
	}

	render() {
		return (
			<Wrapper>
				<div>
					<InputRange
						InputRange
						minValue={40000}
						maxValue={3000000}
						formatLabel={(value) => `$${value}`}
						value={this.state.value}
						onChange={(value) => this.setState({ value })}
						onChangeComplete={(value) => console.log(value)}
					/>
				</div>

				<div />
			</Wrapper>
		)
	}
}

const Wrapper = styled.form``

export default Filter
