(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{332:function(e,t,a){e.exports={cost:"InputPair_cost__2oq0A"}},334:function(e,t,a){e.exports={Container:"RadioButtonsGroup_Container__2vUfE"}},335:function(e,t,a){e.exports={block:"SettingsPage_block__3ZA8T",page:"SettingsPage_page__2JnI0"}},336:function(e,t,a){e.exports={box:"ServiceBox_box__1FrWT","box__load--active":"ServiceBox_box__load--active__gSVTd","box__load--inactive":"ServiceBox_box__load--inactive__2K6A3","box__p2p--active":"ServiceBox_box__p2p--active__3ECFU","box__p2p--inactive":"ServiceBox_box__p2p--inactive__zo_VF","box__balance--active":"ServiceBox_box__balance--active__2wNQ0","box__balance--inactive":"ServiceBox_box__balance--inactive__2_Xwg",box__header:"ServiceBox_box__header__FkzES",textbox:"ServiceBox_textbox__rIG7N","textbox--active":"ServiceBox_textbox--active__1bL5R","textbox--inactive":"ServiceBox_textbox--inactive__25uGQ"}},339:function(e,t,a){e.exports={item__container:"DndList_item__container__tLUC2",item__icon:"DndList_item__icon__3RH-A",item__textfield:"DndList_item__textfield__3lUI-"}},379:function(e,t,a){e.exports=a.p+"static/media/Priority.96d0eea1.svg"},380:function(e,t,a){e.exports={Container:"ManagedLoadSpecific_Container__34fYe",Arrow:"ManagedLoadSpecific_Arrow__1HjXb",LabelContainer:"ManagedLoadSpecific_LabelContainer__3ASqv",text1:"ManagedLoadSpecific_text1__2Sfyl",text2:"ManagedLoadSpecific_text2__1sjrn"}},409:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(59),i=a(247),c=(a(306),a(104)),l=a.n(c),u=a(405),s=a(332),g=a.n(s),d=a(333),m=a.n(d),p=Object(u.a)(function(e){return{name:{marginRight:"32px",width:"192px",fontFamily:e.typography.fontFamily,outlineColor:"#0099DC"},ip:{width:"128px",fontFamily:e.typography.fontFamily,outlineColor:"#0099DC"},power:{marginRight:"32px",width:"128px"},cost:{width:"256px"},cap:{width:"160px"}}}),_=function(e){var t=e.first,a=e.second,n=e.onTyping,o=p();return r.a.createElement("form",null,r.a.createElement(l.a,{value:t.get("value"),InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined",label:t.get("label"),onInput:function(e){return n("0",e.target.value)},className:o[t.get("id")],InputProps:{classes:{root:g.a["textfield-input-custom"]},endAdornment:r.a.createElement(m.a,{position:"end"},t.get("units"))}}),r.a.createElement(l.a,{value:a.get("value"),InputLabelProps:{shrink:!0},label:a.get("label"),margin:"normal",variant:"outlined",onChange:function(e){return n("1",e.target.value)},className:o[a.get("id")],InputProps:{classes:{input:g.a[a.get("id")]},endAdornment:r.a.createElement(m.a,{position:"end"},a.get("units"))}}))},v=a(410),b=a(6),f=a(412),x=a(406),h=a(125),E=a(334),y=a.n(E),C=Object(b.a)({root:{color:"#FFFFFF","&$checked":{color:"#FFFFFF"},"&:hover":{backgroundColor:"transparent"}},checked:{}})(function(e){return r.a.createElement(v.a,Object.assign({color:"default"},e))}),F=Object(u.a)(function(e){return{label:{fontFamily:e.typography.fontFamily,fontSize:"16px",lineHeight:"24px",letterSpacing:"0.44px"}}});function S(e){var t=e.onChange,a=e.currentValue,n=e.radios,o=F();return r.a.createElement("div",{className:y.a.Container},r.a.createElement(h.a,{component:"fieldset"},r.a.createElement(f.a,{"aria-label":"position",name:"position",value:a.toString(),onChange:function(e){return t(e.target.value)},column:"true"},n.map(function(e,t){var a="string"===typeof e.get("label")?e.get("label"):e.get("label").toJS();return r.a.createElement(x.a,{key:e.get("label"),value:t.toString(),control:"white"!==e.get("color")?r.a.createElement(v.a,{key:t,color:"default",disableRipple:!0}):r.a.createElement(C,{key:t,disableRipple:!0}),label:a,labelPlacement:"end",className:o.label})}))))}var k=a(335),N=a.n(k),I=a(41),T=a.n(I),O=function(e){var t=e.onTyping,a=e.current;return r.a.createElement(r.a.Fragment,null,a.get("inputTypes")&&r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{style:{fontWeight:600},variant:"h5",component:"h2",gutterBottom:!0},a.get("header")),r.a.createElement(_,{onTyping:t,first:a.getIn(["inputTypes","0"]),second:a.getIn(["inputTypes","1"])})))},B=a(44),L=a(64),w=a.n(L),P=a(337),j=a.n(P),R={load:{header:"\u0423\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u0430\u044f \u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0430",textActive:"\u0427\u0442\u043e\u0431\u044b \u0441\u044d\u043a\u043e\u043d\u043e\u043c\u0438\u0442\u044c, \u0443\u043c\u043d\u044b\u0435 \u0440\u043e\u0437\u0435\u0442\u043a\u0438 \u0431\u0443\u0434\u0443\u0442 \u0432\u044b\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043f\u0440\u0438\n\u043f\u043e\u0434\u043e\u0440\u043e\u0436\u0430\u043d\u0438\u0438 \u044d\u043d\u0435\u0440\u0433\u0438\u0438. \u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u043d\u0430\u0432\u0435\u0440\u0445 \u0441\u043f\u0438\u0441\u043a\u0430 \u0442\u0435, \u0447\u0442\u043e\n \u0434\u043e\u043b\u0436\u043d\u044b \u043e\u0442\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u0440\u0435\u0436\u0435:",textInactive:"\u0427\u0442\u043e\u0431\u044b \u0441\u044d\u043a\u043e\u043d\u043e\u043c\u0438\u0442\u044c, \u0443\u043c\u043d\u044b\u0435 \u0440\u043e\u0437\u0435\u0442\u043a\u0438 \u0431\u0443\u0434\u0443\u0442 \u0432\u044b\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043f\u0440\u0438 \u043f\u043e\u0434\u043e\u0440\u043e\u0436\u0430\u043d\u0438\u0438 \u044d\u043d\u0435\u0440\u0433\u0438\u0438."},p2p:{header:"P2P \u0442\u043e\u0440\u0433\u043e\u0432\u043b\u044f \u044d\u043d\u0435\u0440\u0433\u0438\u0435\u0439",textActive:"TODO\n\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u043e\u044f\u0441\u043d\u0435\u043d\u0438\u0435",textInactive:"TODO\n\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u043e\u044f\u0441\u043d\u0435\u043d\u0438\u0435"},balance:{header:"\u0411\u0430\u043b\u0430\u043d\u0441 \u0441\u043f\u0440\u043e\u0441\u0430 \u0438 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f",textActive:"TODO\n\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u043e\u044f\u0441\u043d\u0435\u043d\u0438\u0435",textInactive:"TODO\n\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u043e\u044f\u0441\u043d\u0435\u043d\u0438\u0435"}},A=a(336),D=a.n(A),G=Object(b.a)({switchBase:{backgroundColor:"transparent !important","&$checked":{color:"#FFF"},"&$checked + $track":{backgroundColor:"#FFF",opacity:.25}},checked:{},track:{backgroundColor:"rgba(34, 31, 31, 0.26)",opacity:1}})(j.a),W=function(e){var t=e.variant,a=e.active,n=e.render,o=void 0===n?null:n,i=e.onToggle,c=w()(Object(B.a)({},D.a["box__".concat(t,"--active")],!0===a),Object(B.a)({},D.a["box__".concat(t,"--inactive")],!1===a),D.a["box__".concat(t)],D.a.box),l=w()(Object(B.a)({},D.a["textbox--active"],!0===a),Object(B.a)({},D.a["textbox--inactive"],!1===a),D.a.textbox);return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("div",{className:c},r.a.createElement("div",{className:D.a.box__header},r.a.createElement(G,{checked:a,onChange:function(){return i(!a)},disableRipple:!0}),r.a.createElement(T.a,{style:{fontWeight:500,color:"#FFF"},variant:"h5",component:"h2"},R[t].header)),r.a.createElement("div",{className:l},r.a.createElement(T.a,{variant:"body2"},R[t]["text".concat(a?"Active":"Inactive")])),"load"===t&&a&&o(),"p2p"===t&&a&&o()))},M=a(10),V=a(151),H=a.n(V),J=a(381),U=a(339),$=a.n(U),z=function(e){var t=e.items,a=e.onReorder,n=e.onChange,o=w()("material-icons",$.a.item__icon);return r.a.createElement(J.a,{onDragEnd:function(e){if(e.destination){var n=function(e,t,a){var n=e.get(t);return e.splice(t,1).splice(a,0,n)}(t,e.source.index,e.destination.index);a(n)}}},r.a.createElement(J.c,{droppableId:"droppable"},function(e,a){return r.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef}),t.map(function(e,t){return r.a.createElement(J.b,{key:e.get("id"),draggableId:e.get("id"),index:t},function(t,a){return r.a.createElement("div",Object.assign({className:$.a.item__container,ref:t.innerRef},t.draggableProps),r.a.createElement("i",Object.assign({className:o},t.dragHandleProps),"drag_indicator"),r.a.createElement(l.a,{id:e.get("id"),label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0440\u043e\u0437\u0435\u0442\u043a\u0438 \u2116".concat(e.get("id")),margin:"normal",variant:"outlined",value:e.get("name"),autoComplete:"off",onChange:function(t){return n(e.get("id"),t.target.value)},className:$.a.item__textfield,InputProps:{classes:{notchedOutline:$.a.item__textfield,root:$.a.item__textfield}},InputLabelProps:{classes:{root:$.a.item__textfield},shrink:!0}}))})}),e.placeholder)}))},q=a(379),Q=a.n(q),X=a(380),K=a.n(X),Y=function(e){var t=e.items,a=e.onReorder,n=e.onChange;return r.a.createElement("div",{className:K.a.Container},r.a.createElement(z,{items:t,onReorder:a,onChange:n}),r.a.createElement("img",{src:Q.a,className:K.a.Arrow}),r.a.createElement("div",{className:K.a.LabelContainer},r.a.createElement("div",{className:K.a.text1},"\u041d\u0435\u043b\u044c\u0437\u044f \u043e\u0442\u043a\u043b\u044e\u0447\u0430\u0442\u044c"),r.a.createElement("div",{className:K.a.text2},"\u041c\u043e\u0436\u043d\u043e \u043e\u0442\u043a\u043b\u044e\u0447\u0430\u0442\u044c")))};t.default=Object(o.b)(function(e){return{mainInputs:e.settings.get("mains"),currentGeneratorNumber:e.settings.get("currentGeneratorNumber"),radios:e.settings.get("radios"),managedLoad:e.settings.get("managedLoad"),p2p:e.settings.get("p2p"),balance:e.settings.get("balance")}},function(e){return{onNameOrIpChange:function(t,a){return e(function(e,t){return{type:M.p,payload:{param:e,value:t}}}(t,a))},onGeneratorChoose:function(t){return e((a=t,{type:M.j,selectedGenerator:a}));var a},onParameterChange:function(t,a){return e(function(e,t){return{type:M.b,payload:{param:e,value:t}}}(t,a))},onToggleLoad:function(t){return e(function(e){return{type:M.n,value:e}}(t))},onImportancyChange:function(t){return e(function(e){return{type:M.a,items:e}}(t))},onRosetteNameChange:function(t,a){return e(function(e,t){return console.log(e,t),{type:M.c,payload:{id:e,value:t}}}(t,a))},onToggleTrade:function(t){return e(function(e){return{type:M.o,value:e}}(t))},onToggleBalance:function(t){return e(function(e){return{type:M.m,value:e}}(t))},onStrategyChange:function(t){return e(function(e){return{type:M.k,value:e}}(t))},onInitState:function(){return e(function(e){H.a.get("localhost:8888/meters/0xCB32de2b9d1f1Efb4abDE7d24131eBeD6c649ad7/settingsdata").then(function(e){var t=e.data;return console.log(t)})})}}})(function(e){var t=e.currentGeneratorNumber,a=e.radios,o=e.onGeneratorChoose,c=e.onParameterChange,l=e.mainInputs,u=e.onNameOrIpChange,s=e.p2p,g=e.onStrategyChange,d=e.managedLoad,m=e.balance,p=e.onToggleTrade,v=e.onToggleBalance,b=e.onToggleLoad,f=e.onImportancyChange,x=e.onRosetteNameChange,h=e.onInitState,E=a.get(t);return Object(n.useEffect)(function(){return h()},[]),r.a.createElement("div",{className:N.a.page},r.a.createElement("div",{className:N.a.block},r.a.createElement(i.a,{style:{fontWeight:600},variant:"h4",gutterBottom:!0},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u044d\u043d\u0435\u0440\u0433\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u044f\u0447\u0435\u0439\u043a\u0438"),r.a.createElement(_,{first:l.get(0),second:l.get(1),onTyping:u})),r.a.createElement("div",{className:N.a.block},r.a.createElement(i.a,{style:{fontWeight:600},variant:"h5",gutterBottom:!0},"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u0435 \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0438 \u043d\u0430\u043a\u043e\u043f\u0438\u0442\u0435\u043b\u0438"),r.a.createElement(S,{radios:a,currentValue:t,onChange:o})),0!==t&&r.a.createElement("div",{className:N.a.block},r.a.createElement(O,{onTyping:c,current:E})),r.a.createElement("div",{className:N.a.block},r.a.createElement(i.a,{style:{fontWeight:600},variant:"h5",component:"h2",gutterBottom:!0},"\u0421\u0435\u0440\u0432\u0438\u0441\u044b"),r.a.createElement(W,{variant:"load",active:d.get("status"),onToggle:b,render:function(){return r.a.createElement(Y,{items:d.get("items"),onReorder:f,onChange:x})}}),r.a.createElement(W,{variant:"p2p",active:s.get("status"),render:function(){return r.a.createElement(S,{onChange:g,currentValue:s.get("current"),radios:s.get("strategies")})},onToggle:p}),r.a.createElement(W,{variant:"balance",active:m.get("status"),onToggle:v})))})}}]);
//# sourceMappingURL=6.f54736fe.chunk.js.map