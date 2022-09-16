(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './asoft-identifier-generators.js', './kotlin-kotlin-stdlib-js-ir.js', './asoft-expect-core.js', './kotlin-kotlin-test-js-ir.js', './asoft-identifier-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./asoft-identifier-generators.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./asoft-expect-core.js'), require('./kotlin-kotlin-test-js-ir.js'), require('./asoft-identifier-core.js'));
  else {
    if (typeof this['asoft-identifier-generators'] === 'undefined') {
      throw new Error("Error loading module 'asoft-identifier-generators-test'. Its dependency 'asoft-identifier-generators' was not found. Please, check whether 'asoft-identifier-generators' is loaded prior to 'asoft-identifier-generators-test'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'asoft-identifier-generators-test'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'asoft-identifier-generators-test'.");
    }
    if (typeof this['asoft-expect-core'] === 'undefined') {
      throw new Error("Error loading module 'asoft-identifier-generators-test'. Its dependency 'asoft-expect-core' was not found. Please, check whether 'asoft-expect-core' is loaded prior to 'asoft-identifier-generators-test'.");
    }
    if (typeof this['kotlin-kotlin-test-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'asoft-identifier-generators-test'. Its dependency 'kotlin-kotlin-test-js-ir' was not found. Please, check whether 'kotlin-kotlin-test-js-ir' is loaded prior to 'asoft-identifier-generators-test'.");
    }
    if (typeof this['asoft-identifier-core'] === 'undefined') {
      throw new Error("Error loading module 'asoft-identifier-generators-test'. Its dependency 'asoft-identifier-core' was not found. Please, check whether 'asoft-identifier-core' is loaded prior to 'asoft-identifier-generators-test'.");
    }
    root['asoft-identifier-generators-test'] = factory(typeof this['asoft-identifier-generators-test'] === 'undefined' ? {} : this['asoft-identifier-generators-test'], this['asoft-identifier-generators'], this['kotlin-kotlin-stdlib-js-ir'], this['asoft-expect-core'], this['kotlin-kotlin-test-js-ir'], this['asoft-identifier-core']);
  }
}(this, function (_, kotlin_asoft_identifier_generators, kotlin_kotlin, kotlin_asoft_expect_core, kotlin_kotlin_test, kotlin_asoft_identifier_core) {
  'use strict';
  //region block: imports
  var EmailGenerator_getInstance = kotlin_asoft_identifier_generators.$_$.a;
  var println = kotlin_kotlin.$_$.p3;
  var expectArray = kotlin_asoft_expect_core.$_$.a;
  var classMeta = kotlin_kotlin.$_$.x3;
  var suite = kotlin_kotlin_test.$_$.h;
  var Unit_getInstance = kotlin_kotlin.$_$.a2;
  var test = kotlin_kotlin_test.$_$.i;
  var PhoneGenerator_getInstance = kotlin_asoft_identifier_generators.$_$.b;
  var expect = kotlin_asoft_expect_core.$_$.b;
  //endregion
  //region block: pre-declaration
  //endregion
  function EmailGeneratorTest() {
  }
  EmailGeneratorTest.prototype.should_generate_valid_emails_pgeron_k$ = function () {
    var emails = EmailGenerator_getInstance().randomWithSizeOf(20);
    println(emails);
    expectArray(emails).toBeOfSize_7g7iyi_k$(20);
  };
  EmailGeneratorTest.prototype.should_be_able_to_generate_email_for_a_given_name_2ylsuq_k$ = function () {
    var email = EmailGenerator_getInstance().generateFor('Johny Cage');
    println(email);
  };
  EmailGeneratorTest.$metadata$ = classMeta('EmailGeneratorTest');
  function test_fun_izoufj() {
    suite('EmailGeneratorTest', false, test_fun$EmailGeneratorTest_test_fun_4a2jmz());
  }
  function test_fun$EmailGeneratorTest_test_fun$should_generate_valid_emails_test_fun_ahfvey() {
    return function () {
      var tmp = new EmailGeneratorTest();
      tmp.should_generate_valid_emails_pgeron_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$EmailGeneratorTest_test_fun$should_be_able_to_generate_email_for_a_given_name_test_fun_mkccf5() {
    return function () {
      var tmp = new EmailGeneratorTest();
      tmp.should_be_able_to_generate_email_for_a_given_name_2ylsuq_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$EmailGeneratorTest_test_fun_4a2jmz() {
    return function () {
      test('should_generate_valid_emails', false, test_fun$EmailGeneratorTest_test_fun$should_generate_valid_emails_test_fun_ahfvey());
      test('should_be_able_to_generate_email_for_a_given_name', false, test_fun$EmailGeneratorTest_test_fun$should_be_able_to_generate_email_for_a_given_name_test_fun_mkccf5());
      return Unit_getInstance();
    };
  }
  function PhoneGeneratorTest() {
  }
  PhoneGeneratorTest.prototype.should_generate_valid_phone_numbers_o7k42h_k$ = function () {
    var phones = PhoneGenerator_getInstance().randomPhones(20);
    println(phones);
    expect(phones.get_size_woubt6_k$()).toBe_vfaz1p_k$(20);
  };
  PhoneGeneratorTest.$metadata$ = classMeta('PhoneGeneratorTest');
  function test_fun_izoufj_0() {
    suite('PhoneGeneratorTest', false, test_fun$PhoneGeneratorTest_test_fun_ypvxwn());
  }
  function test_fun$PhoneGeneratorTest_test_fun$should_generate_valid_phone_numbers_test_fun_ngh56e() {
    return function () {
      var tmp = new PhoneGeneratorTest();
      tmp.should_generate_valid_phone_numbers_o7k42h_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$PhoneGeneratorTest_test_fun_ypvxwn() {
    return function () {
      test('should_generate_valid_phone_numbers', false, test_fun$PhoneGeneratorTest_test_fun$should_generate_valid_phone_numbers_test_fun_ngh56e());
      return Unit_getInstance();
    };
  }
  //region block: tests
  (function () {
    suite('', false, function () {
      test_fun_izoufj();
      test_fun_izoufj_0();
    });
  }());
  //endregion
  //region block: exports
  kotlin_asoft_identifier_core.$jsExportAll$(_);
  kotlin_asoft_identifier_generators.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=asoft-identifier-generators-test.js.map