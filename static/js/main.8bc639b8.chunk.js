(this["webpackJsonputd-parking-assist"]=this["webpackJsonputd-parking-assist"]||[]).push([[0],{147:function(e,t,a){e.exports=a(377)},152:function(e,t,a){},153:function(e,t,a){},156:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){},161:function(e,t,a){},184:function(e,t,a){},353:function(e,t,a){},354:function(e,t,a){},372:function(e,t,a){},373:function(e,t,a){},374:function(e,t,a){},375:function(e,t,a){},376:function(e,t,a){},377:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),l=a.n(o);a(152),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(6),c=a(7),i=a(9),d=a(8),m=a(65),u=a(34),p=a(387),h=a(388),g=a(380),f=(a(153),a(49),function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.color,a=e.colorBlindMode,n=e.lightMode,o=e.onClick,l=e.handleMouseOver,s=e.handleMouseLeave;return r.a.createElement(r.a.Fragment,null,"grey"===t?r.a.createElement("div",{className:t+"-background color-option"}):a?r.a.createElement(g.a,{outline:!0,color:"secondary",onClick:function(){o(t)},onMouseOver:function(){l(t)},onMouseLeave:function(){s()},className:"".concat(t,"-color-background color-blind-option pointer border-").concat(t," ").concat(n?"":"light-text")},t.charAt(0).toUpperCase()+t.slice(1)," Permit"):r.a.createElement(g.a,{outline:!0,color:"secondary",onClick:function(){o(t)},onMouseOver:function(){l(t)},onMouseLeave:function(){s()},className:"".concat(t,"-color-background color-option pointer border-").concat(t)},t.charAt(0).toUpperCase()+t.slice(1)," Permit"))}}]),a}(n.Component)),v=a(391),E=a(381);a(156);var b=function(e){var t=e.lightMode,a=e.showModal,n=e.onModalClose,o=e.onModalConfirm,l=e.color;return r.a.createElement("div",null,r.a.createElement(v.a,{centered:!0,show:a,onHide:n,animation:!0},r.a.createElement(v.a.Header,{className:t?"":"dark-mode dark-mode-close",closeButton:!0}),r.a.createElement(v.a.Body,{className:t?"":"dark-mode"},r.a.createElement("div",{className:"modal-body-text"},"You have ","orange"===l?"an":"a"," ",l," permit?")),r.a.createElement(v.a.Footer,{className:t?"":"dark-mode"},r.a.createElement(m.b,{to:"/UTD-Parking-Assist/parkingInfoPage"},r.a.createElement(E.a,{variant:"primary",className:l+"-button confirm-button",onClick:o},r.a.createElement("i",{className:"fas fa-check fa-sm"}))))))},N=(a(159),function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"footer-container"},r.a.createElement("div",null,"Made with ",r.a.createElement("i",{className:"fas fa-heart"})," by"," ",r.a.createElement("a",{href:"https://github.com/lusterane",rel:"noopener noreferrer",target:"_blank"},"Toby"),"."),r.a.createElement("div",{className:"sub-text"},"Like the project? A ",r.a.createElement("i",{className:"far fa-star"})," on the"," ",r.a.createElement("a",{href:"https://github.com/lusterane/UTD-Parking-Assist",rel:"noopener noreferrer",target:"_blank"},"repo")," ","is much appeciated :D")))}}]),a}(n.Component)),k=a(382),M=(a(160),function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={},e.serverWarningAlert=function(){return r.a.createElement(k.a,{variant:"warning"},r.a.createElement("i",{className:"fas fa-exclamation-circle fa-lg"}),r.a.createElement("span",null,"Servers are resting outside of active hours (8AM-8PM EST)"))},e.serverDownAlert=function(){return r.a.createElement(k.a,{variant:"danger"},r.a.createElement("i",{class:"fas fa-exclamation-triangle fa-lg"}),r.a.createElement("span",null,"Servers are down. I'm either broke or this is unexpected. Kindly"," ",r.a.createElement("a",{href:"mailto: tobychow98@gmail.com?subject=UTD Parking Assist: Website Issue"},"contact me")," ","if it's the latter."))},e.getServerTextFromProps=function(){var t=e.props.type;return"server-warning"===t?e.serverWarningAlert():"server-down"===t?e.serverDownAlert():void 0},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null," ",r.a.createElement("div",{className:"header-container"}," ",this.getServerTextFromProps()))}}]),a}(n.Component)),S=a(85),y=(a(161),function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={colorBlindTooltipOpen:!1,colorBlindMode:!1,lightModeTooltipOpen:!1,lightMode:!1},e.togglelightMode=function(){e.setState({lightMode:!e.state.lightMode},localStorage.setItem("light-mode-status",!e.state.lightMode))},e.toggleColorBlindMode=function(){e.setState({colorBlindMode:!e.state.colorBlindMode},localStorage.setItem("color-blind-status",!e.state.colorBlindMode))},e.toggleColorBlindTooltip=function(){e.setState((function(e,t){return{colorBlindTooltipOpen:!e.colorBlindTooltipOpen}}))},e.togglelightModeTooltip=function(){e.setState((function(e,t){return{lightModeTooltipOpen:!e.lightModeTooltipOpen}}))},e}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(){var e="true"===localStorage.getItem("light-mode-status"),t="true"===localStorage.getItem("color-blind-status");this.state.lightMode!==e&&this.setState({lightMode:e}),this.state.colorBlindMode!==t&&this.setState({colorBlindMode:t})}},{key:"render",value:function(){var e=this.state.lightMode;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"icons-container"},r.a.createElement("div",{onClick:this.togglelightMode,id:"dark-mode",className:e?"icon pointer":"icon pointer dark-icon-border "},e?r.a.createElement("i",{className:"fas fa-moon fa-lg"}):r.a.createElement("i",{className:"far fa-moon fa-lg"})),r.a.createElement("div",{onClick:this.toggleColorBlindMode,id:"color-blind",className:e?"icon pointer":"icon pointer dark-icon-border "},this.state.colorBlindMode?r.a.createElement("i",{className:"fas fa-eye fa-lg"}):r.a.createElement("i",{className:"fas fa-low-vision fa-lg"})),r.a.createElement(S.a,{placement:"bottom",isOpen:this.state.lightModeTooltipOpen,target:"dark-mode",toggle:this.togglelightModeTooltip},"Light Mode"),r.a.createElement(S.a,{placement:"bottom",isOpen:this.state.colorBlindTooltipOpen,target:"color-blind",toggle:this.toggleColorBlindTooltip},"Color Blind Accessability")))}}]),a}(n.Component)),T=a(383),w=a(384),O=a(385),C=a(386),P=(a(184),function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={textList:["Starting Up Car ...","Running Red Lights ...","Picking Up Coffee ...","Spilling Coffee On Dashboard ...","Parking In Red ...","Running To Class ...","Almost Ready!!!"],index:0,incrementIndexInterval:"",showToastTimeout:"",showToast:!1},e.incrementIndex=function(){var t=e.state,a=t.textList;t.index<a.length-1&&e.setState((function(e,t){return{index:e.index+1}}))},e.toggleToast=function(){e.setState((function(e,t){return{showToast:!e.showToast}}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.setState({incrementIndexInterval:setInterval(this.incrementIndex,2e3),showToastTimeout:setTimeout(this.toggleToast,5e3)})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.incrementIndexInterval),clearTimeout(this.state.showToastTimeout)}},{key:"render",value:function(){var e=this.state,t=e.textList,a=e.index,n=this.props.lightMode;return r.a.createElement("div",{className:n?"spinner-container":"spinner-container dark-mode opaque"},r.a.createElement("div",{className:"loading-center"},r.a.createElement(T.a,{animation:"border",role:"status"}),r.a.createElement("div",{className:"loading-text"},t[a]),r.a.createElement(w.a,{isOpen:this.state.showToast,className:n?"":"dark-mode-off-hue-dark opaque"},r.a.createElement(O.a,{icon:r.a.createElement("i",{className:"fas fa-bed"}),toggle:this.toggleToast},"Waking Up"),r.a.createElement(C.a,null,r.a.createElement("span",null,"Looks like the server's waking up. Don't worry, this won't take long.")))))}}]),a}(n.Component)),x=a(143),A=a.n(x),j=(a(353),function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={color:"",parsedColor:""},e.parseColor=function(e){switch(e){case"green":return"#28a746";case"gold":return"#f9c938";case"orange":return"#ff8c00";case"purple":return"#773dbc";default:return"#c6c6c6"}},e}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a="";a="HomePage"===e.parent?"default":localStorage.getItem("color"),t.color!==a&&this.setState({color:a,parsedColor:this.parseColor(a)})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{className:"particles-element",params:{fps_limit:60,particles:{color:{value:this.state.parsedColor},opacity:{value:1},number:{value:160},size:{value:3,random:!0,anim:{speed:4,size_min:.3}},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"top",out_mode:"out"}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"bubble"}},modes:{bubble:{distance:100,duration:2,size:0,opacity:0}}},retina_detect:!1}}))}}]),a}(n.Component)),U=(a(354),function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1,colorBlindMode:!1,lightMode:!0,lightModeLoaded:!1,popoverOpen:!1},e.togglePopover=function(){e.setState((function(e,t){return{popoverOpen:!e.popoverOpen}}))},e.handleModalClose=function(){e.setState({showModal:!1})},e.handleModalShow=function(){e.setState({showModal:!0})},e.handleModalConfirm=function(){localStorage.setItem("color",e.props.color),e.setState({showModal:!1})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e="true"===localStorage.getItem("light-mode-status");console.log(localStorage.getItem("light-mode-status")),this.setState({lightMode:e,lightModeLoaded:!0})}},{key:"componentDidUpdate",value:function(){var e="true"===localStorage.getItem("color-blind-status"),t="true"===localStorage.getItem("light-mode-status");this.state.lightMode!==t&&this.setState({lightMode:t}),this.state.colorBlindMode!==e&&this.setState({colorBlindMode:e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.lightMode,n=t.popoverOpen,o=t.lightModeLoaded,l=this.props,s=l.onlineStatusLoaded,c=l.onlineStatus;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a?"":"dark-mode"},r.a.createElement(j,{parent:"HomePage"}),s&&o?"":r.a.createElement(P,{lightMode:a}),c?r.a.createElement("div",{className:"content-container"},r.a.createElement(y,null),r.a.createElement(p.a,{innerClassName:a?"popover-content":"popover-content dark-mode-off-hue-dark",trigger:"hover",isOpen:n,target:"info-text",toggle:this.togglePopover,hideArrow:!0},r.a.createElement(h.a,null,r.a.createElement("div",{className:a?"popover-text-container":"popover-text-container dark-mode-off-hue-dark"},r.a.createElement("div",{className:"popover-exit"},r.a.createElement("i",{className:"fas fa-times pointer",onClick:this.togglePopover})),r.a.createElement("h3",null,"What?"),r.a.createElement("div",null,"This site finds the ",r.a.createElement("span",{className:"bold"},"best")," ","parking options based on your permit"),r.a.createElement("br",null),r.a.createElement("h3",null,"How?"),r.a.createElement("div",null,"Achieves this by considering."),r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",null,"Parking trends")),r.a.createElement("li",null,r.a.createElement("span",null,"Immediate spot availabilty")),r.a.createElement("li",null,r.a.createElement("span",null,"Permit tier")))),r.a.createElement("hr",{className:a?"":"white-hr"}),r.a.createElement("h3",null,"BTW..."),r.a.createElement("div",null,r.a.createElement("span",{className:"bold"},"Light Mode"),":"," ",r.a.createElement("i",{className:"far fa-moon"})," at the top right."),r.a.createElement("div",null,r.a.createElement("span",{className:"bold"},"Color Blind Accessibility"),":"," ",r.a.createElement("i",{className:"fas fa-low-vision"})," at the top right.")))),r.a.createElement("div",{className:"inner-content-container"},r.a.createElement("h1",{className:this.props.color+" title-greeting"},"UTD Parking"),r.a.createElement("div",{className:"sub-title-greeting"},r.a.createElement("span",null,"Live parking data at your fingertips")),r.a.createElement("div",{className:"color-option-container"},r.a.createElement(f,{color:"green",colorBlindMode:this.state.colorBlindMode,lightMode:a,onClick:function(){e.handleModalShow(e.props.color)},handleMouseOver:this.props.changeColor,handleMouseLeave:function(){e.state.showModal||e.props.changeColorDefault()}}),r.a.createElement(f,{color:"gold",colorBlindMode:this.state.colorBlindMode,lightMode:a,onClick:function(){e.handleModalShow(e.props.color)},handleMouseOver:this.props.changeColor,handleMouseLeave:function(){e.state.showModal||e.props.changeColorDefault()}}),r.a.createElement(f,{color:"orange",colorBlindMode:this.state.colorBlindMode,lightMode:a,onClick:function(){e.handleModalShow(e.props.color)},handleMouseOver:this.props.changeColor,handleMouseLeave:function(){e.state.showModal||e.props.changeColorDefault()}}),r.a.createElement(f,{color:"purple",colorBlindMode:this.state.colorBlindMode,lightMode:a,onClick:function(){e.handleModalShow(e.props.color)},handleMouseOver:this.props.changeColor,handleMouseLeave:function(){e.state.showModal||e.props.changeColorDefault()}})),r.a.createElement("div",{className:"info-text-container"},r.a.createElement("span",{id:"info-text",className:"info-text"},r.a.createElement("i",{className:"fas fa-angle-double-right"})," What is this?")),r.a.createElement(b,{lightMode:a,color:this.props.color,showModal:this.state.showModal,onModalShow:this.handleModalShow,onModalClose:this.handleModalClose,onModalConfirm:this.handleModalConfirm})),r.a.createElement(N,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"content-container"},r.a.createElement(M,{type:"server-warning"}),r.a.createElement(p.a,{innerClassName:a?"popover-content":"popover-content dark-mode-off-hue-dark",trigger:"hover",isOpen:n,target:"info-text",toggle:this.togglePopover,hideArrow:!0},r.a.createElement(h.a,null,r.a.createElement("div",{className:a?"popover-text-container":"popover-text-container dark-mode-off-hue-dark"},r.a.createElement("div",{className:"popover-exit"},r.a.createElement("i",{className:"fas fa-times pointer",onClick:this.togglePopover})),r.a.createElement("span",null,"For ",r.a.createElement("span",{className:"bold"},"dark mode"),", select the ",r.a.createElement("i",{className:"far fa-moon"})," at the top right."),r.a.createElement("hr",{className:a?"white-hr":""}),r.a.createElement("span",null,"For"," ",r.a.createElement("span",{className:"bold"},"color blind accessibility"),", select the ",r.a.createElement("i",{className:"fas fa-low-vision"})," ","at the top right."),r.a.createElement("hr",{className:a?"white-hr":""}),r.a.createElement("p",null,"UTD Permits works on shared tiers:"),r.a.createElement("div",{className:"color-access-listings"},r.a.createElement("p",null,r.a.createElement("span",{className:"green"},"Green Permit")," ","parks [",r.a.createElement("span",{className:"green"},"Green"),"]"),r.a.createElement("p",null,r.a.createElement("span",{className:"gold"},"Gold")," parks [",r.a.createElement("span",{className:"green"},"Green")," & ",r.a.createElement("span",{className:"gold"},"Gold"),"]"),r.a.createElement("p",null,r.a.createElement("span",{className:"purple"},"Purple")," parks",r.a.createElement("span",{className:"green"},"Green"),",",r.a.createElement("span",{className:"gold"},"Gold"),",",r.a.createElement("span",{className:"orange"},"Orange")," & ",r.a.createElement("span",{className:"purple"},"Purple"),"]"))))),r.a.createElement("div",{className:"inner-content-container"},r.a.createElement("h1",{className:"grey title-greeting"},"UTD Parking"),r.a.createElement("p",{className:"grey"},"Live parking data at your fingertips"),r.a.createElement("div",{className:"color-option-container"},r.a.createElement(f,{color:"grey"}),r.a.createElement(f,{color:"grey"}),r.a.createElement(f,{color:"grey"}),r.a.createElement(f,{color:"grey"})),r.a.createElement("div",{className:"info-text-container grey"},r.a.createElement("span",{id:"info-text"},r.a.createElement("i",{className:"fas fa-angle-double-right"})," But, how does it work?")),r.a.createElement(b,{color:this.props.color,showModal:this.state.showModal,onModalShow:this.handleModalShow,onModalClose:this.handleModalClose,onModalConfirm:this.handleModalConfirm})),r.a.createElement(N,null)))))}}]),a}(n.Component)),L=a(35),B=a(66),I=a.n(B),D=a(144),G=a(392),_=a(389),H=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a.Body,null,r.a.createElement("div",{className:"ps-card-body",style:{padding:"0rem 1.25rem"}},r.a.createElement("div",{className:"text",style:{textAlign:"center"}},r.a.createElement("p",{className:"main-text"},"FULL"),r.a.createElement("p",{className:"sub-text"},"No available parking spots at this time"))),r.a.createElement("div",{className:"ps-card-footer"},r.a.createElement("hr",{className:"ps-card-hr"}),r.a.createElement("p",null,this.props.structure))))}}]),a}(n.Component),F=(a(372),function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={index:0,currentPermit:{id:-1,spots:-1,structure:"ps1",color:"green",level:-1},colorBlindMode:!1},e.handleIncrementUpdate=function(){e.setState((function(e,t){return{index:e.index+1,currentPermit:{id:t.dataArr[e.index+1].id,spots:t.dataArr[e.index+1].spots,structure:t.dataArr[e.index+1].structure,color:t.dataArr[e.index+1].color,level:t.dataArr[e.index+1].level,spot_change:t.dataArr[e.index+1].spot_change}}}))},e.handleDecrementUpdate=function(){e.setState((function(e,t){return{index:e.index-1,currentPermit:{id:t.dataArr[e.index-1].id,spots:t.dataArr[e.index-1].spots,structure:t.dataArr[e.index-1].structure,color:t.dataArr[e.index-1].color,level:t.dataArr[e.index-1].level,spot_change:t.dataArr[e.index-1].spot_change}}}))},e.getSpotChangeJSX=function(e){return isNaN(e)||0===e?r.a.createElement("div",{className:"percent-change-container"},r.a.createElement("p",{className:"percent-change-text"},r.a.createElement("span",{className:"grey"},"No activity for 10 minutes"))):e>0?r.a.createElement("div",{className:"percent-change-container"},r.a.createElement("p",{className:"percent-change-text"},r.a.createElement("span",{className:"percent-change-green"},"+",e,"%")," ",r.a.createElement("span",{className:"grey"},"space availability"))):r.a.createElement("div",{className:"percent-change-container"},r.a.createElement("p",{className:"percent-change-text"},r.a.createElement("span",{className:"percent-change-red"},e,"%")," space availability"))},e.getParkingStructureLink=function(e){return"PS1"===e?"https://goo.gl/maps/KHvbiG6WtTbbTKSa9":"PS3"===e?"https://goo.gl/maps/kFAHUwgEb1NwTAbv5":"https://goo.gl/maps/jcU9wcRKYS6MoVuY8"},e}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(){-1===this.state.currentPermit.id&&this.props.dataArr.length>0&&this.setState((function(e,t){return{currentPermit:{id:t.dataArr[0].id,spots:t.dataArr[0].spots,structure:t.dataArr[0].structure,color:t.dataArr[0].color,level:t.dataArr[0].level,spot_change:t.dataArr[0].spot_change}}}));var e="true"===localStorage.getItem("color-blind-status");this.state.colorBlindMode!==e&&this.setState({colorBlindMode:e})}},{key:"render",value:function(){var e=this.state.currentPermit,t=e.spots,a=e.structure,n=e.color,o=e.level,l=e.spot_change,s=this.props.lightMode,c=this.state.colorBlindMode?"best-choice-body-color-blind":"best-choice-body";return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{className:s?"ps-card":"ps-card dark-mode-off-hue-dark"},0!==this.props.dataArr.length?r.a.createElement(G.a.Body,{className:0===this.state.index?c:""},r.a.createElement(_.a,{placement:"left",target:"map"},"Google Maps"),r.a.createElement(_.a,{placement:"bottom",target:"best-choice"},"Computed by weighting"," ",r.a.createElement("span",{className:"bold"},"parking trends, immediate spot availability,")," ","and ",r.a.createElement("span",{className:"bold"}," permit tier")),r.a.createElement("div",{className:"text-muted ps-card-header"},r.a.createElement("div",{className:"best-choice-container"},0===this.state.index?r.a.createElement("span",{className:s?"":"gold",id:"best-choice"},r.a.createElement("i",{className:"fas fa-star"})," BEST CHOICE"):""),r.a.createElement("div",{className:"icon-container"},r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:this.getParkingStructureLink(a)},r.a.createElement("i",{id:"map",className:"fas fa-map-marked-alt fa-lg"})))),r.a.createElement("div",{className:"ps-card-body"},0!==this.state.index?r.a.createElement("div",{onClick:this.handleDecrementUpdate,className:"pointer arrow-container"},r.a.createElement("i",{className:"arrow fas fa-angle-left"})):r.a.createElement("div",{className:"arrow-container"},r.a.createElement("i",{className:"grey arrow fas fa-angle-left"})),r.a.createElement("div",{className:"text"},r.a.createElement("p",{className:"main-text"},t," SPACES"),r.a.createElement("p",{className:"sub-text"},"Level ",o),this.state.colorBlindMode?r.a.createElement("p",{className:"sub-text border-"+n},n.toUpperCase()):r.a.createElement("p",{className:"sub-text"},"Color ",r.a.createElement("i",{className:"fas fa-circle "+n})),this.getSpotChangeJSX(l)),this.state.index!==this.props.dataArr.length-1?r.a.createElement("div",{onClick:this.handleIncrementUpdate,className:"arrow-container pointer"},r.a.createElement("i",{className:"arrow fas fa-angle-right"})):r.a.createElement("div",{className:"arrow-container"},r.a.createElement("i",{className:"grey arrow fas fa-angle-right"}))),r.a.createElement("div",{className:"ps-card-footer"},r.a.createElement("hr",{className:s?"ps-card-hr":"ps-card-hr white-hr"}),r.a.createElement("p",null,a))):r.a.createElement(H,{structure:this.props.structure})))}}]),a}(n.Component)),R=(a(373),function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={structures:{ps1:{dataArr:[]},ps3:{dataArr:[]},ps4:{dataArr:[]}}},e.handleHTTPGetPS=function(){console.log("HTTP CALL: GET /parkingStructures/"),I.a.get("https://utd-parking.herokuapp.com/parkingStructures").then((function(t){200===t.status?e.updatePSFromHTTPResponse(t):console.log("GET /parkingStructures/ "+t.status)})).catch((function(e){console.log(e)}))},e.updatePSFromHTTPResponse=function(t){var a=Object(L.a)({},e.state.structures);Object.entries(a).forEach((function(e){e[1].dataArr=[]})),t.data.forEach((function(t){t.permit_category.forEach((function(n){var r=n.id,o=n.level,l=n.spots,s=n.percent_change_past_10_mins,c=e.standardizeColorLongToShort(n.color);0!==l&&e.isRelevantColor(c)&&a[t.structure].dataArr.push({id:r,color:c,level:o,spots:l,structure:t.structure.toUpperCase(),spot_change:Number((100*s).toFixed(2))})}))})),e.setState({structures:a},e.props.setPSGroupLoadedTrue)},e.isRelevantColor=function(t){var a=["green","gold","orange","purple"],n=a.indexOf(e.props.color)+1;return(a=a.slice(0,n)).indexOf(t)>-1},e.standardizeColorLongToShort=function(e){switch(e){case"Green Permit":return"green";case"Gold Permit":return"gold";case"Orange Permit":return"orange";case"Purple Permit":return"purple";case"Pay-By-Space":return"payBySpace";default:return"green"}},e.standardizeColorShortToLong=function(e){switch(e){case"green":return"Green%20Permit";case"gold":return"Gold%20Permit";case"orange":return"Orange%20Permit";case"purple":return"Purple%20Permit";case"pay-by-space":return"Pay-By-Space";default:return"Green%20Permit"}},e.getSortedDataArr=function(e){var t=Object(D.a)(e);return(t=t.map((function(e){var t=.4*e.spot_change,a=e.spots/250*.25,n=0;switch(e.color){case"purple":n=1;break;case"orange":n=.75;break;case"gold":n=.5;break;case"green":n=.25;break;default:n=0}return n*=.35,Object(L.a)(Object(L.a)({},e),{},{score:a+n+t})}))).sort((function(e,t){return e.score<t.score?1:-1})),t},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.handleHTTPGetPS()}},{key:"componentDidUpdate",value:function(){for(var e=[62,63],t=e[0];t<=e[1];t++)this.props.timeUpdated.ps1.elapsedTime===t&&this.handleHTTPGetPS()}},{key:"render",value:function(){var e=this.state.structures,t=e.ps1,a=e.ps3,n=e.ps4,o=this.props.lightMode,l=this.getSortedDataArr(t.dataArr),s=this.getSortedDataArr(a.dataArr),c=this.getSortedDataArr(n.dataArr);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card-group-container"},r.a.createElement(F,{lightMode:o,dataArr:l,structure:"PS1"}),r.a.createElement(F,{lightMode:o,dataArr:s,structure:"PS3"}),r.a.createElement(F,{lightMode:o,dataArr:c,structure:"PS4"})))}}]),a}(n.Component)),W=a(390),z=(a(374),function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={updateClientTimerInterval:"",timerIsLoaded:!1},e.getTimeText=function(t){if(t>63)return r.a.createElement(W.a,{color:"danger"},"Something went wrong. Try refreshing the page");var a=63-t,n=e.standardizeSecondsToMinutes(a);return a<=3||0===a||a>=60?r.a.createElement(W.a,{color:"success"},"Live update in ",n):r.a.createElement(W.a,{color:"primary"},"Live update in ",n)},e.standardizeSecondsToMinutes=function(e){return e<60?e+" seconds":0===e||e>=60?"less than 1 second":"-"},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.getTimeText(this.props.timeUpdated.ps1.elapsedTime);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"time-text-container",id:"timer"},r.a.createElement("div",{className:"time-text"},e)))}}]),a}(n.Component)),J=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"it's offline broooo"),r.a.createElement("h3",null,"like from 8am to 8pm broo ",r.a.createElement("i",{className:"fas fa-heart"})))}}]),a}(n.Component),K=(a(375),function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={timeUpdated:{ps1:{utc_updated_time:"",elapsedTime:-1},ps3:{utc_updated_time:"",elapsedTime:-1},ps4:{utc_updated_time:"",elapsedTime:-1}},timerLoaded:!1,psGroupLoaded:!1,lightMode:!1},e.updateTimeUpdatedInState=function(){if(e.props.onlineStatus){var t=Object(L.a)({},e.state.timeUpdated);Object.entries(e.state.timeUpdated).forEach((function(a){var n=a[0],r=new Date(a[1].utc_updated_time);t[n].elapsedTime=e.computeElapsedTime(r)})),e.setState({timeUpdated:t,timerLoaded:!0})}},e.computeElapsedTime=function(e){var t=new Date;return parseInt((t-e)/1e3,10)},e.handleHTTPGetUpdateTime=function(){console.log("HTTP CALL: GET /parkingStructures/timeUpdated"),I.a.get("https://utd-parking.herokuapp.com/parkingStructures/timeUpdated").then((function(t){200===t.status?e.updateTimeFromHTTPResponse(t):console.log("GET /parkingStructures/timeUpdated "+t.status)})).catch((function(e){console.log(e)}))},e.updateTimeFromHTTPResponse=function(t){var a=Object(L.a)({},e.state.timeUpdated);Object.entries(t.data).forEach((function(e){var t=e[0],n=new Date(e[1]);a[t].utc_updated_time=n})),e.setState({timeUpdated:a})},e.handleResetElapsedTime=function(){var t=Object(L.a)({},e.state.timeUpdated);t.ps1.elapsedTime=0,t.ps3.elapsedTime=0,t.ps4.elapsedTime=0,e.setState({timeUpdated:t})},e.setPSGroupLoadedTrue=function(){e.setState({psGroupLoaded:!0})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("color");e&&this.setState({color:e}),this.setState({updateTimeUpdatedInStateInterval:setInterval(this.updateTimeUpdatedInState,1e3)}),this.handleHTTPGetUpdateTime()}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.updateTimeUpdatedInStateInterval)}},{key:"componentDidUpdate",value:function(){for(var e=[62,63],t=e[0];t<=e[1];t++)this.state.timeUpdated.ps1.elapsedTime===t&&(this.handleResetElapsedTime(),this.handleHTTPGetUpdateTime());var a="true"===localStorage.getItem("light-mode-status");this.state.lightMode!==a&&this.setState({lightMode:a})}},{key:"render",value:function(){var e=this.state,t=e.color,a=e.timeUpdated,n=e.lightMode;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:n?"":"dark-mode"},r.a.createElement(y,null),this.props.onlineStatusLoaded&&this.state.timerLoaded&&this.state.psGroupLoaded?"":r.a.createElement(P,{lightMode:n}),this.props.onlineStatus?r.a.createElement("div",null,r.a.createElement("div",{className:"parking-info-container"},r.a.createElement(j,{parent:"ParkingInfoPage"}),r.a.createElement("a",{href:"/UTD-Parking-Assist/",className:"remove-decoration"},r.a.createElement("i",{className:n?"fas fa-chevron-left back-route-button":"fas fa-chevron-left back-route-button light-text"})),r.a.createElement("div",{className:"parking-info-header"},r.a.createElement("div",{className:"centered-header"},r.a.createElement("h1",{className:t},"UTD Parking"),r.a.createElement("div",{className:"sub-title-greeting"},r.a.createElement("span",null,"Live parking data at your fingertips")))),r.a.createElement("div",{className:n?"parking-data":"parking-data dark-borders"},r.a.createElement(z,{timeUpdated:a}),r.a.createElement(R,{lightMode:n,color:t,setPSGroupLoadedTrue:this.setPSGroupLoadedTrue,timeUpdated:a,onResetElapsedTime:this.handleResetElapsedTime}))),r.a.createElement("div",{id:"parking-info-footer-container",className:n?"footer-container":"dark-mode footer-container"},r.a.createElement(N,null))):r.a.createElement(J,null)))}}]),a}(n.Component)),Y=(a(376),function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={color:"",onlineHours:{fromHour:"0",toHour:"25"},onlineStatus:!1,onlineStatusLoaded:!1},e.handleChangeColor=function(t){e.setState({color:t})},e.handleChangeColorDefault=function(){e.setState({color:""})},e.updateOnlineStatus=function(){e.checkOnlineStatus()?e.setState({onlineStatus:!0,onlineStatusLoaded:!0}):e.setState({onlineStatus:!1,onlineStatusLoaded:!0})},e.checkOnlineStatus=function(){var t=(new Date).getHours(),a=e.state.onlineHours,n=a.fromHour,r=a.toHour;return t>=n&&t<r},e.getGreeting=function(){var t=(new Date).getHours();return t>=20&&t<=23||(0===t||24===t)&&t<=5?e.getNightMessage():t>=6&&t<=11?e.getMorningMessage():t>=12&&t<=16?e.getAfternoonMessage():e.getEveningMessage()},e.getNightMessage=function(){return r.a.createElement("i",{className:"fas fa-moon"})},e.getMorningMessage=function(){return r.a.createElement("i",{className:"fas fa-sun"})},e.getAfternoonMessage=function(){return r.a.createElement("i",{className:"fas fa-sun"})},e.getEveningMessage=function(){return r.a.createElement("i",{className:"fas fa-moon"})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){setInterval(this.updateOnlineStatus,900)}},{key:"render",value:function(){return r.a.createElement("div",{className:"root-container"},r.a.createElement(m.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/UTD-Parking-Assist/"},r.a.createElement(U,{onlineStatus:this.state.onlineStatus,changeColor:this.handleChangeColor,changeColorDefault:this.handleChangeColorDefault,color:this.state.color,onlineStatusLoaded:this.state.onlineStatusLoaded,getGreeting:this.getGreeting})),r.a.createElement(u.a,{path:"/UTD-Parking-Assist/parkingInfoPage"},r.a.createElement(K,{onlineStatus:this.state.onlineStatus,onlineStatusLoaded:this.state.onlineStatusLoaded})))))}}]),a}(n.Component));l.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},49:function(e,t,a){}},[[147,1,2]]]);
//# sourceMappingURL=main.8bc639b8.chunk.js.map