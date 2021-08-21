(this.webpackJsonpcontactlist=this.webpackJsonpcontactlist||[]).push([[0],{34:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(20),o=n.n(r),i=n(7),s=n(8),u=n(11),l=n(10),h=n(9),d=n(12),j=n(1),p=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={query:""},t.updateQuery=function(e){t.setState((function(){return{query:e.trim()}}))},t.clearQuery=function(){t.updateQuery("")},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.state.query,n=this.props,a=n.contacts,c=n.onDeleteContact,r=""===e?a:a.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));return Object(j.jsxs)("div",{className:"list-contacts",children:[Object(j.jsxs)("div",{className:"list-contacts-top",children:[Object(j.jsx)("input",{className:"search-contacts",type:"text",placeholder:"Search Contacts",value:e,onChange:function(e){return t.updateQuery(e.target.value)}}),Object(j.jsx)(d.b,{to:"/create",className:"add-contact",children:"Add"})]}),r.length!==a.length&&Object(j.jsxs)("div",{className:"showing-contacts",children:[Object(j.jsxs)("span",{children:["Showing ",r.length," of ",a.length," "]})," ",Object(j.jsx)("button",{onClick:this.clearQuery,children:"Show all"})]}),Object(j.jsx)("ol",{className:"contact-list",children:r.map((function(t){return Object(j.jsxs)("li",{className:"contact-list-item",children:[Object(j.jsx)("div",{className:"contact-avatar",style:{backgroundImage:"url(".concat(t.avatarURL,")")}}),Object(j.jsxs)("div",{className:"contact-details",children:[Object(j.jsx)("p",{children:t.name}),Object(j.jsx)("p",{children:t.handle})]}),Object(j.jsx)("button",{onClick:function(){return c(t)},className:"contact-remove",children:"Remove"})]},t.id)}))})," "]})}}]),n}(c.a.Component);p.protoTypes={contact:h.PropTypes.array.isRequired,onDeleteContact:h.PropTypes.func.isRequired};var f=p,b=n(18),v=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CONTACTS_API_URL||"http://localhost:5001",m=localStorage.token;m||(m=localStorage.token=Math.random().toString(36).substr(-8));var O={Accept:"application/json",Authorization:m},g=function(t){return fetch("".concat(v,"/contacts/").concat(t.id),{method:"DELETE",headers:O}).then((function(t){return t.json()})).then((function(t){return t.contact}))},y=function(t){return fetch("".concat(v,"/contacts"),{method:"POST",headers:Object(b.a)(Object(b.a)({},O),{},{"Content-Type":"application/json"}),body:JSON.stringify(t)}).then((function(t){return t.json()}))},x=function(t){return new Promise((function(e){var n=new FileReader;n.onload=function(t){e(t.target.result)},n.readAsDataURL(t)}))},C=function(t,e,n){return new Promise((function(a){var c=new Image;c.onload=function(){var t=e.getContext("2d");c.height>n&&(c.width*=n/c.height,c.height=n),t.clearRect(0,0,e.width,e.height),e.width=c.width,e.height=c.height,t.drawImage(c,0,0,c.width,c.height),a(e.toDataURL("image/jpeg"))},c.src=t}))},S=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={value:""},t.handleFileChange=function(e){var n=e.target.files[0];n&&n.type.match(/^image\//)?x(n).then((function(e){C(e,t.canvas,t.props.maxHeight).then((function(e){t.setState({value:e})}))})):t.setState({value:""})},t.handleFormReset=function(){t.setState({value:""})},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.canvas=document.createElement("canvas"),this.fileInput.form.addEventListener("reset",this.handleFormReset)}},{key:"componentWillUnmount",value:function(){this.fileInput.form.removeEventListener("reset",this.handleFormReset)}},{key:"render",value:function(){var t=this,e=this.props,n=e.className,a=e.name,c=this.state.value,r={position:"relative"};return c&&(r.backgroundImage='url("'.concat(c,'")'),r.backgroundRepeat="no-repeat",r.backgroundPosition="center",r.backgroundSize="cover"),Object(j.jsxs)("div",{className:n,style:r,children:[Object(j.jsx)("input",{type:"hidden",name:a,value:c}),Object(j.jsx)("input",{ref:function(e){return t.fileInput=e},type:"file",onChange:this.handleFileChange,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",opacity:0}})]})}}]),n}(c.a.Component),w=n(23),N=n.n(w),R=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).handleSubmit=function(e){e.preventDefault();var n=N()(e.target,{hash:!0});t.props.how&&t.props.onCreateContact(n)},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(d.b,{className:"close-create-contact",to:"/",children:"Close"}),Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsx)(S,{className:"create-contact-avatar-input",name:"avatarURL",maxHeight:64}),Object(j.jsxs)("div",{className:"create-contact-details",children:[Object(j.jsx)("input",{type:"text",name:"name",placeholder:"name"}),Object(j.jsx)("input",{type:"text",name:"handle",placeholder:"handle"}),Object(j.jsx)("button",{children:"Add Contact"})]})]})]})}}]),n}(c.a.Component),k=n(2),T=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[]},t.createContact=function(e){y(e).then((function(e){t.setState((function(t){return{contacts:t.contacts.concat([e])}}))}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e.id}))}})),g(e)},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("".concat(v,"/contacts"),{headers:O}).then((function(t){return t.json()})).then((function(t){return t.contacts})).then((function(e){t.setState((function(){return{contacts:e}}))}))}},{key:"render",value:function(){var t=this;return Object(j.jsxs)("div",{children:[Object(j.jsx)(k.a,{exact:!0,path:"/",render:function(){return Object(j.jsx)(f,{contacts:t.state.contacts,onDeleteContact:t.removeContact})}}),Object(j.jsx)(k.a,{path:"/create",render:function(e){var n=e.history;return Object(j.jsx)(R,{onCreateContact:function(e){t.createContact(e),n.push("/")}})}})]})}}]),n}(c.a.Component);n(34);o.a.render(Object(j.jsx)(d.a,{children:Object(j.jsx)(T,{})}),document.querySelector("#root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.75b01ea1.chunk.js.map