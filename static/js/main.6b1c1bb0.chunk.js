(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{17:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),i=n.n(r),u=(n(17),n(12)),o=n(3),s=n.n(o),l=n(9),b=n.n(l),j=n(1),d=function(e){var t=e.title,n=e.buttonDisable,a=e.onClick,c="".concat(b.a.button," ").concat(n?b.a.disabled:"");return Object(j.jsx)("button",{disabled:n,onClick:a,className:c,children:t})},O=c.a.memo(d),p=function(e){var t=e.counterValue,n=t===e.maxValue?s.a.displayError:s.a.display;return Object(j.jsx)("div",{className:n,children:t})},m=n(5),_=n.n(m),x=function(e){var t=e.isError,n=e.maxValue,a=e.onChangeMax,c=e.onChangeMin,r=e.minValue,i=t?_.a.inputError:_.a.input,u=t?_.a.textError:_.a.text,o=t?"incorrect max number":"max value",s=t?"incorrect min number":"min value";return Object(j.jsxs)("div",{className:_.a.content,children:[Object(j.jsx)("div",{className:u,children:o}),Object(j.jsx)("input",{value:n,onChange:a,className:i,type:"number"}),Object(j.jsx)("div",{className:u,children:s}),Object(j.jsx)("input",{value:r,onChange:c,className:i,type:"number"})]})},E=n(4),g=n(2),v={counterValue:0,maxValue:0,minValue:0,displayMode:!1},N=function(e){return e.counter.displayMode},C=function(e){return e.counter.counterValue},f=function(e){return e.counter.maxValue},V=function(e){return e.counter.minValue};var h,A=function(){var e=Object(E.b)(),t=Object(E.c)(N),n=Object(E.c)(C),c=Object(E.c)(f),r=Object(E.c)(V),i=Object(a.useCallback)((function(){return e({type:"INCREMENT-COUNTER-VALUE"})}),[e]),o=Object(a.useCallback)((function(){return e({type:"RESET-VALUE"})}),[e]),l=Object(a.useCallback)((function(){return e({type:"CHANGE-DISPLAY-MODE",mode:!1})}),[e]),b=Object(a.useCallback)((function(){return e({type:"SET-CONFIG",mode:!0})}),[e]),d=Object(a.useState)(!1),m=Object(u.a)(d,2),_=m[0],g=m[1];Object(a.useEffect)((function(){var e=localStorage.getItem("isDark"),t=JSON.parse(e);g(t)}),[]);var v=c<=r||c<=0||r<0,h=n===c;return Object(j.jsx)("div",{className:"".concat(s.a.root," ").concat(_?s.a.dark:s.a.light),children:Object(j.jsx)("div",{className:s.a.main,children:t?Object(j.jsxs)("div",{className:s.a.container,children:[Object(j.jsx)("div",{children:Object(j.jsx)(p,{counterValue:n,maxValue:c})}),Object(j.jsxs)("div",{children:[Object(j.jsx)(O,{onClick:i,title:"inc",buttonDisable:h}),Object(j.jsx)(O,{onClick:o,title:"reset"}),Object(j.jsx)(O,{onClick:l,title:"set"}),Object(j.jsx)(O,{onClick:function(){g(!_),localStorage.setItem("isDark",JSON.stringify(!_))},title:"theme"})]})]}):Object(j.jsxs)("div",{className:s.a.settings,children:[Object(j.jsx)(x,{minValue:r,maxValue:c,onChangeMax:function(t){return e({type:"CHANGE-MAX-VALUE",value:Number(t.currentTarget.value)})},onChangeMin:function(t){return e({type:"CHANGE-MIN-VALUE",value:Number(t.currentTarget.value)})},isError:v}),Object(j.jsx)("div",{children:Object(j.jsx)(O,{title:"set",onClick:b,buttonDisable:v})})]})})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},S=n(11),k=Object(S.a)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT-COUNTER-VALUE":return Object(g.a)(Object(g.a)({},e),{},{counterValue:e.counterValue+1});case"RESET-VALUE":return Object(g.a)(Object(g.a)({},e),{},{counterValue:e.minValue});case"CHANGE-MAX-VALUE":return Object(g.a)(Object(g.a)({},e),{},{maxValue:t.value});case"CHANGE-MIN-VALUE":return Object(g.a)(Object(g.a)({},e),{},{minValue:t.value});case"CHANGE-DISPLAY-MODE":return Object(g.a)(Object(g.a)({},e),{},{displayMode:t.mode});case"SET-CONFIG":return Object(g.a)(Object(g.a)({},e),{},{counterValue:e.minValue,displayMode:t.mode});default:return e}}}),M=localStorage.getItem("state");M&&(h=JSON.parse(M));var I=Object(S.b)(k,h);I.subscribe((function(){localStorage.setItem("state",JSON.stringify(I.getState()))})),i.a.render(Object(j.jsx)(E.a,{store:I,children:Object(j.jsx)(A,{})}),document.getElementById("root")),y()},3:function(e,t,n){e.exports={root:"App_root__2a1zD",light:"App_light__2Wl6T",dark:"App_dark__BEpWV",main:"App_main__2Pef3",container:"App_container__2mc5i",display:"App_display__2WD1M",displayError:"App_displayError__2b3sI",settings:"App_settings__3VLp4"}},5:function(e,t,n){e.exports={input:"Settings_input__CM1Y-",inputError:"Settings_inputError__32nk6",text:"Settings_text__1pD16",textError:"Settings_textError__1Pl2a",content:"Settings_content__19wkE"}},9:function(e,t,n){e.exports={button:"Button_button__13N4i",disabled:"Button_disabled__2YBTk"}}},[[23,1,2]]]);
//# sourceMappingURL=main.6b1c1bb0.chunk.js.map