(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'asoft-identifier-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'asoft-identifier-core'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'asoft-identifier-core'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'asoft-identifier-core'.");
    }
    root['asoft-identifier-core'] = factory(typeof this['asoft-identifier-core'] === 'undefined' ? {} : this['asoft-identifier-core'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var interfaceMeta = kotlin_kotlin.$_$.d4;
  var objectMeta = kotlin_kotlin.$_$.s4;
  var IllegalArgumentException = kotlin_kotlin.$_$.m5;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.y;
  var captureStack = kotlin_kotlin.$_$.s3;
  var classMeta = kotlin_kotlin.$_$.x3;
  var split$default = kotlin_kotlin.$_$.i;
  var capitalize = kotlin_kotlin.$_$.b5;
  var Unit_getInstance = kotlin_kotlin.$_$.a2;
  var joinToString$default = kotlin_kotlin.$_$.d;
  var charSequenceGet = kotlin_kotlin.$_$.u3;
  var charSequenceSubSequence = kotlin_kotlin.$_$.w3;
  var get_lastIndex = kotlin_kotlin.$_$.c3;
  var last = kotlin_kotlin.$_$.d3;
  var shuffled = kotlin_kotlin.$_$.j3;
  var equals = kotlin_kotlin.$_$.y3;
  var getStringHashCode = kotlin_kotlin.$_$.b4;
  var CharSequence = kotlin_kotlin.$_$.k5;
  var toString = kotlin_kotlin.$_$.u4;
  var toCharArray = kotlin_kotlin.$_$.g5;
  var joinToString$default_0 = kotlin_kotlin.$_$.f;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x;
  var getOrNull = kotlin_kotlin.$_$.y2;
  var contains$default = kotlin_kotlin.$_$.g;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.z;
  var copyToArray = kotlin_kotlin.$_$.u2;
  var first = kotlin_kotlin.$_$.x2;
  var last_0 = kotlin_kotlin.$_$.e3;
  var isInterface = kotlin_kotlin.$_$.l4;
  var startsWith$default = kotlin_kotlin.$_$.j;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var THROW_CCE = kotlin_kotlin.$_$.o5;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  //endregion
  //region block: pre-declaration
  InvalidEmailException.prototype = Object.create(IllegalArgumentException.prototype);
  InvalidEmailException.prototype.constructor = InvalidEmailException;
  InvalidPhoneException.prototype = Object.create(IllegalArgumentException.prototype);
  InvalidPhoneException.prototype.constructor = InvalidPhoneException;
  //endregion
  function Comm() {
  }
  Comm.$metadata$ = interfaceMeta('Comm');
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.invoke = function (value) {
    return Companion_getInstance_2().invoke_stcouh_k$(value);
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Email() {
    Companion_getInstance();
  }
  Email.$metadata$ = interfaceMeta('Email', [Comm]);
  function InvalidEmailException(email, cause) {
    IllegalArgumentException_init_$Init$('Invalid email: ' + email, cause, this);
    this.email_1 = email;
    this.cause_1 = cause;
    captureStack(this, InvalidEmailException);
  }
  InvalidEmailException.prototype.get_email_iqwbqr_k$ = function () {
    return this.email_1;
  };
  InvalidEmailException.prototype.get_cause_iplhs0_k$ = function () {
    return this.cause_1;
  };
  InvalidEmailException.$metadata$ = classMeta('InvalidEmailException', undefined, undefined, undefined, undefined, IllegalArgumentException.prototype);
  Object.defineProperty(InvalidEmailException.prototype, 'cause', {
    configurable: true,
    get: function () {
      return this.get_cause_iplhs0_k$();
    }
  });
  function InvalidPhoneException(phone, cause) {
    IllegalArgumentException_init_$Init$('Invalid phone: ' + phone, cause, this);
    this.phone_1 = phone;
    this.cause_1 = cause;
    captureStack(this, InvalidPhoneException);
  }
  InvalidPhoneException.prototype.get_phone_iwv5tx_k$ = function () {
    return this.phone_1;
  };
  InvalidPhoneException.prototype.get_cause_iplhs0_k$ = function () {
    return this.cause_1;
  };
  InvalidPhoneException.$metadata$ = classMeta('InvalidPhoneException', undefined, undefined, undefined, undefined, IllegalArgumentException.prototype);
  Object.defineProperty(InvalidPhoneException.prototype, 'cause', {
    configurable: true,
    get: function () {
      return this.get_cause_iplhs0_k$();
    }
  });
  function _get_value__a43j40($this) {
    return $this.value_1;
  }
  function _get_parts__cy9fyn($this) {
    return split$default($this.value_1, [' '], false, 0, 6, null);
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.prototype.serializer = function () {
    return NameSerializer_getInstance();
  };
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Name$value$lambda() {
    return function (it) {
      return capitalize(it);
    };
  }
  function Name(value) {
    Companion_getInstance_0();
    this.$$delegate_0__1 = value;
    var tmp = this;
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = value;
      }
      tmp$ret$1 = tmp$ret$0.toLowerCase();
    }
    var tmp_0 = tmp$ret$1;
    var tmp_1 = split$default(tmp_0, [' '], false, 0, 6, null);
    tmp.value_1 = joinToString$default(tmp_1, ' ', null, null, 0, null, Name$value$lambda(), 30, null);
  }
  Name.prototype.get_length_g42xv3_k$ = function () {
    return this.$$delegate_0__1.length;
  };
  Name.prototype.get_a7b70_k$ = function (index) {
    return charSequenceGet(this.$$delegate_0__1, index);
  };
  Name.prototype.subSequence_5fh70h_k$ = function (startIndex, endIndex) {
    return charSequenceSubSequence(this.$$delegate_0__1, startIndex, endIndex);
  };
  Name.prototype.get_full_wom9js_k$ = function () {
    return this.value_1;
  };
  Name.prototype.get_first_irdx8n_k$ = function () {
    var tmp$ret$1;
    {
      var tmp0_getOrElse = _get_parts__cy9fyn(this);
      var tmp;
      if (0 <= get_lastIndex(tmp0_getOrElse)) {
        tmp = tmp0_getOrElse.get_fkrdnv_k$(0);
      } else {
        var tmp$ret$0;
        {
          tmp$ret$0 = '';
        }
        tmp = tmp$ret$0;
      }
      tmp$ret$1 = tmp;
    }
    return tmp$ret$1;
  };
  Name.prototype.get_middle_gn5ace_k$ = function () {
    var tmp;
    if (_get_parts__cy9fyn(this).get_size_woubt6_k$() > 2) {
      var tmp_0 = _get_parts__cy9fyn(this).subList_d153ha_k$(1, _get_parts__cy9fyn(this).get_size_woubt6_k$() - 1 | 0);
      tmp = joinToString$default(tmp_0, ' ', null, null, 0, null, null, 62, null);
    } else {
      tmp = '';
    }
    return tmp;
  };
  Name.prototype.get_last_wopotb_k$ = function () {
    var tmp;
    if (_get_parts__cy9fyn(this).get_size_woubt6_k$() > 1) {
      tmp = last(_get_parts__cy9fyn(this));
    } else {
      tmp = '';
    }
    return tmp;
  };
  Name.prototype.get_firstLast_apko1p_k$ = function () {
    return this.first + ' ' + this.last;
  };
  Name.prototype.randomized = function () {
    var tmp = shuffled(_get_parts__cy9fyn(this));
    return new Name(joinToString$default(tmp, ' ', null, null, 0, null, null, 62, null));
  };
  Name.prototype.equals = function (other) {
    var tmp0_subject = other;
    var tmp;
    if (!(tmp0_subject == null) ? typeof tmp0_subject === 'string' : false) {
      tmp = equals(this.value_1, other);
    } else {
      if (tmp0_subject instanceof Name) {
        tmp = this.value_1 === other.value_1;
      } else {
        tmp = false;
      }
    }
    return tmp;
  };
  Name.prototype.hashCode = function () {
    return getStringHashCode(this.value_1);
  };
  Name.prototype.toString = function () {
    return this.value_1;
  };
  Name.$metadata$ = classMeta('Name', [CharSequence], undefined, {0: NameSerializer_getInstance});
  Object.defineProperty(Name.prototype, 'full', {
    configurable: true,
    get: Name.prototype.get_full_wom9js_k$
  });
  Object.defineProperty(Name.prototype, 'first', {
    configurable: true,
    get: Name.prototype.get_first_irdx8n_k$
  });
  Object.defineProperty(Name.prototype, 'middle', {
    configurable: true,
    get: Name.prototype.get_middle_gn5ace_k$
  });
  Object.defineProperty(Name.prototype, 'last', {
    configurable: true,
    get: Name.prototype.get_last_wopotb_k$
  });
  Object.defineProperty(Name.prototype, 'firstLast', {
    configurable: true,
    get: Name.prototype.get_firstLast_apko1p_k$
  });
  function Password_init_$Init$(value, $this) {
    Password.call($this, toString(value));
    return $this;
  }
  function from(value) {
    return Password_init_$Init$(value, Object.create(Password.prototype));
  }
  function Password$toString$lambda() {
    return function (it) {
      return '*';
    };
  }
  function Password(value) {
    this.value_1 = value;
  }
  Password.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  Password.prototype.get_length_g42xv3_k$ = function () {
    return this.value_1.length;
  };
  Password.prototype.get_a7b70_k$ = function (index) {
    return charSequenceGet(this.value_1, index);
  };
  Password.prototype.subSequence_5fh70h_k$ = function (startIndex, endIndex) {
    return charSequenceSubSequence(this.value_1, startIndex, endIndex);
  };
  Password.prototype.get_clearText_ci54lr_k$ = function () {
    return this.value_1;
  };
  Password.prototype.equals = function (other) {
    var tmp0_subject = other;
    var tmp;
    if (tmp0_subject instanceof Password) {
      tmp = this.value_1 === other.value_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  Password.prototype.hashCode = function () {
    return getStringHashCode(this.value_1);
  };
  Password.prototype.toString = function () {
    var tmp = toCharArray(this.value_1);
    return joinToString$default_0(tmp, '', null, null, 0, null, Password$toString$lambda(), 30, null);
  };
  Password.$metadata$ = classMeta('Password', [CharSequence]);
  Object.defineProperty(Password.prototype, 'value', {
    configurable: true,
    get: Password.prototype.get_value_j01efc_k$
  });
  Object.defineProperty(Password.prototype, 'clearText', {
    configurable: true,
    get: Password.prototype.get_clearText_ci54lr_k$
  });
  function Companion_1() {
    Companion_instance_1 = this;
  }
  Companion_1.prototype.invoke = function (value) {
    return Companion_getInstance_3().invoke_stcouh_k$(value);
  };
  Companion_1.prototype.fromInt = function (value) {
    return Companion_getInstance_3().invoke_stcouh_k$(value.toString());
  };
  Companion_1.prototype._ignore_fromLong = function (value) {
    return Companion_getInstance_3().invoke_stcouh_k$(value.toString());
  };
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Phone() {
    Companion_getInstance_1();
  }
  Phone.$metadata$ = interfaceMeta('Phone', [Comm]);
  function Companion_2() {
    Companion_instance_2 = this;
  }
  Companion_2.prototype.invoke_stcouh_k$ = function (value) {
    var parts = split$default(value, ['@'], false, 0, 6, null);
    if (!(parts.get_size_woubt6_k$() === 2)) {
      var cause = IllegalArgumentException_init_$Create$('An email must have exactly two parts, the identifier and the domain');
      throw new InvalidEmailException(value, cause);
    }
    var domainPart = getOrNull(parts, 1);
    if (domainPart == null) {
      var cause_0 = IllegalArgumentException_init_$Create$('an Email must have a domain part');
      throw new InvalidEmailException(value, cause_0);
    }
    if (!contains$default(domainPart, '.', false, 2, null)) {
      var cause_1 = IllegalArgumentException_init_$Create$('an email domain must have a top level domain');
      throw new InvalidEmailException(value, cause_1);
    }
    var topLevelDomain = getOrNull(split$default(domainPart, ['.'], false, 0, 6, null), 1);
    if (topLevelDomain == null) {
      var cause_2 = IllegalArgumentException_init_$Create$("an email's top level domain must exist");
      throw IllegalArgumentException_init_$Create$_0(value, cause_2);
    }
    if (topLevelDomain.length < 2) {
      var cause_3 = IllegalArgumentException_init_$Create$('invalid top level domain: ' + topLevelDomain);
      throw IllegalArgumentException_init_$Create$_0(value, cause_3);
    }
    return new EmailImpl(value);
  };
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function EmailImpl(value) {
    Companion_getInstance_2();
    this.value_1 = value;
    var tmp = this;
    var tmp$ret$0;
    {
      var tmp0_toTypedArray = split$default(this.value_1, ['@'], false, 0, 6, null);
      tmp$ret$0 = copyToArray(tmp0_toTypedArray);
    }
    tmp.parts_1 = tmp$ret$0;
    this.identity_1 = first(this.parts_1);
    this.domain_1 = last_0(this.parts_1);
  }
  EmailImpl.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  EmailImpl.prototype.get_parts_iwqrav_k$ = function () {
    return this.parts_1;
  };
  EmailImpl.prototype.get_identity_y1rl2x_k$ = function () {
    return this.identity_1;
  };
  EmailImpl.prototype.get_domain_ch74y5_k$ = function () {
    return this.domain_1;
  };
  EmailImpl.prototype.equals = function (other) {
    var tmp0_subject = other;
    var tmp;
    if (!(tmp0_subject == null) ? typeof tmp0_subject === 'string' : false) {
      tmp = equals(this.value_1, other);
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Email) : false) {
        tmp = this.value_1 === other.value;
      } else {
        tmp = false;
      }
    }
    return tmp;
  };
  EmailImpl.prototype.hashCode = function () {
    return getStringHashCode(this.value_1);
  };
  EmailImpl.prototype.toString = function () {
    return this.value_1;
  };
  EmailImpl.$metadata$ = classMeta('EmailImpl', [Email]);
  Object.defineProperty(EmailImpl.prototype, 'value', {
    configurable: true,
    get: function () {
      return this.get_value_j01efc_k$();
    }
  });
  Object.defineProperty(EmailImpl.prototype, 'parts', {
    configurable: true,
    get: function () {
      return this.get_parts_iwqrav_k$();
    }
  });
  Object.defineProperty(EmailImpl.prototype, 'identity', {
    configurable: true,
    get: function () {
      return this.get_identity_y1rl2x_k$();
    }
  });
  Object.defineProperty(EmailImpl.prototype, 'domain', {
    configurable: true,
    get: function () {
      return this.get_domain_ch74y5_k$();
    }
  });
  function Companion_3() {
    Companion_instance_3 = this;
  }
  Companion_3.prototype.invoke_stcouh_k$ = function (value) {
    var phone = value;
    if (startsWith$default(value, '0', false, 2, null)) {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = value;
        }
        tmp$ret$1 = tmp$ret$0.substring(1);
      }
      phone = tmp$ret$1;
    }
    var tmp = phone;
    if (startsWith$default(tmp, '+', false, 2, null)) {
      var tmp$ret$3;
      {
        var tmp0_substring = phone;
        var tmp$ret$2;
        {
          tmp$ret$2 = tmp0_substring;
        }
        tmp$ret$3 = tmp$ret$2.substring(1);
      }
      phone = tmp$ret$3;
    }
    if (phone.length < 9) {
      var cause = IllegalArgumentException_init_$Create$('Too few digits');
      throw new InvalidPhoneException(value, cause);
    }
    var tmp0_subject = phone.length;
    return tmp0_subject === 9 ? new PhoneImpl('255' + phone) : new PhoneImpl(phone);
  };
  Companion_3.$metadata$ = objectMeta('Companion');
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function PhoneImpl(value) {
    Companion_getInstance_3();
    this.value_1 = value;
  }
  PhoneImpl.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  PhoneImpl.prototype.equals = function (other) {
    var tmp0_subject = other;
    var tmp;
    if (!(tmp0_subject == null) ? typeof tmp0_subject === 'string' : false) {
      tmp = equals(this.value_1, other);
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Phone) : false) {
        tmp = this.value_1 === other.value;
      } else {
        tmp = false;
      }
    }
    return tmp;
  };
  PhoneImpl.prototype.hashCode = function () {
    return getStringHashCode(this.value_1);
  };
  PhoneImpl.prototype.toString = function () {
    return this.value_1;
  };
  PhoneImpl.$metadata$ = classMeta('PhoneImpl', [Phone]);
  Object.defineProperty(PhoneImpl.prototype, 'value', {
    configurable: true,
    get: function () {
      return this.get_value_j01efc_k$();
    }
  });
  function EmailSerializer() {
    EmailSerializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('identifier.Email', STRING_getInstance());
  }
  EmailSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  EmailSerializer.prototype.serialize_x9zqmo_k$ = function (encoder, value) {
    return encoder.encodeString_90sumj_k$(value.value);
  };
  EmailSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_x9zqmo_k$(encoder, (!(value == null) ? isInterface(value, Email) : false) ? value : THROW_CCE());
  };
  EmailSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return Companion_getInstance().invoke(decoder.decodeString_x3hxsx_k$());
  };
  EmailSerializer.$metadata$ = objectMeta('EmailSerializer', [KSerializer]);
  var EmailSerializer_instance;
  function EmailSerializer_getInstance() {
    if (EmailSerializer_instance == null)
      new EmailSerializer();
    return EmailSerializer_instance;
  }
  function NameSerializer() {
    NameSerializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('identifier.Name', STRING_getInstance());
  }
  NameSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return new Name(decoder.decodeString_x3hxsx_k$());
  };
  NameSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  NameSerializer.prototype.serialize_x1651_k$ = function (encoder, value) {
    return encoder.encodeString_90sumj_k$(value.full);
  };
  NameSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_x1651_k$(encoder, value instanceof Name ? value : THROW_CCE());
  };
  NameSerializer.$metadata$ = objectMeta('NameSerializer', [KSerializer]);
  var NameSerializer_instance;
  function NameSerializer_getInstance() {
    if (NameSerializer_instance == null)
      new NameSerializer();
    return NameSerializer_instance;
  }
  function PhoneSerializer() {
    PhoneSerializer_instance = this;
    this.descriptor_1 = PrimitiveSerialDescriptor('identifier.Phone', STRING_getInstance());
  }
  PhoneSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return Companion_getInstance_1().invoke(decoder.decodeString_x3hxsx_k$());
  };
  PhoneSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  PhoneSerializer.prototype.serialize_q1mhr6_k$ = function (encoder, value) {
    return encoder.encodeString_90sumj_k$(value.value);
  };
  PhoneSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_q1mhr6_k$(encoder, (!(value == null) ? isInterface(value, Phone) : false) ? value : THROW_CCE());
  };
  PhoneSerializer.$metadata$ = objectMeta('PhoneSerializer', [KSerializer]);
  var PhoneSerializer_instance;
  function PhoneSerializer_getInstance() {
    if (PhoneSerializer_instance == null)
      new PhoneSerializer();
    return PhoneSerializer_instance;
  }
  //region block: exports
  function $jsExportAll$(_) {
    var $identifier = _.identifier || (_.identifier = {});
    var $identifier = _.identifier || (_.identifier = {});
    var $identifier = _.identifier || (_.identifier = {});
    $identifier.Name = Name;
    Object.defineProperty($identifier.Name, 'Companion', {
      configurable: true,
      get: Companion_getInstance_0
    });
    var $identifier = _.identifier || (_.identifier = {});
    $identifier.Password = Password;
    $identifier.Password.from = from;
    var $identifier = _.identifier || (_.identifier = {});
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = Companion_getInstance;
  _.$_$.b = Companion_getInstance_1;
  _.$_$.c = Name;
  //endregion
  return _;
}));

//# sourceMappingURL=asoft-identifier-core.js.map