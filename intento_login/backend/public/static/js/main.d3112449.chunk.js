(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,a){},48:function(e,t,a){e.exports=a(90)},53:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(43),o=a.n(c),i=(a(53),a(4)),s=a(5),l=a(7),u=a(6),h=a(2),m=a(8),d=a(10),p=a(18),g=(a(27),a(44),a(28)),f=a.n(g),b=f.a.create();b.defaults.headers.common["cache-control"]="no-cache",b.defaults.headers.post["Content-Type"]="no-cache",b.defaults.headers.put["Content-Type"]="no-cache";var E=f.a.create();E.defaults.headers.common["cache-control"]="no-cache",E.defaults.headers.post["Content-Type"]="no-cache",E.defaults.headers.put["Content-Type"]="no-cache";var v=function(e){E.defaults.headers.common.Authorization="Bearer ".concat(e)},k=function(e){E.interceptors.response.use(function(e){return e},function(t){if(t.response)switch(console.log(t.response.status),t.response.status){case 401:e(t.response.data)}else t.request?console.log(t.request):console.log(t);return Promise.reject(t)})},C=b,O=E,j=function(){try{return localStorage.setItem("t","t"),localStorage.removeItem("t"),!0}catch(e){return!1}}(),y=function(e){return j?localStorage.getItem(e):null},S=function(e,t){return!!j&&(localStorage.setItem(e,t),!0)},N=a(21);function B(e){return Object(N.b)(e,{stiffness:330,damping:22})}B(0),B(.8),B(1),B(1);var D=function(e){return{opacity:e.opacity,transform:"translateX(".concat(e.offset,"px)")}};function H(e){return Object(N.b)(e,{stiffness:174,damping:19})}var w={atEnter:{offset:200,opacity:0},atLeave:{offset:H(-100),opacity:H(0)},atActive:{offset:H(0),opacity:H(1)}},T=a(19),A=function(e){var t=e.component,a=e.auth,n=Object(T.a)(e,["component","auth"]);return r.a.createElement(p.b,Object.assign({},n,{render:function(e){return a.logged?r.a.createElement(t,Object.assign({},e,{auth:a})):r.a.createElement(p.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},M=a(9),I=(a(84),function(e){var t=e.to,a=e.children;Object(T.a)(e,["to","children"]);return r.a.createElement(d.c,{activeClassName:"activeNav",exact:!0,to:t},a)}),L=function(e){var t=e.auth;e.unSetAuth;return console.log(t),t.logged?r.a.createElement("nav",null,r.a.createElement(I,{to:"/"},r.a.createElement(M.d,null),"\xa0Home"),r.a.createElement(I,{to:"/main"},r.a.createElement(M.k,null),"\xa0Main"),r.a.createElement(I,{to:"/backlog"},r.a.createElement(M.g,null),"\xa0BackLog")):r.a.createElement("nav",null,r.a.createElement(I,{to:"/login"},r.a.createElement(M.h,null),"\xa0Login"),r.a.createElement(I,{to:"/signin"},r.a.createElement(M.f,null),"\xa0SignIn"))},x=(a(85),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{className:["btn",this.props.customClass||""].join(" "),onClick:this.props.onClick||function(){}},this.props.caption||this.props.children||"Bot\xf3n")}}]),t}(n.Component)),J=(a(86),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"home"},r.a.createElement("h1",null,"One Big Thing"),r.a.createElement("div",null,"\xa0"),this.props.auth.logged?r.a.createElement("div",{className:"half"},r.a.createElement(x,{customClass:"primary",onClick:function(t){e.props.setUnAuth(!1)}},r.a.createElement(M.i,null),"\xa0Logout")):null)}}]),t}(n.Component)),P=a(17),z=a(14),U=(a(87),function(e){var t=e.caption,a=e.type,n=e.value,c=e.name,o=e.onChange;Object(T.a)(e,["caption","type","value","name","onChange"]);return r.a.createElement("fieldset",null,r.a.createElement("legend",null,t),r.a.createElement("input",{type:a||"text",value:n||"",name:c,onChange:o||function(){}}))}),_=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={email:"",password:"",redirect:!1,error:null},e.onChangeHandler=e.onChangeHandler.bind(Object(h.a)(e)),e.onSiginBtnClick=e.onSiginBtnClick.bind(Object(h.a)(e)),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"onChangeHandler",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(z.a)({},this.state,Object(P.a)({},a,n)))}},{key:"onSiginBtnClick",value:function(e){var t=this;console.log(this.state),C.post("/api/security/login",this.state).then(function(e){var a=e.data;e.status;t.props.setAuth(a.token,a.user),t.setState({redirect:!0})}).catch(function(e){console.log(e),t.setState({error:"Correo o contrase\xf1a incorrectas. Intente de Nuevo"})})}},{key:"render",value:function(){var e=this;return console.log(this.props),this.state.redirect?r.a.createElement(p.a,{to:this.props.location.state?this.props.location.state.from.pathname:"/"}):r.a.createElement("section",null,r.a.createElement("h1",null,"Iniciar Sesi\xf3n"),r.a.createElement("section",{className:"main fix640"},r.a.createElement(U,{caption:"Correo Electr\xf3nico",value:this.state.email,name:"email",onChange:this.onChangeHandler}),r.a.createElement(U,{caption:"Contrase\xf1a",type:"password",value:this.state.password,name:"password",onChange:this.onChangeHandler}),this.state.error?r.a.createElement("div",{className:"error"},this.state.error):null,r.a.createElement("section",{className:"action"},r.a.createElement(x,{caption:"Iniciar Sesi\xf3n",onClick:this.onSiginBtnClick,customClass:"primary"}),r.a.createElement(x,{caption:"Crear Nueva Cuenta",customClass:"link",onClick:function(t){e.props.history.push("/signin")}}))))}}]),t}(n.Component),R=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={email:"",password:"",error:!1},e.onChangeHandler=e.onChangeHandler.bind(Object(h.a)(e)),e.onSiginBtnClick=e.onSiginBtnClick.bind(Object(h.a)(e)),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"onChangeHandler",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(z.a)({},this.state,Object(P.a)({},a,n)))}},{key:"onSiginBtnClick",value:function(e){var t=this,a=this.state,n=a.email,r=a.password;C.post("/api/security/signin",{email:n,password:r}).then(function(e){var a=e.data;console.log(a),t.props.history.push("/login")}).catch(function(e){console.log(e),t.setState({error:"Error al crear cuenta. Intente nuevamente."})})}},{key:"render",value:function(){var e=this;return r.a.createElement("section",null,r.a.createElement("h1",null,"Crear Nueva Cuenta"),r.a.createElement("section",{className:"main fix640"},r.a.createElement(U,{caption:"Correo Electr\xf3nico",value:this.state.email,name:"email",onChange:this.onChangeHandler}),r.a.createElement(U,{caption:"Contrase\xf1a",type:"password",value:this.state.password,name:"password",onChange:this.onChangeHandler}),this.state.error?r.a.createElement("div",{className:"error"},this.state.error):null,r.a.createElement("section",{className:"action"},r.a.createElement(x,{caption:"Crear Cuenta",onClick:this.onSiginBtnClick,customClass:"primary"}),r.a.createElement(x,{caption:"Iniciar Sesi\xf3n",customClass:"link",onClick:function(t){e.props.history.push("/login")}}))))}}]),t}(n.Component),W=(a(88),a(22)),q=function(e){var t=e.thingType,a=e.children;return r.a.createElement("div",{className:["card",t].join(" ")},a)},F=function(e){var t=e.currentDate,a=e.dateBeforeHandler,n=e.dateAfterHandler,c=e.resetDate;return t||(t=new Date),a||(a=function(){}),n||(n=function(){}),c||(c=function(){}),r.a.createElement("div",{className:"datePanel"},r.a.createElement("span",{onClick:a},r.a.createElement(M.b,null)),r.a.createElement("span",{onClick:c},t.getFullYear(),"-",t.getMonth()+1,"-",t.getDate()),r.a.createElement("span",{onClick:n},r.a.createElement(M.c,null)))};function Y(e){var t=e.getFullYear(),a=e.getMonth()+1,n=e.getDate(),r=a<10?"0"+String(a):String(a),c=n<10?"0"+String(n):String(n);return"".concat(t).concat(r).concat(c)}var X=function(e){function t(){var e;Object(i.a)(this,t),e=Object(l.a)(this,Object(u.a)(t).call(this));var a=new Date,n=JSON.parse(y("dshboard"))||{currentDate:a,dd:Y(a)};return"string"===typeof n.currentDate&&(n.currentDate=new Date(n.currentDate)),e.state=Object(z.a)({things:[]},n),e.dateAfterHandler=e.dateAfterHandler.bind(Object(h.a)(e)),e.dateBeforeHandler=e.dateBeforeHandler.bind(Object(h.a)(e)),e.dateBeforeHandler=e.dateBeforeHandler.bind(Object(h.a)(e)),e.resetDate=e.resetDate.bind(Object(h.a)(e)),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:function(){var e=this;O.get("/api/things/page/1/3/".concat(this.state.dd)).then(function(t){var a=t.data;t.status;console.log(a),e.setState(Object(z.a)({},a))}).catch(function(e){console.log(e)})}},{key:"dateBeforeHandler",value:function(){var e=this,t=this.state.currentDate;t.setDate(t.getDate()-1);var a={currentDate:t,dd:Y(t)};S("dshboard",JSON.stringify(a)),this.setState(a,function(){return e.loadData()})}},{key:"dateAfterHandler",value:function(){var e=this,t=this.state.currentDate;t.setDate(t.getDate()+1);var a={currentDate:t,dd:Y(t)};S("dshboard",JSON.stringify(a)),this.setState(a,function(){return e.loadData()})}},{key:"resetDate",value:function(){var e=this,t=new Date,a={currentDate:t,dd:Y(t)};S("dshboard",JSON.stringify(a)),this.setState(a,function(){return e.loadData()})}},{key:"render",value:function(){var e=r.a.createElement(q,{thingType:"big"},r.a.createElement(d.b,{to:"/backlogadd/big/".concat(this.state.dd)},r.a.createElement("span",{className:"circle"},r.a.createElement(W.a,null)))),t=[];if(t.push(r.a.createElement(q,{key:1},r.a.createElement(d.b,{to:"/backlogadd/small/".concat(this.state.dd)},r.a.createElement("span",{className:"circle"},r.a.createElement(W.a,null))))),t.push(r.a.createElement(q,{key:2},r.a.createElement(d.b,{to:"/backlogadd/small/".concat(this.state.dd)},r.a.createElement("span",{className:"circle"},r.a.createElement(W.a,null))))),console.log(this.state.things),this.state.things.length>0){console.log("entro");var a=this.state.things.filter(function(e){return console.log(e),"big"===e.type});console.log(a),a.length&&(e=r.a.createElement(q,{thingType:"big"},r.a.createElement("h2",null,a[0].descripcion)));var n=this.state.things.filter(function(e,t){return"small"===e.type});n.length&&1===(t=n.map(function(e,t){return r.a.createElement(q,{key:t},r.a.createElement("h2",null,e.descripcion))})).length&&t.push(r.a.createElement(q,{key:2},r.a.createElement(d.b,{to:"/backlogadd/small/".concat(this.state.dd)},r.a.createElement("span",{className:"circle"},r.a.createElement(W.a,null)))))}return r.a.createElement("section",null,r.a.createElement("h1",null,"One Big Thing Dashboard"),r.a.createElement("section",{className:"main cardHolder fix640"},e,r.a.createElement(F,{currentDate:this.state.currentDate,dateBeforeHandler:this.dateBeforeHandler,dateAfterHandler:this.dateAfterHandler,resetDate:this.resetDate}),t))}}]),t}(n.Component),$=a(23),G=a.n($),K=(a(42),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={things:[],hasMore:!0,page:1,itemsToLoad:10},e.loadMore=e.loadMore.bind(Object(h.a)(e)),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"loadMore",value:function(e){var t=this,a=this.state.itemsToLoad,n="/api/things/page/".concat(e,"/").concat(a);O.get(n).then(function(n){var r=n.data,c=r.things,o=r.totalThings,i=t.state.things;c.map(function(e){return i.push(e)}),o?t.setState({things:i,hasMore:e*a<o}):t.setState({hasMore:!1})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state.things.map(function(e){return r.a.createElement("div",{className:"thingItem",key:e._id},r.a.createElement("span",null,e.descripcion),r.a.createElement("span",{className:"updateThing"},r.a.createElement(d.b,{to:"/detailupdate/".concat(e._id)},r.a.createElement(M.e,{size:"2em"}))))});return t.length||t.push(r.a.createElement("div",{className:"thingItem",key:"pbBackLogAddOne"},r.a.createElement("span",null,"Nuevo Thing"),r.a.createElement(d.b,{to:"/detailadd"},r.a.createElement(M.l,{size:"2.5em"})))),r.a.createElement("section",null,r.a.createElement("h1",null,"My Things Backlog",r.a.createElement("span",{className:"addThing"},r.a.createElement(d.b,{to:"/detailadd"},r.a.createElement(M.l,{size:"1.5em"})))),r.a.createElement("div",{className:"backlog",ref:function(t){return e.scrollParentRef=t}},r.a.createElement(G.a,{pageStart:0,loadMore:this.loadMore,hasMore:this.state.hasMore,useWindow:!1,getScrollParent:function(){return e.scrollParentRef},loader:r.a.createElement("div",{key:"pbBackLogLoading",className:"thingItem center"},r.a.createElement(M.j,null))},t)))}}]),t}(n.Component)),Q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this))).state={things:[],hasMore:!0,page:1,itemsToLoad:10},a.loadMore=a.loadMore.bind(Object(h.a)(a)),a.handleClick=a.handleClick.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"loadMore",value:function(e){var t=this,a=this.state.itemsToLoad,n="/api/things/page/".concat(e,"/").concat(a,"/NA");O.get(n).then(function(n){var r=n.data,c=r.things,o=r.totalThings,i=t.state.things;c.map(function(e){return i.push(e)}),o?t.setState({things:i,hasMore:e*a<o}):t.setState({hasMore:!1})}).catch(function(e){console.log(e)})}},{key:"handleClick",value:function(e){var t=this,a=this.props.match.params,n={dd:a.dd,type:a.type};O.put("/api/things/".concat(e),n).then(function(e){e.data;t.props.history.goBack()}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state.things.map(function(t){return r.a.createElement("div",{className:"thingItem",key:t._id},r.a.createElement("span",null,t.descripcion),r.a.createElement("span",{className:"updateThing",onClick:function(){e.handleClick(t._id)}},r.a.createElement(M.a,{size:"2em"})))});return t.length||t.push(r.a.createElement("div",{className:"thingItem",key:"pbBackLogAddOne"},r.a.createElement("span",null,"Nuevo Thing"),r.a.createElement(d.b,{to:"/detailadd"},r.a.createElement(M.l,{size:"2.5em"})))),r.a.createElement("section",null,r.a.createElement("h1",null,"Add Thing to Backlog"),r.a.createElement("div",{className:"backlog",ref:function(t){return e.scrollParentRef=t}},r.a.createElement(G.a,{pageStart:0,loadMore:this.loadMore,hasMore:this.state.hasMore,useWindow:!1,getScrollParent:function(){return e.scrollParentRef},loader:r.a.createElement("div",{key:"pbBackLogLoading",className:"thingItem center"},r.a.createElement(M.j,null))},t)))}}]),t}(n.Component),V=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={descripcion:"",error:!1},e.onChangeHandler=e.onChangeHandler.bind(Object(h.a)(e)),e.onSaveBtnClick=e.onSaveBtnClick.bind(Object(h.a)(e)),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"onChangeHandler",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(z.a)({},this.state,Object(P.a)({},a,n)))}},{key:"onSaveBtnClick",value:function(e){var t=this,a=this.state.descripcion;O.post("/api/things",{descripcion:a}).then(function(e){e.data;t.props.history.goBack()}).catch(function(e){console.log(e),t.setState({error:"Error al crear nuevo Thing"})})}},{key:"render",value:function(){var e=this;return r.a.createElement("section",null,r.a.createElement("h1",null,"Crear Nuevo Thing"),r.a.createElement("section",{className:"main fix640"},r.a.createElement(U,{caption:"Descripci\xf3n",value:this.state.descripcion,name:"descripcion",onChange:this.onChangeHandler}),this.state.error?r.a.createElement("div",{className:"error"},this.state.error):null,r.a.createElement("section",{className:"action"},r.a.createElement(x,{caption:"Crear Thing",onClick:this.onSaveBtnClick,customClass:"primary"}),r.a.createElement("br",null),r.a.createElement(x,{caption:"Cancelar",customClass:"secondary",onClick:function(t){e.props.history.goBack()}}))))}}]),t}(n.Component),Z=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={descripcion:"",error:!1},e.onChangeHandler=e.onChangeHandler.bind(Object(h.a)(e)),e.onSaveBtnClick=e.onSaveBtnClick.bind(Object(h.a)(e)),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params,a="/api/things/".concat(t.id);O.get(a).then(function(t){var a=t.data;e.setState(Object(z.a)({},a))}).catch(function(t){e.setState({error:"No se pudo cargar Thing."})})}},{key:"onChangeHandler",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(z.a)({},this.state,Object(P.a)({},a,n)))}},{key:"onSaveBtnClick",value:function(e){var t=this,a=this.state,n=a.descripcion,r=a._id;O.put("/api/things/".concat(r),{descripcion:n}).then(function(e){e.data;t.props.history.push("/backlog")}).catch(function(e){console.log(e),t.setState({error:"Error al actualizar nuevo Thing"})})}},{key:"render",value:function(){var e=this;return console.log(this.state),r.a.createElement("section",null,r.a.createElement("h1",null,this.props.match.params.id),r.a.createElement("section",{className:"main fix640"},r.a.createElement(U,{caption:"Descripci\xf3n",value:this.state.descripcion,name:"descripcion",onChange:this.onChangeHandler}),this.state.error?r.a.createElement("div",{className:"error"},this.state.error):null,r.a.createElement("section",{className:"action"},r.a.createElement(x,{caption:"Crear Thing",onClick:this.onSaveBtnClick,customClass:"primary"}),r.a.createElement("br",null),r.a.createElement(x,{caption:"Cancelar",customClass:"secondary",onClick:function(t){e.props.history.push("/backlog")}}))))}}]),t}(n.Component),ee=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={auth:JSON.parse(y("auth"))||{logged:!1,token:!1,user:{}}},e.setAuth=e.setAuth.bind(Object(h.a)(e)),e.setUnAuth=e.setUnAuth.bind(Object(h.a)(e)),v(e.state.auth.token),k(e.setUnAuth),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"setUnAuth",value:function(e){this.setAuth(!1,{})}},{key:"setAuth",value:function(e,t){v(e);var a={logged:e&&!0,token:e,user:t};S("auth",JSON.stringify(a)),this.setState({auth:a})}},{key:"render",value:function(){var e=this;return r.a.createElement(d.a,null,r.a.createElement("section",{className:"container"},r.a.createElement(N.a,Object.assign({},w,{mapStyles:D,className:"switch-wrapper"}),r.a.createElement(p.b,{path:"/",exact:!0,render:function(t){return r.a.createElement(J,Object.assign({},t,{auth:e.state.auth,setUnAuth:e.setUnAuth}))}}),r.a.createElement(p.b,{path:"/login",render:function(t){return r.a.createElement(_,Object.assign({},t,{auth:e.state.auth,setAuth:e.setAuth}))}}),r.a.createElement(p.b,{path:"/signin",component:R}),r.a.createElement(A,{path:"/main",auth:this.state.auth,component:X}),r.a.createElement(A,{path:"/backlog",auth:this.state.auth,component:K}),r.a.createElement(A,{path:"/backlogadd/:type/:dd",auth:this.state.auth,component:Q}),r.a.createElement(A,{path:"/detailadd",auth:this.state.auth,component:V}),r.a.createElement(A,{path:"/detailupdate/:id",auth:this.state.auth,component:Z})),r.a.createElement(L,{auth:this.state.auth})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[48,1,2]]]);
//# sourceMappingURL=main.d3112449.chunk.js.map