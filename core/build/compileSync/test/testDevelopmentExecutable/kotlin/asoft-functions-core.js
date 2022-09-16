(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'asoft-functions-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'asoft-functions-core'.");
    }
    root['asoft-functions-core'] = factory(typeof this['asoft-functions-core'] === 'undefined' ? {} : this['asoft-functions-core'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var interfaceMeta = kotlin_kotlin.$_$.s5;
  //endregion
  //region block: pre-declaration
  //endregion
  function Runnable() {
  }
  Runnable.$metadata$ = interfaceMeta('Runnable');
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Runnable;
  //endregion
  return _;
}));

//# sourceMappingURL=asoft-functions-core.js.map