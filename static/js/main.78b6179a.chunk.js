(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),c=a.n(l),o=(a(13),a(1));a(15),a(17);var m=function(e){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},r.a.createElement("div",{className:"container-fluid",style:{color:"white"}},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Navbar"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"/navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Home"))),r.a.createElement("div",{className:"form-check form-switch text-".concat("dark"===e.mode?"light":"dark")},r.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch","aria-checked":!0,id:"flexSwitchCheckDefault",onClick:e.toggleMode}),r.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Change to ","dark"===e.mode?"light":"dark"))))))};var s=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),l=a[0],c=a[1],m=Object(n.useState)(""),s=Object(o.a)(m,2),i=s[0],u=s[1],b=function(){0===i.length&&(c("String is empty, please add the text in box"),alert("String is empty, please add the text in box"))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{style:{color:"red"}}," ",l),r.a.createElement("div",{className:"container"},r.a.createElement("div",{"mb-3":!0},r.a.createElement("textarea",{className:"form-control",placeholder:"Enter the text here ",onChange:function(e){c(""),u(e.target.value)},value:i,rows:"8",id:"txtArea"})),r.a.createElement("button",{className:"btn btn-primary m-1",type:"button",onClick:function(){b();var e=i.toUpperCase();u(e)}},"Upper case"),r.a.createElement("button",{className:"btn btn-primary m-1",type:"button",onClick:function(){b();var e=i.toLowerCase();u(e)}},"Lower case"),r.a.createElement("button",{className:"btn btn-primary m-1",type:"button",onClick:function(){b();var e=i.split(" "),t="";for(var a in e)t=t+e[a].charAt(0).toUpperCase()+e[a].slice(1)+" ";u(t)}},"Cap 1st letter"),r.a.createElement("button",{className:"btn btn-primary m-1",type:"button",onClick:function(){b();var e=document.getElementById("txtArea");e.select(),navigator.clipboard.writeText(e.value)}},"Copytext"),r.a.createElement("button",{className:"btn btn-primary m-1",type:"button",onClick:function(){b();var e=i.split(/[ ]+/);u(e.join(" "))}},"Remove Extra spaces"),r.a.createElement("button",{className:"btn btn-danger m-1",type:"button",onClick:function(){u(""),e.alert("text has beeen cleared","success")}},"Clear text")),r.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},r.a.createElement("h2",null,"Your text summary"),"Total Words are ",i.split(" ").length-1," and characters are"," ",i.length,r.a.createElement("p",null,"Seconds to read ",.42*(i.split(" ").length-1)),r.a.createElement("h3",null,"Preview "),i.length>0?i:"Please enter the text in box to review here!!"))};var i=function(e){return e.alertText&&r.a.createElement("div",{className:"alert alert-".concat(e.alertText.type," alert-dismissible fade show"),role:"alert"},r.a.createElement("strong",null,e.alertText.type)," ",e.alertText.msg)};var u=function(){var e=Object(n.useState)("lg"),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(null),u=Object(o.a)(c,2),b=u[0],d=u[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{mode:a,toggleMode:function(){"dark"===a?(l("light"),document.body.style.background="white"):(l("dark"),document.body.style.background="#34616e")}}),r.a.createElement(i,{alertText:b}),r.a.createElement("div",{className:"container my-3"},r.a.createElement(s,{mode:a,alert:function(e,t){d({msg:e,type:t}),setTimeout(function(){d(null)},1500)}})))},b=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,20)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),l(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null))),b()},4:function(e,t,a){e.exports=a(19)}},[[4,3,2]]]);
//# sourceMappingURL=main.78b6179a.chunk.js.map