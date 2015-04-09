var App = React.createClass({
	render: function () {
		return (
			 <div>
          <BButton href="javascript:alert('hello')" className="btn-primary">
          <BIcon className="glyphicon-heart" /> Button</BButton>
          <BButton href="javascript:alert('hello')" className="btn-success">
          <BIcon className="glyphicon-pencil" /> Button</BButton>
          <BButton href="javascript:alert('hello')" className="btn-danger">
          <BIcon className="glyphicon-inbox" /> Button</BButton>
      </div>
			);
	}
})

var BButton = React.createClass({
	render:function(){
    return this.transferPropsTo(<a className="btn">{this.props.children}</a>)
  }
});

var BIcon = React.createClass({
  render:function(){
      return this.transferPropsTo(<span className="glyphicon"></span>)
  }
});

React.render(<App />, document.body);