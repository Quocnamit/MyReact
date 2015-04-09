var ReactMixin = {
	componentWillMount: function() {
		console.log("component will mount");
	},
	getInitialState: function() {
		return {
			count:0
		};
	},
	incrementCount:function(){
		this.setState({count:this.state.count+1})
	}

}

var buttonComponent = React.createClass({
	mixins:[ReactMixin],
	render: function() {
		return (
			<button onClick={this.incrementCount}>{this.props.txt} - {this.state.count}</button>
			)
	}
})

var inputComponent = React.createClass({
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
				<buttonComponent txt="this is the button" />
        <inputComponent txt="this is the input" />
			</div>
			)
	}
});

React.render(<App />, document.body)