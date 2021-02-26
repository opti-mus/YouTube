/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('file 1');\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/content.js":
/*!**********************************!*\
  !*** ./src/assets/js/content.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let id = countId()\r\nconst cont = [\r\n  {\r\n    title: 'Обитель зла Треш обзор ',\r\n    img: 'assets/images/hq720.webp',\r\n    avatar: 'assets/images/channel.jpg',\r\n    channel: 'Marmix',\r\n    id: id(),\r\n  },\r\n  {\r\n    title: 'Обитель зла Треш обзор 2',\r\n    img: 'assets/images/hq720.webp',\r\n    avatar: 'assets/images/channel.jpg',\r\n    channel: 'Канал',\r\n    id: id(),\r\n  },\r\n  {\r\n    title:\r\n      'Probably the greatest game of Geoguessr I\"ll ever play (No moving record attempt #2)',\r\n    img: 'assets/images/hq720-2.webp',\r\n    avatar: 'assets/images/channel.jpg',\r\n    channel: 'Канал',\r\n    id: id(),\r\n  },\r\n  {\r\n    title:\r\n      'World of Tanks Blitz | Игра в рейтинговых битвах | vertuxan888 [MERCY] | Пора бороться со злом!',\r\n    img: 'assets/images/hq720-3.webp',\r\n    avatar: 'assets/images/channel.jpg',\r\n    channel: 'Канал',\r\n    id: id(),\r\n  },\r\n  {\r\n    title: 'How To Play Darts | \"My Throw\" With Gerwyn Price!',\r\n    img: 'assets/images/hq720-4.webp',\r\n    avatar: 'assets/images/channel.jpg',\r\n    channel: 'Канал',\r\n    id: id(),\r\n  },\r\n  {\r\n    title: 'Дизайн макета с нуля. Графический дизайн',\r\n    img: 'assets/images/hq720-5.webp',\r\n    avatar: 'assets/images/channel.jpg',\r\n    channel: 'Канал',\r\n    id: id(),\r\n  },\r\n  {\r\n    title:\r\n      'All Exhibition Shots Of 2020 (Spin, Swerve, Power Screw, Trick Shots)',\r\n    img: 'assets/images/hq720-6.webp',\r\n    avatar: 'assets/images/channel.jpg',\r\n    channel: 'Канал',\r\n    id: id(),\r\n  },\r\n  {\r\n    title: 'Обитель зла Треш обзор 2',\r\n    img: 'assets/images/hq720.webp',\r\n    avatar: 'assets/images/channel.jpg',\r\n    channel: 'Канал',\r\n    id: id(),\r\n  },\r\n]\r\nfunction countId() {\r\n  let count = 0\r\n  return () => count++\r\n}\r\n\r\nfunction content(data) {\r\n  const container = document.querySelector('.contents__container')\r\n  if (!container) {\r\n    return\r\n  }\r\n  data.forEach((el) => {\r\n    container.insertAdjacentHTML('afterbegin', _toHTML(el))\r\n  })\r\n  addToWatch()\r\n}\r\nfunction _toHTML(options) {\r\n  return `\r\n    <article class=\"contents__item\"  >\r\n      <div class=\"contents__img\">\r\n        <a href=\"watch.html\" data-content=${options.id} >\r\n          <img src=\"${options.img}\" alt=\"\" data-content=${options.id} />\r\n        </a>\r\n        <span class=\"contents__late icon-content\" data-icon = \"late\" data-id = \"${options.id}\">\r\n          <object\r\n            class=\"icon-content__icon\"\r\n            type=\"image/svg+xml\"\r\n            data=\"assets/images/watch-late-icon.svg\"\r\n          ></object>\r\n        </span>\r\n        <span class=\"contents__list icon-content\">\r\n          <object\r\n            class=\"icon-content__icon\"\r\n            type=\"image/svg+xml\"\r\n            data=\"assets/images/list-item.svg\"\r\n          ></object>\r\n        </span>\r\n      </div>\r\n      <div class=\"contents__desc\">\r\n        <div class=\"contents__avatar\">\r\n          <img src=\"${options.avatar}\" alt=\"\" title='${options.channel}'/>\r\n        </div>\r\n\r\n        <div class=\"contents__details\">\r\n          <a href=\"watch.html\" data-content=${options.id} class=\"contents__title\" title='${options.title}'\r\n            >${options.title}\r\n            \r\n            <svg\r\n            class=\"contents__more contex-menu\"\r\n            viewBox=\"0 0 384 384\"\r\n            >\r\n              <g>\r\n                <circle cx=\"192\" cy=\"42.667\" r=\"42.667\" />\r\n              </g>\r\n              <g>\r\n                <circle cx=\"192\" cy=\"192\" r=\"42.667\" />\r\n              </g>\r\n              <g>\r\n                <circle cx=\"192\" cy=\"341.333\" r=\"42.667\" />\r\n              </g>\r\n            </svg>\r\n          </a>\r\n          <a href=\"#\" data-pop=\"1\" class=\"contents__channel\">${options.channel}</a>\r\n          <span class=\"contents__views\">700 тыс.&nbsp;просмотров</span>\r\n          <time class=\"contents__date\">1&nbsp;год&nbsp;назад</time>\r\n        </div>\r\n      </div>\r\n    </article>\r\n  `\r\n}\r\nfunction addToWatch() {\r\n  const container = document.querySelector('.contents__container')\r\n  container.addEventListener('click', (e) => {\r\n    const target = e.target\r\n    console.log(target)\r\n    if (target.dataset.icon == 'late') {\r\n      target.classList.add('add-to-watch')\r\n      target.innerHTML = `\r\n        <object\r\n          class=\"icon-content__icon\"\r\n          type=\"image/svg+xml\"\r\n          data=\"assets/images/complete-icon.svg\"\r\n        ></object>\r\n      `\r\n      e.preventDefault()\r\n      addToLS(target.dataset.id, cont, target.dataset.id)\r\n    }\r\n    \r\n  })\r\n}\r\nfunction createContent(){\r\n  document.addEventListener('click',(e)=>{\r\n    const target = e.target;\r\n    if (target.dataset.content) {\r\n      addToLS(target.dataset.content, cont, 'watch')\r\n    }\r\n  })\r\n}\r\nfunction addToLS(id, data, key) {\r\n  data.forEach((el) => {\r\n    if (el.id == id) {\r\n      localStorage.setItem(key, JSON.stringify(el))\r\n    }\r\n  })\r\n}\r\ncreateContent()\r\nwindow.onload = content(cont)\r\n\n\n//# sourceURL=webpack:///./src/assets/js/content.js?");

/***/ }),

