(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[127],{6884:function(e,r,n){"use strict";n.d(r,{X:function(){return t}});var t=(0,n(9867).I)({d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",displayName:"ChevronRightIcon"})},8482:function(e,r,n){"use strict";n.d(r,{E:function(){return f}});var t=n(63),a=n(3852),i=n(5505),s=n(3808),l=n(7294),c=n(8327);function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function u(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}var d=l.forwardRef(((e,r)=>{var{htmlWidth:n,htmlHeight:t,alt:a}=e,i=u(e,["htmlWidth","htmlHeight","alt"]);return l.createElement("img",o({width:n,height:t,ref:r,alt:a},i))})),f=(0,t.G)(((e,r)=>{var{fallbackSrc:n,fallback:t,src:s,srcSet:f,align:h,fit:m,loading:g,ignoreFallback:x,crossOrigin:p}=e,j=u(e,["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"]),v=null!=g||x||void 0===n&&void 0===t,k=function(e){var{loading:r,src:n,srcSet:t,onLoad:a,onError:i,crossOrigin:s,sizes:o,ignoreFallback:u}=e,[d,f]=(0,l.useState)("pending");(0,l.useEffect)((()=>{f(n?"loading":"pending")}),[n]);var h=(0,l.useRef)(),m=(0,l.useCallback)((()=>{if(n){g();var e=new Image;e.src=n,s&&(e.crossOrigin=s),t&&(e.srcset=t),o&&(e.sizes=o),r&&(e.loading=r),e.onload=e=>{g(),f("loaded"),null==a||a(e)},e.onerror=e=>{g(),f("failed"),null==i||i(e)},h.current=e}}),[n,s,t,o,a,i,r]),g=()=>{h.current&&(h.current.onload=null,h.current.onerror=null,h.current=null)};return(0,c.G)((()=>{if(!u)return"loading"===d&&m(),()=>{g()}}),[d,m,u]),u?"loaded":d}(o({},e,{ignoreFallback:v})),y=o({ref:r,objectFit:m,objectPosition:h},v?j:(0,i.CE)(j,["onError","onLoad"]));return"loaded"!==k?t||l.createElement(a.m$.img,o({as:d,className:"chakra-image__placeholder",src:n},y)):l.createElement(a.m$.img,o({as:d,src:s,srcSet:f,crossOrigin:p,loading:g,className:"chakra-image"},y))}));s.Ts&&(f.displayName="Image")},8125:function(e,r,n){"use strict";n.d(r,{C:function(){return d}});var t=n(63),a=n(2326),i=n(5284),s=n(3852),l=n(4461),c=n(3808),o=n(7294);function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var d=(0,t.G)(((e,r)=>{var n=(0,a.m)("Badge",e),t=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}((0,i.Lr)(e),["className"]);return o.createElement(s.m$.span,u({ref:r,className:(0,l.cx)("chakra-badge",e.className)},t,{__css:u({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},n)}))}));c.Ts&&(d.displayName="Badge")},3762:function(e,r,n){"use strict";n.d(r,{aV:function(){return m},HC:function(){return p}});var t=n(58),a=n(63),i=n(2326),s=n(5284),l=n(9676),c=n(3852),o=n(3808),u=n(4255),d=n(7294);function f(){return(f=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function h(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}var m=(0,a.G)(((e,r)=>{var n=(0,i.j)("List",e),t=(0,s.Lr)(e),{children:a,styleType:o="none",stylePosition:m,spacing:g}=t,x=h(t,["children","styleType","stylePosition","spacing"]),p=(0,u.W)(a),j=g?{"& > *:not(style) ~ *:not(style)":{mt:g}}:{};return d.createElement(l.Fo,{value:n},d.createElement(c.m$.ul,f({ref:r,listStyleType:o,listStylePosition:m,role:"list",__css:f({},n.container,j)},x),p))}));o.Ts&&(m.displayName="List");var g=(0,a.G)(((e,r)=>{var n=h(e,["as"]);return d.createElement(m,f({ref:r,as:"ol",styleType:"decimal",marginStart:"1em"},n))}));o.Ts&&(g.displayName="OrderedList");var x=(0,a.G)(((e,r)=>{var n=h(e,["as"]);return d.createElement(m,f({ref:r,as:"ul",styleType:"initial",marginStart:"1em"},n))}));o.Ts&&(x.displayName="UnorderedList");var p=(0,a.G)(((e,r)=>{var n=(0,l.yK)();return d.createElement(c.m$.li,f({ref:r},e,{__css:n.item}))}));o.Ts&&(p.displayName="ListItem");var j=(0,a.G)(((e,r)=>{var n=(0,l.yK)();return d.createElement(t.J,f({ref:r,role:"presentation"},e,{__css:n.icon}))}));o.Ts&&(j.displayName="ListIcon")},1667:function(e,r,n){"use strict";n.d(r,{P4:function(){return p},Pg:function(){return v},Et:function(){return j}});var t=n(1664),a=n(5675),i=n(63),s=n(3852),l=n(4461),c=n(7294);function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function u(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}var d=(0,i.G)(((e,r)=>{var{isExternal:n,target:t,rel:a,className:i}=e,d=u(e,["isExternal","target","rel","className"]);return c.createElement(s.m$.a,o({},d,{ref:r,className:(0,l.cx)("chakra-linkbox__overlay",i),rel:n?"noopener noreferrer":a,target:n?"_blank":t,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}}))})),f=(0,i.G)(((e,r)=>{var{className:n}=e,t=u(e,["className"]);return c.createElement(s.m$.div,o({ref:r,position:"relative"},t,{className:(0,l.cx)("chakra-linkbox",n),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}}))})),h=n(8017),m=n(4115),g=n(917),x=n(5893),p=function(e){var r=e.children,n=e.href,t=e.title,i=e.thumbnail;return(0,x.jsx)(h.xu,{w:"100%",align:"center",children:(0,x.jsxs)(f,{cursor:"pointer",children:[(0,x.jsx)(a.default,{src:i,alt:t,className:"grid-item-thumbnail",placeholder:"blur",loading:"lazy"}),(0,x.jsx)(d,{href:n,target:"_blank",children:(0,x.jsx)(m.x,{mt:2,children:t})}),(0,x.jsx)(m.x,{fontSize:14,children:r})]})})},j=function(e){var r=e.children,n=e.id,i=e.title,s=e.thumbnail;return(0,x.jsx)(h.xu,{w:"100%",align:"center",children:(0,x.jsx)(t.default,{href:"/works/".concat(n),children:(0,x.jsxs)(f,{cursor:"pointer",children:[(0,x.jsx)(a.default,{src:s,alt:i,className:"grid-item-thumbnail",placeholder:"blur"}),(0,x.jsx)(d,{href:"/works/".concat(n),children:(0,x.jsx)(m.x,{mt:2,fontSize:20,children:i})}),(0,x.jsx)(m.x,{fontSize:14,children:r})]})})})},v=function(){return(0,x.jsx)(g.xB,{styles:"\n        .grid-item-thumbnail {\n            border-radius: 12px;\n        }\n    "})}},3062:function(e,r,n){"use strict";var t=n(1770),a=n(9008),i=n(1667),s=n(5893),l={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};r.Z=function(e){var r=e.children,n=e.title;return(0,s.jsx)(t.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:l,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,s.jsxs)(s.Fragment,{children:[n&&(0,s.jsxs)(a.default,{children:[(0,s.jsxs)("title",{children:[n," - Juan Ignacio Kaupert"]}),(0,s.jsx)("script",{src:"dist/clipboard.min.js"}),(0,s.jsx)("meta",{name:"twitter:title",content:n}),(0,s.jsx)("meta",{property:"og:title",content:n})]}),r,(0,s.jsx)(i.Pg,{})]})})}},6113:function(e,r,n){"use strict";var t,a=n(2209),i=n(4524).Z.p(t||(t=(0,a.Z)(["\n    text-align: justify;\n    text-indent: 1em;\n"])));r.Z=i},7921:function(e,r,n){"use strict";n.d(r,{Dx:function(){return d},WZ:function(){return f},h_:function(){return h}});var t=n(1664),a=n(8017),i=n(9444),s=n(336),l=n(8482),c=n(8125),o=n(6884),u=n(5893),d=function(e){var r=e.children;return(0,u.jsxs)(a.xu,{mt:3,children:[(0,u.jsx)(t.default,{href:"/works",children:(0,u.jsx)(i.r,{children:"Works"})}),(0,u.jsxs)("span",{children:[" ",(0,u.jsx)(o.X,{})," "]}),(0,u.jsx)(s.X,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:r})]})},f=function(e){var r=e.src,n=e.alt;return(0,u.jsx)(l.E,{borderRadius:"lg",w:"full",src:r,alt:n,mb:4})},h=function(e){var r=e.children;return(0,u.jsx)(c.C,{colorScheme:"green",mr:2,children:r})}},578:function(e,r,n){"use strict";n.r(r);var t=n(3850),a=n(8125),i=n(3762),s=n(7921),l=n(6113),c=n(3062),o=n(5893);r.default=function(){return(0,o.jsx)(c.Z,{title:"Coder ask",children:(0,o.jsxs)(t.W,{children:[(0,o.jsxs)(s.Dx,{children:["Coder ask ",(0,o.jsx)(a.C,{children:"2020"})]}),(0,o.jsx)(l.Z,{children:"This is a forum where coders can ask questions about programming. I used AngularJS for the front-end and NodeJS for the back-end with a MongoDB database."}),(0,o.jsxs)(i.aV,{ml:4,my:4,children:[(0,o.jsx)(i.HC,{children:(0,o.jsx)(s.h_,{children:"The project was created for local use."})}),(0,o.jsxs)(i.HC,{children:[(0,o.jsx)(s.h_,{children:"Platform"}),(0,o.jsx)("span",{children:"Windows/macOS/Linux/iOS/Android"})]}),(0,o.jsxs)(i.HC,{children:[(0,o.jsx)(s.h_,{children:"Stack"}),(0,o.jsx)("span",{children:"AngularJS, Laravel, JQuery"})]})]}),(0,o.jsx)(s.WZ,{src:"/images/works/coder-ask.png",alt:"coder-ask"}),(0,o.jsx)(s.WZ,{src:"/images/works/coder-ask_01.png",alt:"coder-ask"}),(0,o.jsx)(s.WZ,{src:"/images/works/coder-ask_02.png",alt:"coder-ask"}),(0,o.jsx)(s.WZ,{src:"/images/works/coder-ask_03.png",alt:"coder-ask"}),(0,o.jsx)(s.WZ,{src:"/images/works/coder-ask_04.png",alt:"coder-ask"}),(0,o.jsx)(s.WZ,{src:"/images/works/coder-ask_05.png",alt:"coder-ask"})]})})}},7828:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/coder-ask",function(){return n(578)}])}},function(e){e.O(0,[774,888,179],(function(){return r=7828,e(e.s=r);var r}));var r=e.O();_N_E=r}]);