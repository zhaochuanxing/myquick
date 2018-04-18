(function(){
      
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(13)
	var $app_style$ = __webpack_require__(14)
	var $app_script$ = __webpack_require__(15)
	
	$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})
	
	$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ },

/***/ 13:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "tutorial-page"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "children": [
	        {
	          "type": "a",
	          "attr": {
	            "href": "/Directive/for",
	            "value": "指令for"
	          }
	        },
	        {
	          "type": "a",
	          "attr": {
	            "href": "/Directive/ifshow",
	            "value": "指令if与指令show"
	          }
	        },
	        {
	          "type": "a",
	          "attr": {
	            "href": "/Directive/block",
	            "value": "组件block"
	          }
	        },
	        {
	          "type": "a",
	          "attr": {
	            "href": "/Directive/slot",
	            "value": "组件slot"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "-->/Directive/for"
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "-->/Directive/ifshow"
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "-->/Directive/block"
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "-->/Directive/slot"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 14:
/***/ function(module, exports) {

	module.exports = {
	  ".tutorial-page": {
	    "flexDirection": "row",
	    "justifyContent": "flex-start",
	    "alignItems": "flex-start"
	  },
	  ".tutorial-page div": {
	    "flexDirection": "column",
	    "justifyContent": "flex-start",
	    "alignItems": "flex-start",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tutorial-page"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "div"
	        }
	      ]
	    }
	  },
	  ".tutorial-page a": {
	    "marginTop": "75px",
	    "marginLeft": "80px",
	    "fontSize": "30px",
	    "fontWeight": "bold",
	    "color": "#09ba07",
	    "textDecoration": "underline",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tutorial-page"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "a"
	        }
	      ]
	    }
	  },
	  ".tutorial-page text": {
	    "marginTop": "75px",
	    "marginLeft": "30px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tutorial-page"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "text"
	        }
	      ]
	    }
	  }
	}

/***/ },

/***/ 15:
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = {
	  onInit: function onInit() {
	    this.$page.setTitleBar({ text: '框架指令' });
	  }
	};
	
	
	var moduleOwn = exports.default || module.exports;
	var accessors = ['public', 'protected', 'private'];
	
	if (moduleOwn.data && accessors.some(function (acc) {
	  return moduleOwn[acc];
	})) {
	  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
	} else if (!moduleOwn.data) {
	  moduleOwn.data = {};
	  moduleOwn._descriptor = {};
	  accessors.forEach(function (acc) {
	    var accType = _typeof(moduleOwn[acc]);
	    if (accType === 'object') {
	      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
	      for (var name in moduleOwn[acc]) {
	        moduleOwn._descriptor[name] = { access: acc };
	      }
	    } else if (accType === 'function') {
	      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
	    }
	  });
	}}

/***/ }

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map