/***/ "./src/assets/js/contexMenu.js":
/*!*************************************!*\
  !*** ./src/assets/js/contexMenu.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function contexMenu() {\r\n  document.addEventListener('click', (e) => {\r\n    if (e.target.classList.contains('contex-menu')) {\r\n      let coords = e.target.getBoundingClientRect()\r\n      let y = coords.top + coords.height + 25\r\n      let x = coords.right\r\n      document.body.style.overflow = 'hidden'\r\n\r\n      e.preventDefault()\r\n      removeContex(true)\r\n      createMenu(x, y, _toHTML())\r\n    } else {\r\n      if (!e.target.classList.contains('contex')) {\r\n        removeContex(true)\r\n        document.body.style.overflow = 'visible'\r\n      }\r\n    }\r\n  })\r\n}\r\nconst max = document.querySelectorAll('max')\r\nfunction _toHTML() {\r\n  return `\r\n        <ul class=\"side-menu__nav side-menu-nav\">\r\n          <li class=\"side-menu-nav__item\">\r\n              <svg viewBox=\"0 0 24 24\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\" class=\"side-menu-nav__icon icon\"><g ><path  d=\"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8\" ></path></g>\r\n          </svg>  \r\n              <a href=\"#\" class=\"side-menu-nav__link\">\r\n                  Добавить в очередь\r\n              </a>\r\n          </li>\r\n          <li class=\"side-menu-nav__item\">\r\n            <svg viewBox=\"0 0 24 24\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\" class=\"side-menu-nav__icon icon\" >\r\n                <g>\r\n                    <path d=\"M17.53 11.2c-.23-.3-.5-.56-.76-.82-.65-.6-1.4-1.03-2.03-1.66-1.46-1.46-1.78-3.87-.85-5.72-.9.23-1.75.75-2.45 1.32C8.9 6.4 7.9 10.07 9.1 13.22c.04.1.08.2.08.33 0 .22-.15.42-.35.5-.22.1-.46.04-.64-.12-.06-.05-.1-.1-.15-.17-1.1-1.43-1.28-3.48-.53-5.12C5.87 10 5 12.3 5.12 14.47c.04.5.1 1 .27 1.5.14.6.4 1.2.72 1.73 1.04 1.73 2.87 2.97 4.84 3.22 2.1.27 4.35-.12 5.96-1.6 1.8-1.66 2.45-4.3 1.5-6.6l-.13-.26c-.2-.45-.47-.87-.78-1.25zm-3.1 6.3c-.28.24-.73.5-1.08.6-1.1.38-2.2-.16-2.88-.82 1.2-.28 1.9-1.16 2.1-2.05.17-.8-.14-1.46-.27-2.23-.12-.74-.1-1.37.2-2.06.15.38.35.76.58 1.06.76 1 1.95 1.44 2.2 2.8.04.14.06.28.06.43.03.82-.32 1.72-.92 2.26z\">\r\n                    </path>\r\n                </g>\r\n            </svg>\r\n            <a href=\"\" class=\"side-menu-nav__link\" >\r\n                Добавить в плейлист \"Смотреть позже\"\r\n            </a>\r\n          </li>\r\n        <li class=\"side-menu-nav__item\">\r\n        <svg viewBox=\"0 0 24 24\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\" class=\"side-menu-nav__icon icon\" ><g ><path d=\"M18.7 8.7H5.3V7h13.4v1.7zm-1.7-5H7v1.6h10V3.7zm3.3 8.3v6.7c0 1-.7 1.6-1.6 1.6H5.3c-1 0-1.6-.7-1.6-1.6V12c0-1 .7-1.7 1.6-1.7h13.4c1 0 1.6.8 1.6 1.7zm-5 3.3l-5-2.7V18l5-2.7z\" ></path></g></svg>\r\n            <a href=\"\" class=\"side-menu-nav__link\"'>\r\n            Добавить в плейлист\r\n            </a>\r\n    </ul> \r\n    <ul class=\"side-menu__nav side-menu-nav\">\r\n        <li class=\"side-menu-nav__item\">\r\n            <svg viewBox=\"0 0 24 24\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\" class=\"side-menu-nav__icon icon\"><g ><path  d=\"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8\" ></path></g>\r\n        </svg>  \r\n            <a href=\"#\" class=\"side-menu-nav__link\">\r\n                Не интересует\r\n            </a>\r\n        </li>\r\n        <li class=\"side-menu-nav__item\">\r\n        <svg viewBox=\"0 0 24 24\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\" class=\"side-menu-nav__icon icon\" >\r\n            <g>\r\n                <path d=\"M17.53 11.2c-.23-.3-.5-.56-.76-.82-.65-.6-1.4-1.03-2.03-1.66-1.46-1.46-1.78-3.87-.85-5.72-.9.23-1.75.75-2.45 1.32C8.9 6.4 7.9 10.07 9.1 13.22c.04.1.08.2.08.33 0 .22-.15.42-.35.5-.22.1-.46.04-.64-.12-.06-.05-.1-.1-.15-.17-1.1-1.43-1.28-3.48-.53-5.12C5.87 10 5 12.3 5.12 14.47c.04.5.1 1 .27 1.5.14.6.4 1.2.72 1.73 1.04 1.73 2.87 2.97 4.84 3.22 2.1.27 4.35-.12 5.96-1.6 1.8-1.66 2.45-4.3 1.5-6.6l-.13-.26c-.2-.45-.47-.87-.78-1.25zm-3.1 6.3c-.28.24-.73.5-1.08.6-1.1.38-2.2-.16-2.88-.82 1.2-.28 1.9-1.16 2.1-2.05.17-.8-.14-1.46-.27-2.23-.12-.74-.1-1.37.2-2.06.15.38.35.76.58 1.06.76 1 1.95 1.44 2.2 2.8.04.14.06.28.06.43.03.82-.32 1.72-.92 2.26z\">\r\n                </path>\r\n            </g>\r\n        </svg>\r\n            <a href=\"\" class=\"side-menu-nav__link\" >\r\n                Не рекомендовать видео с этого канала\r\n            </a>\r\n            \r\n        </li>\r\n        <li class=\"side-menu-nav__item\">\r\n        <svg viewBox=\"0 0 24 24\" preserveAspectRatio=\"xMidYMid meet\" focusable=\"false\" class=\"side-menu-nav__icon icon\" ><g ><path d=\"M18.7 8.7H5.3V7h13.4v1.7zm-1.7-5H7v1.6h10V3.7zm3.3 8.3v6.7c0 1-.7 1.6-1.6 1.6H5.3c-1 0-1.6-.7-1.6-1.6V12c0-1 .7-1.7 1.6-1.7h13.4c1 0 1.6.8 1.6 1.7zm-5 3.3l-5-2.7V18l5-2.7z\" ></path></g></svg>\r\n            <a href=\"\" class=\"side-menu-nav__link\"'>\r\n            Пожаловаться\r\n            </a>\r\n    </ul> \r\n    `\r\n}\r\nfunction createMenu(x, y, message) {\r\n  const menu = document.createElement('div')\r\n  const body = document.querySelector('body')\r\n  const MENU_WIDTH = 350\r\n  const MENU_HEIGHT = 290\r\n\r\n  menu.classList.add('contex', 'side-menu-nav')\r\n\r\n  if (body.clientWidth < x + MENU_WIDTH) {\r\n    menu.style.left = x - MENU_WIDTH + 'px'\r\n\r\n    if (window.innerHeight < y + MENU_HEIGHT) {\r\n      menu.style.top = y - MENU_HEIGHT - 50 + 'px'\r\n    } else menu.style.top = y + 'px'\r\n  } else if (window.innerHeight < y + MENU_HEIGHT) {\r\n    menu.style.top = y - MENU_HEIGHT - 50 + 'px'\r\n    menu.style.left = x + 'px'\r\n  } else {\r\n    menu.style.top = y + 'px'\r\n    menu.style.left = x + 'px'\r\n  }\r\n\r\n  menu.innerHTML = message\r\n\r\n  body.append(menu)\r\n}\r\nfunction removeContex() {\r\n  let contexts = document.querySelectorAll('.contex')\r\n\r\n  contexts.forEach((el) => {\r\n    el.remove()\r\n  })\r\n}\r\n\r\ndocument.body.clientWidth.onchange = removeContex()\r\ncontexMenu()\r\n\n\n//# sourceURL=webpack:///./src/assets/js/contexMenu.js?");

/***/ }),

