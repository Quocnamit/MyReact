var App = React.createClass({
	getInitialState: function () {
		return {
			txt: "the state txt",
			id: 0
		}
	},

	update: function (e){
		this.setState({
			txt: e.target.value
		});

		this.props.txtprop = e.target.value;

	},

	render: function () {
		return (
			<div>
				<b>STATE</b>
				<input placeholder="enter the value" onChange={this.update} />
				<h2>{this.state.txt}</h2>
				<h3>{this.props.txtprop}</h3>
			</div>
			);
	}
})

React.render(<App txtprop="This is the properties txtprop" />, document.body);