(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['asoft-functions-core'] = factory(typeof this['asoft-functions-core'] === 'undefined' ? {} : this['asoft-functions-core']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=asoft-functions-core.js.map