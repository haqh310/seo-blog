(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{2755:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return t(1491)}])},9110:function(e,n,t){"use strict";t.d(n,{$D:function(){return f},IU:function(){return l},Nq:function(){return x},YR:function(){return j},_y:function(){return a},c0:function(){return N},ej:function(){return g},gF:function(){return b},uf:function(){return u},xJ:function(){return i}});var o=t(9307),r=t.n(o),s=t(1805),c=t(3346);let a=e=>{401===e.status&&u(()=>{Router.push({pathname:"/signin",query:{message:"Your session is expired. Please signin"}})})},l=e=>r()("".concat(c.bl,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>e.json()).catch(e=>console.log(e)),i=e=>r()("".concat(c.bl,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>e.json()).catch(e=>console.log(e)),u=e=>(d("token"),m("user"),e(),r()("".concat(c.bl,"/signout"),{method:"GET"}).then(e=>{console.log("signout success")}).catch(e=>console.log(e))),h=(e,n)=>{s.Z.set(e,n,{expires:1})},d=(e,n)=>{s.Z.remove(e,{expires:1})},g=e=>s.Z.get(e),p=(e,n)=>{localStorage.setItem(e,JSON.stringify(n))},m=e=>{localStorage.removeItem(e)},j=(e,n)=>{h("token",e.token),p("user",e.user),n()},f=()=>{{let e=g("token");if(e)return!!localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user"))}},x=(e,n)=>{if(localStorage.getItem("user")){let t=JSON.parse(localStorage.getItem("user"));t=e,localStorage.setItem("user",JSON.stringify(t)),n()}},b=e=>r()("".concat(c.bl,"/forgot-password"),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>e.json()).catch(e=>console.log(e)),N=e=>r()("".concat(c.bl,"/reset-password"),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>e.json()).catch(e=>console.log(e))},448:function(e,n,t){"use strict";t.d(n,{Ch:function(){return u},FH:function(){return i},T7:function(){return g},Vh:function(){return l},W1:function(){return h},mx:function(){return m},pb:function(){return d},zZ:function(){return p}});var o=t(9307),r=t.n(o),s=t(7563),c=t(3346),a=t(9110);let l=(e,n)=>{let t;return(0,a.$D)()&&1===(0,a.$D)().role?t="".concat(c.bl,"/blog"):(0,a.$D)()&&0===(0,a.$D)().role&&(t="".concat(c.bl,"/user/blog")),r()("".concat(t),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(n)},body:e}).then(e=>(console.log(e),(0,a._y)(e),e.json())).catch(e=>console.log(e))},i=(e,n)=>fetch("".concat(c.bl,"/blogs-categories-tags"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({limit:n,skip:e})}).then(e=>e.json()).catch(e=>console.log(e)),u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return r()("".concat(c.bl,"/blog/").concat(e),{method:"GET"}).then(e=>e.json()).catch(e=>console.log(e))},h=e=>r()("".concat(c.bl,"/blogs/related"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>e.json()).catch(e=>console.log(e)),d=e=>{let n;return n=e?"".concat(c.bl,"/").concat(e,"/blogs"):"".concat(c.bl,"/blogs"),r()("".concat(n),{method:"GET"}).then(e=>e.json()).catch(e=>console.log(e))},g=(e,n)=>{let t;let o=(0,a.$D)();return o&&(t=1===o.role?"".concat(c.bl,"/blog/").concat(e):"".concat(c.bl,"/user/blog/").concat(e)),r()("".concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then(e=>((0,a._y)(e),e.json())).catch(e=>console.log(e))},p=(e,n,t)=>{let o;let s=(0,a.$D)();return s&&(o=1===s.role?"".concat(c.bl,"/blog/").concat(t):"".concat(c.bl,"/user/blog/").concat(t)),r()("".concat(o),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(n)}}).then(e=>((0,a._y)(e),e.json())).catch(e=>console.log(e))},m=e=>{console.log("search param ",e);let n=s.stringify(e);return console.log("query param ",e),r()("".concat(c.bl,"/blogs/search?").concat(n),{method:"GET"}).then(e=>e.json()).catch(e=>console.log(e))}},4592:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var o=t(5893),r=t(7294),s=t(4865),c=t.n(s),a=t(3346),l=t(9110),i=t(450),u=t(1163),h=t.n(u),d=t(1664),g=t.n(d);t(2252);var p=t(448);let m=()=>{let[e,n]=(0,r.useState)({search:void 0,results:[],searched:!1,message:""}),{search:t,results:s,searched:c,message:a}=e,l=o=>{o.preventDefault(),(0,p.mx)({search:t}).then(t=>{t.error?console.log(t.error):n({...e,results:t,searched:!0,message:"".concat(t.length," blogs found.")})})},i=t=>{n({...e,search:t.target.value,searched:!1,results:[]})};return(0,o.jsxs)("div",{className:"container-fluid",children:[(0,o.jsx)("div",{className:"pt-3 pb-5",children:(0,o.jsx)("form",{onSubmit:l,children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-md-9",children:(0,o.jsx)("input",{type:"search",className:"form-control",placeholder:"Search blogs",onChange:i})}),(0,o.jsx)("div",{className:"col-md-3",children:(0,o.jsx)("button",{className:"btn btn-block btn-outline-primary",type:"submit",children:"Search"})})]})})}),c&&(0,o.jsx)("div",{style:{marginTop:"-120px",marginBottom:"-80px"},children:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return(0,o.jsxs)("div",{className:"jumbotron bg-white",children:[a&&(0,o.jsx)("p",{className:"pt-4 text-muted font-italic",children:a}),e.map((e,n)=>(0,o.jsx)("div",{children:(0,o.jsx)(g(),{href:"/blogs/".concat(e.slug),className:"text-primary",children:e.title})},n))]})}(s)})]})};h().onRouteChangeStart=e=>c().start(),h().onRouteChangeComplete=e=>c().done(),h().onRouteChangeError=e=>c().done();let j=()=>{let[e,n]=(0,r.useState)(!1),[t,s]=(0,r.useState)(),c=()=>n(!e);return(0,r.useEffect)(()=>{s((0,l.$D)())},[]),(0,o.jsxs)(r.Fragment,{children:[(0,o.jsxs)(i.wp,{color:"light",light:!0,expand:"md",className:"px-0",children:[(0,o.jsx)(i.OL,{href:"/",className:"font-weight-bold text-dark",children:a.iC}),(0,o.jsx)(i.WR,{onClick:c}),(0,o.jsx)(i.UO,{isOpen:e,navbar:!0,children:(0,o.jsxs)(i.JL,{className:"ml-auto",navbar:!0,children:[(0,o.jsxs)(r.Fragment,{children:[(0,o.jsx)(i.LY,{children:(0,o.jsx)(i.OL,{href:"/blogs",children:"Blog"})}),(0,o.jsx)(i.LY,{children:(0,o.jsx)(i.OL,{href:"/contact",children:"Contact"})})]}),t?0===t.role?(0,o.jsx)(i.LY,{children:(0,o.jsx)(i.OL,{href:"/user",children:"".concat(t.name,"'s Dashboard")})}):(0,o.jsx)(i.LY,{children:(0,o.jsx)(i.OL,{href:"/admin",children:"".concat(t.name,"'s Dashboard")})}):(0,o.jsx)(i.LY,{children:(0,o.jsx)(i.OL,{href:"/signin",children:"Signin"})}),t&&(0,o.jsx)(i.LY,{children:(0,o.jsx)(i.OL,{style:{cursor:"pointer"},onClick:()=>(0,l.uf)(()=>h().replace("/signin")),children:"Signout"})}),(0,o.jsx)(i.LY,{children:(0,o.jsx)(g(),{href:{pathname:"/user/crud/blog"},className:"btn btn-primary text-light",children:"Write a blog"})})]})})]}),(0,o.jsx)(m,{})]})},f=e=>{let{children:n}=e;return(0,o.jsxs)(r.Fragment,{children:[(0,o.jsx)(j,{}),n]})};var x=f},3346:function(e,n,t){"use strict";t.d(n,{CT:function(){return u},bl:function(){return a},f6:function(){return i},iC:function(){return c},yK:function(){return l}});var o=t(1752),r=t.n(o);let{publicRuntimeConfig:s}=r()(),c=s.APP_NAME?s.APP_NAME:"SEOBLOG",a=s.PRODUCTION?s.API_PRODUCTION:s.API_DEVELOPMENT,l=s.PRODUCTION?s.DOMAIN_PRODUCTION:s.DOMAIN_DEVELOPMENT,i=s.FB_APP_ID,u=s.DISQUS_SHORTNAME},1491:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return g}});var o=t(5893),r=t(7294),s=t(1664),c=t.n(s),a=t(9110),l=t(1163),i=t.n(l);let u=()=>{let[e,n]=(0,r.useState)({name:"",email:"",password:"",error:"",loading:!1,message:"",showForm:!0}),{name:t,email:s,password:l,error:u,loading:h,message:d,showForm:g}=e;(0,r.useEffect)(()=>{(0,a.$D)()&&i().push("/")},[]);let p=o=>{o.preventDefault(),n({...e,loading:!0,error:!1}),(0,a.IU)({name:t,email:s,password:l}).then(t=>{t.error?n({...e,error:t.error}):n({...e,name:"",email:"",password:"",error:"",loading:!1,message:t.message,showForm:!1})})},m=t=>o=>{n({...e,error:!1,[t]:o.target.value})};return(0,o.jsxs)(r.Fragment,{children:[u?(0,o.jsx)("div",{className:"alert alert-danger",children:u}):"",h?(0,o.jsx)("div",{className:"alert alert-info",children:"Loading..."}):"",d?(0,o.jsx)("div",{className:"alert alert-info",children:d}):"",g&&(0,o.jsxs)("form",{onSubmit:p,children:[(0,o.jsx)("div",{className:"form-group",children:(0,o.jsx)("input",{value:t,onChange:m("name"),type:"text",className:"form-control",placeholder:"Enter your name..."})}),(0,o.jsx)("div",{className:"form-group",children:(0,o.jsx)("input",{value:s,onChange:m("email"),type:"email",className:"form-control",placeholder:"Enter your email..."})}),(0,o.jsx)("div",{className:"form-group",children:(0,o.jsx)("input",{value:l,onChange:m("password"),type:"password",className:"form-control",placeholder:"Enter your password..."})}),(0,o.jsx)("div",{children:(0,o.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Signup"})})]}),(0,o.jsx)("br",{}),(0,o.jsxs)("div",{children:["Do you already have an account ? ",(0,o.jsx)(c(),{href:"/signin",children:"Signin"})]})]})};var h=t(4592);let d=()=>(0,o.jsx)(h.Z,{children:(0,o.jsxs)("div",{className:"container-fluid",children:[(0,o.jsx)("h2",{className:"text-center pt-4 pb-4",children:"Signup User"}),(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-md-6 offset-md-3",children:(0,o.jsx)(u,{})})})]})});var g=d}},function(e){e.O(0,[260,928,774,888,179],function(){return e(e.s=2755)}),_N_E=e.O()}]);