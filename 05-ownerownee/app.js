var App = React.createClass({
	getInitialState: function () {
		return {
			txt: "",

		}
	},

	update: function (e){
		this.setState({
			txt: e.target.value
		});
	},

	render: function () {
		return (
			<div>
				<Widget txt={this.state.txt} update={this.update} />
				<Widget txt={this.state.txt} update={this.update} />
				<Widget txt={this.state.txt} update={this.update} />
				<Widget txt={this.state.txt} update={this.update} />
				<Widget txt={this.state.txt} update={this.update} />
			</div>
			);
	}
})

var Widget = React.createClass({
	render: function () {
		return (
			<div>
				<input placeholder="enter the value" onChange={this.props.update} />
				<br />
				<h2>{this.props.txt}</h2>
			</div>
			);
	}
});

React.render(<App txtprop="This is the properties txtprop" />, document.body);