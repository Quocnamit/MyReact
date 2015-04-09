 var APP = 
 React.createClass({
 	getInitialState:function(){
 		return {increasing:false}
 	},
 	update:function(){
 		var newVal = this.props.val+1
 		this.setProps({val:newVal})
 	},
 	componentWillReceiveProps:function(nextProps){
 		var a = nextProps.val>this.props.val;
 		console.log("componentWillReceiveProps  ",a); 
 		this.setState({increasing:a})
 	},
 	shouldComponentUpdate: function(nextProps, nextState) {
 		console.log("shouldComponentUpdate"); 
 		return nextProps.val % 5 ===0;
 	},
 	componentWillUpdate: function(nextProps, nextState) {
 		console.log("nextProps ===" + JSON.stringify(nextProps))
 	},
 	render:function(){
 		console.log("RENDERING");
 		return  (
 			<button
 			onClick={this.update}>
 			{this.props.val}
 			</button>
 			)
 	},
 	componentDidUpdate: function(prevProps, prevState) {
 		console.log("prevProps ===" + JSON.stringify(prevProps))
 	}
 });


 React.renderComponent(
 	<APP val={0} />,
 	document.getElementById('panel'))   