(this["webpackJsonputd-parking-assist"]=this["webpackJsonputd-parking-assist"]||[]).push([[0],{34:function(e,t,a){},41:function(e,t,a){},59:function(e,t,a){e.exports=a(98)},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),s=a.n(o);a(64),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(5),c=a(6),i=a(8),u=a(7),d=a(26),m=a(20),p=a(102),h=(a(65),a(34),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.color,a=e.onClick,n=e.handleMouseOver,o=e.handleMouseLeave;return r.a.createElement(r.a.Fragment,null,"grey"===t?r.a.createElement("div",{className:t+"-background square"}):r.a.createElement("div",{id:"Tooltip-"+t,onClick:function(){a(t)},onMouseOver:function(){n(t)},onMouseLeave:function(){o()},className:t+"-background square pointer"}))}}]),a}(n.Component)),f=a(103),g=a(100);a(66);var v=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{centered:!0,show:e.showModal,onHide:e.onModalClose,animation:!0},r.a.createElement(f.a.Header,{closeButton:!0}),r.a.createElement(f.a.Body,null,r.a.createElement("div",{className:"modal-body-text"},"You have ","orange"===e.color?"an":"a"," ",e.color," permit?")),r.a.createElement(f.a.Footer,null,r.a.createElement(d.b,{to:"/UTD-Parking-Assist/parkingInfoPage"},r.a.createElement(g.a,{variant:"primary",className:e.color+"-button confirm-button",onClick:e.onModalConfirm},r.a.createElement("i",{className:"fas fa-check fa-sm"}))))))},E=(a(72),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"footer"},r.a.createElement("div",null,"Made with ",r.a.createElement("i",{className:"fas fa-heart"})," by"," ",r.a.createElement("a",{href:"https://github.com/lusterane",rel:"noopener noreferrer",target:"_blank"},"Toby"),".")))}}]),a}(n.Component)),S=a(101),b=(a(73),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={},e.serverWarningAlert=function(){return r.a.createElement(S.a,{style:{textAlign:"center"},variant:"warning"},r.a.createElement("i",{className:"fas fa-exclamation-circle fa-lg"}),"To conserve server loads, servers will rest outside of 8:00AM - 8:00PM CST")},e.serverDownAlert=function(){return r.a.createElement(S.a,{style:{textAlign:"center"},variant:"danger"},r.a.createElement("i",{class:"fas fa-exclamation-triangle fa-lg"}),"Servers are down. I'm either broke or this is unexpected. Kindly"," ",r.a.createElement("a",{href:"mailto: tobychow98@gmail.com?subject=UTD Parking Assist: Website Issue"},"contact me")," ","if it's the latter.")},e.getServerTextFromProps=function(){var t=e.props.type;return"server-warning"===t?e.serverWarningAlert():"server-down"===t?e.serverDownAlert():void 0},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header-container"},this.getServerTextFromProps()))}}]),a}(n.Component)),y=(a(74),a(41),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1},e.handleModalClose=function(){e.setState({showModal:!1})},e.handleModalShow=function(t){e.setState({showModal:!0})},e.handleModalConfirm=function(){localStorage.setItem("color",e.props.color),e.setState({showModal:!1})},e.handleMouseLeave=function(){e.state.showModal||e.props.changeColorDefault()},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.props.onlineStatusLoaded?"":r.a.createElement("div",{className:"spinner-container"},r.a.createElement(p.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))),this.props.onlineStatus?r.a.createElement("div",{className:"container homepage-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",{className:this.props.color+" title-greeting"},"UTD Parking"),r.a.createElement("div",{className:"row"},r.a.createElement(h,{color:"green",onClick:function(){e.handleModalShow(e.props.color)},handleMouseOver:this.props.changeColor,handleMouseLeave:this.handleMouseLeave}),r.a.createElement(h,{color:"gold",onClick:function(){e.handleModalShow(e.props.color)},handleMouseOver:this.props.changeColor,handleMouseLeave:this.handleMouseLeave}),r.a.createElement(h,{color:"orange",onClick:function(){e.handleModalShow(e.props.color)},handleMouseOver:this.props.changeColor,handleMouseLeave:this.handleMouseLeave}),r.a.createElement(h,{color:"purple",onClick:function(){e.handleModalShow(e.props.color)},handleMouseOver:this.props.changeColor,handleMouseLeave:this.handleMouseLeave})))),r.a.createElement(v,{color:this.props.color,showModal:this.state.showModal,onModalShow:this.handleModalShow,onModalClose:this.handleModalClose,onModalConfirm:this.handleModalConfirm})):r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{type:"server-warning"}),r.a.createElement("div",{className:"container homepage-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h1",{className:"grey title-greeting"},"UTD Parking"),r.a.createElement("div",{className:"row"},r.a.createElement(h,{color:"grey"}),r.a.createElement(h,{color:"grey"}),r.a.createElement(h,{color:"grey"}),r.a.createElement(h,{color:"grey"})))))),")}",r.a.createElement(E,null))}}]),a}(n.Component)),T=a(21),O=a(31),k=a.n(O),w=a(56),N=a(104),j=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a.Body,null,r.a.createElement("div",{className:"ps-card-body",style:{padding:"0rem 1.25rem"}},r.a.createElement("div",{className:"text",style:{textAlign:"center"}},r.a.createElement("p",{className:"main-text"},"FULL"),r.a.createElement("p",{className:"sub-text"},"No available parking spots at this time"))),r.a.createElement("div",{className:"ps-card-footer"},r.a.createElement("hr",{className:"ps-card-hr"}),r.a.createElement("p",null,this.props.structure))))}}]),a}(n.Component),C=(a(92),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={index:0,currentPermit:{id:-1,spots:-1,structure:"ps1",color:"green",level:-1}},e.handleIncrementIndex=function(){e.setState({index:e.state.index+1})},e.handleDecrementIndex=function(){e.setState({index:e.state.index-1})},e.updateCurrentPermit=function(){var t=0!==e.props.dataArr.length?e.props.dataArr[e.state.index]:{id:-1,spots:-1,color:"green",level:-1},a=t.id,n=t.spots,r=t.structure,o=t.color,s=t.level;e.setState({currentPermit:{id:a,spots:n,structure:r,color:o,level:s}})},e}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.index===this.state.index&&e==this.props||this.updateCurrentPermit()}},{key:"render",value:function(){var e=this.state.currentPermit,t=(e.id,e.spots),a=e.structure,n=e.color,o=e.level;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{className:"ps-card"},0!==this.props.dataArr.length?r.a.createElement(N.a.Body,null,0===this.state.index?r.a.createElement("div",{className:"text-muted ps-card-header"},r.a.createElement("i",{className:"fas fa-star"})," Recommended Choice"):"",r.a.createElement("div",{className:"ps-card-body"},0!==this.state.index?r.a.createElement("div",{onClick:this.handleDecrementIndex,className:"pointer arrow-container"},r.a.createElement("i",{className:"arrow fas fa-angle-left"})):r.a.createElement("div",{className:"arrow-container"},r.a.createElement("i",{className:"grey arrow fas fa-angle-left"})),r.a.createElement("div",{className:"text"},r.a.createElement("p",{className:"main-text"},t," SPOTS"),r.a.createElement("p",{className:"sub-text"},"Level ",o),r.a.createElement("p",{className:"sub-text"},"Color ",r.a.createElement("i",{className:"fas fa-circle "+n}))),this.state.index!==this.props.dataArr.length-1?r.a.createElement("div",{onClick:this.handleIncrementIndex,className:"arrow-container pointer"},r.a.createElement("i",{className:"arrow fas fa-angle-right"})):r.a.createElement("div",{className:"arrow-container"},r.a.createElement("i",{className:"grey arrow fas fa-angle-right"}))),r.a.createElement("div",{className:"ps-card-footer"},r.a.createElement("hr",{className:"ps-card-hr"}),r.a.createElement("p",null,a))):r.a.createElement(j,{structure:this.props.structure})))}}]),a}(n.Component)),M=(a(93),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={structures:{ps1:{dataArr:[]},ps3:{dataArr:[]},ps4:{dataArr:[]}},color:"",psGroupIsLoaded:!1},e.handleHTTPGetPS=function(){console.log("HTTP CALL: GET /parkingStructures/"),k.a.get("https://utd-parking.herokuapp.com/parkingStructures").then((function(t){200===t.status?e.updatePSFromHTTPResponse(t):console.log("GET /parkingStructures/ "+t.status)})).catch((function(e){console.log(e)}))},e.updatePSFromHTTPResponse=function(t){var a=Object(T.a)({},e.state.structures);Object.entries(a).forEach((function(e){e[1].dataArr=[]})),t.data.forEach((function(t){t.permit_category.forEach((function(n){var r=n.id,o=n.level,s=n.spots,l=e.standardizeColorLongToShort(n.color);0!==s&&e.isRelevantColor(l)&&a[t.structure].dataArr.push({id:r,color:l,level:o,spots:s,structure:t.structure.toUpperCase()})}))})),e.setState({structures:a}),e.props.setPSGroupLoadedTrue()},e.isRelevantColor=function(t){var a=["green","gold","orange","purple"],n=a.indexOf(e.state.color)+1;return(a=a.slice(0,n)).indexOf(t)>-1},e.standardizeColorLongToShort=function(e){switch(e){case"Green Permit":return"green";case"Gold Permit":return"gold";case"Orange Permit":return"orange";case"Purple Permit":return"purple";case"Pay-By-Space":return"payBySpace";default:return"green"}},e.standardizeColorShortToLong=function(e){switch(e){case"green":return"Green%20Permit";case"gold":return"Gold%20Permit";case"orange":return"Orange%20Permit";case"purple":return"Purple%20Permit";case"pay-by-space":return"Pay-By-Space";default:return"Green%20Permit"}},e.getSortedDataArr=function(e,t){var a=Object(w.a)(e),n="spots"===t?.55:.45,r=1-n;return(a=a.map((function(e){var t=e.spots/250*n,a=0;switch(e.color){case"purple":a=1;break;case"orange":a=.75;break;case"gold":a=.5;break;case"green":a=.25}return a*=r,Object(T.a)(Object(T.a)({},e),{},{score:t+a})}))).sort((function(e,t){return e.score<t.score?1:-1})),a},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("color");e&&this.setState({color:e}),this.handleHTTPGetPS()}},{key:"componentDidUpdate",value:function(){for(var e=[62,63],t=e[0];t<=e[1];t++)this.props.timeUpdated.ps1.elapsedTime===t&&this.handleHTTPGetPS()}},{key:"render",value:function(){var e=this.state.structures,t=e.ps1,a=e.ps3,n=e.ps4,o=this.getSortedDataArr(t.dataArr,"spots"),s=this.getSortedDataArr(a.dataArr,"spots"),l=this.getSortedDataArr(n.dataArr,"spots");return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card-group-container"},r.a.createElement(C,{dataArr:o,structure:"PS1"}),r.a.createElement(C,{dataArr:s,structure:"PS3"}),r.a.createElement(C,{dataArr:l,structure:"PS4"})))}}]),a}(n.Component)),P=(a(94),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={updateClientTimerInterval:"",timerIsLoaded:!1},e.getTimeText=function(e){return e<=1?"Updated a second ago":e>1&&e<60?"Updated "+e+" seconds ago":60===e?"Updated a minute ago":e>60&&e<119?"Updated a minute and "+(e-60)+" seconds ago":e>=120?"Updated a few minutes ago":void 0},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.getTimeText(this.props.timeUpdated.ps1.elapsedTime);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"time-text-container"},r.a.createElement("div",{className:"time-text"},e)))}}]),a}(n.Component)),A=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"it's offline broooo"),r.a.createElement("h3",null,"like from 8am to 8pm broo ",r.a.createElement("i",{className:"fas fa-heart"})))}}]),a}(n.Component),L=(a(95),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null)}}]),a}(n.Component)),U=(a(96),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={timeUpdated:{ps1:{utc_updated_time:"",elapsedTime:-1},ps3:{utc_updated_time:"",elapsedTime:-1},ps4:{utc_updated_time:"",elapsedTime:-1}},timerLoaded:!1,psGroupLoaded:!1,onlineStatusLoaded:!1},e.updateTimeUpdatedInState=function(){if(e.props.onlineStatus){var t=Object(T.a)({},e.state.timeUpdated);Object.entries(e.state.timeUpdated).forEach((function(a){var n=a[0],r=new Date(a[1].utc_updated_time);t[n].elapsedTime=e.computeElapsedTime(r)})),e.setState({timeUpdated:t})}},e.computeElapsedTime=function(e){var t=new Date;return parseInt((t-e)/1e3,10)},e.handleHTTPGetUpdateTime=function(){console.log("HTTP CALL: GET /parkingStructures/timeUpdated"),k.a.get("https://utd-parking.herokuapp.com/parkingStructures/timeUpdated").then((function(t){200===t.status?e.updateTimeFromHTTPResponse(t):console.log("GET /parkingStructures/timeUpdated "+t.status)})).catch((function(e){console.log(e)}))},e.updateTimeFromHTTPResponse=function(t){var a=Object(T.a)({},e.state.timeUpdated);Object.entries(t.data).forEach((function(e){var t=e[0],n=new Date(e[1]);a[t].utc_updated_time=n})),e.setState({timeUpdated:a})},e.handleResetElapsedTime=function(){var t=Object(T.a)({},e.state.timeUpdated);t.ps1.elapsedTime=0,t.ps3.elapsedTime=0,t.ps4.elapsedTime=0,e.setState({timeUpdated:t})},e.setPSGroupLoadedTrue=function(){e.setState({psGroupLoaded:!0})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.setState({updateTimeUpdatedInStateInterval:setInterval(this.updateTimeUpdatedInState,1e3)}),this.handleHTTPGetUpdateTime()}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.updateTimeUpdatedInStateInterval)}},{key:"componentDidUpdate",value:function(){-1!==this.state.timeUpdated.ps1.elapsedTime&&!1===this.state.timerLoaded&&this.setState({timerLoaded:!0}),!0===this.props.onlineStatusLoaded&&!1===this.state.onlineStatusLoaded&&this.setState({onlineStatusLoaded:!0});for(var e=[62,63],t=e[0];t<=e[1];t++)this.state.timeUpdated.ps1.elapsedTime===t&&(this.handleResetElapsedTime(),this.handleHTTPGetUpdateTime())}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"parking-info-page-container"},this.state.onlineStatusLoaded&&this.state.timerLoaded&&this.state.psGroupLoaded?"":r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"spinner-container"},r.a.createElement(p.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))),this.props.onlineStatus?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"parking-info-container"},r.a.createElement("a",{href:"/UTD-Parking-Assist/",className:"remove-decoration"},r.a.createElement("i",{className:"fas fa-chevron-left back-route-button"})),r.a.createElement(P,{timeUpdated:this.state.timeUpdated}),r.a.createElement(M,{setPSGroupLoadedTrue:this.setPSGroupLoadedTrue,timeUpdated:this.state.timeUpdated,onResetElapsedTime:this.handleResetElapsedTime}),r.a.createElement(L,null))):r.a.createElement(A,null)))}}]),a}(n.Component)),x=(a(97),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={color:"",updateOnlineStatusInterval:"",onlineHours:{fromHour:"0",toHour:"25"},onlineStatus:!1,onlineStatusLoaded:!1},e.handleChangeColor=function(t){e.setState({color:t})},e.handleChangeColorDefault=function(){e.setState({color:""})},e.updateOnlineStatus=function(){e.checkOnlineStatus()?e.setState({onlineStatus:!0}):e.setState({onlineStatus:!1}),e.setState({onlineStatusLoaded:!0})},e.checkOnlineStatus=function(){var t=(new Date).getHours(),a=e.state.onlineHours,n=a.fromHour,r=a.toHour;return t>=n&&t<r},e.getGreeting=function(){var t=(new Date).getHours();return t>=20&&t<=23||(0===t||24===t)&&t<=5?e.getNightMessage():t>=6&&t<=11?e.getMorningMessage():t>=12&&t<=16?e.getAfternoonMessage():e.getEveningMessage()},e.getNightMessage=function(){return r.a.createElement("i",{className:"fas fa-moon"})},e.getMorningMessage=function(){return r.a.createElement("i",{className:"fas fa-sun"})},e.getAfternoonMessage=function(){return r.a.createElement("i",{className:"fas fa-sun"})},e.getEveningMessage=function(){return r.a.createElement("i",{className:"fas fa-moon"})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.setState({updateOnlineStatusInterval:setInterval(this.updateOnlineStatus,900)})}},{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/UTD-Parking-Assist/"},r.a.createElement(y,{onlineStatus:this.state.onlineStatus,changeColor:this.handleChangeColor,changeColorDefault:this.handleChangeColorDefault,color:this.state.color,onlineStatusLoaded:this.state.onlineStatusLoaded,getGreeting:this.getGreeting})),r.a.createElement(m.a,{path:"/UTD-Parking-Assist/parkingInfoPage"},r.a.createElement(U,{onlineStatus:this.state.onlineStatus,onlineStatusLoaded:this.state.onlineStatusLoaded}))))}}]),a}(n.Component));s.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.0a415965.chunk.js.map