(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[485],{8930:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/crud/[slug]",function(){return l(2037)}])},4645:function(e,s,l){"use strict";var t=l(5893),r=l(7294),a=l(1163),i=l.n(a),c=l(9110);let n=e=>{let{children:s}=e;return(0,r.useEffect)(()=>{(0,c.$D)()||i().push("/signin")},[]),(0,t.jsx)(r.Fragment,{children:s})};s.Z=n},3259:function(e,s,l){"use strict";var t=l(5893),r=l(1163),a=l.n(r),i=l(7294),c=l(5152),n=l.n(c);l(91);var o=l(5784),d=l(448),h=l(2763),u=l(9540),m=l(3346),x=l(9110);let p=n()(()=>Promise.all([l.e(937),l.e(796)]).then(l.t.bind(l,1167,23)),{loadableGenerated:{webpack:()=>[1167]},ssr:!1}),j=e=>{let{router:s}=e,[l,r]=(0,i.useState)(""),[c,n]=(0,i.useState)([]),[j,f]=(0,i.useState)([]),[g,N]=(0,i.useState)([]),[b,v]=(0,i.useState)([]),[y,_]=(0,i.useState)(""),[w,k]=(0,i.useState)({error:"",success:"",formData:"",title:""}),{error:C,success:S,formData:E,title:D}=w,O=(0,x.ej)("token");(0,i.useEffect)(()=>{k({...w,formData:new FormData}),Z(),P(),T()},[s]);let Z=()=>{(0,h.CP)().then(e=>{e.error?console.log(e.error):n(e)})},P=()=>{(0,u.NJ)().then(e=>{e.error?console.log(e.error):f(e)})},T=()=>{let e=s.query.slug;e&&(0,d.Ch)(e).then(e=>{e.error?console.log(e.error):(k({...w,title:e.title}),r(e.body),q(e.categories),z(e.tags))})},q=e=>{let s=[];e.map((e,l)=>{s.push(e._id)}),N(s)},z=e=>{let s=[];e.map((e,l)=>{s.push(e._id)}),v(s)},F=e=>{k({...w,error:""});let s=g.indexOf(e),l=[...g];-1===s?l.push(e):l.splice(s,1),N(l),E.set("categories",l)},U=e=>{k({...w,error:""});let s=b.indexOf(e),l=[...b];-1===s?l.push(e):l.splice(s,1),v(l),E.set("tags",l)},$=e=>{let s=g.indexOf(e);return -1!==s},H=e=>{let s=b.indexOf(e);return -1!==s},J=e=>s=>{let l="photo"===e?s.target.files[0]:s.target.value;"photo"===e&&_(l.name),E.set(e,l),k({...l,[e]:l,formData:E,error:""})},X=e=>{r(e),E("body",e)},Y=e=>{e.preventDefault(),(0,d.zZ)(E,O,s.query.slug).then(e=>{if(e.error)k({...w,error:e.error});else{k({...w,title:"",success:'Blog title "'.concat(e.title,'" is successfully updated')});let s=(0,x.$D)();s&&1===s.role?a().replace("/admin"):s&&0===s.role&&a().replace("/user")}})};return(0,t.jsx)("div",{className:"container-fluid pb-5",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("div",{className:"col-md-8",children:[(0,t.jsxs)("form",{onSubmit:Y,children:[(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{className:"text-muted",children:"Title"}),(0,t.jsx)("input",{type:"text",className:"form-control",value:D,onChange:J("title")})]}),(0,t.jsx)("div",{className:"form-group",children:(0,t.jsx)(p,{modules:o.J,formats:o.$,value:l,placeholder:"Write something amzing...",onChange:X})}),(0,t.jsx)("div",{children:(0,t.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Update"})})]}),(0,t.jsxs)("div",{className:"pt-3",children:[(0,t.jsx)("div",{className:"alert alert-success",style:{display:S?"":"none"},children:S}),(0,t.jsx)("div",{className:"alert alert-danger",style:{display:C?"":"none"},children:C})]}),l&&(0,t.jsx)("img",{src:"".concat(m.bl,"/blog/photo/").concat(s.query.slug),alt:D,className:"img img-fluid mt-3",style:{height:"300px",width:"100%"}})]}),(0,t.jsxs)("div",{className:"col-md-4",children:[(0,t.jsx)("div",{children:(0,t.jsxs)("div",{className:"form-group pb-2",children:[(0,t.jsx)("h5",{children:"Featured image"}),(0,t.jsx)("hr",{}),(0,t.jsx)("small",{className:"text-muted",children:"Max size: 1mb"}),(0,t.jsx)("br",{}),(0,t.jsxs)("label",{className:"btn btn-outline-info",style:{cursor:"pointer"},children:["Upload featured image",(0,t.jsx)("input",{type:"file",onChange:J("photo"),accept:"image/*",hidden:!0})]}),(0,t.jsx)("small",{className:"ml-2",children:y})]})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h5",{children:"Categories"}),(0,t.jsx)("hr",{}),(0,t.jsx)("ul",{style:{maxHeight:"200px",overflowY:"scroll"},children:c&&c.map((e,s)=>(0,t.jsxs)("li",{className:"list-unstyled",children:[(0,t.jsx)("input",{type:"checkbox",className:"mr-2",onChange:()=>F(e._id),checked:$(e._id)}),(0,t.jsx)("label",{className:"form-check-label",children:e.name})]},s))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h5",{children:"Tags"}),(0,t.jsx)("hr",{}),(0,t.jsx)("ul",{style:{maxHeight:"200px",overflowY:"scroll"},children:j&&j.map((e,s)=>(0,t.jsxs)("li",{className:"list-unstyled",children:[(0,t.jsx)("input",{type:"checkbox",className:"mr-2",onChange:()=>U(e._id),checked:H(e._id)}),(0,t.jsx)("label",{className:"form-check-label",children:e.name})]},s))})]})]})]})})};s.Z=(0,r.withRouter)(j)},2037:function(e,s,l){"use strict";l.r(s);var t=l(5893),r=l(4592),a=l(4645),i=l(3259);l(1664);let c=()=>(0,t.jsx)(r.Z,{children:(0,t.jsx)(a.Z,{children:(0,t.jsx)("div",{className:"container-fluid",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-12 pt-5 pb-5",children:(0,t.jsx)("h2",{children:"Update blog"})}),(0,t.jsx)("div",{className:"col-md-12",children:(0,t.jsx)(i.Z,{})})]})})})});s.default=c}},function(e){e.O(0,[260,928,795,148,774,888,179],function(){return e(e.s=8930)}),_N_E=e.O()}]);