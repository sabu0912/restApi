import React, { Component } from 'react'

function Peticiones () {
	return (
		<figure>
			<img src="{props.avatar}" alt="{props.name}" />
			<figcaption>{this.props.name}</figcaption>
    </figure>
	)
}

export default class Random extends Component {
  state = {
    peticiones: [],
  };

	componentDidMount() {
		let url = 'https://randomuser.me/api/'
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
			});
	}

  render() {
    return (
			<>
				<h2>Peticiones </h2>
			</>
		);      
  }
}