/***/ "./src/assets/js/popUp.js":
/*!********************************!*\
  !*** ./src/assets/js/popUp.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function popUp() {\r\n  document.addEventListener('mouseover', (e) => {\r\n    let coords = e.target.getBoundingClientRect()\r\n\r\n    let y = coords.top + coords.height + 25\r\n    let x = coords.right - coords.width / 2\r\n\r\n    if (e.target.dataset.pop) {\r\n      let popupText = e.target.querySelector('i')\r\n        ? e.target.querySelector('i').innerText\r\n        : e.target.innerText\r\n\r\n      createPop(x, y, popupText)\r\n\r\n      e.target.addEventListener('mouseleave', () => {\r\n        let pop = document.querySelectorAll('.popup')\r\n\r\n        pop.forEach((el) => el.remove())\r\n      })\r\n    }\r\n  })\r\n}\r\nfunction createPop(x, y, message) {\r\n  const popup = document.createElement('div')\r\n  const body = document.querySelector('body')\r\n\r\n  popup.classList.add('popup', 'hide')\r\n\r\n  popup.style.top = y + 'px'\r\n  popup.style.left = x + 'px'\r\n  popup.innerText = `${message}`\r\n  body.append(popup)\r\n  setTimeout(() => {\r\n    popup.classList.remove('hide')\r\n  }, 100)\r\n}\r\npopUp()\r\n\n\n//# sourceURL=webpack:///./src/assets/js/popUp.js?");

/***/ }),

