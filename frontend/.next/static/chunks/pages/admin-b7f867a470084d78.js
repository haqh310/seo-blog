(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[964],{8195:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return t(4866)}])},9110:function(e,n,t){"use strict";t.d(n,{$D:function(){return x},IU:function(){return l},Nq:function(){return f},YR:function(){return j},_y:function(){return a},c0:function(){return N},ej:function(){return g},gF:function(){return b},uf:function(){return h},xJ:function(){return i}});var c=t(9307),o=t.n(c),s=t(1805),r=t(3346);let a=e=>{401===e.status&&h(()=>{Router.push({pathname:"/signin",query:{message:"Your session is expired. Please signin"}})})},l=e=>o()("".concat(r.bl,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>e.json()).catch(e=>console.log(e)),i=e=>o()("".concat(r.bl,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>e.json()).catch(e=>console.log(e)),h=e=>(u("token"),p("user"),e(),o()("".concat(r.bl,"/signout"),{method:"GET"}).then(e=>{console.log("signout success")}).catch(e=>console.log(e))),d=(e,n)=>{s.Z.set(e,n,{expires:1})},u=(e,n)=>{s.Z.remove(e,{expires:1})},g=e=>s.Z.get(e),m=(e,n)=>{localStorage.setItem(e,JSON.stringify(n))},p=e=>{localStorage.removeItem(e)},j=(e,n)=>{d("token",e.token),m("user",e.user),n()},x=()=>{{let e=g("token");if(e)return!!localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user"))}},f=(e,n)=>{if(localStorage.getItem("user")){let t=JSON.parse(localStorage.getItem("user"));t=e,localStorage.setItem("user",JSON.stringify(t)),n()}},b=e=>o()("".concat(r.bl,"/forgot-password"),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>e.json()).catch(e=>console.log(e)),N=e=>o()("".concat(r.bl,"/reset-password"),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>e.json()).catch(e=>console.log(e))},448:function(e,n,t){"use strict";t.d(n,{Ch:function(){return h},FH:function(){return i},T7:function(){return g},Vh:function(){return l},W1:function(){return d},mx:function(){return p},pb:function(){return u},zZ:function(){return m}});var c=t(9307),o=t.n(c),s=t(7563),r=t(3346),a=t(9110);let l=(e,n)=>{let t;return(0,a.$D)()&&1===(0,a.$D)().role?t="".concat(r.bl,"/blog"):(0,a.$D)()&&0===(0,a.$D)().role&&(t="".concat(r.bl,"/user/blog")),o()("".concat(t),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(n)},body:e}).then(e=>(console.log(e),(0,a._y)(e),e.json())).catch(e=>console.log(e))},i=(e,n)=>fetch("".concat(r.bl,"/blogs-categories-tags"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({limit:n,skip:e})}).then(e=>e.json()).catch(e=>console.log(e)),h=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return o()("".concat(r.bl,"/blog/").concat(e),{method:"GET"}).then(e=>e.json()).catch(e=>console.log(e))},d=e=>o()("".concat(r.bl,"/blogs/related"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>e.json()).catch(e=>console.log(e)),u=e=>{let n;return n=e?"".concat(r.bl,"/").concat(e,"/blogs"):"".concat(r.bl,"/blogs"),o()("".concat(n),{method:"GET"}).then(e=>e.json()).catch(e=>console.log(e))},g=(e,n)=>{let t;let c=(0,a.$D)();return c&&(t=1===c.role?"".concat(r.bl,"/blog/").concat(e):"".concat(r.bl,"/user/blog/").concat(e)),o()("".concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then(e=>((0,a._y)(e),e.json())).catch(e=>console.log(e))},m=(e,n,t)=>{let c;let s=(0,a.$D)();return s&&(c=1===s.role?"".concat(r.bl,"/blog/").concat(t):"".concat(r.bl,"/user/blog/").concat(t)),o()("".concat(c),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(n)}}).then(e=>((0,a._y)(e),e.json())).catch(e=>console.log(e))},p=e=>{console.log("search param ",e);let n=s.stringify(e);return console.log("query param ",e),o()("".concat(r.bl,"/blogs/search?").concat(n),{method:"GET"}).then(e=>e.json()).catch(e=>console.log(e))}},4592:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var c=t(5893),o=t(7294),s=t(4865),r=t.n(s),a=t(3346),l=t(9110),i=t(450),h=t(1163),d=t.n(h),u=t(1664),g=t.n(u);t(2252);var m=t(448);let p=()=>{let[e,n]=(0,o.useState)({search:void 0,results:[],searched:!1,message:""}),{search:t,results:s,searched:r,message:a}=e,l=c=>{c.preventDefault(),(0,m.mx)({search:t}).then(t=>{t.error?console.log(t.error):n({...e,results:t,searched:!0,message:"".concat(t.length," blogs found.")})})},i=t=>{n({...e,search:t.target.value,searched:!1,results:[]})};return(0,c.jsxs)("div",{className:"container-fluid",children:[(0,c.jsx)("div",{className:"pt-3 pb-5",children:(0,c.jsx)("form",{onSubmit:l,children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-md-9",children:(0,c.jsx)("input",{type:"search",className:"form-control",placeholder:"Search blogs",onChange:i})}),(0,c.jsx)("div",{className:"col-md-3",children:(0,c.jsx)("button",{className:"btn btn-block btn-outline-primary",type:"submit",children:"Search"})})]})})}),r&&(0,c.jsx)("div",{style:{marginTop:"-120px",marginBottom:"-80px"},children:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return(0,c.jsxs)("div",{className:"jumbotron bg-white",children:[a&&(0,c.jsx)("p",{className:"pt-4 text-muted font-italic",children:a}),e.map((e,n)=>(0,c.jsx)("div",{children:(0,c.jsx)(g(),{href:"/blogs/".concat(e.slug),className:"text-primary",children:e.title})},n))]})}(s)})]})};d().onRouteChangeStart=e=>r().start(),d().onRouteChangeComplete=e=>r().done(),d().onRouteChangeError=e=>r().done();let j=()=>{let[e,n]=(0,o.useState)(!1),[t,s]=(0,o.useState)(),r=()=>n(!e);return(0,o.useEffect)(()=>{s((0,l.$D)())},[]),(0,c.jsxs)(o.Fragment,{children:[(0,c.jsxs)(i.wp,{color:"light",light:!0,expand:"md",className:"px-0",children:[(0,c.jsx)(i.OL,{href:"/",className:"font-weight-bold text-dark",children:a.iC}),(0,c.jsx)(i.WR,{onClick:r}),(0,c.jsx)(i.UO,{isOpen:e,navbar:!0,children:(0,c.jsxs)(i.JL,{className:"ml-auto",navbar:!0,children:[(0,c.jsxs)(o.Fragment,{children:[(0,c.jsx)(i.LY,{children:(0,c.jsx)(i.OL,{href:"/blogs",children:"Blog"})}),(0,c.jsx)(i.LY,{children:(0,c.jsx)(i.OL,{href:"/contact",children:"Contact"})})]}),t?0===t.role?(0,c.jsx)(i.LY,{children:(0,c.jsx)(i.OL,{href:"/user",children:"".concat(t.name,"'s Dashboard")})}):(0,c.jsx)(i.LY,{children:(0,c.jsx)(i.OL,{href:"/admin",children:"".concat(t.name,"'s Dashboard")})}):(0,c.jsx)(i.LY,{children:(0,c.jsx)(i.OL,{href:"/signin",children:"Signin"})}),t&&(0,c.jsx)(i.LY,{children:(0,c.jsx)(i.OL,{style:{cursor:"pointer"},onClick:()=>(0,l.uf)(()=>d().replace("/signin")),children:"Signout"})}),(0,c.jsx)(i.LY,{children:(0,c.jsx)(g(),{href:{pathname:"/user/crud/blog"},className:"btn btn-primary text-light",children:"Write a blog"})})]})})]}),(0,c.jsx)(p,{})]})},x=e=>{let{children:n}=e;return(0,c.jsxs)(o.Fragment,{children:[(0,c.jsx)(j,{}),n]})};var f=x},8443:function(e,n,t){"use strict";var c=t(5893),o=t(7294),s=t(1163),r=t.n(s),a=t(9110);let l=e=>{let{children:n}=e;return(0,o.useEffect)(()=>{(0,a.$D)()?1!==(0,a.$D)().role&&r().push("/"):r().push("/signin")},[]),(0,c.jsx)(o.Fragment,{children:n})};n.Z=l},3697:function(e,n,t){"use strict";var c=t(5893),o=t(7294),s=t(3346);let r=()=>{let[e,n]=(0,o.useState)("");return(0,o.useEffect)(()=>{let e=JSON.parse(localStorage.getItem("user"));n(e)},[]),(0,c.jsx)(o.Fragment,{children:(0,c.jsx)("div",{className:"container px-5",children:(0,c.jsxs)("div",{className:"card text-center mx-5",children:[(0,c.jsx)("div",{className:"mt-3",children:(0,c.jsx)("img",{className:"card-img-top img w-50 h-50",src:e?"".concat(s.bl,"/user/photo/").concat(e.username):"",alt:"Image name"})}),(0,c.jsxs)("div",{className:"card-body",children:[(0,c.jsxs)("h5",{className:"card-title",children:["Name: ",e.name]}),(0,c.jsxs)("h5",{className:"card-text",children:["Email: ",e.email]}),(0,c.jsxs)("h5",{className:"card-text",children:["Role: ",1===e.role?"Admin":"User"]})]})]})})})};n.Z=r},3346:function(e,n,t){"use strict";t.d(n,{CT:function(){return h},bl:function(){return a},f6:function(){return i},iC:function(){return r},yK:function(){return l}});var c=t(1752),o=t.n(c);let{publicRuntimeConfig:s}=o()(),r=s.APP_NAME?s.APP_NAME:"SEOBLOG",a=s.PRODUCTION?s.API_PRODUCTION:s.API_DEVELOPMENT,l=s.PRODUCTION?s.DOMAIN_PRODUCTION:s.DOMAIN_DEVELOPMENT,i=s.FB_APP_ID,h=s.DISQUS_SHORTNAME},4866:function(e,n,t){"use strict";t.r(n);var c=t(5893),o=t(4592),s=t(8443),r=t(450),a=t(3697);let l=()=>(0,c.jsx)(o.Z,{children:(0,c.jsx)(s.Z,{children:(0,c.jsx)("div",{className:"container-fluid",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-md-12 pt-5 pb-5 pl-4",children:(0,c.jsx)("h2",{children:"Admin Dashboard"})}),(0,c.jsx)("div",{className:"col-md-4",children:(0,c.jsxs)("ul",{className:"list-group",children:[(0,c.jsx)("li",{className:"list-group-item",children:(0,c.jsx)(r.OL,{href:"admin/crud/category-tag",children:"Create Category"})}),(0,c.jsx)("li",{className:"list-group-item",children:(0,c.jsx)(r.OL,{href:"admin/crud/category-tag",children:"Create Tag"})}),(0,c.jsx)("li",{className:"list-group-item",children:(0,c.jsx)(r.OL,{href:"admin/crud/blog",children:"Create Blog"})}),(0,c.jsx)("li",{className:"list-group-item",children:(0,c.jsx)(r.OL,{href:"admin/crud/blogs",children:"Update/Delete Blog"})}),(0,c.jsx)("li",{className:"list-group-item",children:(0,c.jsx)(r.OL,{href:"user/update",children:"Update Profile"})})]})}),(0,c.jsx)("div",{className:"col-md-8",children:(0,c.jsx)(a.Z,{})})]})})})});n.default=l}},function(e){e.O(0,[260,928,774,888,179],function(){return e(e.s=8195)}),_N_E=e.O()}]);