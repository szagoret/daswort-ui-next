(this["webpackJsonpdaswort-ui"]=this["webpackJsonpdaswort-ui"]||[]).push([[0],{116:function(e,t,n){},117:function(e,t,n){},139:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(49),i=n.n(r),o=(n(116),n.p+"static/media/logo.6ce24c58.svg"),s=(n(117),n(9)),l=n(169),u=n(173),d=n(178),j=n(179),b=n(2),h=function(){return Object(b.jsx)(u.a,{children:"EU sunt din js"})},p=n(177),O=n(6),g=n(170),x=n(174),f=n(175),m=n(176),v=n(168),k=n(87),w=n.n(k),y=n(88),C=n.n(y),L=n(85),E=Object(s.a)("div")((function(e){var t=e.theme;return Object(O.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:L.a[100],"&:hover":{backgroundColor:L.a[200]},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"})})),F=Object(s.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),A=Object(s.a)(v.a)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":Object(O.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width",{duration:t.transitions.duration.complex}),width:"100%"},t.breakpoints.up("sm"),{width:"30ch","&:focus":{width:"40ch"}})}})),R=function(e){var t=e.name;return Object(b.jsx)(x.a,{sx:{flexGrow:1},children:Object(b.jsx)(g.a,{position:"static",children:Object(b.jsxs)(f.a,{sx:{bgcolor:"common.white",color:"text.secondary",borderStyle:"solid",borderColor:"#EAEEF3",borderWidth:0,borderBottomWidth:"thin"},children:[Object(b.jsx)(m.a,{size:"large",edge:"start",color:"inherit","aria-label":"open drawer",sx:{mr:2},children:Object(b.jsx)(w.a,{})}),Object(b.jsx)(u.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"none",sm:"block"}},children:t}),Object(b.jsxs)(E,{children:[Object(b.jsx)(F,{children:Object(b.jsx)(C.a,{sx:{color:"#007FFF"}})}),Object(b.jsx)(A,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"}})]})]})})})},S=n(62),B=n(13),N=function(){return Object(b.jsx)(u.a,{children:"Page 1"})},P=function(){return Object(b.jsx)(u.a,{children:"Page 2"})},I=function(){var e=Object(s.a)(l.a)((function(e){var t=e.theme;return{color:t.status.danger,"&.Mui-checked":{color:t.status.danger}}})),t=Object(p.a)(),n=t.t,a=t.i18n;return Object(b.jsx)(S.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(R,{name:n("topBar.name")}),Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(b.jsxs)("p",{children:["Edit ",Object(b.jsx)("code",{children:"src/App.tsx"})," and save to reload."]}),Object(b.jsx)(u.a,{children:"Astai bun"}),Object(b.jsx)(u.a,{children:n("title")}),Object(b.jsx)(e,{defaultChecked:!0}),Object(b.jsx)(h,{}),Object(b.jsxs)(d.a,{variant:"contained","aria-label":"outlined primary button group",children:[Object(b.jsx)(j.a,{onClick:function(){return a.changeLanguage("en")},children:"EN"}),Object(b.jsx)(j.a,{onClick:function(){return a.changeLanguage("de")},children:"DE"}),Object(b.jsx)(j.a,{onClick:function(){return a.changeLanguage("ro")},children:"RO"})]}),Object(b.jsxs)(d.a,{variant:"contained","aria-label":"outlined primary button group",children:[Object(b.jsx)(S.b,{to:"/page1",as:"a",children:"p1"}),Object(b.jsx)(S.b,{to:"/page2",as:"a",children:"p2"})]}),Object(b.jsxs)(B.c,{children:[Object(b.jsx)(B.a,{path:"/page1",component:N,children:Object(b.jsx)(N,{})}),Object(b.jsx)(B.a,{path:"/page2",children:Object(b.jsx)(P,{})})]}),Object(b.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})]})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,181)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},W=(n(133),n(134),n(135),n(136),n(180)),D=n(172),T=n(102),G=n(103),J=n(42),q=Object(G.a)({shape:{borderRadius:8},status:{danger:J.a[500]}}),z=n(35),U=n(94),V=n(95),_=n(96),H=n(38),K=(n(74),n(97),"@account/login-request"),Q="@account/login-success",X="@account/login-failure",Y="@account/silent-login",Z="@account/logout",$="@account/update-profile";var ee={user:null},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return Object(H.a)(e,(function(e){e.user=null}));case Q:var n=t.payload.user;return Object(H.a)(e,(function(e){e.user=n}));case X:return Object(H.a)(e,(function(){}));case Z:return Object(H.a)(e,(function(e){e.user=null}));case Y:var a=t.payload.user;return Object(H.a)(e,(function(e){e.user=a}));case $:var c=t.payload.user;return Object(H.a)(e,(function(e){e.user=c}));default:return e}},ne=Object(z.combineReducers)({account:te}),ae=(Object(_.createLogger)(),[U.a]);var ce=[Object(V.composeWithDevTools)(z.applyMiddleware.apply(void 0,ae))],re=z.compose.apply(void 0,ce),ie=Object(z.createStore)(ne,{},re),oe=n(75),se=n(48),le=n(99),ue=n(101);oe.a.use(le.a).use(ue.a).use(se.e).init({fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1}});oe.a;i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(a.Suspense,{fallback:Object(b.jsx)(W.a,{}),children:Object(b.jsx)(T.a,{store:ie,children:Object(b.jsx)(D.a,{theme:q,children:Object(b.jsx)(I,{})})})})}),document.getElementById("root")),M()}},[[139,1,2]]]);
//# sourceMappingURL=main.be137974.chunk.js.map