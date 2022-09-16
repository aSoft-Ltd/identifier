(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlin-kotlin-test-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlin-kotlin-test-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'asoft-expect-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'asoft-expect-core'.");
    }
    if (typeof this['kotlin-kotlin-test-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'asoft-expect-core'. Its dependency 'kotlin-kotlin-test-js-ir' was not found. Please, check whether 'kotlin-kotlin-test-js-ir' is loaded prior to 'asoft-expect-core'.");
    }
    root['asoft-expect-core'] = factory(typeof this['asoft-expect-core'] === 'undefined' ? {} : this['asoft-expect-core'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlin-kotlin-test-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_kotlin_test) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.v2;
  var interfaceMeta = kotlin_kotlin.$_$.s5;
  var assertNotNull = kotlin_kotlin_test.$_$.e;
  var assertNotNull$default = kotlin_kotlin_test.$_$.b;
  var assertNull$default = kotlin_kotlin_test.$_$.c;
  var assertNull = kotlin_kotlin_test.$_$.f;
  var assertEquals = kotlin_kotlin_test.$_$.d;
  var assertEquals$default = kotlin_kotlin_test.$_$.a;
  var classMeta = kotlin_kotlin.$_$.m5;
  var THROW_CCE = kotlin_kotlin.$_$.v7;
  var AssertionError_init_$Create$ = kotlin_kotlin.$_$.c1;
  //endregion
  //region block: pre-declaration
  //endregion
  function expect(value) {
    return new BasicExpectationImpl(value);
  }
  function expectFunction(lambda) {
    return new LambdaExpectationImpl(Runnable$run$ref(lambda));
  }
  function Runnable$run$ref($boundThis) {
    var l = function () {
      $boundThis.run_mw4iiu_k$();
      return Unit_getInstance();
    };
    l.callableName = 'run';
    return l;
  }
  function LambdaExpectation() {
  }
  LambdaExpectation.$metadata$ = interfaceMeta('LambdaExpectation', [BasicExpectation]);
  function BasicExpectationImpl(value) {
    this.value_1 = value;
  }
  BasicExpectationImpl.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  BasicExpectationImpl.prototype.toBeNonNull_uoeb6k_k$ = function (message) {
    assertNotNull(this.value_1, message);
  };
  BasicExpectationImpl.prototype.toBeNonNull_hzaycb_k$ = function () {
    assertNotNull$default(this.value_1, null, 2, null);
  };
  BasicExpectationImpl.prototype.toBeNull_9jf5o4_k$ = function () {
    return assertNull$default(this.value_1, null, 2, null);
  };
  BasicExpectationImpl.prototype.toBeNull_v6ffjn_k$ = function (message) {
    return assertNull(this.value_1, message);
  };
  BasicExpectationImpl.prototype.toBe_ks6s6m_k$ = function (expected, message) {
    return assertEquals(expected, this.value_1, message);
  };
  BasicExpectationImpl.prototype.toBe_vfaz1p_k$ = function (expected) {
    return assertEquals$default(expected, this.value_1, null, 4, null);
  };
  BasicExpectationImpl.$metadata$ = classMeta('BasicExpectationImpl', [BasicExpectation]);
  function LambdaExpectationImpl(value) {
    this.value_1 = value;
    this.$$delegate_0__1 = new BasicExpectationImpl(value);
  }
  LambdaExpectationImpl.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  LambdaExpectationImpl.prototype.toBe_1eo4p8_k$ = function (expected) {
    this.$$delegate_0__1.toBe_vfaz1p_k$(expected);
  };
  LambdaExpectationImpl.prototype.toBe_vfaz1p_k$ = function (expected) {
    return this.toBe_1eo4p8_k$((!(expected == null) ? typeof expected === 'function' : false) ? expected : THROW_CCE());
  };
  LambdaExpectationImpl.prototype.toBe_7zt4xh_k$ = function (expected, message) {
    this.$$delegate_0__1.toBe_ks6s6m_k$(expected, message);
  };
  LambdaExpectationImpl.prototype.toBe_ks6s6m_k$ = function (expected, message) {
    return this.toBe_7zt4xh_k$((!(expected == null) ? typeof expected === 'function' : false) ? expected : THROW_CCE(), message);
  };
  LambdaExpectationImpl.prototype.toBeNonNull_hzaycb_k$ = function () {
    this.$$delegate_0__1.toBeNonNull_hzaycb_k$();
  };
  LambdaExpectationImpl.prototype.toBeNonNull_uoeb6k_k$ = function (message) {
    this.$$delegate_0__1.toBeNonNull_uoeb6k_k$(message);
  };
  LambdaExpectationImpl.prototype.toBeNull_9jf5o4_k$ = function () {
    this.$$delegate_0__1.toBeNull_9jf5o4_k$();
  };
  LambdaExpectationImpl.prototype.toBeNull_v6ffjn_k$ = function (message) {
    this.$$delegate_0__1.toBeNull_v6ffjn_k$(message);
  };
  LambdaExpectationImpl.prototype.toFail_edjyrr_k$ = function () {
    var throwable = null;
    try {
      this.value_1();
    } catch ($p) {
      if ($p instanceof Error) {
        throwable = $p;
      } else {
        throw $p;
      }
    }
    finally {
      if (!(throwable == null))
        return throwable;
      throw AssertionError_init_$Create$('Expected lambda to fail, but did not');
    }
  };
  LambdaExpectationImpl.prototype.toPass_9r3ns5_k$ = function () {
    var passed = false;
    var tmp;
    try {
      this.value_1();
      tmp = true;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = false;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    finally {
      if (passed)
        return Unit_getInstance();
      throw AssertionError_init_$Create$('Expected lambda to pass, but did not');
    }
    passed = tmp;
  };
  LambdaExpectationImpl.$metadata$ = classMeta('LambdaExpectationImpl', [LambdaExpectation, BasicExpectation]);
  function BasicExpectation() {
  }
  BasicExpectation.$metadata$ = interfaceMeta('BasicExpectation');
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = expectFunction;
  _.$_$.b = expect;
  //endregion
  return _;
}));

//# sourceMappingURL=asoft-expect-core.js.map