
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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
    /******/
})
/************************************************************************/
/******/({

/***/ 13:
/***/ (function (module, exports) {

        (function ($) {
          $.extend($.summernote.lang, {
            'de-DE': {
              font: {
                bold: 'Fett',
                italic: 'Kursiv',
                underline: 'Unterstreichen',
                clear: 'Zur??cksetzen',
                height: 'Zeilenh??he',
                name: 'Schriftart',
                strikethrough: 'Durchgestrichen',
                subscript: 'Tiefgestellt',
                superscript: 'Hochgestellt',
                size: 'Schriftgr????e'
              },
              image: {
                image: 'Bild',
                insert: 'Bild einf??gen',
                resizeFull: 'Originalgr????e',
                resizeHalf: '1/2 Gr????e',
                resizeQuarter: '1/4 Gr????e',
                floatLeft: 'Linksb??ndig',
                floatRight: 'Rechtsb??ndig',
                floatNone: 'Kein Textfluss',
                shapeRounded: 'Abgerundeter Rahmen',
                shapeCircle: 'Kreisf??rmiger Rahmen',
                shapeThumbnail: 'Rahmenvorschau',
                shapeNone: 'Kein Rahmen',
                dragImageHere: 'Bild hierher ziehen',
                dropImage: 'Bild oder Text nehmen',
                selectFromFiles: 'Datei ausw??hlen',
                maximumFileSize: 'Maximale Dateigr????e',
                maximumFileSizeError: 'Maximale Dateigr????e ??berschritten',
                url: 'Bild URL',
                remove: 'Bild entfernen',
                original: 'Original'
              },
              video: {
                video: 'Video',
                videoLink: 'Videolink',
                insert: 'Video einf??gen',
                url: 'Video URL',
                providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion oder Youku)'
              },
              link: {
                link: 'Link',
                insert: 'Link einf??gen',
                unlink: 'Link entfernen',
                edit: 'Bearbeiten',
                textToDisplay: 'Anzeigetext',
                url: 'Link URL',
                openInNewWindow: 'In neuem Fenster ??ffnen'
              },
              table: {
                table: 'Tabelle',
                addRowAbove: '+ Zeile oberhalb',
                addRowBelow: '+ Zeile unterhalb',
                addColLeft: '+ Spalte links',
                addColRight: '+ Spalte rechts',
                delRow: 'Reihe l??schen',
                delCol: 'Spalte l??schen',
                delTable: 'Tabelle l??schen'
              },
              hr: {
                insert: 'Horizontale Linie einf??gen'
              },
              style: {
                style: 'Stil',
                normal: 'Normal',
                p: 'Normal',
                blockquote: 'Zitat',
                pre: 'Quellcode',
                h1: '??berschrift 1',
                h2: '??berschrift 2',
                h3: '??berschrift 3',
                h4: '??berschrift 4',
                h5: '??berschrift 5',
                h6: '??berschrift 6'
              },
              lists: {
                unordered: 'Unnummerierte Liste',
                ordered: 'Nummerierte Liste'
              },
              options: {
                help: 'Hilfe',
                fullscreen: 'Vollbild',
                codeview: 'Quellcode anzeigen'
              },
              paragraph: {
                paragraph: 'Absatz',
                outdent: 'Einzug verkleinern',
                indent: 'Einzug vergr????ern',
                left: 'Links ausrichten',
                center: 'Zentriert ausrichten',
                right: 'Rechts ausrichten',
                justify: 'Blocksatz'
              },
              color: {
                recent: 'Letzte Farbe',
                more: 'Weitere Farben',
                background: 'Hintergrundfarbe',
                foreground: 'Schriftfarbe',
                transparent: 'Transparenz',
                setTransparent: 'Transparenz setzen',
                reset: 'Zur??cksetzen',
                resetToDefault: 'Auf Standard zur??cksetzen'
              },
              shortcut: {
                shortcuts: 'Tastenk??rzel',
                close: 'Schlie??en',
                textFormatting: 'Textformatierung',
                action: 'Aktion',
                paragraphFormatting: 'Absatzformatierung',
                documentStyle: 'Dokumentenstil',
                extraKeys: 'Weitere Tasten'
              },
              help: {
                'insertParagraph': 'Absatz einf??gen',
                'undo': 'Letzte Anweisung r??ckg??ngig',
                'redo': 'Letzte Anweisung wiederholen',
                'tab': 'Einzug hinzuf??gen',
                'untab': 'Einzug entfernen',
                'bold': 'Schrift Fett',
                'italic': 'Schrift Kursiv',
                'underline': 'Unterstreichen',
                'strikethrough': 'Durchstreichen',
                'removeFormat': 'Entfernt Format',
                'justifyLeft': 'Linksb??ndig',
                'justifyCenter': 'Mittig',
                'justifyRight': 'Rechtsb??ndig',
                'justifyFull': 'Blocksatz',
                'insertUnorderedList': 'Unnummerierte Liste',
                'insertOrderedList': 'Nummerierte Liste',
                'outdent': 'Aktuellen Absatz ausr??cken',
                'indent': 'Aktuellen Absatz einr??cken',
                'formatPara': 'Formatiert aktuellen Block als Absatz (P-Tag)',
                'formatH1': 'Formatiert aktuellen Block als H1',
                'formatH2': 'Formatiert aktuellen Block als H2',
                'formatH3': 'Formatiert aktuellen Block als H3',
                'formatH4': 'Formatiert aktuellen Block als H4',
                'formatH5': 'Formatiert aktuellen Block als H5',
                'formatH6': 'Formatiert aktuellen Block als H6',
                'insertHorizontalRule': 'F??gt eine horizontale Linie ein',
                'linkDialog.show': 'Zeigt Linkdialog'
              },
              history: {
                undo: 'R??ckg??ngig',
                redo: 'Wiederholen'
              },
              specialChar: {
                specialChar: 'Sonderzeichen',
                select: 'Zeichen ausw??hlen'
              }
            }
          });
        })(jQuery);

        /***/
})

    /******/
});
});