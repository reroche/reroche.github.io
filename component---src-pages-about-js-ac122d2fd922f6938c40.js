webpackJsonp([0xefeaa6d1881d],{110:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(){return"undefined"==typeof S&&"undefined"!=typeof window&&window.IntersectionObserver&&(S=new window.IntersectionObserver(function(e){e.forEach(function(e){L.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),S}t.__esModule=!0;var i=a(29),l=n(i),r=a(47),s=n(r),u=a(46),d=n(u),c=a(84),f=n(c),p=a(83),h=n(p),y=a(1),m=n(y),g=a(11),b=n(g),w=function(e){var t=(0,h.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},v={},E=function(e){var t=w(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!v[a]||(v[a]=!0,!1)},S=void 0,L=[],j=function(e,t){o().observe(e),L.push([e,t])},I=null,M=function(){if(null!==I)return I;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return I=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.sizes?'sizes="'+e.sizes+'" ':"",o=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",r=e.height?'height="'+e.height+'" ':"",s=e.opacity?e.opacity:"1",u=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+l+r+t+a+i+o+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+u+";opacity:"+s+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},k=function(e){var t=e.style,a=e.onLoad,n=(0,f.default)(e,["style","onLoad"]);return m.default.createElement("img",(0,h.default)({},n,{onLoad:a,style:(0,h.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};k.propTypes={style:b.default.object,onLoad:b.default.func};var T=function(e){function t(a){(0,l.default)(this,t);var n=(0,s.default)(this,e.call(this,a)),o=!0,i=!0,r=!1,u=E(a);return!u&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=!1,i=!1,r=!0),"undefined"==typeof window&&(o=!1,i=!1),n.state={isVisible:o,imgLoaded:i,IOSupported:r},n.handleRef=n.handleRef.bind(n),n}return(0,d.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&j(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=w(this.props),a=t.title,n=t.alt,o=t.className,i=t.outerWrapperClassName,l=t.style,r=void 0===l?{}:l,s=t.imgStyle,u=void 0===s?{}:s,d=t.placeholderStyle,c=void 0===d?{}:d,f=t.sizes,p=t.resolutions,y=t.backgroundColor,g=t.Tag,b=void 0;b="boolean"==typeof y?"lightgray":y;var v=(0,h.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},u,c),E=(0,h.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},u);if(f){var S=f;return S.srcWebp&&S.srcSetWebp&&M()&&(S.src=S.srcWebp,S.srcSet=S.srcSetWebp),m.default.createElement(g,{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===r.position?"initial":"relative"}},m.default.createElement(g,{className:(o?o:"")+" gatsby-image-wrapper",style:(0,h.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef},m.default.createElement(g,{style:{width:"100%",paddingBottom:100/S.aspectRatio+"%"}}),S.base64&&m.default.createElement(k,{alt:n,title:a,src:S.base64,style:v}),S.tracedSVG&&m.default.createElement(k,{alt:n,title:a,src:S.tracedSVG,style:v}),b&&m.default.createElement(g,{title:a,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&m.default.createElement(k,{alt:n,title:a,srcSet:S.srcSet,src:S.src,sizes:S.sizes,style:E,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),m.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,h.default)({alt:n,title:a},S))}})))}if(p){var L=p,j=(0,h.default)({position:"relative",overflow:"hidden",display:"inline-block",width:L.width,height:L.height},r);return"inherit"===r.display&&delete j.display,L.srcWebp&&L.srcSetWebp&&M()&&(L.src=L.srcWebp,L.srcSet=L.srcSetWebp),m.default.createElement(g,{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===r.position?"initial":"relative"}},m.default.createElement(g,{className:(o?o:"")+" gatsby-image-wrapper",style:j,ref:this.handleRef},L.base64&&m.default.createElement(k,{alt:n,title:a,src:L.base64,style:v}),L.tracedSVG&&m.default.createElement(k,{alt:n,title:a,src:L.tracedSVG,style:v}),b&&m.default.createElement(g,{title:a,style:{backgroundColor:b,width:L.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:L.height}}),this.state.isVisible&&m.default.createElement(k,{alt:n,title:a,width:L.width,height:L.height,srcSet:L.srcSet,src:L.src,style:E,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),m.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,h.default)({alt:n,title:a,width:L.width,height:L.height},L))}})))}return null},t}(m.default.Component);T.defaultProps={fadeIn:!0,alt:"",Tag:"div"},T.propTypes={responsiveResolution:b.default.object,responsiveSizes:b.default.object,resolutions:b.default.object,sizes:b.default.object,fadeIn:b.default.bool,title:b.default.string,alt:b.default.string,className:b.default.oneOfType([b.default.string,b.default.object]),outerWrapperClassName:b.default.oneOfType([b.default.string,b.default.object]),style:b.default.object,imgStyle:b.default.object,placeholderStyle:b.default.object,position:b.default.string,backgroundColor:b.default.oneOfType([b.default.string,b.default.bool]),onLoad:b.default.func,Tag:b.default.string},t.default=T},216:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function r(e,t){return e.raw=t,e}t.__esModule=!0,t.query=void 0;var s=r(["\n  font-style: initial;\n  font-weight: bolder;\n  color: green;\n"],["\n  font-style: initial;\n  font-weight: bolder;\n  color: green;\n"]),u=a(1),d=n(u),c=a(110),f=n(c),p=a(54),h=n(p),y=a(20),m=n(y),g=a(21),b=n(g),w=a(28),v=m.default.em(s),E=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.data;return d.default.createElement("div",null,d.default.createElement(f.default,{style:{width:"35%",margin:"0 auto",borderRadius:"50%",boxShadow:"0px 0px 5px 5px rgba(0, 0, 0, 0.4)"},sizes:e.avatar.sizes}),d.default.createElement(w.MyH1,null,"About"),d.default.createElement(w.MyH4,null,"So you want to learn more about me. Cool. I'll keep it short."),d.default.createElement(w.MyP,null,"Status: ",d.default.createElement(v,null,"AVAILABLE")," ",d.default.createElement("br",null),"(That means that you can hire me)"),d.default.createElement(w.MyP,null,"I'm currently an undergraduate student at"," ",d.default.createElement("a",{href:"http://cmu.edu"},"Carnegie Mellon University"),", pursuing my Bachelor of Science degree in Statistics and Machine Learning. I'm a developing data scientist, with an affinity for beautiful visualizations and impactful applications. I strive to use data to improve the way people work, learn, and live."),d.default.createElement(w.MyP,null,"My philosophy is one of continuous improvement; not only keeping up with the latest technology and tools in data science, but also developing habits for improving my productivity and finding work-life balance."),d.default.createElement(w.MyP,null,"I'm always looking for new projects to work on and challenges to take on. Don't hesitate to ",d.default.createElement(h.default,{to:"/"},"contact me")," if you're interested in working with me or just want to say hi!"),d.default.createElement(w.MyP,null,"And while you're here, check out ",d.default.createElement(h.default,{to:"/resume"},"my resume.")),d.default.createElement(b.default,null),d.default.createElement(w.MyH3,null,"Colophon"),d.default.createElement(w.MyH5,null,"Because this site uses things"),d.default.createElement(w.MyP,null,"This site was made with"," ",d.default.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby.js")," and is hosted on"," ",d.default.createElement("a",{href:"http://www.github.com"},"GitHub"),". The code for my site is available ",d.default.createElement("a",null,"here"),". I created my logo using"," ",d.default.createElement("a",{href:"http://www.figma.com"},"Figma"),". The font used throughout the site is ",d.default.createElement("a",{href:"https://fonts.google.com/specimen/Lato"},"Lato"),"."),d.default.createElement(w.MyP,null,"I apologize if the site loads with some issues on your device. It's a work in progress."),d.default.createElement(b.default,null))},t}(u.Component);t.default=E;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-about-js-ac122d2fd922f6938c40.js.map