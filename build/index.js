!function e(t,n,r){function o(u,c){if(!n[u]){if(!t[u]){var s="function"==typeof require&&require;if(!c&&s)return s(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var d=n[u]={exports:{}};t[u][0].call(d.exports,function(e){var n=t[u][1][e];return o(n||e)},d,d.exports,e,t,n,r)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}var o=e("./src/store/configureStore"),i=function(e){return e&&e.__esModule?e:{default:e}}(o),u=e("./src/components/midi-info"),c=e("./src/action-creators/midi-events-action-creators"),s=r(c),a=e("./src/action-creators/midi-setup-action-creators"),d=r(a),f=e("redux"),l=(0,i.default)(),p=(0,f.bindActionCreators)(d,l.dispatch),v=(0,f.bindActionCreators)(s,l.dispatch);u.MidiInfo.init(l,v),navigator.requestMIDIAccess&&navigator.requestMIDIAccess({sysex:!1}).then(p.midiSuccess)},{"./src/action-creators/midi-events-action-creators":24,"./src/action-creators/midi-setup-action-creators":26,"./src/components/midi-info":29,"./src/store/configureStore":34,redux:19}],2:[function(e,t,n){var r=e("./_root"),o=r.Symbol;t.exports=o},{"./_root":9}],3:[function(e,t,n){function r(e){return null==e?void 0===e?s:c:a&&a in Object(e)?i(e):u(e)}var o=e("./_Symbol"),i=e("./_getRawTag"),u=e("./_objectToString"),c="[object Null]",s="[object Undefined]",a=o?o.toStringTag:void 0;t.exports=r},{"./_Symbol":2,"./_getRawTag":6,"./_objectToString":7}],4:[function(e,t,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],5:[function(e,t,n){var r=e("./_overArg"),o=r(Object.getPrototypeOf,Object);t.exports=o},{"./_overArg":8}],6:[function(e,t,n){function r(e){var t=u.call(e,s),n=e[s];try{e[s]=void 0}catch(e){}var r=c.call(e);return t?e[s]=n:delete e[s],r}var o=e("./_Symbol"),i=Object.prototype,u=i.hasOwnProperty,c=i.toString,s=o?o.toStringTag:void 0;t.exports=r},{"./_Symbol":2}],7:[function(e,t,n){function r(e){return i.call(e)}var o=Object.prototype,i=o.toString;t.exports=r},{}],8:[function(e,t,n){function r(e,t){return function(n){return e(t(n))}}t.exports=r},{}],9:[function(e,t,n){var r=e("./_freeGlobal"),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},{"./_freeGlobal":4}],10:[function(e,t,n){function r(e){return null!=e&&"object"==typeof e}t.exports=r},{}],11:[function(e,t,n){function r(e){if(!u(e)||o(e)!=c)return!1;var t=i(e);if(null===t)return!0;var n=f.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&d.call(n)==l}var o=e("./_baseGetTag"),i=e("./_getPrototype"),u=e("./isObjectLike"),c="[object Object]",s=Function.prototype,a=Object.prototype,d=s.toString,f=a.hasOwnProperty,l=d.call(Object);t.exports=r},{"./_baseGetTag":3,"./_getPrototype":5,"./isObjectLike":10}],12:[function(e,t,n){function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(f===setTimeout)return setTimeout(e,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function u(e){if(l===clearTimeout)return clearTimeout(e);if((l===o||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function c(){h&&v&&(h=!1,v.length?y=v.concat(y):m=-1,y.length&&s())}function s(){if(!h){var e=i(c);h=!0;for(var t=y.length;t;){for(v=y,y=[];++m<t;)v&&v[m].run();m=-1,t=y.length}v=null,h=!1,u(e)}}function a(e,t){this.fun=e,this.array=t}function d(){}var f,l,p=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(e){f=r}try{l="function"==typeof clearTimeout?clearTimeout:o}catch(e){l=o}}();var v,y=[],h=!1,m=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];y.push(new a(e,t)),1!==y.length||h||i(s)},a.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=d,p.addListener=d,p.once=d,p.off=d,p.removeListener=d,p.removeAllListeners=d,p.emit=d,p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},{}],13:[function(e,t,n){"use strict";function r(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(o){return"function"==typeof o?o(n,r,e):t(o)}}}}n.__esModule=!0;var o=r();o.withExtraArgument=r,n.default=o},{}],14:[function(e,t,n){"use strict";function r(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(n,r,i){var c=e(n,r,i),s=c.dispatch,a=[],d={getState:c.getState,dispatch:function(e){return s(e)}};return a=t.map(function(e){return e(d)}),s=u.default.apply(void 0,a)(c.dispatch),o({},c,{dispatch:s})}}}n.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};n.default=r;var i=e("./compose"),u=function(e){return e&&e.__esModule?e:{default:e}}(i)},{"./compose":17}],15:[function(e,t,n){"use strict";function r(e,t){return function(){return t(e.apply(void 0,arguments))}}function o(e,t){if("function"==typeof e)return r(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(e),o={},i=0;i<n.length;i++){var u=n[i],c=e[u];"function"==typeof c&&(o[u]=r(c,t))}return o}n.__esModule=!0,n.default=o},{}],16:[function(e,t,n){(function(t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=t&&t.type;return"Given action "+(n&&'"'+n.toString()+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function i(e,t,n,r){var o=Object.keys(t),i=n&&n.type===s.ActionTypes.INIT?"preloadedState argument passed to createStore":"previous state received by the reducer";if(0===o.length)return"Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";if(!(0,d.default)(e))return"The "+i+' has unexpected type of "'+{}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1]+'". Expected argument to be an object with the following keys: "'+o.join('", "')+'"';var u=Object.keys(e).filter(function(e){return!t.hasOwnProperty(e)&&!r[e]});return u.forEach(function(e){r[e]=!0}),u.length>0?"Unexpected "+(u.length>1?"keys":"key")+' "'+u.join('", "')+'" found in '+i+'. Expected to find one of the known reducer keys instead: "'+o.join('", "')+'". Unexpected keys will be ignored.':void 0}function u(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:s.ActionTypes.INIT}))throw new Error('Reducer "'+t+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');if(void 0===n(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+s.ActionTypes.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')})}function c(e){for(var n=Object.keys(e),r={},c=0;c<n.length;c++){var s=n[c];"production"!==t.env.NODE_ENV&&void 0===e[s]&&(0,l.default)('No reducer provided for key "'+s+'"'),"function"==typeof e[s]&&(r[s]=e[s])}var a=Object.keys(r);if("production"!==t.env.NODE_ENV)var d={};var f;try{u(r)}catch(e){f=e}return function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=arguments[1];if(f)throw f;if("production"!==t.env.NODE_ENV){var u=i(e,r,n,d);u&&(0,l.default)(u)}for(var c=!1,s={},p=0;p<a.length;p++){var v=a[p],y=r[v],h=e[v],m=y(h,n);if(void 0===m){var b=o(v,n);throw new Error(b)}s[v]=m,c=c||m!==h}return c?s:e}}n.__esModule=!0,n.default=c;var s=e("./createStore"),a=e("lodash/isPlainObject"),d=r(a),f=e("./utils/warning"),l=r(f)}).call(this,e("_process"))},{"./createStore":18,"./utils/warning":20,_process:12,"lodash/isPlainObject":11}],17:[function(e,t,n){"use strict";function r(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return function(e){return e};if(1===t.length)return t[0];var r=t[t.length-1],o=t.slice(0,-1);return function(){return o.reduceRight(function(e,t){return t(e)},r.apply(void 0,arguments))}}n.__esModule=!0,n.default=r},{}],18:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){function r(){m===h&&(m=h.slice())}function i(){return y}function c(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return r(),m.push(e),function(){if(t){t=!1,r();var n=m.indexOf(e);m.splice(n,1)}}}function d(e){if(!(0,u.default)(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(b)throw new Error("Reducers may not dispatch actions.");try{b=!0,y=v(y,e)}finally{b=!1}for(var t=h=m,n=0;n<t.length;n++)t[n]();return e}function f(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");v=e,d({type:a.INIT})}function l(){var e,t=c;return e={subscribe:function(e){function n(){e.next&&e.next(i())}if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");return n(),{unsubscribe:t(n)}}},e[s.default]=function(){return this},e}var p;if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(o)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var v=e,y=t,h=[],m=h,b=!1;return d({type:a.INIT}),p={dispatch:d,subscribe:c,getState:i,replaceReducer:f},p[s.default]=l,p}n.__esModule=!0,n.ActionTypes=void 0,n.default=o;var i=e("lodash/isPlainObject"),u=r(i),c=e("symbol-observable"),s=r(c),a=n.ActionTypes={INIT:"@@redux/INIT"}},{"lodash/isPlainObject":11,"symbol-observable":21}],19:[function(e,t,n){(function(t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){}n.__esModule=!0,n.compose=n.applyMiddleware=n.bindActionCreators=n.combineReducers=n.createStore=void 0;var i=e("./createStore"),u=r(i),c=e("./combineReducers"),s=r(c),a=e("./bindActionCreators"),d=r(a),f=e("./applyMiddleware"),l=r(f),p=e("./compose"),v=r(p),y=e("./utils/warning"),h=r(y);"production"!==t.env.NODE_ENV&&"string"==typeof o.name&&"isCrushed"!==o.name&&(0,h.default)("You are currently using minified code outside of NODE_ENV === 'production'. This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) to ensure you have the correct code for your production build."),n.createStore=u.default,n.combineReducers=s.default,n.bindActionCreators=d.default,n.applyMiddleware=l.default,n.compose=v.default}).call(this,e("_process"))},{"./applyMiddleware":14,"./bindActionCreators":15,"./combineReducers":16,"./compose":17,"./createStore":18,"./utils/warning":20,_process:12}],20:[function(e,t,n){"use strict";function r(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(e){}}n.__esModule=!0,n.default=r},{}],21:[function(e,t,n){t.exports=e("./lib/index")},{"./lib/index":22}],22:[function(e,t,n){(function(r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,i=e("./ponyfill"),u=function(e){return e&&e.__esModule?e:{default:e}}(i);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==r?r:void 0!==t?t:Function("return this")();var c=(0,u.default)(o);n.default=c}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./ponyfill":23}],23:[function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}Object.defineProperty(n,"__esModule",{value:!0}),n.default=r},{}],24:[function(e,t,n){"use strict";function r(){return function(e){e({type:s.default.TEST_ACTION,payload:{message:"clicked"}})}}function o(e,t){return function(n,r){var o=void 0,i=void 0,u=void 0,c=void 0,f=void 0;o=e.data,i=r(),u=i.midi.notes,c=a.MidiUtils.getNote(e),f=i.midi.audioContext,u[c]=d.AudioUtils.generateOscillator(c,f),u[c].start(),n({type:s.default.NOTE_ON,payload:{message:t,data:o,notes:u}})}}function i(e,t){return function(n,r){var o=void 0,i=void 0,u=void 0,c=void 0;o=e.data,i=r(),u=i.midi.notes,c=a.MidiUtils.getNote(e),u[c].stop(),u[c].disconnect(),n({type:s.default.NOTE_OFF,payload:{message:t,data:o,notes:u}})}}function u(e,t){return function(e){e({type:s.default.CONTROLLER,payload:{message:t}})}}Object.defineProperty(n,"__esModule",{value:!0}),n.testButtonAction=r,n.noteOn=o,n.noteOff=i,n.controller=u;var c=e("../actions/midi-actions"),s=function(e){return e&&e.__esModule?e:{default:e}}(c),a=(e("../constants/midi-messages"),e("../utils/midi")),d=e("../utils/audio")},{"../actions/midi-actions":27,"../constants/midi-messages":31,"../utils/audio":35,"../utils/midi":36}],25:[function(e,t,n){"use strict";function r(e){return function(t,n){var r=void 0,u=void 0;r=i.MidiUtils.getEventType(e),u=o.MidiMessages[r],t(c[u](e,u))}}Object.defineProperty(n,"__esModule",{value:!0}),n.midiMessage=r;var o=e("../constants/midi-messages"),i=e("../utils/midi"),u=e("../action-creators/midi-events-action-creators"),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(u)},{"../action-creators/midi-events-action-creators":24,"../constants/midi-messages":31,"../utils/midi":36}],26:[function(e,t,n){"use strict";function r(e){return function(t,n){var r=void 0,o=void 0,i=void 0,c=void 0,d=void 0;for(r=e.inputs.values(),o=n(),d=o.midi.audioContext.createGain(),d.connect(o.midi.audioContext.destination),i=(0,a.bindActionCreators)(s,t),c=r.next();c&&!c.done;c=r.next())c.value.onmidimessage=i.midiMessage;t({type:u.default.MIDI_SUCCESS,payload:{message:"Connected",midiAccess:e,inputs:r,gainNode:d}})}}function o(e){return function(e){e({type:u.default.MIDI_FAILURE,payload:{message:"Fail"}})}}Object.defineProperty(n,"__esModule",{value:!0}),n.midiSuccess=r,n.midiFailure=o;var i=e("../actions/midi-connect"),u=function(e){return e&&e.__esModule?e:{default:e}}(i),c=e("../action-creators/midi-messages-action-creators"),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(c),a=e("redux")},{"../action-creators/midi-messages-action-creators":25,"../actions/midi-connect":28,redux:19}],27:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=Object.freeze({CONTROLLER:"controller",INSTRUMENT_NAME:"instrumentName",NOTE_OFF:"noteOff",NOTE_ON:"noteOn",PROGRAM_CHANGE:"programChange",SYS_EX:"sysEx",TEST_ACTION:"testAction"})},{}],28:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=Object.freeze({MIDI_SUCCESS:"midiSuccess",MIDI_FAILURE:"midiFailure",MIDI_MESSAGE:"midiMessage"})},{}],29:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.MidiInfo={init:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.store=e,this.messageInfo=document.getElementById("midi-info"),this.testButton=document.getElementById("test-button"),this.testButton.addEventListener("click",t.testButtonAction),this.render()},render:function(){var e=this.store,t=this.messageInfo;e.subscribe(function(){t.innerHTML=t?e.getState().midi.message:"No Message"})}}},{}],30:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.MidiMessagesHex=Object.freeze({SEQUENCE_NUMBER:0,TEXT:1,INSTRUMENT_NAME:4,NOTE_OFF:128,NOTE_ON:144,PROGRAM_CHANGE:192,CONTROLLER:176})},{}],31:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.MidiMessages=Object.freeze({0:"sequenceNumber",1:"text",4:"instrumentName",128:"noteOff",144:"noteOn",192:"programChange",176:"controller"})},{}],32:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("redux"),o=e("../reducers/midi-reducer"),i=function(e){return e&&e.__esModule?e:{default:e}}(o),u=(0,r.combineReducers)({midi:i.default});n.default=u},{"../reducers/midi-reducer":33,redux:19}],33:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments[1],n=t.type,r=t.payload;switch(console.log("REDUCER",r),n){case c.default.NOTE_ON:case c.default.NOTE_OFF:case c.default.PROGRAM_CHANGE:case c.default.INSTRUMENT_NAME:case c.default.CONTROLLER:case c.default.SYS_EX:case c.default.TEST_ACTION:case a.default.MIDI_SUCCESS:case a.default.MIDI_FAILURE:return i({},e,r);default:return e}}Object.defineProperty(n,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};n.default=o;var u=e("../actions/midi-actions.js"),c=r(u),s=e("../actions/midi-connect.js"),a=r(s),d={message:"None",midiAccess:null,inputs:[],data:null,audioContext:new AudioContext,gainNode:null,notes:{}}},{"../actions/midi-actions.js":27,"../actions/midi-connect.js":28}],34:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return(0,i.createStore)(a.default,e,f)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=o;var i=e("redux"),u=e("redux-thunk"),c=r(u),s=e("../reducers/index"),a=r(s),d=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.compose,f=d((0,i.applyMiddleware)(c.default))},{"../reducers/index":32,redux:19,"redux-thunk":13}],35:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.AudioUtils=Object.freeze({getFrequency:function(e){return 440*Math.pow(2,(e-69)/12)},generateOscillator:function(e,t){var n=t.createOscillator(),r=this.getFrequency(e);return n.type="square",n.connect(t.destination),n.frequency.value=r,n}})},{}],36:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.MidiUtils=void 0;var r=e("../constants/midi-messages-hex");n.MidiUtils=Object.freeze({getType:function(e){return e.data[0]},getNote:function(e){return e.data[1]},getNoteVelocity:function(e){return e.data[2]},getEventType:function(e){return this.isNoteOnOff(e)?240&r.MidiMessagesHex.NOTE_OFF:240&this.getType(e)},isNoteOnOff:function(e){return this.getType(e)===r.MidiMessagesHex.NOTE_ON&&0===this.getNoteVelocity(e)}})},{"../constants/midi-messages-hex":30}]},{},[1]);
//# sourceMappingURL=maps/index.js.map
