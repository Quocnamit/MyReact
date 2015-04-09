var App = React.createClass({
	update: function(){
			var newVal = this.props.val + 1;
			this.setProps({val:newVal});
	},

	componentWillMount:function(){
	  console.log("here i go")
	},
	render:function(){
	  console.log("hello world")
	  return <button onClick={this.update}>{this.props.val}</button>
	},
	componentDidMount:function(){
	  console.log("nice place you got here")
	},
	componentWillUnmount:function(){
	  console.log("goodbye cruel world!")
	}
});

window.render = function(){
	React.render(
		<App val={0} />,
		document.getElementById('panel'))   
}
window.unmount = function(){
	React.unmountComponentAtNode(document.getElementById('panel'))
}