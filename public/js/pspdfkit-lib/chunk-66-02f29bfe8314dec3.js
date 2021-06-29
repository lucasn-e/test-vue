/*!
 * PSPDFKit for Web 2021.4.2 (https://pspdfkit.com/web)
 * 
 * Copyright (c) 2016-2019 PSPDFKit GmbH. All rights reserved.
 * 
 * THIS SOURCE CODE AND ANY ACCOMPANYING DOCUMENTATION ARE PROTECTED BY INTERNATIONAL COPYRIGHT LAW
 * AND MAY NOT BE RESOLD OR REDISTRIBUTED. USAGE IS BOUND TO THE PSPDFKIT LICENSE AGREEMENT.
 * UNAUTHORIZED REPRODUCTION OR DISTRIBUTION IS SUBJECT TO CIVIL AND CRIMINAL PENALTIES.
 * This notice may not be removed from this file.
 * 
 * PSPDFKit uses several open source third-party components: https://pspdfkit.com/acknowledgements/web/
 */
(window.webpackJsonpPSPDFKit=window.webpackJsonpPSPDFKit||[]).push([[66],{877:function(e,t,n){var a={"./add.svg":533,"./duplicate.svg":534,"./extract.svg":535,"./help.svg":536,"./importDocument.svg":530,"./move.svg":531,"./moveLeft.svg":537,"./moveRight.svg":538,"./multiplePages.svg":532,"./redo.svg":539,"./remove.svg":540,"./rotateLeft.svg":541,"./rotateRight.svg":542,"./selectAll.svg":543,"./selectNone.svg":544,"./undo.svg":545};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=877},961:function(e,t,n){"use strict";n.r(t);var a=n(36),r=n.n(a),o=n(18),i=n.n(o),s=n(1),c=n.n(s),l=n(25),u=n.n(l),d=n(8),m=n.n(d),f=n(500),p=n(14),g=n(3),v=n(228),b=n(32),y=n(24),P=n(39),h=n(6),w=n(2),O=n(54),I=n(0),E=n(10),N=n.n(E),k=n(13),x=n(499),D=n(57),j=n(107),C=n(137),S=n(327),M=n(89),A=n.n(M),z=n(21),K=n.n(z),B=n(74),L=["type"];function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=I.memo((function(e){var t=e.items,a=e.builtInItems,r=e.moveDialog,o=e.CSS_HACK,i=o.components.ToolbarButtonComponent,s=o.styles;return t.map((function(e,t){var o=a.find((function(t){return t.type===e.type}));if("spacer"===e.type)return I.createElement("div",{style:{flex:1},className:e.className,key:"spacer-".concat(t)});if("move"===e.type&&o)return I.createElement("div",{key:o.type,className:s.moveButtonContainer},I.createElement(i,K()({},o,{icon:n(531),className:N()(o.className,e.className),onPress:function(e){o&&o.onPress&&o.onPress(e)}})),r);if(o){var c=Object(B.g)(o.type);return I.createElement(i,K()({},o,{key:o.type||t,icon:n(877)("./".concat(c,".svg")),onPress:function(e){o&&o.onPress&&o.onPress(e)},className:N()(o.className,e.className)}))}if("custom"===e.type&&e.node){e.type;var l=A()(e,L);return I.createElement(S.a,K()({},l,{onPress:function(t){return e.onPress&&e.onPress(t,e.id)},key:e.id||t}))}return I.createElement(i,K()({},e,{key:o&&o.type||t,onPress:function(t){return e.onPress&&e.onPress(t,e.id)}}))}))})),H=I.memo((function(e){var t=e.items,a=e.builtInItems,r=e.CSS_HACK,o=r.components,i=o.ToolbarDropdownGroupComponent,s=o.ToolbarButtonComponent,c=r.styles,l=e.frameWindow,u=t.map((function(e){var t=e.item,n=e.index,r=a.find((function(e){return e.type===t.type}));return r?{index:n,item:T(T({},r),{},{className:N()(r.className,t.className),onPress:function(e){r.onPress&&r.onPress(e)}})}:{item:t,index:n}}));return u.length>0&&I.createElement(I.Fragment,null,I.createElement("div",{style:{flex:1},key:"spacer-responsive"}),I.createElement(i,{icon:{type:"more",size:{width:20,height:20}},items:u,discreteDropdown:!0,caretDirection:"down",role:"menu",ItemComponent:function(e){var t=e.item,r=e.isSelectedItem,o=e.state,i=e.itemComponentProps,l=!r&&a.find((function(e){return e.type===t.item.type}));if(r)return null;var u=l&&l.type?Object(B.g)(l.type):"";return t.item.node?I.createElement(S.a,K()({},t.item,{onPress:t.item.onPress?function(e){return t.item.onPress(e,t.id)}:void 0,key:t.item.id||t.index})):I.createElement(s,K()({},t.item,{role:"menuitem",className:N()(t.item.className,c.toolbar.dropdownButton,"Focused"===o&&c.toolbar["dropdownButton"+o]),icon:l?n(877)("./".concat(u,".svg")):t.item.icon,itemComponentProps:i}))},onSelect:function(e,t){var n=t.item,a=n.onPress;n.disabled||a&&a(e)},noInitialSelection:!0,frameWindow:l}))})),_=n(15);function W(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return V(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return V(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw o}}}}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G=new w.P({width:p.b,height:p.a}),Y=I.createElement("div",null),q=I.createElement(j.a,null),X=function(e){var t=e.styles,a=e.formatMessage,r=e.movePreview;return I.createElement("div",{style:{width:e.width,height:e.height},className:N()(t.importedDocument,c()({},t.importedDocumentMovePreview,r))},I.createElement("div",{className:t.importedDocumentIconCircle},I.createElement(D.a,{src:n(530)})),I.createElement("span",{className:t.importedDocumentInfo},a(Z.documentMergedHere)))},$=function(e,t,n,a){var r,o=t.flatten(),i=e.map((function(e){return{type:"page",page:e,rotation:0,label:e.pageLabel}})),s=function(e){var t,n=e.dupeOf||e.label,a=0,r=W(i);try{for(r.s();!(t=r.n()).done;){var o=t.value;"dupeOf"in o&&null!=o.dupeOf&&o.dupeOf===n&&null!=o.dupeNumber&&o.dupeNumber>a&&(a=o.dupeNumber)}}catch(e){r.e(e)}finally{r.f()}return a+1},c=0,l=W(o);try{for(l.s();!(r=l.n()).done;){var u=r.value;switch(u.type){case"addPage":var d=void 0;null!=u.afterPageIndex?d=u.afterPageIndex+1:(Object(_.a)(null!=u.beforePageIndex),d=u.beforePageIndex),++c,i=i.insert(d,{type:"newPage",label:"".concat(n(Z.newPage)," ").concat(c),rotation:0,size:new w.P({width:u.pageWidth,height:u.pageHeight})});break;case"removePages":var m,f=W(u.pageIndexes.map((function(e){return i.get(e)})));try{for(f.s();!(m=f.n()).done;){var p=m.value;Object(_.a)(null!=p);var v=i.indexOf(p);i=i.delete(v)}}catch(e){f.e(e)}finally{f.f()}break;case"rotatePages":var b,y=W(u.pageIndexes);try{for(y.s();!(b=y.n()).done;){var P=b.value,h=i.get(P);Object(_.a)(null!=h);var O=void 0,I=void 0;Object(_.a)("page"===h.type||"newPage"===h.type);var E=h.rotation;if(I=90===u.rotateBy?270===E?0:E+u.rotateBy:90===E?0:180===E?90:270===E?180:E+u.rotateBy,Object(_.a)(0===I||90===I||180===I||270===I),"page"===h.type)O=U(U({},h),{},{rotation:I});else{if("newPage"!==h.type)throw new g.a("Rotation is not allowed on imported documents");O=U(U({},h),{},{rotation:I})}i=i.set(P,O)}}catch(e){y.e(e)}finally{y.f()}break;case"duplicatePages":var N,k=W(u.pageIndexes.map((function(e){return i.get(e)})));try{for(k.s();!(N=k.n()).done;){var x=N.value;Object(_.a)(null!=x),Object(_.a)("page"===x.type);var D=s(x),j=x.dupeOf||x.label,C=i.indexOf(x);i=i.insert(C+1,Object.assign({},x,{label:"".concat(j," (").concat(D,")"),dupeOf:j,dupeNumber:D}))}}catch(e){k.e(e)}finally{k.f()}break;case"movePages":var S=u.pageIndexes;if(1===S.length){var M=S[0],A=void 0;null!=u.beforePageIndex?A=u.beforePageIndex:(Object(_.a)(null!=u.afterPageIndex),A=u.afterPageIndex+1);var z=i.get(M);Object(_.a)(null!=z);var K=i.get(A),B=i.size;i=i.delete(M),A===B?i=i.push(z):0===A?i=i.unshift(z):(Object(_.a)(null!=K),i=i.insert(i.indexOf(K),z))}else{var L=S.slice().sort();if(null!=u.beforePageIndex){Object(_.a)(0===u.beforePageIndex);var R,T=W(L.map((function(e){return i.get(e)})).reverse());try{for(T.s();!(R=T.n()).done;){var F=R.value;Object(_.a)(null!=F),i=(i=i.delete(i.indexOf(F))).unshift(F)}}catch(e){T.e(e)}finally{T.f()}}else{Object(_.a)(null!=u.afterPageIndex);var H=i.get(u.afterPageIndex);Object(_.a)(null!=H);var V,J=W(L.map((function(e){return i.get(e)})).reverse());try{for(J.s();!(V=J.n()).done;){var G=V.value;Object(_.a)(null!=G),i=(i=i.delete(i.indexOf(G))).insert(i.indexOf(H)+1,G)}}catch(e){J.e(e)}finally{J.f()}}}break;case"importDocument":var Y=void 0;"beforePageIndex"in u&&null!=u.beforePageIndex?Y=u.beforePageIndex:(Object(_.a)("afterPageIndex"in u&&null!=u.afterPageIndex),Y=u.afterPageIndex+1);var q=void 0;if("string"==typeof u.document){var X=u.document;Object(_.a)(a.has(X)),q=a.get(X,"Imported Document")}else Object(_.a)("string"==typeof u.document.name),q=u.document.name;i=i.insert(Y,{type:"importedDocument",label:q});break;case"keepPages":case"applyInstantJson":case"applyXfdf":case"flattenAnnotations":case"performOcr":case"setPageLabel":case"applyRedactions":case"updateMetadata":throw Error("Unknown document operation");default:Object(g.b)(u.type)}}}catch(e){l.e(e)}finally{l.f()}return i},Q=function(e){var t=e.pages,n=e.style,a=e.styles,r=e.previewCount;return I.createElement("div",{className:a.movePreview},I.createElement("div",{className:N()(a.movePreviewPages,c()({},a.movePreviewPagesLoose,"loose"===n))},t),I.createElement("div",{className:a.movePreviewCount},r||t.length))},Z=(t.default=Object(y.d)((function(e){var t,a=e.onCancel,o=e.pages,s=e.dispatch,l=e.backend,d=e.frameWindow,y=e.intl.formatMessage,E=e.onDialog,j=e.footerItems,M=e.toolbarItems,A=I.useMemo((function(){return j.toJS()}),[j]),z=I.useMemo((function(){return M.toJS()}),[M]),K=e.CSS_HACK.styles,B=I.useState(Object(h.b)()),L=u()(B,2),R=L[0],T=(L[1],I.useState(Object(h.a)())),V=u()(T,2),J=V[0],ee=V[1],te=I.useState(0),ne=u()(te,2),ae=ne[0],re=ne[1],oe=J.slice(0,J.size-ae),ie=$(e.pages,oe,y,R),se=I.useState(Object(h.g)()),ce=u()(se,2),le=ce[0],ue=ce[1],de=I.useState(!1),me=u()(de,2),fe=me[0],pe=me[1],ge=I.useState(!1),ve=u()(ge,2),be=ve[0],ye=ve[1],Pe=I.useRef(null),he=I.useRef(null),we=I.useState(!1),Oe=u()(we,2),Ie=Oe[0],Ee=Oe[1],Ne=I.useState(""),ke=u()(Ne,2),xe=ke[0],De=ke[1],je=I.useCallback((function(){var e=he.current;null!=e&&(Ie&&e.ownerDocument.activeElement!==e?e.focus():Ie||e.ownerDocument.activeElement!==e||e.blur())}),[Ie]),Ce=I.useCallback((function(e){Ee(e),je(),E(e)}),[E,je]);I.useEffect((function(){je()}),[je]);var Se=I.useCallback((function(e){ee(oe.push(e)),re(0)}),[oe]),Me=I.useRef(!0);I.useLayoutEffect((function(){return function(){Me.current&&(Me.current=!1)}}),[]);var Ae=I.useCallback((function(){var e=o.get(0),t=e?e.pageSize:G,n={type:"addPage",backgroundColor:w.j.WHITE,pageWidth:t.width,pageHeight:t.height,rotateBy:0};1===le.size?n.afterPageIndex=le.first():n.beforePageIndex=0,Se(n),ue(le.clear())}),[o,le,Se]),ze=I.useCallback((function(){Se({type:"removePages",pageIndexes:le.toArray()}),ue(le.clear())}),[Se,le]),Ke=I.useCallback((function(){Se({type:"duplicatePages",pageIndexes:le.toArray()}),ue(le.clear())}),[Se,le]),Be=I.useCallback((function(){Se({type:"rotatePages",pageIndexes:le.toArray(),rotateBy:270})}),[Se,le]),Le=I.useCallback((function(){Se({type:"rotatePages",pageIndexes:le.toArray(),rotateBy:90})}),[Se,le]),Re=I.useCallback((function(){Ce(!Ie)}),[Ie,Ce]),Te=I.useCallback((function(e){var t=e.target.value,n=t,a=parseInt(t,10);isNaN(a)||(n=Math.min(Math.max(a,0),ie.size).toString()),De(n)}),[ie.size]),Fe=parseInt(xe,10),He=I.useCallback((function(e){var t;return 1===e.size||null==e.sort().find((function(e){var n=!1;return null!=t&&(n=e!==t+1),t=e,n}))}),[]),_e=I.useCallback((function(e,t){var n=null!=t?t:le,a=He(n);return!(n.includes(e-1)||0===e&&a&&n.includes(0)||a&&n.sort().first()===e)}),[le,He]),We=!isNaN(Fe)&&_e(Fe),Ve=I.useCallback((function(e,t){var n=null!=t?t:le,a=e-1;Se(U({type:"movePages",pageIndexes:n.toArray()},0===e?{beforePageIndex:0}:{afterPageIndex:a}));var r=Object(h.g)(),o=0;0!==e&&(o=a+1,n.forEach((function(e){e<a&&--o})));var i=o;n.forEach((function(){r=r.add(i),++i})),ue(r)}),[le,Se,ue]),Je=I.useCallback((function(e){e.preventDefault(),We&&(Ve(Fe),Ce(!1))}),[We,Fe,Ce,Ve]),Ue=I.useCallback((function(e){var t=e.target;if(Ie&&!t.classList.contains(K.moveToolbarButton)){var n=Pe.current;Object(_.a)(null!=n),n.contains(t)||Ce(!1)}}),[Ie,Ce,K.moveToolbarButton]),Ge=I.useCallback((function(){var e=le.sort().toList().map((function(e){return{type:"movePages",pageIndexes:[e],beforePageIndex:e-1}}));Se(e),ue(Object(h.g)(le.toArray().map((function(e){return e-1}))))}),[Se,le]),Ye=I.useCallback((function(){var e=le.sort().toList().map((function(e){return{type:"movePages",pageIndexes:[e],afterPageIndex:e+1}}));Se(e),ue(Object(h.g)(le.toArray().map((function(e){return e+1}))))}),[Se,le]),qe=I.useCallback((function(){ue(le.clear()),re(ae+1)}),[le,ae]),Xe=I.useCallback((function(){ue(le.clear()),re(ae-1)}),[le,ae]),$e=I.useCallback(i()(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={},1===le.size?t.afterPageIndex=le.first():t.beforePageIndex=0,(n=document.createElement("input")).type="file",n.accept="application/pdf",n.onclick=function(e){e.target.value=""},n.onchange=function(e){if(0!==e.target.files.length){var n,a=oe,o=W(e.target.files);try{var i=function(){var e=n.value;return"string"!=typeof e.name||0===e.name.length?{v:void 0}:"application/pdf"!==e.type?(Object(g.o)("The uploaded file must be a PDF."),{v:void 0}):-1!==ie.findIndex((function(t){return"importedDocument"===t.type&&t.label===e.name}))?{v:void 0}:void(a=a.push(U({type:"importDocument",treatImportedDocumentAsOnePage:!0,document:e},t)))};for(o.s();!(n=o.n()).done;){var s=i();if("object"===r()(s))return s.v}}catch(e){o.e(e)}finally{o.f()}ee(a),re(0),ue(le.clear())}},n.click();case 8:case"end":return e.stop()}}),e)}))),[le,R,Se,oe,ie]),Qe=I.useCallback((function(){ue(ie.keySeq().toSet())}),[ie,ue]),Ze=I.useCallback((function(){ue(le.clear())}),[le,ue]),et=I.useCallback((function(e){le.has(e)?ue(le.delete(e)):ue(le.add(e))}),[le,ue]),tt=I.useCallback((function(){a()}),[a]),nt=I.useCallback((function(){pe(!0),s(Object(v.a)(oe.flatten().toArray(),(function(){Me.current&&pe(!1)}),(function(e){throw Me.current&&pe(!1),e})))}),[s,oe]),at=I.useCallback(i()(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return pe(!0),e.prev=1,e.next=4,l.exportPDFWithOperations(oe.flatten().toArray().map(O.q));case 4:t=e.sent,Object(P.d)(t,d),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:return e.prev=11,Me.current&&pe(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])}))),[l,oe,d]),rt=function(e,t,n,a){var r,o=ie.get(e);switch(Object(_.a)(null!=o),o.type){case"page":r=I.createElement(f.b,{key:"page-".concat(o.label),page:o.page,size:t,maxSize:n,rotation:o.rotation});break;case"newPage":var i=Object(f.a)(o.size,o.rotation,t,n),s=i.rotatedWidth,c=i.rotatedHeight;r=I.createElement("div",{key:"newPage-".concat(o.label),className:K.newPage,style:{width:s,height:c}});break;case"importedDocument":var l=Object(f.a)(G,0,t,n),u=l.containerWidth,d=l.containerHeight;r=I.createElement(X,{width:u,height:d,movePreview:a,key:"importedDoc-".concat(o.label),styles:K,formatMessage:y});break;default:r=I.createElement(I.Fragment,null),Object(g.b)(o.type)}return{item:r,label:o.label}},ot=le.size>0&&le.size!==ie.size&&!fe,it=le.size>0&&void 0===le.find((function(e){var t=ie.get(e);return Object(_.a)(null!=t),"page"!==t.type&&"newPage"!==t.type})),st=le.size>0&&void 0===le.find((function(e){var t=ie.get(e);return Object(_.a)(null!=t),"page"!==t.type})),ct=!le.isEmpty()&&le.size!==ie.size&&!fe,lt=!le.isEmpty()&&!le.includes(0),ut=!le.isEmpty()&&!le.includes(ie.size-1),dt=ae<J.size,mt=ae>0,ft=le.size<ie.size&&!fe,pt=!le.isEmpty()&&!fe,gt=I.useRef(null),vt=I.useRef(!1);I.useLayoutEffect((function(){var e=gt.current;if(null!=e){vt.current||(e.focus(),vt.current=!0);var t=function(e){if((null==document.activeElement||"INPUT"!==document.activeElement.tagName)&&!fe){var t=e.key.toLowerCase(),n=e.metaKey||e.ctrlKey,a=n&&!e.shiftKey&&!e.altKey,r=e.altKey&&!n&&!e.shiftKey,o=!n&&!e.shiftKey&&!e.altKey;if(e.altKey&&e.shiftKey&&!n&&"arrowleft"===t&&it)Be();else if(e.altKey&&e.shiftKey&&!n&&"arrowright"===t&&it)Le();else if(r&&"arrowleft"===t&&lt)Ge();else if(r&&"arrowright"===t&&ut)Ye();else if(n&&e.shiftKey&&!e.altKey&&"z"===t&&mt)Xe();else if(a&&"z"===t&&dt)qe();else if(a&&"a"===t&&ft)Qe();else if(a&&"d"===t&&pt)Ze();else if(o&&"n"===t)Ae();else if(o&&"d"===t&&ot)ze();else if(o&&"c"===t&&st)Ke();else if(o&&"l"===t&&it)Be();else if(o&&"r"===t&&it)Le();else if(o&&"m"===t&&ct)Ce(!0);else{if(!o||"i"!==t)return;$e()}e.preventDefault()}};return e.addEventListener("keydown",t),function(){e.removeEventListener("keydown",t)}}}),[st,ct,lt,ut,mt,ot,it,ft,pt,dt,Ae,Ke,$e,Ge,Ye,Xe,ze,Be,Le,Qe,Ze,qe,fe,Ce]);var bt=K.toolbar.toolbarButton,yt=[{type:"add",onPress:Ae,className:bt,disabled:fe,children:y(Z.newPage)},{type:"remove",onPress:ze,className:bt,disabled:!ot,children:y(Z.removePage)},{type:"duplicate",onPress:Ke,className:bt,children:y(Z.duplicatePage),disabled:!st||fe},{type:"rotate-left",onPress:Be,className:bt,children:y(Z.rotatePageLeft),disabled:!it||fe},{type:"rotate-right",onPress:Le,className:bt,children:y(Z.rotatePageRight),disabled:!it||fe},{type:"move",onPress:Re,className:N()(bt,K.moveToolbarButton),children:y(Z.openMoveDialog),disabled:!ct},{type:"move-left",onPress:Ge,className:K.toolbar.toolbarButton,children:y(Z.moveBefore),disabled:!lt||fe},{type:"move-right",onPress:Ye,className:bt,children:y(Z.moveAfter),disabled:!ut||fe},{type:"import-document",onPress:$e,className:bt,children:y(Z.mergeDocument),disabled:fe},{type:"spacer"},{type:"undo",onPress:qe,className:bt,children:y(k.a.undo),disabled:!dt||fe},{type:"redo",onPress:Xe,className:bt,children:y(k.a.redo),disabled:!mt||fe},{type:"select-all",onPress:Qe,className:bt,children:y(Z.selectAll),disabled:!ft},{type:"select-none",onPress:Ze,className:bt,children:y(Z.selectNone),disabled:!pt}],Pt=I.useState(Number.POSITIVE_INFINITY),ht=u()(Pt,2),wt=ht[0],Ot=ht[1],It=I.useMemo((function(){return wt===Number.POSITIVE_INFINITY?[z,[]]:[z.slice(0,wt),z.slice(wt).filter((function(e){return"spacer"!==e.type})).map((function(e,t){return{index:t,item:U(U({},e),{},{dropdownGroup:"documentEditor"})}}))]}),[z,wt]),Et=u()(It,2),Nt=Et[0],kt=Et[1],xt=I.useState(new w.P),Dt=u()(xt,2),jt=Dt[0],Ct=Dt[1],St=I.useCallback((function(e){Ct((function(t){return t.width!==e.width&&Ot(Number.POSITIVE_INFINITY),new w.P({width:e.width,height:e.height})}))}),[Ct,Ot]),Mt=I.useRef(null);I.useLayoutEffect((function(){var e=Mt.current;if(e&&0!==jt.width){var t=e.children;if(t.length!==wt){var n=e.ownerDocument.defaultView.getComputedStyle(e),a=44+(parseInt(n.getPropertyValue("padding-left"))||0)+(parseInt(n.getPropertyValue("padding-right"))||0),r=[].findIndex.call(t,(function(e,t){return"spacer"!==z[t].type&&(a+=e.clientWidth)>jt.width}));Ot(-1===r?Number.POSITIVE_INFINITY:r),e.ownerDocument.defaultView.innerWidth>=p.e?ye(!0):ye(!1)}}}),[jt,wt,Ot,z]);var At,zt=I.useCallback((function(e){"Escape"===e.key&&Ie&&(Ce(!1),e.stopPropagation())}),[Ie,Ce]),Kt=I.useMemo((function(){return null!=Nt.find((function(e){return"move"===e.type}))}),[Nt]),Bt=I.createElement("div",{className:N()(K.moveDialog,(t={},c()(t,K.moveDialogShown,Ie),c()(t,K.moveDialogDetached,!Kt),t)),ref:Pe},I.createElement("form",{onSubmit:Je,className:K.moveDialogForm},I.createElement("span",{className:K.moveDialogFormLabel},y(Z.insertAfterPage)),I.createElement("input",{className:K.moveDialogFormInput,type:"number",min:"0",max:ie.size,value:xe,onChange:Te,ref:he}),I.createElement(b.b,{type:"submit",className:K.moveDialogMoveButton,disabled:!We},y(Z.move))),I.createElement("div",{className:K.moveDialogHint},I.createElement("p",{className:K.moveDialogHintText},y(Z.moveBeginningHint)))),Lt=I.useCallback((function(e,t){var n=Object(h.g)(e);_e(t,n)&&Ve(t,n)}),[Ve,_e]),Rt=Ie&&!isNaN(Fe);if(Rt){var Tt=le.toList().sort().map((function(e){return rt(e,160,160,!0).item})).toArray(),Ft=I.createElement(Q,{pages:Tt,style:"straight",styles:K});Rt&&(At=0===Fe?{previewContent:Ft,pageIndex:0,position:"left"}:{previewContent:Ft,pageIndex:Fe-1,position:"right"},We||(At.disabled=!0))}var Ht=I.useMemo((function(){var e;return{cancel:{element:I.createElement(b.b,null,y(k.a.cancel)),onPress:tt},"selected-pages":{element:I.createElement("div",null,I.createElement("div",{className:K.pagesSelectedIcon},I.createElement(D.a,{src:n(532)})),y(Z.pagesSelected,{arg0:le.size})),className:N()((e={},c()(e,K.pagesSelectedIndicator,!0),c()(e,K.pagesSelectedIndicatorShown,le.size>0),e))},spacer:{element:Y,className:K.spacer},"loading-indicator":{element:q,hide:!fe},"save-as":{element:I.createElement(b.b,null,y(k.a.saveAs)),onPress:at,disabled:fe},save:{element:I.createElement(b.b,{primary:!0},y(k.a.save)),disabled:oe.isEmpty()||fe,onPress:nt}}}),[K,y,tt,at,nt,fe,oe,Z,le]),_t=I.useMemo((function(){return A.map((function(e,t){var n=e.onPress,a=e.className,r=e.type,o=e.node,i=e.id;if("custom"===r)return o?I.createElement(S.a,{className:a,onPress:n?function(e){return n(e,i)}:void 0,key:i||t,node:o}):null;if(r){var s=Ht[r];return s.hide?null:I.cloneElement(s.element,{onClick:function(e){s.onPress&&s.onPress(e)},key:r,disabled:s.disabled,className:N()(s.className,a)})}}))}),[A,Ht]);return I.createElement("div",{className:N()(K.docEditor,"PSPDFKit-DocumentEditor"),onClick:Ue,onKeyDown:zt,tabIndex:"-1",ref:gt},I.createElement("div",{className:N()(K.toolbar.root,K.toolbarRoot,"PSPDFKit-DocumentEditor-Toolbar"),style:{flex:0}},I.createElement("div",{ref:Mt,className:K.toolbarContainer},I.createElement(F,{items:Nt,builtInItems:yt,moveDialog:Bt,CSS_HACK:e.CSS_HACK})),I.createElement(H,{builtInItems:yt,items:kt,CSS_HACK:e.CSS_HACK,frameWindow:d})),I.createElement("div",{className:K.pagesView},I.createElement(C.a,{onResize:St}),!Kt&&Bt,I.createElement("div",{className:N()(K.pagesGrid,c()({},K.pagesGridLargeThumbnails,be))},I.createElement(x.a,{canInsert:function(e,t){return _e(t,Object(h.g)(e))},totalItems:ie.size,width:jt.width,height:jt.height,itemScale:e.scale,renderItemCallback:rt,renderDragPreviewCallback:function(e,t,n,a){var r=Object(h.a)(e).filter((function(e){return e!==t})).sort().push(t).slice(-5).map((function(e){return rt(e,n,a,!0).item})).toArray();return I.createElement(Q,{pages:r,style:"straight",styles:K,previewCount:e.length})},onItemPress:et,selectedItemIndexes:le,cssPrefix:"PSPDFKit-DocumentEditor",moveCursor:null!=At?At:void 0,onItemsMove:Ie?void 0:Lt}))),I.createElement("div",{className:N()(K.bottomBar,"PSPDFKit-DocumentEditor-Footer")},_t))})),Object(y.c)({newPage:{id:"newPage",defaultMessage:"New Page",description:"Add new page"},removePage:{id:"removePage",defaultMessage:"Remove Page",description:"Remove page"},duplicatePage:{id:"duplicatePage",defaultMessage:"Duplicate Page",description:"Duplicate page"},rotatePageLeft:{id:"rotatePageLeft",defaultMessage:"Rotate Page Left",description:"Rotate Page Left"},rotatePageRight:{id:"rotatePageRight",defaultMessage:"Rotate Page Right",description:"Rotate Page Right"},mergeDocument:{id:"mergeDocument",defaultMessage:"Merge Document",description:"Merge Document"},selectAll:{id:"selectAll",defaultMessage:"Select All",description:"Select All Pages"},selectNone:{id:"selectNone",defaultMessage:"Select None",description:"Deselect All Pages"},openMoveDialog:{id:"openMoveDialog",defaultMessage:"Move…",description:"Open dialog for moving pages to specific location in the document"},move:{id:"move",defaultMessage:"Move",description:"Move pages to specific location in the document"},moveBefore:{id:"moveBefore",defaultMessage:"Move Before",description:"Move page before previous one"},moveAfter:{id:"moveAfter",defaultMessage:"Move After",description:"Move page after next one"},documentMergedHere:{id:"documentMergedHere",defaultMessage:"Document will be merged here",description:"Placeholder for the imported document"},pagesSelected:{id:"pagesSelected",defaultMessage:"{arg0, plural,\n      =0 {{arg0} Pages}\n      one {{arg0} Page}\n      two {{arg0} Pages}\n      other {{arg0} Pages}\n    }",description:"Number of pages selected."},insertAfterPage:{id:"insertAfterPage",defaultMessage:"Insert after page",description:"Move selected pages after designated page index."},moveBeginningHint:{id:"docEditorMoveBeginningHint",defaultMessage:"Type “0” to move selected pages to the beginning of the document.",description:"Instructions for how to move pages to the beginning of the document when using the Move button in the Document Editor."}}))}}]);