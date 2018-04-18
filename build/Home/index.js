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

	var $app_template$ = __webpack_require__(16)
	var $app_style$ = __webpack_require__(17)
	var $app_script$ = __webpack_require__(18)
	
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

/***/ 16:
/***/ function(module, exports) {

	module.exports = {
	  "type": "list",
	  "attr": {},
	  "classList": [
	    "tutorial-page"
	  ],
	  "children": [
	    {
	      "type": "list-item",
	      "attr": {
	        "type": "list-item"
	      },
	      "repeat": function () {return this.pageList},
	      "children": [
	        {
	          "type": "div",
	          "attr": {
	            "show": function () {return this.$item.href}
	          },
	          "classList": [
	            "item"
	          ],
	          "children": [
	            {
	              "type": "a",
	              "attr": {
	                "href": function () {return this.$item.href},
	                "value": function () {return this.$item.name}
	              },
	              "classList": [
	                "item-name"
	              ]
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.getPath(this.$item.href)}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 17:
/***/ function(module, exports) {

	module.exports = {
	  ".tutorial-page": {
	    "flexDirection": "column",
	    "paddingTop": "0px",
	    "paddingRight": "30px",
	    "paddingBottom": "30px",
	    "paddingLeft": "30px"
	  },
	  ".item": {
	    "justifyContent": "space-between",
	    "width": "500px",
	    "height": "120px",
	    "paddingTop": "0px",
	    "paddingRight": "30px",
	    "paddingBottom": "0px",
	    "paddingLeft": "30px",
	    "marginTop": "30px",
	    "backgroundColor": "#ffffff"
	  },
	  ".item-name": {
	    "color": "#09ba07",
	    "fontSize": "32px"
	  }
	}

/***/ },

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _data = __webpack_require__(19);
	
	exports.default = {
	  private: {
	    pageList: _data.pageList
	  },
	  getPath: function getPath(str) {
	    return str;
	  },
	  onInit: function onInit() {
	    this.$page.setTitleBar({ text: '目录' });
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

/***/ },

/***/ 19:
/***/ function(module, exports) {

	'use strict';
	
	/**
	* 页面目录数据:首页
	**/
	var pageList = [{
	   name: '生命周期',
	   href: '/Lifecycle'
	}, {
	   name: '页面样式与布局',
	   href: '/StyleLayout'
	}, {
	   name: '框架指令',
	   href: '/Directive'
	}, {
	   name: '页面切换及参数传递',
	   href: '/PageParams'
	}, {
	   name: '事件监听与触发',
	   href: '/BindEvents'
	}, {
	   name: '父子组件通信',
	   href: '/InterVms'
	}, {
	   name: '使用Async',
	   href: '/Async'
	}, {
	   name: '优化技巧',
	   href: '/Optimization'
	}, {
	   name: 'list教程',
	   href: '/ComponentList'
	}, {
	   name: 'tabs教程',
	   href: '/CommonentTabs'
	}];

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