=======NEW VERSION=========*/
var Title =
React.createClass({
  render:function(){
    return <h1 {...this.props} id="message">Hello World!</h1>
    //tranferPropsto is deprecated
  }
});

var App =
React.createClass({
  render:function(){
    return <div><Title className="red" /></div>
  }
});

React.render(<App />, document.body);
/*==============================*/

/*=======OLDER VERSION JSX========*/
// var Title =
// React.createClass({
//   render:function(){
//     return this.transferPropsTo(<h1 id="message">Hello World!</h1>)
//     //tranferPropsTo is deprecated
//   }
// });

// var App =
// React.createClass({
//   render:function(){
//     return <div><Title className="red" /></div>
//   }
// });

// React.renderComponent(<App />, document.body);
//renderComponent is deprecated
/*==============================*/

/*=======OLDER VERSION React.DOM========*/
// var Title =
// React.createClass({
//   render:function(){
//     this.props.id = "message";
//     return React.DOM.h1(this.props,"Hello World");

//     //if using this.TransferPropsTo(React.DOM.h1({id:"message"},"Hello World"))
//     //tranferPropsTo is deprecated
//   }
// });

// var App =
// React.createClass({
//   render:function(){
//     return React.div(null,React.createFactory(Title)({className:"red"}));
//     //if using React.div(null,Title({className:"red"}))
//     //warning: App is a calling react component directy
//   }
// });

// React.render(React.createFactory(App)(), document.body);
//in DOM generator if using <App /> -> warning: App is a calling react component directy
/*==============================