/***/ "./src/assets/js/side-menu.js":
/*!************************************!*\
  !*** ./src/assets/js/side-menu.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener('DOMContentLoaded', () => {\r\n  function sideMenu() {\r\n    const bars = document.querySelectorAll('.bars')\r\n    const sideMenu = document.querySelectorAll(\r\n      '.side-menu:not(.side-menu-hidden)'\r\n    )\r\n    const body = document.querySelector('body')\r\n    const sideMenuHidden = document.querySelector('.side-menu-hidden')\r\n    const wrapper = document.querySelector('.side-menu-wrapper')\r\n    let flag = false\r\n\r\n    bars.forEach((el) => {\r\n      el.addEventListener('click', () => {\r\n        if (flag) {\r\n          if (wrapper.classList.contains('show')) {\r\n            changeClass('show', 'remove', [sideMenuHidden, wrapper])\r\n            body.style.overflow = 'visible'\r\n          } else {\r\n            changeClass('show', 'add', [sideMenuHidden, wrapper])\r\n            body.style.overflow = 'hidden'\r\n          }\r\n        } else changeClass('close-menu', 'toggle', sideMenu)\r\n      })\r\n    })\r\n    function changeWindow(event) {\r\n      let w = event ? event.srcElement.innerWidth : body.clientWidth\r\n\r\n      if (w <= 1341 || sideMenu.length == 0) {\r\n        flag = true\r\n        if (w <= 800) changeClass('close-menu', 'remove', sideMenu)\r\n        else changeClass('close-menu', 'add', sideMenu)\r\n      } else {\r\n        flag = false\r\n        changeClass('close-menu', 'remove', sideMenu)\r\n        changeClass('show', 'remove', [sideMenuHidden, wrapper])\r\n      }\r\n    }\r\n    function changeClass(cl, method, el, flag = false) {\r\n      if (flag) {\r\n        el.classList[method](cl)\r\n      } else {\r\n        el.forEach((i) => {\r\n          i.classList[method](cl)\r\n        })\r\n      }\r\n    }\r\n\r\n    window.onresize = changeWindow\r\n    document.body.clientWidth.onchange = changeWindow()\r\n  }\r\n  // function d() {\r\n  //   const sideMenuHidden = document.querySelector('.side-menu-hidden')\r\n  //   document.addEventListener('click', (e) => {\r\n  //     if (!e.target.classList.contains('bars')) return\r\n\r\n  //     e.target.classList.add('show')\r\n  //     sideMenuHidden.classList.add('show')\r\n  //   })\r\n  // }\r\n  // d()\r\n\r\n  sideMenu()\r\n})\r\n\n\n//# sourceURL=webpack:///./src/assets/js/side-menu.js?");

/***/ }),

