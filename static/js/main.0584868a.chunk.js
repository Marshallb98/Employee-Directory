(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{31:function(t,e,r){},50:function(t,e,r){},51:function(t,e,r){},53:function(t,e,r){},55:function(t,e,r){"use strict";r.r(e);var n=r(1),s=r.n(n),c=r(16),i=r.n(c),a=(r(31),r(23)),o=r(24),h=r(22),l=r(17),j=r(18),u=r(26),d=r(25),b=r(19),m=r.n(b),O=function(){return m.a.get("https://randomuser.me/api/?results=25")},f=(r(50),r(20)),x=(r(51),r(0));var p=function(t){return Object(x.jsxs)(f.a,{striped:!0,bordered:!0,hover:!0,children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Employee"}),Object(x.jsx)("th",{children:"Years with Company"}),Object(x.jsx)("th",{children:"First Name"}),Object(x.jsx)("th",{children:"Last Name"}),Object(x.jsx)("th",{children:"Email"}),Object(x.jsx)("th",{children:"Phone Number"})]})}),Object(x.jsx)("tbody",{children:t.employees.map((function(t){var e=t.login,r=t.picture,n=t.registered,s=t.name,c=t.email,i=t.phone;return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)("img",{src:r.medium,alt:"IdPicture"})}),Object(x.jsx)("td",{children:n.age}),Object(x.jsx)("td",{children:s.first}),Object(x.jsx)("td",{children:s.last}),Object(x.jsx)("td",{children:c}),Object(x.jsx)("td",{children:i})]},e.uuid)}))})]})},y=r(21),v=function(t){Object(u.a)(r,t);var e=Object(d.a)(r);function r(){var t;Object(l.a)(this,r);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={employees:[],sortState:[],search:""},t.searchByTarget=function(e){t.setState({search:e.target.value},(function(){t.setState({sortState:t.state.employees.filter((function(e){return e.name.first.toLowerCase().includes(t.state.search.toLowerCase())}))})}))},t.loadEmployees=function(){O().then((function(e){return t.setState({employees:e.data.results,sortState:e.data.results})})).catch((function(t){return console.log(t)}))},t}return Object(j.a)(r,[{key:"componentDidMount",value:function(){this.loadEmployees()}},{key:"sortByFirst",value:function(){var t=this.state.sortState.sort((function(t,e){var r=t.name.first.toLowerCase(),n=e.name.first.toLowerCase(),s=0;return r>n?s=1:r<n&&(s=-1),s}));this.setState({sortState:t})}},{key:"sortByLast",value:function(){var t=this.state.sortState.sort((function(t,e){var r=t.name.first.toLowerCase(),n=e.name.first.toLowerCase(),s=0;return r<n?s=1:r>n&&(s=-1),s}));this.setState({sortState:t})}},{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(y.a,{children:Object(x.jsx)("h1",{children:"Employee Directory"})}),Object(x.jsx)("input",{type:"text",value:this.state.search,placeholder:"Search By First Name",onChange:this.searchByTarget}),Object(x.jsx)("button",{onClick:this.sortByFirst.bind(this),children:"First Name Alphabetical"}),Object(x.jsx)("button",{onClick:this.sortByLast.bind(this),children:"First Name Non Alphabetical"}),Object(x.jsx)(p,{employees:this.state.sortState})]})}}]),r}(n.Component);r(53);var g=function(){return Object(x.jsx)("div",{children:Object(x.jsx)(h.a,{children:Object(x.jsx)(a.a,{children:Object(x.jsx)(o.a,{children:Object(x.jsx)(v,{})})})})})},S=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,56)).then((function(e){var r=e.getCLS,n=e.getFID,s=e.getFCP,c=e.getLCP,i=e.getTTFB;r(t),n(t),s(t),c(t),i(t)}))};r(54);i.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(g,{})}),document.getElementById("root")),S()}},[[55,1,2]]]);
//# sourceMappingURL=main.0584868a.chunk.js.map