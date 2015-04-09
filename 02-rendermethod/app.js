// var App = React.createClass({
// 	render: function () {
// 		return (
// 			<div>
// 				<b>BOLD</b>
// 				<h1>Hello World</h1>
// 			</div>
// 			);
// 	}
// })

// React.render(<App />, document.body);

var App = React.createClass({
	render: function () {
		return React.createElement("div",null,
							React.createElement("b",null,"BOLD"),
							React.createElement("h1",null,"Hello World")
						)
	}
});

React.render(React.createElement(App,null), document.body);