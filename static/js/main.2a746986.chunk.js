(this["webpackJsonputd-parking-assist"]=this["webpackJsonputd-parking-assist"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},124:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),l=a.n(o);a(92),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(6),c=a(7),i=a(9),u=a(8),m=a(41),d=a(26),p=a(155),h=a(156),g=a(157),f=a(151),v=(a(93),a(47),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.color,a=e.onClick,n=e.handleMouseOver,o=e.handleMouseLeave;return r.a.createElement(r.a.Fragment,null,"grey"===t?r.a.createElement("div",{className:t+"-background color-option"},r.a.createElement("i",{className:"fas fa-car-side",style:{color:"#fff"}})):this.props.colorBlindMode?r.a.createElement(f.a,{outline:!0,color:"secondary",onClick:function(){a(t)},onMouseOver:function(){n(t)},onMouseLeave:function(){o()},className:t+"-color-blind-background color-blind-option pointer border-"+t},t.charAt(0).toUpperCase()+t.slice(1)," Permit"):r.a.createElement(f.a,{outline:!0,type:"button",color:"secondary",onClick:function(){a(t)},onMouseOver:function(){n(t)},onMouseLeave:function(){o()},className:t+"-background color-option"},r.a.createElement("i",{className:"fas fa-car-side"})))}}]),a}(n.Component)),E=a(159),b=a(152);a(96);var N=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{centered:!0,show:e.showModal,onHide:e.onModalClose,animation:!0},r.a.createElement(E.a.Header,{closeButton:!0}),r.a.createElement(E.a.Body,null,r.a.createElement("div",{className:"modal-body-text"},"You have ","orange"===e.color?"an":"a"," ",e.color," permit?")),r.a.createElement(E.a.Footer,null,r.a.createElement(m.b,{to:"/UTD-Parking-Assist/parkingInfoPage"},r.a.createElement(b.a,{variant:"primary",className:e.color+"-button confirm-button",onClick:e.onModalConfirm},r.a.createElement("i",{className:"fas fa-check fa-sm"}))))))},S=(a(99),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Made with ",r.a.createElement("i",{className:"fas fa-heart"})," by"," ",r.a.createElement("a",{href:"https://github.com/lusterane",rel:"noopener noreferrer",target:"_blank"},"Toby"),"."),r.a.createElement("p",{className:"sub-text"},"Like the project? A ",r.a.createElement("i",{className:"far fa-star"})," on the"," ",r.a.createElement("a",{href:"https://github.com/lusterane/UTD-Parking-Assist",rel:"noopener noreferrer",target:"_blank"},"repo")," ","is much appeciated :D")))}}]),a}(n.Component)),y=a(153),T=(a(100),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={},e.serverWarningAlert=function(){return r.a.createElement(y.a,{style:{textAlign:"center"},variant:"warning"},r.a.createElement("i",{className:"fas fa-exclamation-circle fa-lg"}),"To conserve server loads, servers will rest outside of 8:00AM - 8:00PM CST")},e.serverDownAlert=function(){return r.a.createElement(y.a,{style:{textAlign:"center"},variant:"danger"},r.a.createElement("i",{class:"fas fa-exclamation-triangle fa-lg"}),"Servers are down. I'm either broke or this is unexpected. Kindly"," ",r.a.createElement("a",{href:"mailto: tobychow98@gmail.com?subject=UTD Parking Assist: Website Issue"},"contact me")," ","if it's the latter.")},e.getServerTextFromProps=function(){var t=e.props.type;return"server-warning"===t?e.serverWarningAlert():"server-down"===t?e.serverDownAlert():void 0},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header-container"},this.getServerTextFromProps()))}}]),a}(n.Component)),O=a(154),k=(a(101),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={colorBlindTooltipOpen:!1,colorBlindMode:!1},e.toggleColorBlindMode=function(){e.setState({colorBlindMode:!e.state.colorBlindMode}),localStorage.setItem("color-blind-status",!e.state.colorBlindMode)},e.toggleColorBlindTooltip=function(){e.setState({colorBlindTooltipOpen:!e.state.colorBlindTooltipOpen})},e.mouseHoverColorBlindIcon=function(){e.setState({colorBlindTooltipOpen:!0})},e.mouseLeaveColorBlindIcon=function(){e.setState({colorBlindTooltipOpen:!1})},e}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(){var e="true"===localStorage.getItem("color-blind-status");this.state.colorBlindMode!==e&&this.setState({colorBlindMode:e})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{onClick:this.toggleColorBlindMode,id:"color-blind",className:"color-blind-container pointer"},this.state.colorBlindMode?r.a.createElement("i",{className:"fas fa-eye fa-lg"}):r.a.createElement("i",{className:"fas fa-low-vision fa-lg"})),r.a.createElement(O.a,{placement:"left",isOpen:this.state.colorBlindTooltipOpen,target:"color-blind",toggle:this.toggleColorBlindTooltip},"Color Blind Accessability"))}}]),a}(n.Component)),w=(a(124),a(68),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1,colorBlindMode:!1,popoverOpen:!1},e.togglePopover=function(){return e.setState({popoverOpen:!e.state.popoverOpen})},e.handleModalClose=function(){e.setState({showModal:!1})},e.handleModalShow=function(){e.setState({showModal:!0})},e.handleModalConfirm=function(){localStorage.setItem("color",e.props.color),e.setState({showModal:!1})},e}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(){var e="true"===localStorage.getItem("color-blind-status");this.state.colorBlindMode!==e&&this.setState({colorBlindMode:e})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.props.onlineStatusLoaded?"":r.a.createElement("div",{className:"spinner-container"},r.a.createElement(p.a,{animation:"border",role:"status"})),this.props.onlineStatus?r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null),r.a.createElement(h.a,{innerClassName:"popover-content",trigger:"hover",placement:"bottom",isOpen:this.state.popoverOpen,target:"info-text",toggle:this.togglePopover,flip:!0},r.a.createElement(g.a,null,r.a.createElement("div",{className:"popover-text-container"},"If any visual impairements, select the"," ",r.a.createElement("i",{className:"fas fa-low-vision"})," at the top right.",r.a.createElement("hr",null),r.a.createElement("p",null,"UTD Permits works on shared tiers:"),r.a.createElement("div",{className:"color-access-listings"},r.a.createElement("p",null,r.a.createElement("span",{className:"green"},"Green")," accesses"," ",r.a.createElement("span",{className:"green"},"Green")),r.a.createElement("p",null,r.a.createElement("span",{className:"gold"},"Gold")," accesses"," ",r.a.createElement("span",{className:"green"},"Green"),",and"," ",r.a.createElement("span",{className:"gold"},"Gold")),r.a.createElement("p",null,r.a.createElement("span",{className:"purple"},"Purple")," accesses"," ",r.a.createElement("span",{className:"green"},"Green"),",",r.a.createElement("span",{className:"gold"},"Gold"),",",r.a.createElement("span",{className:"orange"},"Orange"),",and"," ",r.a.createElement("span",{className:"purple"},"Purple")))))),r.a.createElement("div",{className:"content-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",{className:this.props.color+" title-greeting"},"UTD Parking"),r.a.createElement("p",null,"Live parking data at your fingertips"),r.a.createElement("div",{className:"row"},r.a.createElement(v,{color:"green",colorBlindMode:this.state.colorBlindMode,onClick:function(){e.handleModalShow(e.props.color)},handleMouseOver:this.props.changeColor,handleMouseLeave:function(){e.state.showModal||e.props.changeColorDefault()}}),r.a.createElement(v,{color:"gold",colorBlindMode:this.state.colorBlindMode,onClick:function(){e.handleModalShow(e.props.color)},handleMouseOver:this.props.changeColor,handleMouseLeave:function(){e.state.showModal||e.props.changeColorDefault()}}),r.a.createElement(v,{color:"orange",colorBlindMode:this.state.colorBlindMode,onClick:function(){e.handleModalShow(e.props.color)},handleMouseOver:this.props.changeColor,handleMouseLeave:function(){e.state.showModal||e.props.changeColorDefault()}}),r.a.createElement(v,{color:"purple",colorBlindMode:this.state.colorBlindMode,onClick:function(){e.handleModalShow(e.props.color)},handleMouseOver:this.props.changeColor,handleMouseLeave:function(){e.state.showModal||e.props.changeColorDefault()}})))),r.a.createElement("div",{id:"info-text",className:"bottom-text row"},r.a.createElement("div",{className:"col"},r.a.createElement("p",null,"But, how does it work?"))),r.a.createElement(N,{color:this.props.color,showModal:this.state.showModal,onModalShow:this.handleModalShow,onModalClose:this.handleModalClose,onModalConfirm:this.handleModalConfirm}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{type:"server-warning"}),r.a.createElement(h.a,{innerClassName:"popover-content",trigger:"hover",placement:"bottom",isOpen:this.state.popoverOpen,target:"info-text",toggle:this.togglePopover,flip:!0},r.a.createElement(g.a,null,r.a.createElement("div",{className:"popover-text-container"},"If any visual impairements, select the"," ",r.a.createElement("i",{className:"fas fa-low-vision"})," at the top right.",r.a.createElement("hr",null),r.a.createElement("p",null,"UTD Permits works on shared tiers:"),r.a.createElement("div",{className:"color-access-listings"},r.a.createElement("p",null,r.a.createElement("span",{className:"green"},"Green")," accesses"," ",r.a.createElement("span",{className:"green"},"Green")),r.a.createElement("p",null,r.a.createElement("span",{className:"gold"},"Gold")," accesses"," ",r.a.createElement("span",{className:"green"},"Green"),",and"," ",r.a.createElement("span",{className:"gold"},"Gold")),r.a.createElement("p",null,r.a.createElement("span",{className:"purple"},"Purple")," accesses"," ",r.a.createElement("span",{className:"green"},"Green"),",",r.a.createElement("span",{className:"gold"},"Gold"),",",r.a.createElement("span",{className:"orange"},"Orange"),",and"," ",r.a.createElement("span",{className:"purple"},"Purple")))))),r.a.createElement("div",{className:"content-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",{className:"grey title-greeting"},"UTD Parking"),r.a.createElement("p",{className:"grey"},"Live parking data at your fingertips"),r.a.createElement("div",{className:"row"},r.a.createElement(v,{color:"grey"}),r.a.createElement(v,{color:"grey"}),r.a.createElement(v,{color:"grey"}),r.a.createElement(v,{color:"grey"})))),r.a.createElement("div",{id:"info-text",className:"bottom-text row grey"},r.a.createElement("div",{className:"col"},r.a.createElement("p",null,"But, how does it work?"))))),r.a.createElement(S,null))}}]),a}(n.Component)),M=a(27),C=a(42),A=a.n(C),P=a(84),j=a(160),x=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a.Body,null,r.a.createElement("div",{className:"ps-card-body",style:{padding:"0rem 1.25rem"}},r.a.createElement("div",{className:"text",style:{textAlign:"center"}},r.a.createElement("p",{className:"main-text"},"FULL"),r.a.createElement("p",{className:"sub-text"},"No available parking spots at this time"))),r.a.createElement("div",{className:"ps-card-footer"},r.a.createElement("hr",{className:"ps-card-hr"}),r.a.createElement("p",null,this.props.structure))))}}]),a}(n.Component),U=(a(142),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={index:0,currentPermit:{id:-1,spots:-1,structure:"ps1",color:"green",level:-1},colorBlindMode:!1},e.handleIncrementUpdate=function(){e.setState((function(e,t){return{index:e.index+1,currentPermit:{id:t.dataArr[e.index+1].id,spots:t.dataArr[e.index+1].spots,structure:t.dataArr[e.index+1].structure,color:t.dataArr[e.index+1].color,level:t.dataArr[e.index+1].level,spot_change:t.dataArr[e.index+1].spot_change}}}))},e.handleDecrementUpdate=function(){e.setState((function(e,t){return{index:e.index-1,currentPermit:{id:t.dataArr[e.index-1].id,spots:t.dataArr[e.index-1].spots,structure:t.dataArr[e.index-1].structure,color:t.dataArr[e.index-1].color,level:t.dataArr[e.index-1].level,spot_change:t.dataArr[e.index-1].spot_change}}}))},e.getSpotChangeJSX=function(e){return isNaN(e)||0===e?r.a.createElement("div",{className:"percent-change-container"},r.a.createElement("p",{className:"percent-change-text"},r.a.createElement("span",{className:"grey"},"-"))):e>0?r.a.createElement("div",{className:"percent-change-container"},r.a.createElement("p",{className:"percent-change-text"},r.a.createElement("span",{className:"percent-change-green"},"+",e,"%")," space availability")):r.a.createElement("div",{className:"percent-change-container"},r.a.createElement("p",{className:"percent-change-text"},r.a.createElement("span",{className:"percent-change-red"},e,"%")," space availability"))},e.getParkingStructureLink=function(e){return"PS1"===e?"https://goo.gl/maps/KHvbiG6WtTbbTKSa9":"PS3"===e?"https://goo.gl/maps/kFAHUwgEb1NwTAbv5":"https://goo.gl/maps/jcU9wcRKYS6MoVuY8"},e}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(){-1===this.state.currentPermit.id&&this.props.dataArr.length>0&&this.setState((function(e,t){return{currentPermit:{id:t.dataArr[0].id,spots:t.dataArr[0].spots,structure:t.dataArr[0].structure,color:t.dataArr[0].color,level:t.dataArr[0].level,spot_change:t.dataArr[0].spot_change}}}));var e="true"===localStorage.getItem("color-blind-status");this.state.colorBlindMode!==e&&this.setState({colorBlindMode:e})}},{key:"render",value:function(){var e=this.state.currentPermit,t=e.spots,a=e.structure,n=e.color,o=e.level,l=e.spot_change;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{className:"ps-card"},0!==this.props.dataArr.length?r.a.createElement(j.a.Body,null,r.a.createElement("div",{className:"text-muted ps-card-header"},r.a.createElement("div",{className:"best-choice-container"},0===this.state.index?r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fas fa-star"})," ",r.a.createElement("span",null,"BEST CHOICE")):""),r.a.createElement("div",{className:"icon-container"},r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:this.getParkingStructureLink(a)},r.a.createElement("i",{className:"fas fa-map-marked-alt fa-lg"})))),r.a.createElement("div",{className:"ps-card-body"},0!==this.state.index?r.a.createElement("div",{onClick:this.handleDecrementUpdate,className:"pointer arrow-container"},r.a.createElement("i",{className:"arrow fas fa-angle-left"})):r.a.createElement("div",{className:"arrow-container"},r.a.createElement("i",{className:"grey arrow fas fa-angle-left"})),r.a.createElement("div",{className:"text"},r.a.createElement("p",{className:"main-text"},t," SPACES"),r.a.createElement("p",{className:"sub-text"},"Level ",o),this.state.colorBlindMode?r.a.createElement("p",{className:"sub-text border-"+n},n.charAt(0).toUpperCase()+n.slice(1)):r.a.createElement("p",{className:"sub-text"},"Color ",r.a.createElement("i",{className:"fas fa-circle "+n})),this.getSpotChangeJSX(l)),this.state.index!==this.props.dataArr.length-1?r.a.createElement("div",{onClick:this.handleIncrementUpdate,className:"arrow-container pointer"},r.a.createElement("i",{className:"arrow fas fa-angle-right"})):r.a.createElement("div",{className:"arrow-container"},r.a.createElement("i",{className:"grey arrow fas fa-angle-right"}))),r.a.createElement("div",{className:"ps-card-footer"},r.a.createElement("hr",{className:"ps-card-hr"}),r.a.createElement("p",null,a))):r.a.createElement(x,{structure:this.props.structure})))}}]),a}(n.Component)),B=(a(143),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={structures:{ps1:{dataArr:[]},ps3:{dataArr:[]},ps4:{dataArr:[]}},color:""},e.handleHTTPGetPS=function(){console.log("HTTP CALL: GET /parkingStructures/"),A.a.get("https://utd-parking.herokuapp.com/parkingStructures").then((function(t){200===t.status?e.updatePSFromHTTPResponse(t):console.log("GET /parkingStructures/ "+t.status)})).catch((function(e){console.log(e)}))},e.updatePSFromHTTPResponse=function(t){var a=Object(M.a)({},e.state.structures);Object.entries(a).forEach((function(e){e[1].dataArr=[]})),t.data.forEach((function(t){t.permit_category.forEach((function(n){var r=n.id,o=n.level,l=n.spots,s=n.percent_change_past_10_mins,c=e.standardizeColorLongToShort(n.color);0!==l&&e.isRelevantColor(c)&&a[t.structure].dataArr.push({id:r,color:c,level:o,spots:l,structure:t.structure.toUpperCase(),spot_change:Number((100*s).toFixed(2))})}))})),e.setState({structures:a},e.props.setPSGroupLoadedTrue)},e.isRelevantColor=function(t){var a=["green","gold","orange","purple"],n=a.indexOf(e.state.color)+1;return(a=a.slice(0,n)).indexOf(t)>-1},e.standardizeColorLongToShort=function(e){switch(e){case"Green Permit":return"green";case"Gold Permit":return"gold";case"Orange Permit":return"orange";case"Purple Permit":return"purple";case"Pay-By-Space":return"payBySpace";default:return"green"}},e.standardizeColorShortToLong=function(e){switch(e){case"green":return"Green%20Permit";case"gold":return"Gold%20Permit";case"orange":return"Orange%20Permit";case"purple":return"Purple%20Permit";case"pay-by-space":return"Pay-By-Space";default:return"Green%20Permit"}},e.getSortedDataArr=function(e){var t=Object(P.a)(e);return(t=t.map((function(e){var t=.4*e.spot_change,a=e.spots/250*.25,n=0;switch(e.color){case"purple":n=1;break;case"orange":n=.75;break;case"gold":n=.5;break;case"green":n=.25;break;default:n=0}return n*=.35,Object(M.a)(Object(M.a)({},e),{},{score:a+n+t})}))).sort((function(e,t){return e.score<t.score?1:-1})),t},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("color");e&&this.setState({color:e}),this.handleHTTPGetPS()}},{key:"componentDidUpdate",value:function(){for(var e=[62,63],t=e[0];t<=e[1];t++)this.props.timeUpdated.ps1.elapsedTime===t&&this.handleHTTPGetPS()}},{key:"render",value:function(){var e=this.state.structures,t=e.ps1,a=e.ps3,n=e.ps4,o=this.getSortedDataArr(t.dataArr),l=this.getSortedDataArr(a.dataArr),s=this.getSortedDataArr(n.dataArr);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card-group-container"},r.a.createElement(U,{dataArr:o,structure:"PS1"}),r.a.createElement(U,{dataArr:l,structure:"PS3"}),r.a.createElement(U,{dataArr:s,structure:"PS4"})))}}]),a}(n.Component)),L=a(158),G=(a(144),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={updateClientTimerInterval:"",timerIsLoaded:!1},e.getTimeText=function(t){if(t>63)return r.a.createElement(L.a,{color:"danger"},"Something went wrong. Try refreshing the page");var a=63-t,n=e.standardizeSecondsToMinutes(a);return a<=3||0===a||a>=60?r.a.createElement(L.a,{color:"success"},"Live update in ",n):r.a.createElement(L.a,{color:"warning"},"Live update in ",n)},e.standardizeSecondsToMinutes=function(e){return e<60?e+" seconds":0===e||e>=60?"less than 1 second":"-"},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.getTimeText(this.props.timeUpdated.ps1.elapsedTime);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"time-text-container"},r.a.createElement("div",{className:"time-text"},e)))}}]),a}(n.Component)),D=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"it's offline broooo"),r.a.createElement("h3",null,"like from 8am to 8pm broo ",r.a.createElement("i",{className:"fas fa-heart"})))}}]),a}(n.Component),I=(a(145),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null)}}]),a}(n.Component)),F=(a(146),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={timeUpdated:{ps1:{utc_updated_time:"",elapsedTime:-1},ps3:{utc_updated_time:"",elapsedTime:-1},ps4:{utc_updated_time:"",elapsedTime:-1}},timerLoaded:!1,psGroupLoaded:!1},e.updateTimeUpdatedInState=function(){if(e.props.onlineStatus){var t=Object(M.a)({},e.state.timeUpdated);Object.entries(e.state.timeUpdated).forEach((function(a){var n=a[0],r=new Date(a[1].utc_updated_time);t[n].elapsedTime=e.computeElapsedTime(r)})),e.setState({timeUpdated:t,timerLoaded:!0})}},e.computeElapsedTime=function(e){var t=new Date;return parseInt((t-e)/1e3,10)},e.handleHTTPGetUpdateTime=function(){console.log("HTTP CALL: GET /parkingStructures/timeUpdated"),A.a.get("https://utd-parking.herokuapp.com/parkingStructures/timeUpdated").then((function(t){200===t.status?e.updateTimeFromHTTPResponse(t):console.log("GET /parkingStructures/timeUpdated "+t.status)})).catch((function(e){console.log(e)}))},e.updateTimeFromHTTPResponse=function(t){var a=Object(M.a)({},e.state.timeUpdated);Object.entries(t.data).forEach((function(e){var t=e[0],n=new Date(e[1]);a[t].utc_updated_time=n})),e.setState({timeUpdated:a})},e.handleResetElapsedTime=function(){var t=Object(M.a)({},e.state.timeUpdated);t.ps1.elapsedTime=0,t.ps3.elapsedTime=0,t.ps4.elapsedTime=0,e.setState({timeUpdated:t})},e.setPSGroupLoadedTrue=function(){e.setState({psGroupLoaded:!0})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.setState({updateTimeUpdatedInStateInterval:setInterval(this.updateTimeUpdatedInState,1e3)}),this.handleHTTPGetUpdateTime()}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.updateTimeUpdatedInStateInterval)}},{key:"componentDidUpdate",value:function(){for(var e=[62,63],t=e[0];t<=e[1];t++)this.state.timeUpdated.ps1.elapsedTime===t&&(this.handleResetElapsedTime(),this.handleHTTPGetUpdateTime())}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"parking-info-page-container"},this.props.onlineStatusLoaded&&this.state.timerLoaded&&this.state.psGroupLoaded?"":r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"spinner-container"},r.a.createElement(p.a,{animation:"border",role:"status"}))),this.props.onlineStatus?r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null),r.a.createElement("div",{className:"parking-info-container"},r.a.createElement("div",{className:"parking-info-header"},r.a.createElement("div",{className:"back-route-container"},r.a.createElement("a",{href:"/UTD-Parking-Assist/",className:"remove-decoration"},r.a.createElement("i",{className:"fas fa-chevron-left back-route-button"}))),r.a.createElement(G,{timeUpdated:this.state.timeUpdated})),r.a.createElement(B,{setPSGroupLoadedTrue:this.setPSGroupLoadedTrue,timeUpdated:this.state.timeUpdated,onResetElapsedTime:this.handleResetElapsedTime}),r.a.createElement(I,null))):r.a.createElement(D,null)))}}]),a}(n.Component)),_=(a(147),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={color:"",onlineHours:{fromHour:"0",toHour:"25"},onlineStatus:!1,onlineStatusLoaded:!1},e.handleChangeColor=function(t){e.setState({color:t})},e.handleChangeColorDefault=function(){e.setState({color:""})},e.updateOnlineStatus=function(){e.checkOnlineStatus()?e.setState({onlineStatus:!0,onlineStatusLoaded:!0}):e.setState({onlineStatus:!1,onlineStatusLoaded:!0})},e.checkOnlineStatus=function(){var t=(new Date).getHours(),a=e.state.onlineHours,n=a.fromHour,r=a.toHour;return t>=n&&t<r},e.getGreeting=function(){var t=(new Date).getHours();return t>=20&&t<=23||(0===t||24===t)&&t<=5?e.getNightMessage():t>=6&&t<=11?e.getMorningMessage():t>=12&&t<=16?e.getAfternoonMessage():e.getEveningMessage()},e.getNightMessage=function(){return r.a.createElement("i",{className:"fas fa-moon"})},e.getMorningMessage=function(){return r.a.createElement("i",{className:"fas fa-sun"})},e.getAfternoonMessage=function(){return r.a.createElement("i",{className:"fas fa-sun"})},e.getEveningMessage=function(){return r.a.createElement("i",{className:"fas fa-moon"})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){setInterval(this.updateOnlineStatus,900)}},{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/UTD-Parking-Assist/"},r.a.createElement(w,{onlineStatus:this.state.onlineStatus,changeColor:this.handleChangeColor,changeColorDefault:this.handleChangeColorDefault,color:this.state.color,onlineStatusLoaded:this.state.onlineStatusLoaded,getGreeting:this.getGreeting})),r.a.createElement(d.a,{path:"/UTD-Parking-Assist/parkingInfoPage"},r.a.createElement(F,{onlineStatus:this.state.onlineStatus,onlineStatusLoaded:this.state.onlineStatusLoaded}))))}}]),a}(n.Component));l.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},47:function(e,t,a){},68:function(e,t,a){},87:function(e,t,a){e.exports=a(148)},92:function(e,t,a){},93:function(e,t,a){},96:function(e,t,a){},99:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.2a746986.chunk.js.map