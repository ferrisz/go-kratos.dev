(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7077],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=n.createContext({}),c=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(d.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,g=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return t?n.createElement(g,a(a({ref:r},s),{},{components:t})):n.createElement(g,a({ref:r},s))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2426:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return d},default:function(){return s}});var n=t(2122),i=t(9756),o=(t(7294),t(3905)),a={id:"middleware",title:"Middleware"},l={unversionedId:"component/middleware",id:"component/middleware",isDocsHomePage:!1,title:"Middleware",description:"Kratos has a series of built-in middleware to deal with common purpose such as logging or metrics. You could also implement Middleware interface to develop your custom middleware to process common business such as the user authentication etc.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/component/middleware.md",sourceDirName:"component",slug:"/component/middleware",permalink:"/en/docs/component/middleware",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/component/middleware.md",version:"current",frontMatter:{id:"middleware",title:"Middleware"},sidebar:"docs",previous:{title:"Registry",permalink:"/en/docs/component/registry"},next:{title:"Transport",permalink:"/en/docs/component/transport"}},d=[{value:"Built-in Middleware",id:"built-in-middleware",children:[{value:"logging",id:"logging",children:[]},{value:"metrics",id:"metrics",children:[]},{value:"recovery",id:"recovery",children:[]},{value:"status",id:"status",children:[]},{value:"tracing",id:"tracing",children:[]},{value:"validate",id:"validate",children:[]}]},{value:"Usage",id:"usage",children:[]},{value:"Custom Middleware",id:"custom-middleware",children:[]}],c={toc:d};function s(e){var r=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kratos has a series of built-in middleware to deal with common purpose such as logging or metrics. You could also implement Middleware interface to develop your custom middleware to process common business such as the user authentication etc."),(0,o.kt)("h2",{id:"built-in-middleware"},"Built-in Middleware"),(0,o.kt)("p",null,"Their codes are located in ",(0,o.kt)("inlineCode",{parentName:"p"},"middleware")," directory."),(0,o.kt)("h3",{id:"logging"},"logging"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"middleware/logging"),", this middleware is for logging the request."),(0,o.kt)("h3",{id:"metrics"},"metrics"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"middleware/metrics"),", this middleware is for enabling metric."),(0,o.kt)("h3",{id:"recovery"},"recovery"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"middleware/recovery"),"\uff0c, this middleware is for panic recovery."),(0,o.kt)("h3",{id:"status"},"status"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"middleware/status"),", this middleware is for transformation of gRPC error."),(0,o.kt)("h3",{id:"tracing"},"tracing"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"middleware/tracing"),", this middleware is for enabling trace."),(0,o.kt)("h3",{id:"validate"},"validate"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"middleware/validate"),", this middleware is for parameter validation."),(0,o.kt)("h3",{id:""}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Register it with ",(0,o.kt)("inlineCode",{parentName:"p"},"ServerOption")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"NewGRPCServer")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"NewHTTPServer"),"."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// http\n// define opts\nvar opts = []http.ServerOption{\n    http.Middleware(\n        middleware.Chain(\n            recovery.Recovery(), // put middlewares into Chain\n            tracing.Server(),\n            logging.Server(),\n        ),\n    ),\n}\n// create server\nhttp.NewServer(opts...)\n\n\n\n//grpc\nvar opts = []grpc.ServerOption{\n        grpc.Middleware(\n            middleware.Chain(\n                recovery.Recovery(),  // put middlewares into Chain\n                status.Server(),\n                tracing.Server(),\n                logging.Server(),\n            ),\n        ),\n    }\n// create server\ngrpc.NewServer(opts...)\n\n")),(0,o.kt)("h2",{id:"custom-middleware"},"Custom Middleware"),(0,o.kt)("p",null,"Implement ",(0,o.kt)("inlineCode",{parentName:"p"},"Middleware")," interface."),(0,o.kt)("p",null,"(TBD)"))}s.isMDXComponent=!0}}]);