/***/ "./src/assets/js/virtualKeyboard.js":
/*!******************************************!*\
  !*** ./src/assets/js/virtualKeyboard.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let data = [\r\n  'ё',\r\n  '1',\r\n  '2',\r\n  '3',\r\n  '4',\r\n  '5',\r\n  '6',\r\n  '7',\r\n  '8',\r\n  '9',\r\n  '0',\r\n  '-',\r\n  '=',\r\n  'clear',\r\n  'й',\r\n  'ц',\r\n  'у',\r\n  'к',\r\n  'е',\r\n  'н',\r\n  'г',\r\n  'ш',\r\n  'щ',\r\n  'з',\r\n  'х',\r\n  'ъ',\r\n  '/',\r\n  'caps',\r\n  'ф',\r\n  'ы',\r\n  'в',\r\n  'а',\r\n  'п',\r\n  'р',\r\n  'о',\r\n  'л',\r\n  'д',\r\n  'ж',\r\n  'э',\r\n  'shift',\r\n  'я',\r\n  'ч',\r\n  'с',\r\n  'м',\r\n  'и',\r\n  'т',\r\n  'ь',\r\n  'б',\r\n  'ю',\r\n  '.',\r\n  'shift',\r\n]\r\nconst body = document.querySelector('body')\r\n\r\nfunction virtualKeyboard() {\r\n  let search = document.querySelector('.search')\r\n\r\n  search.addEventListener('click', (e) => {\r\n    if (!e.target.dataset.keyboard) {\r\n      return\r\n    }\r\n    showKeyboard(e)\r\n  })\r\n}\r\n\r\nfunction showKeyboard(e) {\r\n  const keyboard = document.querySelector('.virtual-keyboard')\r\n\r\n  e.preventDefault()\r\n  if (!keyboard) {\r\n    body.insertAdjacentHTML('beforeend', board())\r\n    drawKeys(data)\r\n    moveKeyboard()\r\n    printKeyboard()\r\n  } else keyboard.remove()\r\n}\r\nfunction board() {\r\n  return `\r\n    <div class='virtual-keyboard' /> \r\n      <div class = 'virtual-keyboard__move' data-move='move'/>\r\n        <h3>Клавиатура<h3>\r\n        <i class='virtual-keyboard__close' data-move='close'>&times;</i>\r\n      </div>\r\n      <div class='virtual-keyboard__keys' /></div>\r\n    </div>\r\n  `\r\n}\r\nfunction drawKeys(keys) {\r\n  let keyboard = document.querySelector('.virtual-keyboard__keys')\r\n\r\n  let btns = keys.map(\r\n    (el) =>\r\n      `<a href='#' class='virtual-keyboard__key' data-key='${el.toLowerCase()}'/>${el}</a>`\r\n  )\r\n  keyboard.innerHTML = ''\r\n  keyboard.insertAdjacentHTML('afterbegin', btns.join(''))\r\n}\r\n\r\nfunction printKeyboard() {\r\n  const keyboard = document.querySelector('.virtual-keyboard')\r\n  const search = document.querySelector('.search__input')\r\n  let triggerCaps = false\r\n  const triggerSearch = () => search.focus()\r\n\r\n  keyboard.addEventListener('click', (e) => {\r\n    triggerSearch()\r\n    if (!e.target.dataset.key) {\r\n      return\r\n    }\r\n    switch (e.target.dataset.key) {\r\n      case 'clear':\r\n        search.value = search.value.substr(0, search.value.length - 1)\r\n        break\r\n      case 'caps':\r\n        let shift = data.map((el) => el.toUpperCase())\r\n        if (!triggerCaps) {\r\n          drawKeys(shift)\r\n          triggerCaps = true\r\n        } else {\r\n          drawKeys(data)\r\n          triggerCaps = false\r\n        }\r\n\r\n        break\r\n      default:\r\n        search.value += e.target.innerText\r\n    }\r\n  })\r\n}\r\n\r\nfunction moveKeyboard() {\r\n  const keyboard = document.querySelector('.virtual-keyboard')\r\n  const body = document.querySelector('body')\r\n\r\n  keyboard.addEventListener('mousedown', (e) => {\r\n    const target = e.target\r\n    body.style.userSelect = 'none'\r\n\r\n    function moving(ev) {\r\n      let coordsY = ev.clientY - e.layerY\r\n      let coordsX = ev.clientX - e.layerX\r\n\r\n      if (coordsX < 0) {\r\n        position(0, coordsY, keyboard)\r\n        if (coordsY < 0) {\r\n          position(0, 0, keyboard)\r\n        }\r\n        if (coordsY + keyboard.offsetHeight > window.innerHeight) {\r\n          position(0, window.innerHeight - keyboard.offsetHeight, keyboard)\r\n        }\r\n      } else if (coordsY + keyboard.offsetHeight > window.innerHeight) {\r\n        position(coordsX, window.innerHeight - keyboard.offsetHeight, keyboard)\r\n        if (coordsX + keyboard.offsetWidth > window.innerWidth) {\r\n          position(\r\n            window.innerWidth - keyboard.offsetWidth,\r\n            window.innerHeight - keyboard.offsetHeight,\r\n            keyboard\r\n          )\r\n        }\r\n      } else if (coordsY < 0) {\r\n        position(coordsX, 0, keyboard)\r\n        if (coordsX + keyboard.offsetWidth > window.innerWidth) {\r\n          position(window.innerWidth - keyboard.offsetWidth, 0, keyboard)\r\n        }\r\n      } else if (coordsX + keyboard.offsetWidth > window.innerWidth) {\r\n        position(window.innerWidth - keyboard.offsetWidth, coordsY, keyboard)\r\n      } else {\r\n        position(coordsX, coordsY, keyboard)\r\n      }\r\n    }\r\n    function position(x, y, block) {\r\n      block.style.left = x + 'px'\r\n      block.style.top = y + 'px'\r\n    }\r\n\r\n    switch (target.dataset.move) {\r\n      case 'move':\r\n        document.addEventListener('mousemove', moving)\r\n        break\r\n      case 'close':\r\n        keyboard.remove()\r\n        break\r\n    }\r\n\r\n    document.addEventListener('mouseup', () => {\r\n      document.removeEventListener('mousemove', moving)\r\n      body.style.userSelect = 'auto'\r\n    })\r\n  })\r\n}\r\n\r\nvirtualKeyboard()\r\n\n\n//# sourceURL=webpack:///./src/assets/js/virtualKeyboard.js?");

/***/ }),

