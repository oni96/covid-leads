(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{85:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),s=n(14),r=n.n(s),c=n(18),o=n(91),l=n(96),h=n(95),d=n(93),j=n(94),b=n(54),u=n.p+"static/media/logo.6ce24c58.svg",p=n(3);function O(e){var t=Object(i.useState)("pincode"),n=Object(c.a)(t,2),a=n[0],s=n[1],r=Object(i.useState)(""),o=Object(c.a)(r,2),O=o[0],f=o[1],v=Object(i.useState)(!1),g=Object(c.a)(v,2),x=g[0],y=g[1];return Object(p.jsxs)(l.a,{bg:"dark",variant:"dark",expand:"lg",fixed:"top",children:[Object(p.jsxs)(l.a.Brand,{href:"#home",children:[Object(p.jsx)("img",{src:u,width:"30",height:"30",className:"d-inline-block align-top",alt:"null"}),"COVID Something"]}),Object(p.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav",onClick:function(e){return y(!x)}}),Object(p.jsxs)(l.a.Collapse,{id:"basic-navbar-nav",in:x,children:[Object(p.jsxs)(h.a,{className:"mr-auto",children:[Object(p.jsx)(h.a.Link,{href:"#home",children:"Home"}),Object(p.jsx)(h.a.Link,{href:"#link",children:"Link"}),Object(p.jsxs)(d.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(p.jsx)(d.a.Item,{href:"#action/3.1",children:"Action"}),Object(p.jsx)(d.a.Item,{href:"#action/3.2",children:"Another action"}),Object(p.jsx)(d.a.Item,{href:"#action/3.3",children:"Something"}),Object(p.jsx)(d.a.Divider,{}),Object(p.jsx)(d.a.Item,{href:"#action/3.4",children:"Separated link"})]})]}),Object(p.jsxs)(j.a,{inline:!0,onSubmit:function(t){return function(t){t.preventDefault(),console.log("Searching Leads Here"),console.log("Searching by",a,"with params",O),e.search(O,a),y(!x)}(t)},children:[Object(p.jsxs)(j.a.Control,{as:"select",onChange:function(e){return s(e.target.value)},children:[Object(p.jsx)("option",{value:"pincode",children:"Pincode"}),Object(p.jsx)("option",{value:"city",children:"City"}),Object(p.jsx)("option",{value:"locality",children:"Locality"})]}),Object(p.jsx)(b.a,{type:"text",placeholder:"Search",className:"mr-sm-2",required:!0,value:O,onChange:function(e){f(e.target.value)}}),Object(p.jsx)(b.a,{type:"submit",variant:"outline-success",value:"Search",className:"btn btn-outline-success"})]})]})]})}var f=n(57),v=n(19),g=n(34),x=n(35),y=n(39),m=n(37),S=n(36),k=n.n(S),L=n(90),_=n(92),w=n(55),C=n(53),D=function(e){Object(y.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(g.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={verified:!1,timenow:new Date},e}return Object(x.a)(n,[{key:"verifyLead",value:function(e){var t=null==JSON.parse(localStorage.getItem("verifiedOxygen"))?[]:JSON.parse(localStorage.getItem("verifiedOxygen"));this.setState({verified:!0}),k.a.post("/oxygen/verifyOxygenLead",{id:this.props.id}).then(console.log("Verified")).catch((function(e){return console.log(e)})),this.props.verify(this.props.id),localStorage.setItem("verifiedOxygen",JSON.stringify([].concat(Object(v.a)(t),[this.props.id.toString()]))),this.setState({last_verified:new Date})}},{key:"getTime",value:function(){return(new Date).getTime()}},{key:"componentWillUnmount",value:function(){clearInterval()}},{key:"componentDidMount",value:function(){var e=this;this.setState({last_verified:this.props.last_verified}),setInterval((function(){console.log("Timer called"),e.setState({timenow:e.getTime()})}),6e4),(null==JSON.parse(localStorage.getItem("verifiedOxygen"))?[]:JSON.parse(localStorage.getItem("verifiedOxygen"))).includes(this.props.id.toString())&&this.setState({verified:!0})}},{key:"render",value:function(e){var t=this,n=this.props.phNo.map((function(e){return Object(p.jsx)("p",{children:Object(p.jsx)("a",{href:"tel:"+e,children:e})},e)}));return console.log(this.props.last_verified),Object(p.jsxs)(L.a,{children:[Object(p.jsx)("h3",{children:this.props.name}),Object(p.jsxs)("h5",{children:["Contact No: ",n]}),Object(p.jsx)(o.a,{children:Object(p.jsxs)(_.a,{children:[Object(p.jsx)(w.a,{children:Object(p.jsxs)("p",{children:["Locality: ",Object(p.jsx)("strong",{children:this.props.locality})]})}),Object(p.jsx)(w.a,{children:Object(p.jsxs)("p",{children:[" ","City: ",Object(p.jsx)("strong",{children:this.props.city})]})}),Object(p.jsx)(w.a,{children:Object(p.jsxs)("p",{children:["Pincode: ",Object(p.jsx)("strong",{children:this.props.pin})]})})]})}),Object(p.jsxs)("p",{children:["Last verified"," ",Object(p.jsxs)("strong",{children:[Math.ceil((this.state.timenow-new Date(this.state.last_verified).getTime())/6e4)," ","mins ago"]})]}),this.state.verified?Object(p.jsxs)("p",{children:["You and ",Object(p.jsx)("strong",{children:this.props.verified_by})," other user(s) have verified. ",Object(p.jsx)("br",{}),"Thank you for helping us!"]}):Object(p.jsxs)("p",{children:["Verified by ",Object(p.jsx)("strong",{children:this.props.verified_by})," user(s)"]}),Object(p.jsx)(o.a,{children:Object(p.jsxs)(_.a,{children:[Object(p.jsx)(w.a,{children:Object(p.jsx)(C.a,{variant:"success",onClick:function(e){return t.verifyLead(e)},disabled:this.state.verified,children:"Verify"})}),Object(p.jsxs)(w.a,{children:[" ",Object(p.jsx)(C.a,{variant:"danger",style:{float:"right"},children:"Report"})]})]})})]})}}]),n}(i.Component),I=n(56),N=function(e){Object(y.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(g.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={oxygenLeads:[],searchResults:[],open:!1},e.getOxygenLeads=function(){k.a.get("/oxygen").then((function(t){e.setState({oxygenLeads:Object(v.a)(t.data)}),e.setState({searchResults:Object(v.a)(t.data)})})).catch((function(e){console.log(e)})),setTimeout((function(){return e.setState({open:!0})}),3e3)},e.verifiedByUser=function(t){var n=Object(v.a)(e.state.oxygenLeads),i=0;n.forEach((function(e,n){e.id===t&&(i=n)}));var a=Object(f.a)({},n[i]);a.last_verified=new Date,a.verified_by=a.verified_by+1,n[i]=a,e.setState({oxygenLeads:Object(v.a)(n)})},e}return Object(x.a)(n,[{key:"componentDidMount",value:function(){this.getOxygenLeads(),console.log("mounted")}},{key:"componentDidUpdate",value:function(e){if(console.log(e,this.props),e.search.searchBy!==this.props.search.searchBy||e.search.searchParam!==this.props.search.searchParam){var t=this.props.search.searchBy,n=this.props.search.searchParam;console.log("componentDidUpdate",t,n);var i=this.state.oxygenLeads.filter((function(e){return e[t]===n}));this.setState({searchResults:i}),console.log(i)}}},{key:"render",value:function(e){var t=this,n=this.state.searchResults.map((function(e){return Object(p.jsx)("div",{children:Object(p.jsx)(D,{name:e.name,phNo:e.phone_number,locality:e.locality,city:e.city,pin:e.pincode,last_verified:e.last_verified,verified_by:e.verified_by,added_by:e.added_by,reports:e.reports,id:e.id,verify:t.verifiedByUser},e.id)})}));return Object(p.jsx)(I.a,{in:this.state.open,children:Object(p.jsx)("div",{style:{marginTop:"5rem"},children:n})})}}]),n}(i.Component);var T=function(){var e=Object(i.useState)(""),t=Object(c.a)(e,2),n=t[0],a=t[1],s=Object(i.useState)(""),r=Object(c.a)(s,2),l=r[0],h=r[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)(O,{search:function(e,t){a(e),h(t)}}),Object(p.jsx)(o.a,{children:Object(p.jsx)(N,{search:{searchBy:l,searchParam:n}})})]})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,97)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),s(e),r(e)}))};r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(T,{})}),document.getElementById("root")),B()}},[[85,1,2]]]);
//# sourceMappingURL=main.15e53021.chunk.js.map