var App = React.createClass({
	getInitialState:function(){
		return {
			red: 0
		}
	},

	update: function(){
		this.setState({
			red: this.refs.red.refs.range.getDOMNode().value

		})
		console.log(this.refs.red.refs.range.getDOMNode().value)
	},

	render:function(){
		return (
			<div>
			<NumInput
			ref="red"
			min={0}
			max={255}
			step={0.01}
			val={+this.state.red}
			update={this.update} 
			label="Red"
			type="number"
			/>
			</div>
			) 
	}
});

var NumInput = React.createClass({
	proTypes:{
		min: React.PropTypes.number,
		max: React.PropTypes.number,
		step: React.PropTypes.number,
		label: React.PropTypes.string,
		update: React.PropTypes.func.isRequired,
		type: React.PropTypes.oneOf(['number','range'])
	},

	getDefaultProps:function(){
		return {
			min: null,
			max: null,
			val: 0,
			step: 1,
			label:'',
			type: 'range'
		}
	},

	render:function(){
		var label = this.props.label !== '' ?
		<label>{this.props.label} : {this.props.val} </label> : ''
		return (
			<div>
			<input
			ref= "range"
			type={this.props.type}
			min={this.props.min}
			max={this.props.max}
			step={this.props.step}
			defaultValue={this.props.val}
			onChange={this.props.update}/>
			{label}
			</div>
			) 
	}
});

React.renderComponent(<App />, document.body)