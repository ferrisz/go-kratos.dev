(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{109:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(r),m=n,O=b["".concat(i,".").concat(m)]||b[m]||s[m]||o;return r?a.a.createElement(O,c(c({ref:t},u),{},{components:r})):a.a.createElement(O,c({ref:t},u))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(109)),i={id:"intro",title:"\u6982\u5ff5",slug:"/"},c={unversionedId:"intro/intro",id:"intro/intro",isDocsHomePage:!1,title:"\u6982\u5ff5",description:"Kratos \u4e00\u5957\u8f7b\u91cf\u7ea7 Go \u5fae\u670d\u52a1\u6846\u67b6\uff0c\u5305\u542b\u5927\u91cf\u5fae\u670d\u52a1\u76f8\u5173\u6846\u67b6\u53ca\u5de5\u5177\u3002",source:"@site/docs/intro/intro.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/intro/intro.md",version:"current",sidebar:"docs",next:{title:"\u5de5\u7a0b\u9aa8\u67b6",permalink:"/docs/intro/layout"}},l=[{value:"Goals",id:"goals",children:[]},{value:"Principles",id:"principles",children:[]},{value:"Features",id:"features",children:[]}],u={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Kratos \u4e00\u5957\u8f7b\u91cf\u7ea7 Go \u5fae\u670d\u52a1\u6846\u67b6\uff0c\u5305\u542b\u5927\u91cf\u5fae\u670d\u52a1\u76f8\u5173\u6846\u67b6\u53ca\u5de5\u5177\u3002  "),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u540d\u5b57\u6765\u6e90\u4e8e:\u300a\u6218\u795e\u300b\u6e38\u620f\u4ee5\u5e0c\u814a\u795e\u8bdd\u4e3a\u80cc\u666f\uff0c\u8bb2\u8ff0\u7531\u51e1\u4eba\u6210\u4e3a\u6218\u795e\u7684\u594e\u6258\u65af\uff08Kratos\uff09\u6210\u4e3a\u6218\u795e\u5e76\u5c55\u5f00\u5f11\u795e\u5c60\u6740\u7684\u5192\u9669\u5386\u7a0b\u3002")),Object(o.b)("h2",{id:"goals"},"Goals"),Object(o.b)("p",null,"\u6211\u4eec\u81f4\u529b\u4e8e\u63d0\u4f9b\u5b8c\u6574\u7684\u5fae\u670d\u52a1\u7814\u53d1\u4f53\u9a8c\uff0c\u6574\u5408\u76f8\u5173\u6846\u67b6\u53ca\u5de5\u5177\u540e\uff0c\u5fae\u670d\u52a1\u6cbb\u7406\u76f8\u5173\u90e8\u5206\u53ef\u5bf9\u6574\u4f53\u4e1a\u52a1\u5f00\u53d1\u5468\u671f\u65e0\u611f\uff0c\u4ece\u800c\u66f4\u52a0\u805a\u7126\u4e8e\u4e1a\u52a1\u4ea4\u4ed8\u3002\u5bf9\u6bcf\u4f4d\u5f00\u53d1\u8005\u800c\u8a00\uff0c\u6574\u5957Kratos\u6846\u67b6\u4e5f\u662f\u4e0d\u9519\u7684\u5b66\u4e60\u4ed3\u5e93\uff0c\u53ef\u4ee5\u4e86\u89e3\u548c\u53c2\u8003\u5230\u5fae\u670d\u52a1\u65b9\u9762\u7684\u6280\u672f\u79ef\u7d2f\u548c\u7ecf\u9a8c\u3002"),Object(o.b)("h2",{id:"principles"},"Principles"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u7b80\u5355\uff1a\u4e0d\u8fc7\u5ea6\u8bbe\u8ba1\uff0c\u4ee3\u7801\u5e73\u5b9e\u7b80\u5355\uff1b"),Object(o.b)("li",{parentName:"ul"},"\u901a\u7528\uff1a\u901a\u7528\u4e1a\u52a1\u5f00\u53d1\u6240\u9700\u8981\u7684\u57fa\u7840\u5e93\u7684\u529f\u80fd\uff1b"),Object(o.b)("li",{parentName:"ul"},"\u9ad8\u6548\uff1a\u63d0\u9ad8\u4e1a\u52a1\u8fed\u4ee3\u7684\u6548\u7387\uff1b"),Object(o.b)("li",{parentName:"ul"},"\u7a33\u5b9a\uff1a\u57fa\u7840\u5e93\u53ef\u6d4b\u8bd5\u6027\u9ad8\uff0c\u8986\u76d6\u7387\u9ad8\uff0c\u6709\u7ebf\u4e0a\u5b9e\u8df5\u5b89\u5168\u53ef\u9760\uff1b"),Object(o.b)("li",{parentName:"ul"},"\u5065\u58ee\uff1a\u901a\u8fc7\u826f\u597d\u7684\u57fa\u7840\u5e93\u8bbe\u8ba1\uff0c\u51cf\u5c11\u9519\u7528\uff1b"),Object(o.b)("li",{parentName:"ul"},"\u9ad8\u6027\u80fd\uff1a\u6027\u80fd\u9ad8\uff0c\u4f46\u4e0d\u7279\u5b9a\u4e3a\u4e86\u6027\u80fd\u505ahack\u4f18\u5316\uff0c\u5f15\u5165unsafe\uff1b"),Object(o.b)("li",{parentName:"ul"},"\u6269\u5c55\u6027\uff1a\u826f\u597d\u7684\u63a5\u53e3\u8bbe\u8ba1\uff0c\u6765\u6269\u5c55\u5b9e\u73b0\uff0c\u6216\u8005\u901a\u8fc7\u65b0\u589e\u57fa\u7840\u5e93\u76ee\u5f55\u6765\u6269\u5c55\u529f\u80fd\uff1b"),Object(o.b)("li",{parentName:"ul"},"\u5bb9\u9519\u6027\uff1a\u4e3a\u5931\u8d25\u8bbe\u8ba1\uff0c\u5927\u91cf\u5f15\u5165\u5bf9SRE\u7684\u7406\u89e3\uff0c\u9c81\u68d2\u6027\u9ad8\uff1b"),Object(o.b)("li",{parentName:"ul"},"\u5de5\u5177\u94fe\uff1a\u5305\u542b\u5927\u91cf\u5de5\u5177\u94fe\uff0c\u6bd4\u5982cache\u4ee3\u7801\u751f\u6210\uff0clint\u5de5\u5177\u7b49\u7b49\uff1b")),Object(o.b)("h2",{id:"features"},"Features"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"APIs\uff1a\u534f\u8bae\u901a\u4fe1\u4ee5 HTTP/gRPC \u4e3a\u57fa\u7840\uff0c\u901a\u8fc7 Protobuf \u8fdb\u884c\u5b9a\u4e49\uff1b"),Object(o.b)("li",{parentName:"ul"},"Errors\uff1a\u901a\u8fc7 Protobuf \u7684 Enum \u4f5c\u4e3a\u9519\u8bef\u7801\u5b9a\u4e49\uff0c\u4ee5\u53ca\u5de5\u5177\u751f\u6210\u5224\u5b9a\u63a5\u53e3\uff1b"),Object(o.b)("li",{parentName:"ul"},"Metadata\uff1a\u5728\u534f\u8bae\u901a\u4fe1 HTTP/gRPC \u4e2d\uff0c\u901a\u8fc7 Middleware \u89c4\u8303\u5316\u670d\u52a1\u5143\u4fe1\u606f\u4f20\u9012\uff1b"),Object(o.b)("li",{parentName:"ul"},"Config\uff1a\u901a\u8fc7KeyValue\u65b9\u5f0f\u5b9e\u73b0\uff0c\u5bf9\u591a\u79cd\u914d\u7f6e\u6e90\u8fdb\u884c\u94fa\u5e73\uff0c\u4ee5Atomic\u65b9\u5f0f\u652f\u6301\u52a8\u6001\u914d\u7f6e\uff1b"),Object(o.b)("li",{parentName:"ul"},"Logger\uff1a\u6807\u51c6\u65e5\u5fd7\u63a5\u53e3\uff0c\u53ef\u65b9\u4fbf\u96c6\u6210\u4e09\u65b9 log \u5e93\uff0c\u5e76\u53ef\u901a\u8fc7 fluentd \u6536\u96c6\u65e5\u5fd7\uff1b"),Object(o.b)("li",{parentName:"ul"},"Metrics\uff1a\u7edf\u4e00\u6307\u6807\u63a5\u53e3\uff0c\u53ef\u4ee5\u5b9e\u73b0\u5404\u79cd\u6307\u6807\u7cfb\u7edf\uff0c\u9ed8\u8ba4\u96c6\u6210 Prometheus\uff1b"),Object(o.b)("li",{parentName:"ul"},"Tracing\uff1a\u9075\u5faa OpenTracing \u89c4\u8303\u5b9a\u4e49\uff0c\u4ee5\u5b9e\u73b0\u5fae\u670d\u52a1\u94fe\u8def\u8ffd\u8e2a\uff1b"),Object(o.b)("li",{parentName:"ul"},"Encoding\uff1a\u652f\u6301Accept\u548cContent-Type\u8fdb\u884c\u81ea\u52a8\u9009\u62e9\u5185\u5bb9\u7f16\u7801\uff1b"),Object(o.b)("li",{parentName:"ul"},"Transport\uff1a\u901a\u7528\u7684 HTTP/gRPC \u4f20\u8f93\u5c42\uff0c\u5b9e\u73b0\u7edf\u4e00\u7684 Middleware \u63d2\u4ef6\u652f\u6301\uff1b"),Object(o.b)("li",{parentName:"ul"},"Server\uff1a\u8fdb\u884c\u57fa\u7840\u7684 Server \u5c42\u5c01\u88c5\uff0c\u7edf\u4e00\u4ee5 Options \u65b9\u5f0f\u914d\u7f6e\u4f7f\u7528\uff1b")))}p.isMDXComponent=!0}}]);