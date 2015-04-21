var ReactMixin = {
	componentWillMount: function() {
		console.log("component will mount");
	},
	getInitialState: function() {
		return {
			count:0
		}
	},
	incrementCount:function(){
		this.setState({count:this.state.count+1})
	}

}

var ButtonComponent = React.createClass({
	mixins:[ReactMixin],
	render: function() {
		return (
			<button onClick={this.incrementCount}>{this.props.txt} - {this.state.count}</button>
			)
	}
})

var InputComponent = React.createClass({
	mixins:[ReactMixin],
	componentWillMount: function() {
		setInterval(this.incrementCount,1000);
	},
	render: function() {
		return (
			<input value={this.props.txt + ' - '+ this.state.count} />
			)
	}
})

var App = React.createClass({
	render: function() {
		return (
			<div>
				<ButtonComponent txt="this is the button" />
        		<InputComponent txt="this is the input" />
			</div>
			)
	}
});

React.render(<App />, document.body)