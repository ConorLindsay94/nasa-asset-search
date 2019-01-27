(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return!!e.find(function(e){return e.value})}},135:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return{type:"SET_QUERY_STRING",payload:e}}},189:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=n(460),i=(a=u)&&a.__esModule?a:{default:a};t.default=function(e){var t=e;return t.find(function(e){return"object"===(void 0===e?"undefined":r(e))})||(t=["image","audio","video"].map(function(e){return{type:e,value:t.some(function(t){return t===e})||!1,prettyName:i.default.titleCase(e)}})),[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t))}},192:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(3)),r=i(n(1)),u=i(n(134));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){return a.default.createElement("div",{className:"input-wrapper"},a.default.createElement("input",{id:"nasa-home-search",type:"text",className:"input-wrapper__input",onChange:e.handleInputChange,value:e.searchText||""}),a.default.createElement("button",{type:"submit",className:e.searchText&&(0,u.default)(e.mediaTypes)?"input-wrapper__submit input-wrapper__submit--active":"input-wrapper__submit",disabled:e.searchText&&(0,u.default)(e.mediaTypes)?"":"disabled"},a.default.createElement("svg",null,a.default.createElement("title",null,"Search Icon"),a.default.createElement("desc",null,"A magnifying glass icon to indicate button is to be used to search."),a.default.createElement("use",{xlinkHref:"#icon-search"}))))}o.propTypes={handleInputChange:r.default.func,checkboxSelected:r.default.func,searchText:r.default.string,mediaTypes:r.default.array.isRequired},t.default=o},193:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(t){return function(n,i){return(0,a.default)("search",t).then(function(e){return n((0,u.default)(e.collection))}).then(function(){var t=i().results.results,o=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t.items.map(function(e){return(0,a.default)("asset/"+(0,r.default)(e.data[0].nasa_id)).catch(function(e){return e})})));e.all(o).then(function(e){e.forEach(function(e){if(e.collection){var n=(0,r.default)(e.collection.href.split("asset/")[1],!0),a=t.items.find(function(e){return e.data[0].nasa_id===n}),u=t.items.findIndex(function(e){return e.data[0].nasa_id===n});a&&(a.mediaLinks=e.collection,t.items.splice(u,1,a))}}),t.items=t.items.filter(function(e){return e.mediaLinks}),n((0,u.default)(Object.assign({},t)))})})}};var a=i(n(482)),r=i(n(503)),u=i(n(93));function i(e){return e&&e.__esModule?e:{default:e}}}).call(this,n(41))},201:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(n(3)),r=u(n(1));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){return a.default.createElement("div",{className:"nasa-checkbox"},a.default.createElement("input",{id:e.id,type:"checkbox",onChange:function(t){return e.handleCheckboxChange(t,e.typeText)},checked:e.type,className:"hidden"}),a.default.createElement("label",{className:"checkbox-label",htmlFor:e.id},e.label))}i.propTypes={id:r.default.string.isRequired,label:r.default.string.isRequired,handleCheckboxChange:r.default.func,typeText:r.default.string.isRequired,type:r.default.bool.isRequired},t.default=i},202:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return{type:"SET_MEDIA_TYPES",payload:e}}},241:function(e,t,n){"use strict";n(242);var a=s(n(3)),r=s(n(446)),u=n(76),i=s(n(454)),o=s(n(477));n(639);var l=s(n(640));function s(e){return e&&e.__esModule?e:{default:e}}var c={filename:n.p+"./img/svg-sprite.svg"};(0,l.default)(c),r.default.render(a.default.createElement(u.Provider,{store:i.default},a.default.createElement(o.default,null)),document.getElementById("root"))},441:function(e,t){},454:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(98),r=o(n(455)),u=o(n(456)),i=o(n(457));function o(e){return e&&e.__esModule?e:{default:e}}var l=a.compose;"undefined"!=typeof window&&"function"==typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&(l=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__),t.default=(0,a.createStore)(i.default,l((0,a.applyMiddleware)(r.default,u.default)))},457:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(98),r=o(n(458)),u=o(n(459)),i=o(n(476));function o(e){return e&&e.__esModule?e:{default:e}}t.default=(0,a.combineReducers)({results:r.default,search:u.default,item:i.default})},458:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case"SET_RESULTS":return Object.assign({},e,{results:t.payload});default:return e}}},459:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case"SET_QUERY_STRING":return Object.assign({},e,{queryString:t.payload});case"SET_MEDIA_TYPES":var n=(0,u.default)(t.payload);return Object.assign({},e,{mediaTypes:n});default:return e}};var a,r=n(189),u=(a=r)&&a.__esModule?a:{default:a}},476:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case"SET_ACTIVE_ITEM":return Object.assign({},e,{activeItem:t.payload});default:return e}}},477:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(3),u=f(r),i=n(238),o=f(n(479)),l=f(n(528)),s=f(n(530)),c=f(n(534));function f(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"render",value:function(){return u.default.createElement("main",{className:"nasa-app"},u.default.createElement(i.BrowserRouter,null,u.default.createElement(r.Fragment,null,u.default.createElement(o.default,null),u.default.createElement(i.Switch,null,u.default.createElement(i.Route,{path:"/home",component:l.default}),u.default.createElement(i.Route,{path:"/search",component:s.default}),u.default.createElement(i.Route,{path:"/asset/:type/:id",component:c.default}),u.default.createElement(i.Redirect,{to:"/home"})))))}}]),t}();t.default=d},479:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(76),r=n(480),u=s(n(481)),i=s(n(135)),o=s(n(193)),l=s(n(93));function s(e){return e&&e.__esModule?e:{default:e}}t.default=(0,r.withRouter)((0,a.connect)(function(e){return{queryString:e.search.queryString,mediaTypes:e.search.mediaTypes}},function(e){return{setQueryString:function(t){return e((0,i.default)(t))},searchQuery:function(t){return e((0,o.default)(t))},setResults:function(t){return e((0,l.default)(t))}}})(u.default))},481:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(3),u=s(r),i=s(n(1)),o=n(238),l=s(n(192));function s(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n.handleInputChange=n.handleInputChange.bind(n),n.handleSubmit=n.handleSubmit.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"componentDidUpdate",value:function(e){this.props.queryString!==e.queryString&&this.setState({searchText:this.props.queryString})}},{key:"handleInputChange",value:function(e){this.setState({searchText:e.target.value.length?e.target.value:null})}},{key:"handleSubmit",value:function(e){var t=this.props.mediaTypes.filter(function(e){return e.value});e.preventDefault(),this.props.setQueryString(this.state.searchText),this.props.setResults(null),this.props.history.push({pathname:"/search",search:"?query="+this.state.searchText+"&media="+t.map(function(e){return e.type}),state:{query:this.state.searchText,media:t.map(function(e){return e.type})}})}},{key:"render",value:function(){return u.default.createElement("header",{className:"header "+(this.props.queryString?"header--active":"")},u.default.createElement("div",{className:"header__logo"},u.default.createElement(o.Link,{to:"/home"},u.default.createElement("svg",null,u.default.createElement("title",null,"NasaSearch Logo"),u.default.createElement("use",{xlinkHref:"#icon-logo"})))),this.props.queryString?u.default.createElement("form",{onSubmit:this.handleSubmit,className:"header__mini-search"},u.default.createElement("div",{className:"header__mini-search__input"},u.default.createElement(l.default,{handleInputChange:this.handleInputChange,searchText:this.state.searchText,mediaTypes:this.props.mediaTypes}))):null)}}]),t}();c.propTypes={mediaTypes:i.default.array,queryString:i.default.string},t.default=c},482:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var a,r,u=o(n(483)),i=o(n(502));function o(e){return e&&e.__esModule?e:{default:e}}t.default=(a=regeneratorRuntime.mark(function e(t,n){var a,r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="http"+(i.default.https?"s":"")+"://"+i.default.hostname+"/"+t,n&&(r="?",Object.keys(n).forEach(function(e){r+=e+"="+n[e]+"&"}),a+=r),e.next=4,(0,u.default)({url:a,method:"get"});case 4:return o=e.sent,e.abrupt("return",o.data);case 6:case"end":return e.stop()}},e,void 0)}),r=function(){var t=a.apply(this,arguments);return new e(function(n,a){return function r(u,i){try{var o=t[u](i),l=o.value}catch(e){return void a(e)}if(!o.done)return e.resolve(l).then(function(e){r("next",e)},function(e){r("throw",e)});n(l)}("next")})},function(e,t){return r.apply(this,arguments)})}).call(this,n(41))},502:function(e){e.exports={https:!0,hostname:"images-api.nasa.gov"}},503:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(504),u=(a=r)&&a.__esModule?a:{default:a};t.default=function(e,t){return t?u.default.decode(e):e.replace(/ /g,"%20")}},526:function(e,t){},527:function(e,t){},528:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(76),r=l(n(529)),u=l(n(135)),i=l(n(202)),o=l(n(93));function l(e){return e&&e.__esModule?e:{default:e}}t.default=(0,a.connect)(function(e){return{mediaTypes:e.search.mediaTypes}},function(e){return{setQueryString:function(t){return e((0,u.default)(t))},setMediaTypes:function(t){return e((0,i.default)(t))},setResults:function(t){return e((0,o.default)(t))}}})(r.default)},529:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(3),u=c(r),i=c(n(1)),o=c(n(201)),l=c(n(192)),s=c(n(134));function c(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={mediaTypes:[{type:"image",value:!0,prettyName:"Images"},{type:"audio",value:!1,prettyName:"Audio"},{type:"video",value:!1,prettyName:"Videos"}]},e.handleInputChange=e.handleInputChange.bind(e),e.handleCheckboxChange=e.handleCheckboxChange.bind(e),e.handleSubmit=e.handleSubmit.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"componentDidMount",value:function(){this.props.setQueryString(null),this.props.mediaTypes&&this.setState({mediaTypes:this.props.mediaTypes})}},{key:"handleInputChange",value:function(e){this.setState({searchText:e.target.value.length?e.target.value:null})}},{key:"handleCheckboxChange",value:function(e,t){var n=this,a=this.state.mediaTypes,r=a.find(function(e){return e.type===t}),u=a.findIndex(function(e){return e.type===t});r.value=e.target.checked,a.splice(u,1,r),this.setState({mediaTypes:a},function(){n.props.setMediaTypes([].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(a)))})}},{key:"handleSubmit",value:function(e){var t=this.state.mediaTypes.filter(function(e){return e.value});e.preventDefault(),this.props.history.push({pathname:"/search",search:"?query="+this.state.searchText+"&media="+t.map(function(e){return e.type}),state:{query:this.state.searchText,media:t.map(function(e){return e.type})}})}},{key:"render",value:function(){var e=this;return u.default.createElement("section",{className:"home-search"},u.default.createElement("form",{className:"home-search__form",onSubmit:this.handleSubmit},u.default.createElement("label",{htmlFor:"nasa-home-search",className:"home-search__form-label"},"What would you like to search for?"),u.default.createElement(l.default,{handleInputChange:this.handleInputChange,searchText:this.state.searchText,mediaTypes:this.state.mediaTypes}),u.default.createElement("div",{className:"home-search__form-checkboxes"},this.state.mediaTypes.map(function(t){return u.default.createElement("div",{className:"home-search__form-checkboxes__checkbox",key:t.type},u.default.createElement(o.default,{id:"nasa-"+t.type,label:t.prettyName,handleCheckboxChange:e.handleCheckboxChange,type:t.value,typeText:t.type}))})),u.default.createElement("div",{className:"home-search__form-message"},u.default.createElement("p",{className:"error "+((0,s.default)(this.state.mediaTypes)?"":"error--display")},"You must choose at least one type of asset."))))}}]),t}();f.propTypes={mediaTypes:i.default.array},t.default=f},530:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(76),r=c(n(531)),u=c(n(193)),i=c(n(135)),o=c(n(202)),l=c(n(533)),s=c(n(93));function c(e){return e&&e.__esModule?e:{default:e}}t.default=(0,a.connect)(function(e){return{queryString:e.search.queryString,mediaTypes:e.search.mediaTypes,results:e.results.results}},function(e){return{searchQuery:function(t){return e((0,u.default)(t))},setQueryString:function(t){return e((0,i.default)(t))},setMediaTypes:function(t){return e((0,o.default)(t))},setActiveItem:function(t){return e((0,l.default)(t))},setResults:function(t){return e((0,s.default)(t))}}})(r.default)},531:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(3),u=f(r),i=f(n(1)),o=f(n(189)),l=f(n(532)),s=f(n(134)),c=f(n(201));function f(e){return e&&e.__esModule?e:{default:e}}function d(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleCheckboxChange=n.handleCheckboxChange.bind(n),n.handleClick=n.handleClick.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"componentDidMount",value:function(){this.fetchResults(!0)}},{key:"componentDidUpdate",value:function(e){this.props.location.state.media===e.location.state.media&&this.props.location.state.query===e.location.state.query||this.fetchResults()}},{key:"fetchResults",value:function(e){var t=this;if(this.props.location.state){var n=this.props.mediaTypes?this.props.mediaTypes:(0,o.default)(this.props.location.state.media),a=this.props.queryString||this.props.location.state.query,r=n.filter(function(e){return e.value});this.props.setResults(null),this.props.setQueryString(a),this.props.setMediaTypes([].concat(d(n))),setTimeout(function(){t.props.searchQuery({q:a,media_type:r.map(function(e){return e.type})})},e?500:0)}else this.props.history.push({pathname:"/home"})}},{key:"handleCheckboxChange",value:function(e,t){var n=this.props.mediaTypes,a=n.find(function(e){return e.type===t}),r=n.findIndex(function(e){return e.type===t});a.value=e.target.checked,n.splice(r,1,a),this.props.setMediaTypes([].concat(d(n))),(0,s.default)(n)&&this.fetchResults()}},{key:"handleClick",value:function(e){this.props.setActiveItem(e),this.props.history.push({pathname:"/asset/"+e.data[0].media_type+"/"+e.data[0].nasa_id})}},{key:"render",value:function(){var e=this,t=this.props,n=t.results,a=t.mediaTypes;return u.default.createElement("section",{className:"search"},a&&u.default.createElement("div",{className:"search__filter"},u.default.createElement("h2",null,"Filter"),u.default.createElement("div",{className:"search__filter__checkbox-wrapper"},u.default.createElement("div",{className:"search__filter__checkboxes"},a.map(function(t){return u.default.createElement("div",{className:"search__filter__checkboxes-checkbox",key:t.type},u.default.createElement(c.default,{id:"nasa-"+t.type,label:t.prettyName,handleCheckboxChange:e.handleCheckboxChange,type:t.value,typeText:t.type}))})),u.default.createElement("div",{className:"search__filter__message"},u.default.createElement("p",{className:"error "+((0,s.default)(a)?"":"error--display")},"You must choose at least one type of asset.")))),u.default.createElement("div",{className:"search__results"},n?n.items.length?n.items.map(function(t){return u.default.createElement("div",{className:"search__results-link",key:t.data[0].nasa_id,onClick:function(){return e.handleClick(t)}},u.default.createElement("article",{className:"search__results__item"},(0,l.default)(t),u.default.createElement("label",null,t.data[0].title)))}):u.default.createElement("p",{className:"search__results__message"},"Sorry, there are no results for this query."):u.default.createElement("div",{className:"spinner"})))}}]),t}();p.propTypes={queryString:i.default.string,mediaTypes:i.default.array,results:i.default.shape({items:i.default.array})},t.default=p},532:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(3),u=(a=r)&&a.__esModule?a:{default:a};t.default=function(e){switch(e.data[0].media_type){case"image":return u.default.createElement("div",{className:"search__results__item-image",style:{backgroundImage:"url("+e.links[0].href+")"}});case"audio":return u.default.createElement("div",{className:"search__results__item-image",style:{backgroundColor:"#000000"}},u.default.createElement("svg",null,u.default.createElement("title",null,"Audio Media"),u.default.createElement("desc",null,"An audio icon to indicate that the piece of media is of type audio."),u.default.createElement("use",{xlinkHref:"#icon-audio"})));case"video":return e.mediaLinks&&u.default.createElement("div",{className:"search__results__item-image",style:{backgroundImage:'url("'+e.mediaLinks.items.find(function(e){return e.href.indexOf(".png")>-1}).href+'")'}},u.default.createElement("svg",null,u.default.createElement("title",null,"Video Media"),u.default.createElement("desc",null,"A video icon to indicate that the piece of media is of type video."),u.default.createElement("use",{xlinkHref:"#icon-video"})));default:return null}}},533:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return{type:"SET_ACTIVE_ITEM",payload:e}}},534:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(76),u=n(535),i=(a=u)&&a.__esModule?a:{default:a};t.default=(0,r.connect)(function(e){return{activeItem:e.item.activeItem}},null)(i.default)},535:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(3),u=l(r),i=l(n(1)),o=n(536);function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),this.props.activeItem||this.props.history.push({pathname:"/home"})}},{key:"determineMedia",value:function(e){switch(e.data[0].media_type){case"image":return u.default.createElement("div",{className:"view-asset__asset__image",style:{backgroundImage:"url("+e.mediaLinks.items.find(function(e){return e.href.indexOf(".png")>-1||e.href.indexOf(".jpg")>-1}).href+")"}});case"audio":return u.default.createElement("audio",{controls:!0,src:e.mediaLinks.items.find(function(e){return e.href.indexOf(".mp3")>-1}).href},"Your browser does not support the",u.default.createElement("code",null,"audio")," element.");case"video":return u.default.createElement("video",{controls:!0,src:e.mediaLinks.items.find(function(e){return e.href.indexOf(".mp4")>-1}).href},"Your browser does not support the",u.default.createElement("code",null,"video")," element.");default:return null}}},{key:"render",value:function(){var e=this.props.activeItem;return u.default.createElement("section",{className:"view-asset"},e&&u.default.createElement(r.Fragment,null,u.default.createElement("div",{className:"view-asset__title"},u.default.createElement("h1",null,e.data[0].title)),u.default.createElement("div",{className:"view-asset__meta"},u.default.createElement("div",{className:"view-asset__meta-date"},u.default.createElement("label",{htmlFor:"asset-date-created"},u.default.createElement("strong",null,"Date Created"),": "),u.default.createElement("span",{id:"asset-date-created"},(0,o.format)(e.data[0].date_created,"DD/MM/YYYY")))),u.default.createElement("div",{className:"view-asset__asset"},this.determineMedia(e)),u.default.createElement("div",{className:"view-asset__desc"},u.default.createElement("p",{dangerouslySetInnerHTML:{__html:e.data[0].description}}))))}}]),t}();s.propTypes={activeItem:i.default.shape()},t.default=s},639:function(e,t,n){},93:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return{type:"SET_RESULTS",payload:e}}}},[[241,1,2]]]);