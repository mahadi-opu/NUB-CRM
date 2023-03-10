
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd)
    define([], factory);
  else {
    var a = factory();
    for (var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
  }
})(window, function () {
  return /******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
        /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
        /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
      /******/
}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
        /******/
}
      /******/
};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function (exports) {
/******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
      /******/
};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function (value, mode) {
/******/ 		if (mode & 1) value = __webpack_require__(value);
/******/ 		if (mode & 8) return value;
/******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
      /******/
};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
      /******/
};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
    /******/
})
/************************************************************************/
/******/({

/***/ 28:
/***/ (function (module, exports) {

        (function ($) {
          $.extend($.summernote.lang, {
            'lt-LT': {
              font: {
                bold: 'Pary??kintas',
                italic: 'Kursyvas',
                underline: 'Pabr????tas',
                clear: 'Be formatavimo',
                height: 'Eilut??s auk??tis',
                name: '??rifto pavadinimas',
                strikethrough: 'Perbrauktas',
                superscript: 'Vir??utinis',
                subscript: 'Indeksas',
                size: '??rifto dydis'
              },
              image: {
                image: 'Paveiksl??lis',
                insert: '??terpti paveiksl??l??',
                resizeFull: 'Pilnas dydis',
                resizeHalf: 'Suma??inti dyd?? 50%',
                resizeQuarter: 'Suma??inti dyd?? 25%',
                floatLeft: 'Kairinis lygiavimas',
                floatRight: 'De??ininis lygiavimas',
                floatNone: 'Jokio lygiavimo',
                shapeRounded: 'Forma: apval??s kra??tai',
                shapeCircle: 'Forma: apskritimas',
                shapeThumbnail: 'Forma: miniati??ra',
                shapeNone: 'Forma: jokia',
                dragImageHere: 'Vilkite paveiksl??l?? ??ia',
                dropImage: 'Drop image or Text',
                selectFromFiles: 'Pasirinkite fail??',
                maximumFileSize: 'Maskimalus failo dydis',
                maximumFileSizeError: 'Maskimalus failo dydis vir??ytas!',
                url: 'Paveiksl??lio URL adresas',
                remove: 'I??trinti paveiksl??l??',
                original: 'Original'
              },
              video: {
                video: 'Video',
                videoLink: 'Video Link',
                insert: 'Insert Video',
                url: 'Video URL?',
                providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)'
              },
              link: {
                link: 'Nuoroda',
                insert: '??terpti nuorod??',
                unlink: 'Pa??alinti nuorod??',
                edit: 'Redaguoti',
                textToDisplay: 'Rodomas tekstas',
                url: 'Koks URL adresas yra susietas?',
                openInNewWindow: 'Atidaryti naujame lange'
              },
              table: {
                table: 'Lentel??',
                addRowAbove: 'Add row above',
                addRowBelow: 'Add row below',
                addColLeft: 'Add column left',
                addColRight: 'Add column right',
                delRow: 'Delete row',
                delCol: 'Delete column',
                delTable: 'Delete table'
              },
              hr: {
                insert: '??terpti horizontali?? linij??'
              },
              style: {
                style: 'Stilius',
                p: 'pus',
                blockquote: 'Citata',
                pre: 'Kodas',
                h1: 'Antra??t?? 1',
                h2: 'Antra??t?? 2',
                h3: 'Antra??t?? 3',
                h4: 'Antra??t?? 4',
                h5: 'Antra??t?? 5',
                h6: 'Antra??t?? 6'
              },
              lists: {
                unordered: 'Su??enklintasis s??ra??as',
                ordered: 'Sunumeruotas s??ra??as'
              },
              options: {
                help: 'Pagalba',
                fullscreen: 'Viso ekrano re??imas',
                codeview: 'HTML kodo per??i??ra'
              },
              paragraph: {
                paragraph: 'Pastraipa',
                outdent: 'Suma??inti ??trauk??',
                indent: 'Padidinti ??trauk??',
                left: 'Kairin?? lygiuot??',
                center: 'Centrin?? lygiuot??',
                right: 'De??inin?? lygiuot??',
                justify: 'Abipusis i??lyginimas'
              },
              color: {
                recent: 'Paskutin?? naudota spalva',
                more: 'Daugiau spalv??',
                background: 'Fono spalva',
                foreground: '??rifto spalva',
                transparent: 'Permatoma',
                setTransparent: 'Nustatyti skaidrumo intensyvum??',
                reset: 'Atkurti',
                resetToDefault: 'Atstatyti numatyt??j?? spalv??'
              },
              shortcut: {
                shortcuts: 'Spartieji klavi??ai',
                close: 'U??daryti',
                textFormatting: 'Teksto formatavimas',
                action: 'Veiksmas',
                paragraphFormatting: 'Pastraipos formatavimas',
                documentStyle: 'Dokumento stilius',
                extraKeys: 'Papildomi klavi???? deriniai'
              },
              help: {
                'insertParagraph': 'Insert Paragraph',
                'undo': 'Undoes the last command',
                'redo': 'Redoes the last command',
                'tab': 'Tab',
                'untab': 'Untab',
                'bold': 'Set a bold style',
                'italic': 'Set a italic style',
                'underline': 'Set a underline style',
                'strikethrough': 'Set a strikethrough style',
                'removeFormat': 'Clean a style',
                'justifyLeft': 'Set left align',
                'justifyCenter': 'Set center align',
                'justifyRight': 'Set right align',
                'justifyFull': 'Set full align',
                'insertUnorderedList': 'Toggle unordered list',
                'insertOrderedList': 'Toggle ordered list',
                'outdent': 'Outdent on current paragraph',
                'indent': 'Indent on current paragraph',
                'formatPara': 'Change current block\'s format as a paragraph(P tag)',
                'formatH1': 'Change current block\'s format as H1',
                'formatH2': 'Change current block\'s format as H2',
                'formatH3': 'Change current block\'s format as H3',
                'formatH4': 'Change current block\'s format as H4',
                'formatH5': 'Change current block\'s format as H5',
                'formatH6': 'Change current block\'s format as H6',
                'insertHorizontalRule': 'Insert horizontal rule',
                'linkDialog.show': 'Show Link Dialog'
              },
              history: {
                undo: 'Anuliuoti veiksm??',
                redo: 'Perdaryti veiksm??'
              },
              specialChar: {
                specialChar: 'SPECIAL CHARACTERS',
                select: 'Select Special characters'
              }
            }
          });
        })(jQuery);

        /***/
})

    /******/
});
});