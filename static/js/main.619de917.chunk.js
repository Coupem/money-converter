(this["webpackJsonptask-conevector"]=this["webpackJsonptask-conevector"]||[]).push([[0],{123:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),i=t.n(c),o=t(46),l=t(21),u=t(24),s=t(73),p=t(74),d=t(159),m=t(125),f=t(79),b=t.n(f),g=t(80),v=t.n(g),y=t(156),E=Object(y.a)((function(e){return{headerBarContainer:{backgroundColor:"white",margin:"auto"},buttonGroup:{display:"flex",justifyContent:"center",marginBottom:e.spacing(2)},button:{"&:focus":{backgroundColor:"#ccc"},fontSize:"max(1.1vw, 15px)",padding:e.spacing(1),width:"12em",borderRadius:5,backgroundColor:"grey",color:"#222222"}}}));var C=function(){var e=E();return r.a.createElement("div",{className:e.headerBarContainer},r.a.createElement("div",{className:e.buttonGroup},r.a.createElement(d.a,{disableElevation:!0,variant:"contained"},r.a.createElement(m.a,{href:"/#/",startIcon:r.a.createElement(b.a,null),className:e.button},"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440"),r.a.createElement(m.a,{href:"/#/course",endIcon:r.a.createElement(v.a,null),className:e.button},"\u041a\u0443\u0440\u0441"))))},h=t(11),x=t(55),j=t(161),w=t(162),N=t(163),O=t(52),S=t.n(O),T=t(30),R=t(84),I=t(81),k=t(82),B=t.n(k),U={ccy:"UAH",base_ccy:"UAH",buy:"1",sale:"1"},F=function(){return function(){var e=Object(I.a)(S.a.mark((function e(a){var t,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"REQUEST_ITEMS"}),e.next=3,B.a.get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5");case 3:t=e.sent,n=t.data,a({type:"REQUEST_ITEMS_SUCCESS",payload:[].concat(Object(R.a)(n),[Object(T.a)({},U)])});case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},V=t(85),P=t(83),_=Object(y.a)((function(e){return{title:{fontSize:30},wrapperContainerInput:{width:1e3,margin:"auto",padding:e.spacing(5,0,10),display:"flex",justifyContent:"space-around"},inputForm:{display:"flex",alignItems:"center"},inputValue:{},propsContainer:{boxShadow:"0 0 5px 1px rgba(0,0,0,0.5)",borderRadius:5},responseField:{width:250},identifier:{color:"red",width:75},infoField:{marginRight:e.spacing(1.4)},icon:{color:"black"},responseContainer:{display:"flex",justifyContent:"center",margin:e.spacing(2.5,1.5)}}}));function L(e){var a=e.inputRef,t=e.onChange,n=Object(V.a)(e,["inputRef","onChange"]);return r.a.createElement(P.a,Object.assign({},n,{getInputRef:a,onValueChange:function(e){t({target:{value:e.value}})},thousandSeparator:!0,isNumericString:!0}))}var M=function(e){var a=e.label,t=e.saleValue,n=e.inNationalCurrency,c=_(),i=(n/t).toFixed(3);return r.a.createElement("div",{className:c.responseContainer},r.a.createElement(w.a,{className:c.responseField,variant:"outlined",value:i,disabled:!0,inputProps:{className:c.icon},rowsMax:"1"}),r.a.createElement(w.a,{className:c.identifier,variant:"outlined",multiline:!0,disabled:!0,defaultValue:a,InputProps:{className:c.infoField},inputProps:{className:c.icon}}))};function z(){var e=_(),a=Object(l.b)(),t=Object(n.useState)("UAH"),c=Object(x.a)(t,2),i=c[0],o=c[1],u=Object(n.useState)(null),s=Object(x.a)(u,2),p=s[0],d=s[1],m=Object(n.useRef)(null),f=Object(l.c)((function(e){return function(e,a){return e.items.loadedCurrency.filter((function(e){return a!==e.ccy}))}(e,i)})),b=Object(l.c)((function(e){return function(e){return e.map((function(e){return{value:e.ccy,label:e.ccy}}))}(e.items.loadedCurrency)})),g=Object(l.c)((function(e){return function(e,a,t){var n=e.items.loadedCurrency,r=1;if("BTC"===t){var c=n.find((function(e){return"USD"===e.ccy})).buy;r=a*c}return n.forEach((function(e){t===e.ccy&&(r=r*a*e.buy)})),r}(e,p,i)}));Object(n.useEffect)((function(){a(F())}),[a]),Object(n.useEffect)((function(){return m.current=setInterval((function(){return a(F())}),3e4),function(){clearInterval(m.current)}}),[a]);return f.length<=0?null:r.a.createElement("div",null,r.a.createElement(j.a,{align:"center",className:e.title},"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440:"),r.a.createElement("div",{className:e.wrapperContainerInput},r.a.createElement("form",{className:e.inputForm,noValidate:!0,autoComplete:"off"},r.a.createElement(w.a,{className:e.inputValue,label:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043a-\u0432\u043e:",variant:"outlined",color:"primary",required:!0,onChange:function(e){d(e.target.value)},InputProps:{inputComponent:L},inputProps:{maxLength:10}}),r.a.createElement(w.a,{select:!0,displayempty:"true",onChange:function(e){o(e.target.value)},value:i,label:"\u0412\u0430\u043b\u044e\u0442\u0430:",variant:"outlined"},b.map((function(e){return r.a.createElement(N.a,{key:e.value,value:e.value},e.label)})))),r.a.createElement("div",{className:e.propsContainer},f.map((function(e){return r.a.createElement(M,{key:e.ccy,label:e.ccy,saleValue:e.sale,inNationalCurrency:g})})))))}var A=Object(y.a)((function(e){return{wrapperRenderContainer:{margin:"auto",paddingBottom:e.spacing(10)},titleTextCourse:{fontSize:30,marginBottom:e.spacing(5)},wrapperCourseContainer:{display:"flex",justifyContent:"space-around",marginTop:e.spacing(1),width:730,margin:"auto"},wrapperFieldCourse:{display:"flex",justifyContent:"center"},course:{marginRight:e.spacing(1),boxShadow:"0 0 2px 1px rgba(0,0,0,0.5)",borderRadius:5},currency:{width:70,boxShadow:"0 0 1px 1px rgba(0,0,0,0.5)",borderRadius:5},styleText:{color:"black",marginLeft:e.spacing(.7)},nameContainer:{fontWeight:600,display:"flex",justifyContent:"space-between",margin:"auto",width:626},textCurrency:{paddingLeft:e.spacing(1.05)},wrapperTextCourse:{display:"flex"},textBuy:{paddingRight:e.spacing(19)},textSale:{paddingRight:e.spacing(11)}}}));function H(e){var a=e.value,t=A();return r.a.createElement(w.a,{className:t.currency,defaultValue:a,variant:"outlined",disabled:!0,inputProps:{className:t.styleText}})}function Q(e){var a=e.value,t=A();return r.a.createElement(w.a,{disabled:!0,className:t.course,defaultValue:a,inputProps:{className:t.styleText},variant:"outlined"})}var W=function(e){var a=e.currency,t=e.sale,n=e.buy,c=A();return r.a.createElement("div",{className:c.wrapperCourseContainer},r.a.createElement(H,{value:a}),r.a.createElement("div",{className:c.wrapperFieldCourse},r.a.createElement(Q,{value:n}),r.a.createElement(Q,{value:t})))};function D(){var e=A(),a=Object(l.b)(),t=Object(n.useRef)(null),c=Object(l.c)((function(e){return function(e){return e.filter((function(e){return"UAH"!==e.ccy}))}(e.items.loadedCurrency)}));return Object(n.useEffect)((function(){a(F())}),[a]),Object(n.useEffect)((function(){return t.current=setInterval((function(){return a(F())}),3e4),function(){clearInterval(t.current)}}),[a]),c.length<=0?null:r.a.createElement("div",{className:e.wrapperRenderContainer},r.a.createElement(j.a,{className:e.titleTextCourse,align:"center"},"\u0410\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442\u044b:"),r.a.createElement("div",{className:e.nameContainer},r.a.createElement("div",{className:e.textCurrency},"\u0432\u0430\u043b\u044e\u0442\u0430"),r.a.createElement("div",{className:e.wrapperTextCourse},r.a.createElement("div",{className:e.textBuy},"\u043f\u043e\u043a\u0443\u043f\u043a\u0430"),r.a.createElement("div",{className:e.textSale},"\u043f\u0440\u043e\u0434\u0430\u0436\u0430"))),c.map((function(e){return r.a.createElement(W,{key:e.ccy,currency:e.ccy,sale:e.sale,buy:e.buy})})))}var G=Object(y.a)((function(e){return{mainContainerInfo:{maxWidth:1400,height:"100%",margin:"auto",paddingTop:e.spacing(3),borderRadius:5,boxShadow:"0 0 10px 1px rgba(0,0,0,0.5)",marginBottom:e.spacing(10)},defaultText:{display:"flex",justifyContent:"center",paddingBottom:e.spacing(2.5),fontSize:25}}}));var J=function(){var e=G();return r.a.createElement("div",{className:e.mainContainerInfo},r.a.createElement(h.a,{exact:!0,path:"/",component:z}),r.a.createElement(h.a,{path:"/course",component:D}))},q=(t(71),Object(y.a)((function(e){return{headerText:{color:"black",fontSize:"max(1vw, 18px)",padding:e.spacing(2.5),borderRadius:5,fontWeight:500},titleTop:{boxShadow:"0 0 10px 1px rgba(0,0,0,0.5)",marginBottom:e.spacing(2),background:"linear-gradient(to left top, grey, #ccc)"}}})));var K=function(){var e=q(),a="\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440 \u0438 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442\u044b \u0434\u043b\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430".toUpperCase();return r.a.createElement("div",{className:e.titleTop},r.a.createElement(j.a,{className:e.headerText,align:"center"},a))},X=Object(y.a)({mainContainer:{backgroundColor:"white",width:"100%",height:"100%",fontFamily:"Roboto"}});var Y=function(){var e=X();return r.a.createElement("div",{className:e.mainContainer},r.a.createElement(K,null),r.a.createElement(C,null),r.a.createElement(J,null))},Z={isLoading:!1,loadedCurrency:[]};var $=Object(u.combineReducers)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"REQUEST_ITEMS":return Object(T.a)(Object(T.a)({},e),{},{isLoading:!0});case"REQUEST_ITEMS_SUCCESS":return Object(T.a)(Object(T.a)({},e),{},{isLoading:!1,loadedCurrency:a.payload});default:return e}}});var ee=function(){var e=Object(u.createStore)($,Object(p.composeWithDevTools)(Object(u.applyMiddleware)(s.a)));return r.a.createElement(l.a,{store:e},r.a.createElement(Y,null))};i.a.render(r.a.createElement(o.a,null,r.a.createElement(ee,null)),document.getElementById("root"))},92:function(e,a,t){e.exports=t(123)}},[[92,1,2]]]);
//# sourceMappingURL=main.619de917.chunk.js.map