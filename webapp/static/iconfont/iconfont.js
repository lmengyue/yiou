(function(window){var svgSprite='<svg><symbol id="icon-tihuan" viewBox="0 0 1024 1024"><path d="M613.575 160.164c97.72 9.837 176.229 68.661 192.912 169.604h-56.538l91.253 136.037 91.422-135.974h-63.068C852.872 193.868 749.95 105.416 620.021 92.851c-17.947-1.412-34.715 14.04-34.715 33.693 1.179 16.852 12.765 32.155 28.269 33.62zM472.156 91.376H154.371c-17.958 0-32.135 15.44-32.135 35.094v302.84c0 19.654 14.103 35.021 32.135 35.021h317.648c18.021 0 32.124-15.44 32.124-35.094V126.544c0-19.654-14.103-35.105-32.124-35.105h0.137v-0.063z m-61.879 771.187c-109.295-9.816-192.912-82.765-196.841-203.276h60.467l-91.19-136.059-91.337 135.911h60.467c2.528 155.69 111.823 256.634 252.126 270.663 17.958 1.432 34.726-14.029 34.726-33.684 0.263-16.726-11.817-31.112-28.343-33.683l-0.075 0.128z m460.542-304.304c16.705 0 32.062 15.504 32.062 35.094v304.24c0 19.591-14.093 35.031-32.124 35.031H553.119c-18.116 0-32.146-15.44-32.146-35.094V593.353c0-19.506 14.029-35.01 32.146-35.01h317.7v-0.084z m-46.995 56.221H599.841c-12.724 0-22.666 10.954-22.666 24.709v214.609c0 13.819 9.942 24.772 22.666 24.772h224.046c12.702 0 22.666-10.953 22.666-24.772V639.189c0-13.755-10.807-24.709-22.581-24.709h-0.148z m-398.39-467.514h0.074c11.786 0 22.655 10.954 22.582 24.709v214.672c0 13.829-9.953 24.772-22.655 24.772h-224.13c-12.702 0-22.655-10.943-22.655-24.772V171.675c0-13.755 9.953-24.709 22.655-24.709h224.129z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)