(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './asoft-identifier-core.js', './kotlinx-serialization-kotlinx-serialization-json-js-ir.js', './kotlin-kotlin-test-js-ir.js', './asoft-functions-core.js', './asoft-expect-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./asoft-identifier-core.js'), require('./kotlinx-serialization-kotlinx-serialization-json-js-ir.js'), require('./kotlin-kotlin-test-js-ir.js'), require('./asoft-functions-core.js'), require('./asoft-expect-core.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'asoft-identifier-core-test'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'asoft-identifier-core-test'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'asoft-identifier-core-test'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'asoft-identifier-core-test'.");
    }
    if (typeof this['asoft-identifier-core'] === 'undefined') {
      throw new Error("Error loading module 'asoft-identifier-core-test'. Its dependency 'asoft-identifier-core' was not found. Please, check whether 'asoft-identifier-core' is loaded prior to 'asoft-identifier-core-test'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'asoft-identifier-core-test'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json-js-ir' is loaded prior to 'asoft-identifier-core-test'.");
    }
    if (typeof this['kotlin-kotlin-test-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'asoft-identifier-core-test'. Its dependency 'kotlin-kotlin-test-js-ir' was not found. Please, check whether 'kotlin-kotlin-test-js-ir' is loaded prior to 'asoft-identifier-core-test'.");
    }
    if (typeof this['asoft-functions-core'] === 'undefined') {
      throw new Error("Error loading module 'asoft-identifier-core-test'. Its dependency 'asoft-functions-core' was not found. Please, check whether 'asoft-functions-core' is loaded prior to 'asoft-identifier-core-test'.");
    }
    if (typeof this['asoft-expect-core'] === 'undefined') {
      throw new Error("Error loading module 'asoft-identifier-core-test'. Its dependency 'asoft-expect-core' was not found. Please, check whether 'asoft-expect-core' is loaded prior to 'asoft-identifier-core-test'.");
    }
    root['asoft-identifier-core-test'] = factory(typeof this['asoft-identifier-core-test'] === 'undefined' ? {} : this['asoft-identifier-core-test'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['asoft-identifier-core'], this['kotlinx-serialization-kotlinx-serialization-json-js-ir'], this['kotlin-kotlin-test-js-ir'], this['asoft-functions-core'], this['asoft-expect-core']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_asoft_identifier_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_kotlin_test, kotlin_asoft_functions_core, kotlin_asoft_expect_core) {
  'use strict';
  //region block: imports
  var objectMeta = kotlin_kotlin.$_$.h6;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var PhoneSerializer_getInstance = kotlin_asoft_identifier_core.$_$.c;
  var Unit_getInstance = kotlin_kotlin.$_$.v2;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var THROW_CCE = kotlin_kotlin.$_$.v7;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var hashCode = kotlin_kotlin.$_$.r5;
  var equals = kotlin_kotlin.$_$.n5;
  var classMeta = kotlin_kotlin.$_$.m5;
  var Companion_getInstance = kotlin_asoft_identifier_core.$_$.d;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var EmailSerializer_getInstance = kotlin_asoft_identifier_core.$_$.b;
  var println = kotlin_kotlin.$_$.e5;
  var suite = kotlin_kotlin_test.$_$.h;
  var test = kotlin_kotlin_test.$_$.i;
  var Runnable = kotlin_asoft_functions_core.$_$.a;
  var expect = kotlin_asoft_expect_core.$_$.b;
  var toString = kotlin_kotlin.$_$.l6;
  var expectFunction = kotlin_asoft_expect_core.$_$.a;
  var Name = kotlin_asoft_identifier_core.$_$.f;
  var getKClass = kotlin_kotlin.$_$.d;
  var arrayOf = kotlin_kotlin.$_$.d8;
  var createKType = kotlin_kotlin.$_$.a;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var isInterface = kotlin_kotlin.$_$.a6;
  var Password = kotlin_asoft_identifier_core.$_$.g;
  var from = kotlin_asoft_identifier_core.$_$.a;
  var Long = kotlin_kotlin.$_$.t7;
  var Companion_getInstance_0 = kotlin_asoft_identifier_core.$_$.e;
  var assertEquals$default = kotlin_kotlin_test.$_$.a;
  var toLong = kotlin_kotlin.$_$.f7;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.q2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.r1;
  var createFailure = kotlin_kotlin.$_$.f8;
  var checkResultIsFailure = kotlin_kotlin_test.$_$.g;
  //endregion
  //region block: pre-declaration
  //endregion
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance();
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_2() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('Contact', this, 1);
    tmp0_serialDesc.addElement_ifop3j_k$('phone', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  $serializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  $serializer.prototype.childSerializers_5ghqw5_k$ = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [PhoneSerializer_getInstance()];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.beginStructure_dv3yt3_k$(tmp0_desc);
    if (tmp5_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp5_input.decodeSerializableElement_5lsbxj_k$(tmp0_desc, 0, PhoneSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_nk5a2l_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.decodeSerializableElement_5lsbxj_k$(tmp0_desc, 0, PhoneSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.endStructure_e64gd4_k$(tmp0_desc);
    return Contact_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer.prototype.serialize_xhocqt_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_dv3yt3_k$(tmp0_desc);
    tmp1_output.encodeSerializableElement_pr92am_k$(tmp0_desc, 0, PhoneSerializer_getInstance(), value.phone_1);
    tmp1_output.endStructure_e64gd4_k$(tmp0_desc);
  };
  $serializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_xhocqt_k$(encoder, value instanceof Contact ? value : THROW_CCE());
  };
  $serializer.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function Contact_init_$Init$(seen1, phone, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1)))
      throwMissingFieldException(seen1, 1, $serializer_getInstance().descriptor_1);
    $this.phone_1 = phone;
    return $this;
  }
  function Contact_init_$Create$(seen1, phone, serializationConstructorMarker) {
    return Contact_init_$Init$(seen1, phone, serializationConstructorMarker, Object.create(Contact.prototype));
  }
  function Contact(phone) {
    Companion_getInstance_2();
    this.phone_1 = phone;
  }
  Contact.prototype.get_phone_iwv5tx_k$ = function () {
    return this.phone_1;
  };
  Contact.prototype.component1_7eebsc_k$ = function () {
    return this.phone_1;
  };
  Contact.prototype.copy_6az0rx_k$ = function (phone) {
    return new Contact(phone);
  };
  Contact.prototype.copy$default_v592yv_k$ = function (phone, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      phone = this.phone_1;
    return this.copy_6az0rx_k$(phone);
  };
  Contact.prototype.toString = function () {
    return 'Contact(phone=' + this.phone_1 + ')';
  };
  Contact.prototype.hashCode = function () {
    return hashCode(this.phone_1);
  };
  Contact.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Contact))
      return false;
    var tmp0_other_with_cast = other instanceof Contact ? other : THROW_CCE();
    if (!equals(this.phone_1, tmp0_other_with_cast.phone_1))
      return false;
    return true;
  };
  Contact.$metadata$ = classMeta('Contact', undefined, undefined, {0: $serializer_getInstance});
  function EmailSerializationTest() {
  }
  EmailSerializationTest.prototype.should_serialize_email_properly_34iska_k$ = function () {
    var email = Companion_getInstance().invoke('andy@test.com');
    println(Default_getInstance().encodeToString_pl8vu2_k$(EmailSerializer_getInstance(), email));
  };
  EmailSerializationTest.$metadata$ = classMeta('EmailSerializationTest');
  function test_fun_izoufj() {
    suite('EmailSerializationTest', false, test_fun$EmailSerializationTest_test_fun_12rpg8());
  }
  function test_fun$EmailSerializationTest_test_fun$should_serialize_email_properly_test_fun_iubo8e() {
    return function () {
      var tmp = new EmailSerializationTest();
      tmp.should_serialize_email_properly_34iska_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$EmailSerializationTest_test_fun_12rpg8() {
    return function () {
      test('should_serialize_email_properly', false, test_fun$EmailSerializationTest_test_fun$should_serialize_email_properly_test_fun_iubo8e());
      return Unit_getInstance();
    };
  }
  function sam$functions_Runnable$0(function_0) {
    this.function_1 = function_0;
  }
  sam$functions_Runnable$0.prototype.run_mw4iiu_k$ = function () {
    return this.function_1();
  };
  sam$functions_Runnable$0.$metadata$ = classMeta('sam$functions_Runnable$0', [Runnable]);
  function EmailTest$should_fail$lambda() {
    return function () {
      Companion_getInstance().invoke('kitimtim');
      return Unit_getInstance();
    };
  }
  function EmailTest$should_fail$lambda_0() {
    return function () {
      Companion_getInstance().invoke('test.com');
      return Unit_getInstance();
    };
  }
  function EmailTest() {
  }
  EmailTest.prototype.should_have_the_same_equality_ocfj7t_k$ = function () {
    expect('' + Companion_getInstance().invoke('andy@lamax.com')).toBe_vfaz1p_k$('andy@lamax.com');
    expect('andy@lamax.com').toBe_vfaz1p_k$(toString(Companion_getInstance().invoke('andy@lamax.com')));
    expect(Companion_getInstance().invoke('andy@lamax.com')).toBe_vfaz1p_k$(Companion_getInstance().invoke('andy@lamax.com'));
  };
  EmailTest.prototype.should_fail_1g4x7r_k$ = function () {
    var tmp = EmailTest$should_fail$lambda();
    expectFunction(new sam$functions_Runnable$0(tmp)).toFail_edjyrr_k$();
    var tmp_0 = EmailTest$should_fail$lambda_0();
    expectFunction(new sam$functions_Runnable$0(tmp_0)).toFail_edjyrr_k$();
  };
  EmailTest.prototype.a_valid_email_should_have_valid_parts_syvghv_k$ = function () {
    var email = Companion_getInstance().invoke('andy@lamax.com');
    expect(email.parts.length).toBe_vfaz1p_k$(2);
    expect(email.domain).toBe_vfaz1p_k$('lamax.com');
    expect(email.identity).toBe_vfaz1p_k$('andy');
  };
  EmailTest.$metadata$ = classMeta('EmailTest');
  function test_fun_izoufj_0() {
    suite('EmailTest', false, test_fun$EmailTest_test_fun_ux74ty());
  }
  function test_fun$EmailTest_test_fun$should_have_the_same_equality_test_fun_f3loo5() {
    return function () {
      var tmp = new EmailTest();
      tmp.should_have_the_same_equality_ocfj7t_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$EmailTest_test_fun$should_fail_test_fun_7pcu6t() {
    return function () {
      var tmp = new EmailTest();
      tmp.should_fail_1g4x7r_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$EmailTest_test_fun$a_valid_email_should_have_valid_parts_test_fun_3c0z67() {
    return function () {
      var tmp = new EmailTest();
      tmp.a_valid_email_should_have_valid_parts_syvghv_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$EmailTest_test_fun_ux74ty() {
    return function () {
      test('should_have_the_same_equality', false, test_fun$EmailTest_test_fun$should_have_the_same_equality_test_fun_f3loo5());
      test('should_fail', false, test_fun$EmailTest_test_fun$should_fail_test_fun_7pcu6t());
      test('a_valid_email_should_have_valid_parts', false, test_fun$EmailTest_test_fun$a_valid_email_should_have_valid_parts_test_fun_3c0z67());
      return Unit_getInstance();
    };
  }
  function NameTest() {
  }
  NameTest.prototype.can_serialize_a_name_5x6km2_k$ = function () {
    var name = new Name('anderson lameck');
    var tmp$ret$2;
    {
      var tmp0_encodeToString = Default_getInstance();
      var tmp$ret$1;
      {
        var tmp1_serializer = tmp0_encodeToString.get_serializersModule_piitvg_k$();
        var tmp$ret$0;
        {
          var tmp0_cast = serializer(tmp1_serializer, createKType(getKClass(Name), arrayOf([]), false));
          tmp$ret$0 = isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE();
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp0_encodeToString.encodeToString_pl8vu2_k$(tmp$ret$1, name);
    }
    println(tmp$ret$2);
  };
  NameTest.prototype.can_deserialize_a_name_hgy521_k$ = function () {
    var tmp$ret$2;
    {
      var tmp0_decodeFromString = Default_getInstance();
      var tmp$ret$1;
      {
        var tmp1_serializer = tmp0_decodeFromString.get_serializersModule_piitvg_k$();
        var tmp$ret$0;
        {
          var tmp0_cast = serializer(tmp1_serializer, createKType(getKClass(Name), arrayOf([]), false));
          tmp$ret$0 = isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE();
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp0_decodeFromString.decodeFromString_ink0ik_k$(tmp$ret$1, '"anderson lameck"');
    }
    var name = tmp$ret$2;
    println(name);
  };
  NameTest.$metadata$ = classMeta('NameTest');
  function test_fun_izoufj_1() {
    suite('NameTest', false, test_fun$NameTest_test_fun_65ug9t());
  }
  function test_fun$NameTest_test_fun$can_serialize_a_name_test_fun_1ibvg7() {
    return function () {
      var tmp = new NameTest();
      tmp.can_serialize_a_name_5x6km2_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$NameTest_test_fun$can_deserialize_a_name_test_fun_whcru() {
    return function () {
      var tmp = new NameTest();
      tmp.can_deserialize_a_name_hgy521_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$NameTest_test_fun_65ug9t() {
    return function () {
      test('can_serialize_a_name', false, test_fun$NameTest_test_fun$can_serialize_a_name_test_fun_1ibvg7());
      test('can_deserialize_a_name', false, test_fun$NameTest_test_fun$can_deserialize_a_name_test_fun_whcru());
      return Unit_getInstance();
    };
  }
  function PasswordTest() {
  }
  PasswordTest.prototype.prints_starts_instead_of_clear_text_dbcs5g_k$ = function () {
    var pass = new Password('1234');
    println(pass);
    expect(from(123)).toBe_vfaz1p_k$(from(new Long(123, 0)));
    expect(pass).toBe_vfaz1p_k$(from(1234));
  };
  PasswordTest.$metadata$ = classMeta('PasswordTest');
  function test_fun_izoufj_2() {
    suite('PasswordTest', false, test_fun$PasswordTest_test_fun_knckhb());
  }
  function test_fun$PasswordTest_test_fun$prints_starts_instead_of_clear_text_test_fun_jr028f() {
    return function () {
      var tmp = new PasswordTest();
      tmp.prints_starts_instead_of_clear_text_dbcs5g_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$PasswordTest_test_fun_knckhb() {
    return function () {
      test('prints_starts_instead_of_clear_text', false, test_fun$PasswordTest_test_fun$prints_starts_instead_of_clear_text_test_fun_jr028f());
      return Unit_getInstance();
    };
  }
  function PhoneSerializationTest() {
    this.phone_1 = Companion_getInstance_0().invoke('0752748674');
  }
  PhoneSerializationTest.prototype.get_phone_iwv5tx_k$ = function () {
    return this.phone_1;
  };
  PhoneSerializationTest.prototype.should_serialize_the_phone_well_ufek9_k$ = function () {
    var json = Default_getInstance().encodeToString_pl8vu2_k$(PhoneSerializer_getInstance(), this.phone_1);
    expect(json).toBe_vfaz1p_k$('"255752748674"');
  };
  PhoneSerializationTest.prototype.should_serialize_the_phone_well_even_as_an_embedded_object_l4gxxc_k$ = function () {
    var tmp$ret$2;
    {
      var tmp0_encodeToString = Default_getInstance();
      var tmp1_encodeToString = new Contact(this.phone_1);
      var tmp$ret$1;
      {
        var tmp1_serializer = tmp0_encodeToString.get_serializersModule_piitvg_k$();
        var tmp$ret$0;
        {
          var tmp0_cast = serializer(tmp1_serializer, createKType(getKClass(Contact), arrayOf([]), false));
          tmp$ret$0 = isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE();
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp0_encodeToString.encodeToString_pl8vu2_k$(tmp$ret$1, tmp1_encodeToString);
    }
    var json = tmp$ret$2;
    expect(json).toBe_vfaz1p_k$('{"phone":"255752748674"}');
  };
  PhoneSerializationTest.$metadata$ = classMeta('PhoneSerializationTest');
  function test_fun_izoufj_3() {
    suite('PhoneSerializationTest', false, test_fun$PhoneSerializationTest_test_fun_l0lx4a());
  }
  function test_fun$PhoneSerializationTest_test_fun$should_serialize_the_phone_well_test_fun_4clkfn() {
    return function () {
      var tmp = new PhoneSerializationTest();
      tmp.should_serialize_the_phone_well_ufek9_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$PhoneSerializationTest_test_fun$should_serialize_the_phone_well_even_as_an_embedded_object_test_fun_44btei() {
    return function () {
      var tmp = new PhoneSerializationTest();
      tmp.should_serialize_the_phone_well_even_as_an_embedded_object_l4gxxc_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$PhoneSerializationTest_test_fun_l0lx4a() {
    return function () {
      test('should_serialize_the_phone_well', false, test_fun$PhoneSerializationTest_test_fun$should_serialize_the_phone_well_test_fun_4clkfn());
      test('should_serialize_the_phone_well_even_as_an_embedded_object', false, test_fun$PhoneSerializationTest_test_fun$should_serialize_the_phone_well_even_as_an_embedded_object_test_fun_44btei());
      return Unit_getInstance();
    };
  }
  function PhoneTest() {
  }
  PhoneTest.prototype.shouldBeLocalizedNormalized_nsx6lx_k$ = function () {
    var phone1 = Companion_getInstance_0().invoke('0752748674');
    var tmp = phone1.value;
    assertEquals$default('255752748674', tmp, null, 4, null);
    var phone2 = Companion_getInstance_0().invoke('255752748674');
    var tmp_0 = phone2.value;
    assertEquals$default('255752748674', tmp_0, null, 4, null);
    var phone3 = Companion_getInstance_0().invoke('254752748674');
    var tmp_1 = phone3.value;
    assertEquals$default('254752748674', tmp_1, null, 4, null);
    var phone4 = Companion_getInstance_0().invoke('+255752748674');
    var tmp_2 = phone4.value;
    assertEquals$default('255752748674', tmp_2, null, 4, null);
    var phone5 = Companion_getInstance_0().invoke('+256752748674');
    var tmp_3 = phone5.value;
    assertEquals$default('256752748674', tmp_3, null, 4, null);
    var adminPhone = Companion_getInstance_0()._ignore_fromLong(new Long(1596929536, 59));
    var tmp_4 = new Long(1596929536, 59);
    var tmp_5 = toLong(adminPhone.value);
    assertEquals$default(tmp_4, tmp_5, null, 4, null);
  };
  PhoneTest.prototype.shouldBeInvalid_54vj3k_k$ = function () {
    var tmp$ret$3;
    {
      var tmp$ret$2;
      {
        var tmp;
        try {
          var tmp$ret$0;
          {
            var tmp0_success = Companion_getInstance_1();
            Companion_getInstance_0().invoke('255');
            var tmp1_success = Unit_getInstance();
            tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
          }
          tmp = tmp$ret$0;
        } catch ($p) {
          var tmp_0;
          if ($p instanceof Error) {
            var tmp$ret$1;
            {
              var tmp2_failure = Companion_getInstance_1();
              tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure($p));
            }
            tmp_0 = tmp$ret$1;
          } else {
            throw $p;
          }
          tmp = tmp_0;
        }
        tmp$ret$2 = tmp;
      }
      tmp$ret$3 = checkResultIsFailure(null, tmp$ret$2);
    }
  };
  PhoneTest.prototype.should_throw_error_lycj8u_k$ = function () {
    var tmp$ret$3;
    {
      var tmp$ret$2;
      {
        var tmp;
        try {
          var tmp$ret$0;
          {
            var tmp0_success = Companion_getInstance_1();
            Companion_getInstance_0().fromInt(2);
            var tmp1_success = Unit_getInstance();
            tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
          }
          tmp = tmp$ret$0;
        } catch ($p) {
          var tmp_0;
          if ($p instanceof Error) {
            var tmp$ret$1;
            {
              var tmp2_failure = Companion_getInstance_1();
              tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure($p));
            }
            tmp_0 = tmp$ret$1;
          } else {
            throw $p;
          }
          tmp = tmp_0;
        }
        tmp$ret$2 = tmp;
      }
      tmp$ret$3 = checkResultIsFailure(null, tmp$ret$2);
    }
    var tmp$ret$7;
    {
      var tmp$ret$6;
      {
        var tmp_1;
        try {
          var tmp$ret$4;
          {
            var tmp0_success_0 = Companion_getInstance_1();
            Companion_getInstance_0().fromInt(0);
            var tmp1_success_0 = Unit_getInstance();
            tmp$ret$4 = _Result___init__impl__xyqfz8(Unit_getInstance());
          }
          tmp_1 = tmp$ret$4;
        } catch ($p) {
          var tmp_2;
          if ($p instanceof Error) {
            var tmp$ret$5;
            {
              var tmp2_failure_0 = Companion_getInstance_1();
              tmp$ret$5 = _Result___init__impl__xyqfz8(createFailure($p));
            }
            tmp_2 = tmp$ret$5;
          } else {
            throw $p;
          }
          tmp_1 = tmp_2;
        }
        tmp$ret$6 = tmp_1;
      }
      tmp$ret$7 = checkResultIsFailure(null, tmp$ret$6);
    }
  };
  PhoneTest.prototype.should_parse_SA_phone_numbers_1zojrj_k$ = function () {
    expect(Companion_getInstance_0().invoke('+27728772937')).toBe_vfaz1p_k$(Companion_getInstance_0().invoke('+27728772937'));
  };
  PhoneTest.prototype.should_be_equal_u6amfh_k$ = function () {
    expect(Companion_getInstance_0().invoke('255752748674')).toBe_vfaz1p_k$(Companion_getInstance_0().invoke('255752748674'));
  };
  PhoneTest.$metadata$ = classMeta('PhoneTest');
  function test_fun_izoufj_4() {
    suite('PhoneTest', false, test_fun$PhoneTest_test_fun_fpay78());
  }
  function test_fun$PhoneTest_test_fun$shouldBeLocalizedNormalized_test_fun_7285cb() {
    return function () {
      var tmp = new PhoneTest();
      tmp.shouldBeLocalizedNormalized_nsx6lx_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$PhoneTest_test_fun$shouldBeInvalid_test_fun_yrn69c() {
    return function () {
      var tmp = new PhoneTest();
      tmp.shouldBeInvalid_54vj3k_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$PhoneTest_test_fun$should_throw_error_test_fun_lgkkni() {
    return function () {
      var tmp = new PhoneTest();
      tmp.should_throw_error_lycj8u_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$PhoneTest_test_fun$should_parse_SA_phone_numbers_test_fun_43rjnz() {
    return function () {
      var tmp = new PhoneTest();
      tmp.should_parse_SA_phone_numbers_1zojrj_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$PhoneTest_test_fun$should_be_equal_test_fun_quuatp() {
    return function () {
      var tmp = new PhoneTest();
      tmp.should_be_equal_u6amfh_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$PhoneTest_test_fun_fpay78() {
    return function () {
      test('shouldBeLocalizedNormalized', false, test_fun$PhoneTest_test_fun$shouldBeLocalizedNormalized_test_fun_7285cb());
      test('shouldBeInvalid', false, test_fun$PhoneTest_test_fun$shouldBeInvalid_test_fun_yrn69c());
      test('should_throw_error', false, test_fun$PhoneTest_test_fun$should_throw_error_test_fun_lgkkni());
      test('should_parse_SA_phone_numbers', false, test_fun$PhoneTest_test_fun$should_parse_SA_phone_numbers_test_fun_43rjnz());
      test('should_be_equal', false, test_fun$PhoneTest_test_fun$should_be_equal_test_fun_quuatp());
      return Unit_getInstance();
    };
  }
  //region block: post-declaration
  $serializer.prototype.typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  //endregion
  //region block: tests
  (function () {
    suite('', false, function () {
      test_fun_izoufj();
      test_fun_izoufj_0();
      test_fun_izoufj_1();
      test_fun_izoufj_2();
      test_fun_izoufj_3();
      test_fun_izoufj_4();
    });
  }());
  //endregion
  //region block: exports
  kotlin_asoft_identifier_core.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=asoft-identifier-core-test.js.map