var App = React.createClass({
	render: function () {
		return (
			<Button>I <Heart /> React</Button>
			);
	}
})

var Button = React.createClass({
	render: function () {
		return (
			<button>{this.props.children}</button>
			);
	}
});

var Heart = React.createClass({
	render: function() {
		return (
				<span className="glyphicon glyphicon-heart" myatt="test"></span>
			);
	}
});
React.render(<App />, document.body);