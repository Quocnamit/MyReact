var App = React.createClass({
	getDefaultProps: function(){
		return{
			txtprop: 'This is the default value of properties txtprop',
			order: 0
		}
	},

	propTypes:{
		txtprop: React.PropTypes.string,
		order: React.PropTypes.number.isRequired
	},

	render: function () {
		return (
			<div>
				<b>BOLD</b>
				<h1>{this.props.txtprop}</h1>
				<h2>{this.props.order}</h2>
			</div>
			);
	}
})

React.render(<App txtprop="This is the properties txtprop" order={5} />, document.body);