/***/ "./src/assets/js/watch.js":
/*!********************************!*\
  !*** ./src/assets/js/watch.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function addToWeb() {\r\n  const container = document.querySelector('.watch__container')\r\n  const item = JSON.parse(localStorage.getItem('watch'))\r\n  if(!container) return\r\n  container.insertAdjacentHTML('afterbegin', drawVideo(item))\r\n}\r\naddToWeb()\r\nfunction drawVideo(options) {\r\n  return `\r\n  <div class=\"watch__main\">\r\n  <div class=\"watch__video video\">\r\n    <div class=\"video__player\">\r\n    <img src=\"${options.img}\" alt=\"\">\r\n    </div>\r\n    \r\n    <h1 class=\"video__title\">${options.title}</h1>\r\n    <div class=\"video__opt\">\r\n      <div class=\"video__views\">1 000 000 просмотров</div>\r\n      <div class=\"video__menu\">\r\n        <div class=\"video__likes\">\r\n          <a class=\"video__item\" href=\"#\"\r\n            ><object\r\n              class=\"video__icon\"\r\n              type=\"image/svg+xml\"\r\n              data=\"assets/images/like.svg\"\r\n            ></object\r\n            >24тыс.</a\r\n          >\r\n          <a class=\"video__item\" href=\"#\"\r\n            ><object\r\n              class=\"video__icon\"\r\n              type=\"image/svg+xml\"\r\n              data=\"assets/images/dislike.svg\"\r\n            ></object\r\n            >210</a\r\n          >\r\n        </div>\r\n        <a href=\"#\" class=\"video__share video__item\" data-pop='1'>\r\n          <object\r\n            class=\"video__icon\"\r\n            type=\"image/svg+xml\"\r\n            data=\"assets/images/share-icon.svg\"\r\n          ></object>\r\n          Поделится</a\r\n        >\r\n        <a href=\"#\" class=\"video__save video__item\" data-pop='1'>\r\n          <object\r\n            class=\"video__icon\"\r\n            type=\"image/svg+xml\"\r\n            data=\"assets/images/save-icon.svg\"\r\n          ></object>\r\n          Сохранить</a\r\n        >\r\n        <a href=\"#\" class=\"video__more video__item\">\r\n          <object\r\n            class=\"video__icon\"\r\n            type=\"image/svg+xml\"\r\n            data=\"assets/images/more-horiz.svg\"\r\n          ></object\r\n        ></a>\r\n      </div>\r\n    </div>\r\n    <div class=\"video__info\">\r\n      <div href=\"\" class=\"video__avatar\">\r\n        <img src=\"${options.avatar}\" class=\"video__avatar\" />\r\n        <div class=\"video__channel\">\r\n          <a href=\"#\">${options.channel}</a>\r\n          <span class=\"video__subscribers\">2.4 млн подписчиков</span>\r\n        </div>\r\n      </div>\r\n      <a href=\"#\" class=\"video__subscribe\" >Подписаться</a>\r\n    </div>\r\n    <div class=\"video__description\">\r\n      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis exercitationem omnis veritatis quia eveniet explicabo minus aliquid quos ipsa. Quia eum deleniti nihil optio voluptatibus expedita? Consequuntur ducimus doloremque sit?\r\n      Vero impedit corporis error qui libero, ipsa exercitationem eaque saepe atque culpa officia laborum soluta facere! Ipsum sequi accusantium ratione, hic magnam impedit alias! Perferendis deserunt animi rem ipsa veritatis!\r\n      Iste voluptate culpa recusandae inventore sit, id dolorem qui nulla distinctio, a ducimus quo consequatur eaque dolor rerum doloremque tenetur, quas magnam ea at minima ullam? Iure eius voluptatem rem!\r\n      Nesciunt quia dicta iste suscipit quas in esse perspiciatis consequuntur enim. Dicta, perferendis cupiditate saepe, ea quas facere repellendus iste distinctio, ad excepturi eos illo quaerat doloremque aut! Porro, ab.\r\n      Dolores dicta eveniet maiores laborum dolor incidunt, facilis ullam? Recusandae eaque explicabo perspiciatis aliquam. Eos temporibus non quis nesciunt, porro libero optio, voluptas magnam repudiandae facilis maiores eligendi nobis praesentium!\r\n      Ipsam a nulla culpa voluptates? Enim at neque ex dolores excepturi odit quos veniam quibusdam dignissimos quisquam, a nam adipisci repellat hic ipsa ut illum modi laudantium aperiam corrupti? Unde!\r\n      Totam facere ab nam adipisci mollitia quas dicta excepturi! Voluptatem repudiandae praesentium consequuntur harum quas, sunt accusantium sit corporis placeat magnam nostrum quod iure recusandae, quasi ex, aliquid magni alias?\r\n      Sunt maxime ab nulla, debitis officiis minima sed dignissimos excepturi obcaecati reiciendis porro aliquam harum ullam fugit quos dolorum error commodi nesciunt unde labore quaerat? Quas dolorem aperiam saepe ex?\r\n      Incidunt optio corporis, iste, minus quod error excepturi ducimus itaque cumque tenetur harum earum pariatur, in ad aut. Saepe nostrum eligendi quaerat quasi explicabo neque voluptate laudantium sit. Ex, rem.\r\n      Reiciendis consequatur, aliquid sequi incidunt sint at quo exercitationem! Molestiae nulla perspiciatis, labore ipsam iure cumque illum? Laboriosam, et hic at minima, quam error, consequatur aperiam est illo ab velit!\r\n    </div>\r\n    <a href=\"\" class=\"video__open\">ЕЩЁ</a>\r\n  </div>\r\n  <div class=\"watch__recommend\"></div>\r\n</div>\r\n  `\r\n}\r\n\n\n//# sourceURL=webpack:///./src/assets/js/watch.js?");

/***/ }),

