import React, { Component } from 'react'
import styled from 'styled-components'
import { Select } from 'antd'
import InputRange from 'react-input-range'

const { Option } = Select

class Filter extends Component {
	state = {
		value: { min: 40000, max: 400000 },
		sort: 'price'
	}

	render() {
		return (
			<Wrapper>
				<h1>Refine Results</h1>
				<Controls>
					<InputRange
						step={10000}
						minValue={40000}
						maxValue={400000}
						formatLabel={(value) => `$${value}`}
						value={this.state.value}
						onChange={(value) => this.setState({ value })}
						onChangeComplete={(value) => console.log(value)}
					/>
					<Select
						style={{ marginTop: 30 }}
						value={
							this.state.sort[0].toUpperCase() +
							this.state.sort.substr(1)
						}
						onChange={(val) => this.setState({ sort: val })}
					>
						<Option value="price">Price</Option>
						<Option value="location">Location</Option>
						<Option value="name">Name</Option>
					</Select>
				</Controls>
			</Wrapper>
		)
	}
}

const Wrapper = styled.form`
	width: 80%;
	margin: 0 auto;
	padding: 40px;
	border-radius: 5px;
	box-shadow: 0px 10px 20px -10px black;
`

const Controls = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-top: 40px;
`

export default Filter
