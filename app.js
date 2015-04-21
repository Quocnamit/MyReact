		var App = React.createClass({
			getInitialState:function(){
				return { links : [
								{desc: "Hello World" , linkpage: "/01-helloworl/index.html"},
								{desc: "Render Method" , linkpage: "/02-rendermethod/index.html"},
								{desc: "Properties" , linkpage: "/03-properties/index.html"},
								{desc: "State Basic" , linkpage: "/04-statebasic/index.html"},
								{desc: "Owner Ownee" , linkpage: "/05-ownerownee/index.html"},
								{desc: "Using Refs To Access Components" , linkpage: "/06-refsaccesscomponents/index.html"},
								{desc: "Access Child Properties" , linkpage: "/07-accesschildproperties/index.html"},
								{desc: "tranferPropTo Method" , linkpage: "/08-tranferpropsto/index.html"},
								{desc: "Component Life Cyle - Mounting Basics" , linkpage: "/09-componentlifecyclemoutingbasics/index.html"},
								{desc: "Component Life Cyle - Mounting Usage" , linkpage: "/10-componentlifecyclemoutingusage/index.html"},
								{desc: "Component Life Cyle - Mounting Updating" , linkpage: "/11-componentlifecyclemoutingupdating/index.html"},
								{desc: "Mixins" , linkpage: "/12-mixins/index.html"},
								{desc: "Composable Components" , linkpage: "/13-composablecomponents/index.html"},
								{desc: "Dynamically Generated Components" , linkpage: "/14-dynamicallygeneratedcomponents/index.html"},
								{desc: "Build A JSX Live Compiler" , linkpage: "/15-buildaJSXlivecompiler/index.html"},
								{desc: "JSX Deep Dive" , linkpage: "/16-JSXdeepdive/index.html"},
								{desc: "Precompile JSX" , linkpage: "/17-precompileJSX/index.html"},
								{desc: "Addon ReactLink" , linkpage: "/18-addonsreactlink/index.html"},
								{desc: "Integrating Components D3 And AngularJS" , linkpage: "/19-integratingcomponentsD3andAngularJS/index.html"},
 								{desc: "Developer Tools" , linkpage: "/20-developertools/index.html"},
								{desc: "New And Different in react v0.12.0" , linkpage: "/21-newanddifferentinreactv0.12.0/index.html"}
							]
						}
			},

			render:function(){
				return (<ul>
						{this.state.links.map(function(item,key) {
							return <LinkDetail linkpage={item.linkpage} desc={item.desc}/> 
						})}
						</ul>
							);
			}
		});

		var LinkDetail = React.createClass({
			render:function(){
				return (
						<li><a target='_blank' href={this.props.linkpage}>{this.props.desc}</a></li>
							)
			}
		});


		React.render(<App />, document.getElementById("lesson"));