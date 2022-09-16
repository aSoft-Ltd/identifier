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
  var interfaceMeta = kotlin_kotlin.$_$.d4;
  var asList = kotlin_kotlin.$_$.i2;
  var assertNotNull = kotlin_kotlin_test.$_$.e;
  var assertNotNull$default = kotlin_kotlin_test.$_$.b;
  var assertNull$default = kotlin_kotlin_test.$_$.c;
  var assertNull = kotlin_kotlin_test.$_$.f;
  var assertEquals = kotlin_kotlin_test.$_$.d;
  var assertEquals$default = kotlin_kotlin_test.$_$.a;
  var classMeta = kotlin_kotlin.$_$.x3;
  var toString = kotlin_kotlin.$_$.x5;
  var THROW_CCE = kotlin_kotlin.$_$.o5;
  var Collection = kotlin_kotlin.$_$.c2;
  var isInterface = kotlin_kotlin.$_$.l4;
  var joinToString$default = kotlin_kotlin.$_$.e;
  var joinToString$default_0 = kotlin_kotlin.$_$.d;
  var trimIndent = kotlin_kotlin.$_$.i5;
  var toList = kotlin_kotlin.$_$.m3;
  var Unit_getInstance = kotlin_kotlin.$_$.a2;
  var assertTrue = kotlin_kotlin_test.$_$.g;
  //endregion
  //region block: pre-declaration
  //endregion
  function CollectionExpectation() {
  }
  CollectionExpectation.$metadata$ = interfaceMeta('CollectionExpectation', [BasicExpectation]);
  function expectArray(array) {
    return expect_0(array.slice());
  }
  function expect(value) {
    return new BasicExpectationImpl(value);
  }
  function expect_0(value) {
    return new CollectionExpectationImpl(asList(value));
  }
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
  function CollectionExpectationImpl$toContain$lambda() {
    return function (it) {
      return toString(it);
    };
  }
  function CollectionExpectationImpl$toContain$lambda_0() {
    return function (it) {
      return toString(it);
    };
  }
  function CollectionExpectationImpl$toNotContain$lambda() {
    return function (it) {
      return toString(it);
    };
  }
  function CollectionExpectationImpl$toNotContain$lambda_0() {
    return function (it) {
      return toString(it);
    };
  }
  function CollectionExpectationImpl$toBeEmpty$lambda() {
    return function (it) {
      return toString(it);
    };
  }
  function CollectionExpectationImpl(value) {
    this.value_1 = value;
    this.$$delegate_0__1 = new BasicExpectationImpl(value);
  }
  CollectionExpectationImpl.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  CollectionExpectationImpl.prototype.toBe_zh92v5_k$ = function (expected) {
    this.$$delegate_0__1.toBe_vfaz1p_k$(expected);
  };
  CollectionExpectationImpl.prototype.toBe_vfaz1p_k$ = function (expected) {
    return this.toBe_zh92v5_k$((!(expected == null) ? isInterface(expected, Collection) : false) ? expected : THROW_CCE());
  };
  CollectionExpectationImpl.prototype.toBe_rmmhvk_k$ = function (expected, message) {
    this.$$delegate_0__1.toBe_ks6s6m_k$(expected, message);
  };
  CollectionExpectationImpl.prototype.toBe_ks6s6m_k$ = function (expected, message) {
    return this.toBe_rmmhvk_k$((!(expected == null) ? isInterface(expected, Collection) : false) ? expected : THROW_CCE(), message);
  };
  CollectionExpectationImpl.prototype.toBeNonNull_hzaycb_k$ = function () {
    this.$$delegate_0__1.toBeNonNull_hzaycb_k$();
  };
  CollectionExpectationImpl.prototype.toBeNonNull_uoeb6k_k$ = function (message) {
    this.$$delegate_0__1.toBeNonNull_uoeb6k_k$(message);
  };
  CollectionExpectationImpl.prototype.toBeNull_9jf5o4_k$ = function () {
    this.$$delegate_0__1.toBeNull_9jf5o4_k$();
  };
  CollectionExpectationImpl.prototype.toBeNull_v6ffjn_k$ = function (message) {
    this.$$delegate_0__1.toBeNull_v6ffjn_k$(message);
  };
  CollectionExpectationImpl.prototype.toContain_vqfa70_k$ = function (elements) {
    var tmp = joinToString$default(elements, ',', '[', ']', 0, null, CollectionExpectationImpl$toContain$lambda(), 24, null);
    var tmp0_assertTrue = trimIndent('\n            \n            Expected   : ' + tmp + ' to be inside the collection\n            Collection : [\n                ' + joinToString$default_0(this.value_1, '\n        ', null, null, 0, null, CollectionExpectationImpl$toContain$lambda_0(), 30, null) + '\n            ]\n            ===============================================\n    ');
    {
    }
    var tmp$ret$0;
    {
      tmp$ret$0 = this.value_1.containsAll_jr3fla_k$(toList(elements));
    }
    return assertTrue(tmp$ret$0, tmp0_assertTrue);
  };
  CollectionExpectationImpl.prototype.toNotContain_1usfh5_k$ = function (elements) {
    var tmp = joinToString$default(elements, ',', '[', ']', 0, null, CollectionExpectationImpl$toNotContain$lambda(), 24, null);
    var tmp0_assertTrue = trimIndent('\n    \n        Expected   : ' + tmp + ' to not be inside the collection\n        Collection : [\n            ' + joinToString$default_0(this.value_1, '\n        ', null, null, 0, null, CollectionExpectationImpl$toNotContain$lambda_0(), 30, null) + '\n        ]\n        ===============================================\n        ');
    {
    }
    var tmp$ret$0;
    {
      tmp$ret$0 = !this.value_1.containsAll_jr3fla_k$(toList(elements));
    }
    return assertTrue(tmp$ret$0, tmp0_assertTrue);
  };
  CollectionExpectationImpl.prototype.toBeEmpty_b4wrcu_k$ = function () {
    var tmp0_assertTrue = trimIndent('\n    \n    Expected   : Collection to be empty\n    Collection : [\n        ' + joinToString$default_0(this.value_1, '\n        ', null, null, 0, null, CollectionExpectationImpl$toBeEmpty$lambda(), 30, null) + '\n    ]\n    ===============================================\n    ');
    {
    }
    var tmp$ret$0;
    {
      tmp$ret$0 = this.value_1.isEmpty_y1axqb_k$();
    }
    return assertTrue(tmp$ret$0, tmp0_assertTrue);
  };
  CollectionExpectationImpl.prototype.toContainElements_lkxvof_k$ = function () {
    var tmp0_assertTrue = '\nExpected   : Collection to contain elements\nCollection : Collection was empty\n===============================================';
    {
    }
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        var tmp0_isNotEmpty = this.value_1;
        tmp$ret$0 = !tmp0_isNotEmpty.isEmpty_y1axqb_k$();
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return assertTrue(tmp$ret$1, tmp0_assertTrue);
  };
  CollectionExpectationImpl.prototype.toHave_u6oblf_k$ = function (length) {
    var tmp0_assertTrue = trimIndent('\n    \n    Expected : ' + length + ' to be length of the collection\n    Actual   : ' + this.value_1.get_size_woubt6_k$() + ' is the length of the collection\n    ===============================================\n    ');
    {
    }
    var tmp$ret$0;
    {
      tmp$ret$0 = this.value_1.get_size_woubt6_k$() === length;
    }
    return assertTrue(tmp$ret$0, tmp0_assertTrue);
  };
  CollectionExpectationImpl.prototype.toBeOfSize_7g7iyi_k$ = function (size) {
    var tmp0_assertTrue = trimIndent('\n    \n    Expected : ' + size + ' to be size of the collection\n    Actual   : ' + this.value_1.get_size_woubt6_k$() + ' is the size of the collection\n    ===============================================\n    ');
    {
    }
    var tmp$ret$0;
    {
      tmp$ret$0 = this.value_1.get_size_woubt6_k$() === size;
    }
    return assertTrue(tmp$ret$0, tmp0_assertTrue);
  };
  CollectionExpectationImpl.$metadata$ = classMeta('CollectionExpectationImpl', [CollectionExpectation, BasicExpectation]);
  function BasicExpectation() {
  }
  BasicExpectation.$metadata$ = interfaceMeta('BasicExpectation');
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = expectArray;
  _.$_$.b = expect;
  //endregion
  return _;
}));

//# sourceMappingURL=asoft-expect-core.js.map