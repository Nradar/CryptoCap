(this["webpackJsonpcrypto-cap"]=this["webpackJsonpcrypto-cap"]||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(2),r=a.n(c),u=a(16),i=a.n(u),s=(a(26),a(27),a(17)),l=a(18),o=a(3),m=a(20),d=a(19),f=a(7),j=a(6),h=a.n(j);a(5),a(45);var b=function(e){var t="https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD&api_key=".concat("e8fdb631f939492140c14ded70df8656d6730d6539cd30bfa14eeb7a1e3fb0a0"),a="",r=[{Name:"",Value:""},{Name:"",Value:""},{Name:"",Value:""},{Name:"",Value:""},{Name:"",Value:""},{Name:"",Value:""},{Name:"",Value:""},{Name:"",Value:""},{Name:"",Value:""},{Name:"",Value:""}],u="https://min-api.cryptocompare.com/data/pricemulti?fsyms=".concat(a,"&tsyms=USD,EUR,CAD"),i=Object(c.useState)(null),s=Object(f.a)(i,2),l=s[0],o=s[1],m=Object(c.useState)(null),d=Object(f.a)(m,2),j=d[0],b=d[1];if(Object(c.useEffect)((function(){function e(){h.a.get(t).then((function(e){o(e.data)}))}e();var a=setInterval((function(){return e()}),12e4);return function(){clearInterval(a)}}),[t]),function(){if(l){a="";for(var e=0;e<10;e++)a+=l.Data[e].CoinInfo.Name,r[e].Name=l.Data[e].CoinInfo.Name,e<9&&(a+=",");u="https://min-api.cryptocompare.com/data/pricemulti?fsyms=".concat(a,"&tsyms=USD,EUR,CAD")}}(),Object(c.useEffect)((function(){function e(){h.a.get(u).then((function(e){b(e.data)}))}e();var t=setInterval((function(){return e()}),2e3);return function(){clearInterval(t)}}),[u]),j)for(var p=0;p<10;p++)void 0!==j[r[p].Name]&&(r[p].Value=j[r[p].Name][e.currency]);function v(){switch(e.currency){case"USD":return"$";case"EUR":return"\u20ac";case"CAD":return"C$";default:return""}}return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:r.map((function(e,t){return Object(n.jsx)("h1",{className:"col-sm-12 col-md-6 col-lg-4",children:Object(n.jsxs)("span",{className:"badge badge-mine",children:[Object(n.jsx)("div",{className:"name",children:e.Name}),Object(n.jsxs)("div",{className:"value",children:[v(),e.Value]})]})},t)}))})})},p=(a(46),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={currency:"USD"},n.handleChange=n.handleChange.bind(Object(o.a)(n)),n}return Object(l.a)(a,[{key:"handleChange",value:function(e){this.setState({currency:e.target.value})}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("select",{className:"select-container",value:this.state.currency,onChange:this.handleChange,children:[Object(n.jsx)("option",{value:"USD",children:"USD$"}),Object(n.jsx)("option",{value:"EUR",children:"EUR\u20ac"}),Object(n.jsx)("option",{value:"CAD",children:"CAD$"})]}),Object(n.jsx)(b,{currency:this.state.currency})]})}}]),a}(r.a.Component));var v=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(p,{})})};i.a.render(Object(n.jsx)(v,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.3629c733.chunk.js.map