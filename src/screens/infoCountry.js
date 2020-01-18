import React, { Component } from 'react'
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, Jumbotron } from 'reactstrap';


class InfoCountry extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	render() {
		return (
			<Container>
				<Jumbotron>
					<h2 className="display-4">County Information</h2>
				</Jumbotron>
				<Breadcrumb tag="nav" listTag="div">
					<BreadcrumbItem tag="a" href="/home">Home</BreadcrumbItem>
					<BreadcrumbItem active tag="span">Contry Info</BreadcrumbItem>
				</Breadcrumb>
				<Row>
					<Col xs="3"></Col>
					<Col xs="auto">
						<Row>
							<h1>Name: {this.props.name}</h1>
						</Row>
						<Row>
							<h1>Capital: {this.props.Capital}</h1>
						</Row>
						<Row>
							<h1>Subregion: {this.props.Subregion}</h1>
						</Row>
						<Row>
							<h1>Population: {this.props.population}</h1>
						</Row>
						<Row>
							<h1>Area: {this.props.area} km2</h1>
						</Row>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default InfoCountry;