/***/ "./src/assets/js/watchLate.js":
/*!************************************!*\
  !*** ./src/assets/js/watchLate.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function getElementFromLS() {\r\n  forEachKey(handler)\r\n  firstElLS()\r\n  handlerEl()\r\n}\r\nfunction handler(data) {\r\n  let lateList = document.querySelector('.late-list')\r\n  if (!lateList) return\r\n\r\n  let item = JSON.parse(localStorage.getItem(data))\r\n\r\n  lateList.insertAdjacentHTML('beforeend', _drawEl(item))\r\n}\r\nfunction forEachKey(callback) {\r\n  for (var i = 0; i < localStorage.length; i++) {\r\n    if (localStorage.key(i) == 'watch') continue\r\n    else callback(localStorage.key(i))\r\n    \r\n  }\r\n}\r\nfunction forEachOneKey() {\r\n  for (var i = 0; i < localStorage.length; i++) {\r\n    if (localStorage.key(i) == 'watch') continue\r\n    else return localStorage.key(i)\r\n  }\r\n}\r\nfunction firstElLS() {\r\n  const firstVideo = document.querySelector('.late__video')\r\n  if (!firstVideo) return\r\n\r\n  let item = JSON.parse(localStorage.getItem(forEachOneKey()))\r\n\r\n  firstVideo.innerHTML = ''\r\n  firstVideo.insertAdjacentHTML('afterbegin', _drawVideo(item))\r\n}\r\n\r\nfunction _drawVideo(options = {}) {\r\n  return `\r\n  <div class=\"late__img\">\r\n    <img src=\"${options.img}\" />\r\n  </div>\r\n  <h3 class=\"late__title\">Смотреть позже</h3>\r\n  <p class=\"late__info\">${localStorage.length} видео • Нет просмотров • Обновлено сегодня</p>\r\n  `\r\n}\r\nfunction _drawEl(options = {}) {\r\n  return `\r\n  <a href='watch.html' class=\"late-list__item late-item\" data-content=${options.id}>\r\n    <img src=\"assets/images/move.svg\" alt=\"\" class=\"late-item__move\">\r\n    <div class=\"late-item__img\">\r\n      <img src=\"${options.img}\" alt=\"\" data-content=${options.id}>\r\n    </div>\r\n    <div class=\"late-item__desc\">\r\n      <div class=\"late-item__title\" data-content=${options.id}>${options.title}</div>\r\n      <div class=\"late-item__channel\" data-pop=\"1\">${options.channel}</div>\r\n    </div>\r\n    <div class='late-item__close' data-late='close' data-id = ${options.id}>&times;</div>\r\n  </a>\r\n  `\r\n}\r\nfunction handlerEl() {\r\n  const list = document.querySelector('.late-list')\r\n  if (!list) return\r\n  list.addEventListener('click', (e) => {\r\n    if (!e.target.dataset.late) return\r\n    if (e.target.dataset.late == 'close') {\r\n      e.preventDefault()\r\n      localStorage.removeItem(e.target.dataset.id)\r\n      list.innerHTML = ''\r\n      getElementFromLS()\r\n    }\r\n  })\r\n}\r\ngetElementFromLS()\r\n\n\n//# sourceURL=webpack:///./src/assets/js/watchLate.js?");

/***/ }),

