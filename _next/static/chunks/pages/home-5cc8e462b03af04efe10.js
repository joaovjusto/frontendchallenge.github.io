_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"2W6z":function(e,a,t){"use strict";var n=function(){};e.exports=n},"5XSU":function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),i=t.n(n),r=t("kluC");function l(){return(l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function o(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}var s=t("TSYQ"),c=t.n(s),d=(t("K9S6"),t("17x9")),u=t.n(d),m={type:u.a.string,tooltip:u.a.bool,as:u.a.elementType},f=i.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"div":t,r=e.className,s=e.type,d=void 0===s?"valid":s,u=e.tooltip,m=void 0!==u&&u,f=o(e,["as","className","type","tooltip"]);return i.a.createElement(n,l({},f,{ref:a,className:c()(r,d+"-"+(m?"tooltip":"feedback"))}))}));f.displayName="Feedback",f.propTypes=m;var p=f,v=i.a.createContext({controlId:void 0}),b=i.a.createContext({});b.Consumer,b.Provider;function x(e,a){var t=Object(n.useContext)(b);return e||t[a]||a}var N=i.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,s=e.bsCustomPrefix,d=e.className,u=e.type,m=void 0===u?"checkbox":u,f=e.isValid,p=void 0!==f&&f,b=e.isInvalid,N=void 0!==b&&b,h=e.isStatic,y=e.as,g=void 0===y?"input":y,_=o(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),C=Object(n.useContext)(v),w=C.controlId,E=C.custom?[s,"custom-control-input"]:[r,"form-check-input"];return r=x(E[0],E[1]),i.a.createElement(g,l({},_,{ref:a,type:m,id:t||w,className:c()(d,r,p&&"is-valid",N&&"is-invalid",h&&"position-static")}))}));N.displayName="FormCheckInput";var h=N,y=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bsCustomPrefix,s=e.className,d=e.htmlFor,u=o(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),m=Object(n.useContext)(v),f=m.controlId,p=m.custom?[r,"custom-control-label"]:[t,"form-check-label"];return t=x(p[0],p[1]),i.a.createElement("label",l({},u,{ref:a,htmlFor:d||f,className:c()(s,t)}))}));y.displayName="FormCheckLabel";var g=y,_=i.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,s=e.bsCustomPrefix,d=e.inline,u=void 0!==d&&d,m=e.disabled,f=void 0!==m&&m,b=e.isValid,N=void 0!==b&&b,y=e.isInvalid,_=void 0!==y&&y,C=e.feedbackTooltip,w=void 0!==C&&C,E=e.feedback,P=e.className,I=e.style,F=e.title,k=void 0===F?"":F,O=e.type,j=void 0===O?"checkbox":O,L=e.label,R=e.children,A=e.custom,H=e.as,S=void 0===H?"input":H,T=o(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),q="switch"===j||A,z=q?[s,"custom-control"]:[r,"form-check"];r=x(z[0],z[1]);var M=Object(n.useContext)(v).controlId,V=Object(n.useMemo)((function(){return{controlId:t||M,custom:q}}),[M,q,t]),B=q||null!=L&&!1!==L&&!R,U=i.a.createElement(h,l({},T,{type:"switch"===j?"checkbox":j,ref:a,isValid:N,isInvalid:_,isStatic:!B,disabled:f,as:S}));return i.a.createElement(v.Provider,{value:V},i.a.createElement("div",{style:I,className:c()(P,r,q&&"custom-"+j,u&&r+"-inline")},R||i.a.createElement(i.a.Fragment,null,U,B&&i.a.createElement(g,{title:k},L),(N||_)&&i.a.createElement(p,{type:N?"valid":"invalid",tooltip:w},E))))}));_.displayName="FormCheck",_.Input=h,_.Label=g;var C=_,w=i.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,s=e.bsCustomPrefix,d=e.className,u=e.isValid,m=e.isInvalid,f=e.lang,p=e.as,b=void 0===p?"input":p,N=o(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),h=Object(n.useContext)(v),y=h.controlId,g=h.custom?[s,"custom-file-input"]:[r,"form-control-file"];return r=x(g[0],g[1]),i.a.createElement(b,l({},N,{ref:a,id:t||y,type:"file",lang:f,className:c()(d,r,u&&"is-valid",m&&"is-invalid")}))}));w.displayName="FormFileInput";var E=w,P=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bsCustomPrefix,s=e.className,d=e.htmlFor,u=o(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),m=Object(n.useContext)(v),f=m.controlId,p=m.custom?[r,"custom-file-label"]:[t,"form-file-label"];return t=x(p[0],p[1]),i.a.createElement("label",l({},u,{ref:a,htmlFor:d||f,className:c()(s,t),"data-browse":u["data-browse"]}))}));P.displayName="FormFileLabel";var I=P,F=i.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,s=e.bsCustomPrefix,d=e.disabled,u=void 0!==d&&d,m=e.isValid,f=void 0!==m&&m,b=e.isInvalid,N=void 0!==b&&b,h=e.feedbackTooltip,y=void 0!==h&&h,g=e.feedback,_=e.className,C=e.style,w=e.label,P=e.children,F=e.custom,k=e.lang,O=e["data-browse"],j=e.as,L=void 0===j?"div":j,R=e.inputAs,A=void 0===R?"input":R,H=o(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),S=F?[s,"custom"]:[r,"form-file"];r=x(S[0],S[1]);var T=Object(n.useContext)(v).controlId,q=Object(n.useMemo)((function(){return{controlId:t||T,custom:F}}),[T,F,t]),z=null!=w&&!1!==w&&!P,M=i.a.createElement(E,l({},H,{ref:a,isValid:f,isInvalid:N,disabled:u,as:A,lang:k}));return i.a.createElement(v.Provider,{value:q},i.a.createElement(L,{style:C,className:c()(_,r,F&&"custom-file")},P||i.a.createElement(i.a.Fragment,null,F?i.a.createElement(i.a.Fragment,null,M,z&&i.a.createElement(I,{"data-browse":O},w)):i.a.createElement(i.a.Fragment,null,z&&i.a.createElement(I,null,w),M),(f||N)&&i.a.createElement(p,{type:f?"valid":"invalid",tooltip:y},g))))}));F.displayName="FormFile",F.Input=E,F.Label=I;var k=F,O=(t("2W6z"),i.a.forwardRef((function(e,a){var t,r,s=e.bsPrefix,d=e.bsCustomPrefix,u=e.type,m=e.size,f=e.htmlSize,p=e.id,b=e.className,N=e.isValid,h=void 0!==N&&N,y=e.isInvalid,g=void 0!==y&&y,_=e.plaintext,C=e.readOnly,w=e.custom,E=e.as,P=void 0===E?"input":E,I=o(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),F=Object(n.useContext)(v).controlId,k=w?[d,"custom"]:[s,"form-control"];if(s=x(k[0],k[1]),_)(r={})[s+"-plaintext"]=!0,t=r;else if("file"===u){var O;(O={})[s+"-file"]=!0,t=O}else if("range"===u){var j;(j={})[s+"-range"]=!0,t=j}else if("select"===P&&w){var L;(L={})[s+"-select"]=!0,L[s+"-select-"+m]=m,t=L}else{var R;(R={})[s]=!0,R[s+"-"+m]=m,t=R}return i.a.createElement(P,l({},I,{type:u,size:f,ref:a,readOnly:C,id:p||F,className:c()(b,t,h&&"is-valid",g&&"is-invalid")}))})));O.displayName="FormControl";var j=Object.assign(O,{Feedback:p}),L=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,s=e.children,d=e.controlId,u=e.as,m=void 0===u?"div":u,f=o(e,["bsPrefix","className","children","controlId","as"]);t=x(t,"form-group");var p=Object(n.useMemo)((function(){return{controlId:d}}),[d]);return i.a.createElement(v.Provider,{value:p},i.a.createElement(m,l({},f,{ref:a,className:c()(r,t)}),s))}));L.displayName="FormGroup";var R=L,A=["xl","lg","md","sm","xs"],H=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,r=e.as,s=void 0===r?"div":r,d=o(e,["bsPrefix","className","as"]),u=x(t,"col"),m=[],f=[];return A.forEach((function(e){var a,t,n,i=d[e];if(delete d[e],"object"===typeof i&&null!=i){var r=i.span;a=void 0===r||r,t=i.offset,n=i.order}else a=i;var l="xs"!==e?"-"+e:"";a&&m.push(!0===a?""+u+l:""+u+l+"-"+a),null!=n&&f.push("order"+l+"-"+n),null!=t&&f.push("offset"+l+"-"+t)})),m.length||m.push(u),i.a.createElement(s,l({},d,{ref:a,className:c.a.apply(void 0,[n].concat(m,f))}))}));H.displayName="Col";var S=H,T=i.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"label":t,s=e.bsPrefix,d=e.column,u=e.srOnly,m=e.className,f=e.htmlFor,p=o(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),b=Object(n.useContext)(v).controlId;s=x(s,"form-label");var N="col-form-label";"string"===typeof d&&(N=N+" "+N+"-"+d);var h=c()(m,s,u&&"sr-only",d&&N);return f=f||b,d?i.a.createElement(S,l({as:"label",className:h,htmlFor:f},p)):i.a.createElement(r,l({ref:a,className:h,htmlFor:f},p))}));T.displayName="FormLabel",T.defaultProps={column:!1,srOnly:!1};var q=T,z=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,r=e.as,s=void 0===r?"small":r,d=e.muted,u=o(e,["bsPrefix","className","as","muted"]);return t=x(t,"form-text"),i.a.createElement(s,l({},u,{ref:a,className:c()(n,t,d&&"text-muted")}))}));z.displayName="FormText";var M=z,V=i.a.forwardRef((function(e,a){return i.a.createElement(C,l({},e,{ref:a,type:"switch"}))}));V.displayName="Switch",V.Input=C.Input,V.Label=C.Label;var B=V,U=/-(.)/g;var G=function(e){return e[0].toUpperCase()+(a=e,a.replace(U,(function(e,a){return a.toUpperCase()}))).slice(1);var a};var W=function(e,a){var t=void 0===a?{}:a,n=t.displayName,r=void 0===n?G(e):n,s=t.Component,d=t.defaultProps,u=i.a.forwardRef((function(a,t){var n=a.className,r=a.bsPrefix,d=a.as,u=void 0===d?s||"div":d,m=o(a,["className","bsPrefix","as"]),f=x(r,e);return i.a.createElement(u,l({ref:t,className:c()(n,f)},m))}));return u.defaultProps=d,u.displayName=r,u}("form-row"),D=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.inline,r=e.className,s=e.validated,d=e.as,u=void 0===d?"form":d,m=o(e,["bsPrefix","inline","className","validated","as"]);return t=x(t,"form"),i.a.createElement(u,l({},m,{ref:a,className:c()(r,s&&"was-validated",n&&t+"-inline")}))}));D.displayName="Form",D.defaultProps={inline:!1},D.Row=W,D.Group=R,D.Control=j,D.Check=C,D.File=k,D.Switch=B,D.Label=q,D.Text=M;var K=D,X=t("/MKj"),Z=t("liLN"),Q=function(e){return{type:Z.a,payload:e}},J=t("vOnD"),Y=i.a.createElement,$=J.b.div.withConfig({displayName:"Button__Container",componentId:"sc-14gvb9h-0"})(["cursor:",";background-image:linear-gradient( to right,",","," );"],(function(e){return e.disabled?"not-allowed":"pointer"}),(function(e){return e.theme.colors.primaryGradient}),(function(e){return e.theme.colors.secondaryGradient})),ee=function(e){return Y($,e)},ae=t("AbEZ"),te=t.n(ae),ne=i.a.createElement,ie={setInfo:Q},re=Object(X.b)((function(e){return{userInfo:e}}),ie)((function(e){var a=e.userInfo,t=Object(n.useState)(""),r=t[0],l=t[1],o=Object(n.useState)(""),s=o[0],c=o[1],d=Object(n.useState)(!0),u=d[0],m=d[1],f=function(){Q(r)};return Object(n.useEffect)((function(){m(""===r||/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(r).toLowerCase()))}),[r]),ne(i.a.Fragment,null,ne("div",{className:te.a.container},ne(K,{onSubmit:function(){return f}},ne("div",{className:te.a.minHeight},ne("div",{className:"d-flex flex-column"},ne("h1",null,"Ol\xe1, seja"),ne("h1",null,"bem vindo!")),ne("h3",{className:"mt-3 mb-5"},"Para acessar a plataforma, fa\xe7a seu login."," ",a.auth.name),ne(K.Group,{controlId:"formBasicEmail",className:"position-relative"},ne(K.Label,null,"E-MAIL"),ne("input",{className:u?"":te.a.invalid,type:"email",value:r,onChange:function(e){return l(e.target.value)},placeholder:"user.name@mail.com",required:!0}),u?"":ne("small",{className:te.a.invalidInput},"Digite um e-mail v\xe1lido;")),ne(K.Group,{controlId:"formBasicPassword"},ne(K.Label,{className:"mt-4"},"SENHA"),ne("input",{className:"invalid",value:s,onChange:function(e){return c(e.target.value)},type:"password",required:!0,placeholder:"*******"})),ne(ee,{className:"mt-4 ".concat(te.a.button),onClick:function(){return f()},type:"submit"},"ENTRAR"),ne("div",{className:"mt-4 d-none d-sm-block text-center"},ne("span",null,"Esqueceu seu login ou senha?"),ne("span",{className:"d-block"},"Clique ",ne("u",null,"aqui"))),ne("div",{className:"d-block d-sm-none mb-3"}))),ne("div",{className:"text-center mt-4 d-block d-sm-none"},ne("span",{className:"d-block"},"Esqueceu seu login ou senha?"),ne("span",null,"Clique ",ne("u",null,"aqui")))))})),le=(n.createElement,n.createElement,n.createElement,t("e0UW"),n.createElement,i.a.createElement,Object(J.b)(ee).withConfig({displayName:"LocaleButton__Container",componentId:"m8jrm9-0"})(["color:",";"],(function(e){return e.isActive?"#2c3e50":"inherit"})),t("EFCC")),oe=t.n(le),se=n.createElement,ce=oe.a,de=function(e){var a=e.children;return se(n.Fragment,null,se("div",{className:ce.imageContainer},a))},ue=t("bh4g"),me=i.a.createElement,fe=Object(r.b)("common")((function(){return me(ue.b,null,me("div",{className:"container-fluid"},me("div",{className:"d-none d-sm-block"},me("div",{className:"row"},me("div",{className:"col-6 p-0"},me(de,null)),me("div",{className:"col-6"},me(re,null)))),me("div",{className:"d-block d-sm-none"},me("div",{className:"row"},me("div",{className:"col-12 p-0"},me(de,null,me(re,null)))))))}));a.default=fe},"70uq":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return t("5XSU")}])},AbEZ:function(e,a,t){e.exports={container:"LoginForm_container__26Bd1",minHeight:"LoginForm_minHeight__3Bqhx",invalid:"LoginForm_invalid__36ij5",invalidInput:"LoginForm_invalidInput__12aeK",button:"LoginForm_button__1n71z"}},EFCC:function(e,a,t){e.exports={imageContainer:"LeftHalfImageProd_imageContainer__2yTsH"}},K9S6:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];function n(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=null;return a.forEach((function(e){if(null==i){var a=e.apply(void 0,t);null!=a&&(i=a)}})),i}return(0,r.default)(n)};var n,i=t("pvIh"),r=(n=i)&&n.__esModule?n:{default:n};e.exports=a.default},TSYQ:function(e,a,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function i(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var l=i.apply(null,n);l&&e.push(l)}else if("object"===r)for(var o in n)t.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(a,[]))||(e.exports=n)}()},bh4g:function(e,a,t){"use strict";t.d(a,"b",(function(){return i})),t.d(a,"a",(function(){return r})),t.d(a,"c",(function(){return l}));var n=t("vOnD"),i=n.b.div.withConfig({displayName:"Home__Container",componentId:"f38x39-0"})(["background-color:#faf5ff;min-height:100vh;"]),r=(n.b.div.withConfig({displayName:"Home__Top",componentId:"f38x39-1"})(["margin:100px;"]),n.b.div.withConfig({displayName:"Home__Middle",componentId:"f38x39-2"})(["text-align:center;display:flex;flex:1 1 100%;width:100%;justify-content:flex-start;"]),n.b.div.withConfig({displayName:"Home__MiddleLeft",componentId:"f38x39-3"})(["display:flex;flex:1 1 1%;"]),n.b.div.withConfig({displayName:"Home__MiddleLeftButtons",componentId:"f38x39-4"})(["background:#f9da2e;border-radius:8px;font-family:Arial;font-weight:700;font-size:25px;color:#4b6c8d;letter-spacing:0;width:55px;height:236px;margin-left:15px;padding:10px 3px;display:flex;flex-direction:column;justify-content:space-around;color:#4b6c8d;.button{cursor:pointer;}.active{color:#2c3e50;}"]),n.b.div.withConfig({displayName:"Home__MiddleRight",componentId:"f38x39-5"})(["display:flex;flex-direction:column;flex:1 1 100%;"]),n.b.div.withConfig({displayName:"Home__Apod",componentId:"f38x39-6"})(["display:flex;flex:1 1 100%;flex-direction:column;justify-content:space-around;align-items:center;"]),n.b.div.withConfig({displayName:"Home__ApodButton",componentId:"f38x39-7"})(["background:#f9da2e;border-radius:5px;padding:5px 10px;font-family:Arial;font-weight:700;font-size:25px;color:",";letter-spacing:0;cursor:pointer;"],(function(e){return e.theme.colors.primary}))),l=n.b.div.withConfig({displayName:"Home__TopText",componentId:"f38x39-8"})(["font-size:110px;font-family:Arial,Helvetica,sans-serif;color:#ffffff;margin-bottom:10px;"])},e0UW:function(e,a,t){e.exports={title:"Heading_title__2tSWQ",title__back:"Heading_title__back__2U8p_",title__front:"Heading_title__front__1sMzD","title--contact":"Heading_title--contact__1_Ndm"}},pvIh:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){function a(a,t,n,i,r,l){var o=i||"<<anonymous>>",s=l||n;if(null==t[n])return a?new Error("Required "+r+" `"+s+"` was not specified in `"+o+"`."):null;for(var c=arguments.length,d=Array(c>6?c-6:0),u=6;u<c;u++)d[u-6]=arguments[u];return e.apply(void 0,[t,n,o,r,s].concat(d))}var t=a.bind(null,!1);return t.isRequired=a.bind(null,!0),t},e.exports=a.default}},[["70uq",1,2,0,3,4]]]);