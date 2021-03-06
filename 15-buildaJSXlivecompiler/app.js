var Transformer = React.createClass({
  getInitialState:function(){
  	return {
  		input:'/** @JSX REACT.DOM */',
  		output:'',
  		error:''
  	}
  },

  update: function (e) {
  	var code = e.target.value;
  	try{
  		this.setState({
  			output: JSXTransformer.transform(code).code,
  			error:''
  		})
  	}
  	catch(err){
  		this.setState({
  			error:err.message
  		})
  	}
  },

  render:function(){
    return (
    	<div>
            <div className="row">
              <p className="alert alert-danger">&nbsp;{this.state.err}</p>
            </div>
            <div className="row">
              <textarea className="col-sm-6 input-lg" defaultValue={this.state.input} onChange={this.update} />
              <pre className="col-sm-6 input-lg">{this.state.output}</pre>
            </div>

          </div>
    	)
  }
});

React.render(<Transformer />, document.body);