/***/ 0:
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/content.js ./src/assets/js/contexMenu.js ./src/assets/js/popUp.js ./src/assets/js/side-menu.js ./src/assets/js/virtualKeyboard.js ./src/assets/js/watch.js ./src/assets/js/watchLate.js ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! F:\\web\\git\\portfolio\\10x\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\n__webpack_require__(/*! F:\\web\\git\\portfolio\\10x\\src\\assets\\js\\content.js */\"./src/assets/js/content.js\");\n__webpack_require__(/*! F:\\web\\git\\portfolio\\10x\\src\\assets\\js\\contexMenu.js */\"./src/assets/js/contexMenu.js\");\n__webpack_require__(/*! F:\\web\\git\\portfolio\\10x\\src\\assets\\js\\popUp.js */\"./src/assets/js/popUp.js\");\n__webpack_require__(/*! F:\\web\\git\\portfolio\\10x\\src\\assets\\js\\side-menu.js */\"./src/assets/js/side-menu.js\");\n__webpack_require__(/*! F:\\web\\git\\portfolio\\10x\\src\\assets\\js\\virtualKeyboard.js */\"./src/assets/js/virtualKeyboard.js\");\n__webpack_require__(/*! F:\\web\\git\\portfolio\\10x\\src\\assets\\js\\watch.js */\"./src/assets/js/watch.js\");\nmodule.exports = __webpack_require__(/*! F:\\web\\git\\portfolio\\10x\\src\\assets\\js\\watchLate.js */\"./src/assets/js/watchLate.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/content.js_./src/assets/js/contexMenu.js_./src/assets/js/popUp.js_./src/assets/js/side-menu.js_./src/assets/js/virtualKeyboard.js_./src/assets/js/watch.js_./src/assets/js/watchLate.js?");

/***/ })

/******/ });