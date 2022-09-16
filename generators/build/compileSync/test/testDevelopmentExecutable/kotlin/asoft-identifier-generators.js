(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './asoft-identifier-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./asoft-identifier-core.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'asoft-identifier-generators'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'asoft-identifier-generators'.");
    }
    if (typeof this['asoft-identifier-core'] === 'undefined') {
      throw new Error("Error loading module 'asoft-identifier-generators'. Its dependency 'asoft-identifier-core' was not found. Please, check whether 'asoft-identifier-core' is loaded prior to 'asoft-identifier-generators'.");
    }
    root['asoft-identifier-generators'] = factory(typeof this['asoft-identifier-generators'] === 'undefined' ? {} : this['asoft-identifier-generators'], this['kotlin-kotlin-stdlib-js-ir'], this['asoft-identifier-core']);
  }
}(this, function (_, kotlin_kotlin, kotlin_asoft_identifier_core) {
  'use strict';
  //region block: imports
  var listOf = kotlin_kotlin.$_$.f3;
  var numberRangeToNumber = kotlin_kotlin.$_$.q4;
  var Default_getInstance = kotlin_kotlin.$_$.s1;
  var random = kotlin_kotlin.$_$.w4;
  var Unit_getInstance = kotlin_kotlin.$_$.a2;
  var to = kotlin_kotlin.$_$.y5;
  var replace$default = kotlin_kotlin.$_$.h;
  var Companion_getInstance = kotlin_asoft_identifier_core.$_$.a;
  var random_0 = kotlin_kotlin.$_$.h3;
  var Name = kotlin_asoft_identifier_core.$_$.c;
  var fillArrayVal = kotlin_kotlin.$_$.z3;
  var objectMeta = kotlin_kotlin.$_$.s4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.k;
  var Companion_getInstance_0 = kotlin_asoft_identifier_core.$_$.b;
  //endregion
  //region block: pre-declaration
  //endregion
  function EmailGenerator() {
    EmailGenerator_instance = this;
    this.domains_1 = listOf(['google.com', 'yahoo.com', 'mail.com', 'test.com', 'adobe.com', 'asoft.co.tz', 'bing.net', 'microsoft.com']);
  }
  EmailGenerator.prototype.get_domains_vnkzly_k$ = function () {
    return this.domains_1;
  };
  EmailGenerator.prototype.generateForName = function (name) {
    var tmp;
    var tmp$ret$0;
    {
      var tmp0_random = numberRangeToNumber(1, 10);
      tmp$ret$0 = random(tmp0_random, Default_getInstance());
    }
    if (tmp$ret$0 > 5) {
      tmp = to(name.first, name.last);
    } else {
      tmp = to(name.last, name.first);
    }
    var tmp0_container = tmp;
    var first = tmp0_container.component1_7eebsc_k$();
    var last = tmp0_container.component2_7eebsb_k$();
    var tmp$ret$3;
    {
      var tmp_0;
      var tmp$ret$1;
      {
        var tmp1_random = numberRangeToNumber(1, 10);
        tmp$ret$1 = random(tmp1_random, Default_getInstance());
      }
      if (tmp$ret$1 > 5) {
        tmp_0 = '.';
      } else {
        tmp_0 = '';
      }
      var tmp2_lowercase = first + tmp_0 + last;
      var tmp$ret$2;
      {
        tmp$ret$2 = tmp2_lowercase;
      }
      tmp$ret$3 = tmp$ret$2.toLowerCase();
    }
    var tmp_1 = tmp$ret$3;
    var identity = replace$default(tmp_1, "'", '', false, 4, null);
    var tmp_2 = Companion_getInstance();
    var tmp$ret$4;
    {
      var tmp3_random = this.domains_1;
      tmp$ret$4 = random_0(tmp3_random, Default_getInstance());
    }
    return tmp_2.invoke(identity + '@' + tmp$ret$4);
  };
  EmailGenerator.prototype.generateFor = function (name) {
    return this.generateForName(new Name(name));
  };
  EmailGenerator.prototype.random = function () {
    return this.generateForName(NameGenerator_getInstance().random());
  };
  EmailGenerator.prototype.randomWithSizeOf = function (size) {
    var tmp = 0;
    var tmp_0 = size;
    var tmp$ret$0;
    {
      tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    }
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      {
        tmp$ret$1 = EmailGenerator_getInstance().random();
      }
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  };
  EmailGenerator.$metadata$ = objectMeta('EmailGenerator');
  Object.defineProperty(EmailGenerator.prototype, 'domains', {
    configurable: true,
    get: EmailGenerator.prototype.get_domains_vnkzly_k$
  });
  var EmailGenerator_instance;
  function EmailGenerator_getInstance() {
    if (EmailGenerator_instance == null)
      new EmailGenerator();
    return EmailGenerator_instance;
  }
  function NameGenerator() {
    NameGenerator_instance = this;
    this.fakeNames_1 = listOf(['Raiden', 'Anderson', 'Hanzo', 'Lameck', 'Hasashi', 'Kenshi', 'Takeda', 'Jackson', 'Sonya', 'Tremor', 'Kotal', 'Khan', 'Cassie', 'Johnny', 'Cage', 'Kabal', 'Enenra', 'Cyrax', 'Sektor', 'Jean', "T'Challa", "T'Chaka", 'Okoye', 'Wakabi']);
  }
  NameGenerator.prototype.get_fakeNames_pc7x3e_k$ = function () {
    return this.fakeNames_1;
  };
  NameGenerator.prototype.randomFullName = function () {
    var tmp;
    var tmp$ret$0;
    {
      var tmp0_random = numberRangeToNumber(0, 10);
      tmp$ret$0 = random(tmp0_random, Default_getInstance());
    }
    if (tmp$ret$0 < 5) {
      var tmp$ret$1;
      {
        var tmp1_random = this.fakeNames_1;
        tmp$ret$1 = random_0(tmp1_random, Default_getInstance());
      }
      var tmp_0 = tmp$ret$1;
      var tmp$ret$2;
      {
        var tmp2_random = this.fakeNames_1;
        tmp$ret$2 = random_0(tmp2_random, Default_getInstance());
      }
      tmp = tmp_0 + ' ' + tmp$ret$2;
    } else {
      var tmp$ret$3;
      {
        var tmp3_random = this.fakeNames_1;
        tmp$ret$3 = random_0(tmp3_random, Default_getInstance());
      }
      var tmp_1 = tmp$ret$3;
      var tmp$ret$4;
      {
        var tmp4_random = this.fakeNames_1;
        tmp$ret$4 = random_0(tmp4_random, Default_getInstance());
      }
      var tmp_2 = tmp$ret$4;
      var tmp$ret$5;
      {
        var tmp5_random = this.fakeNames_1;
        tmp$ret$5 = random_0(tmp5_random, Default_getInstance());
      }
      tmp = tmp_1 + ' ' + tmp_2 + ' ' + tmp$ret$5;
    }
    return tmp;
  };
  NameGenerator.prototype.random = function () {
    return new Name(this.randomFullName());
  };
  NameGenerator.prototype.randomNames = function (size) {
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        var list = ArrayList_init_$Create$(size);
        {
          {
          }
          var inductionVariable = 0;
          if (inductionVariable < size)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              {
                var tmp$ret$0;
                {
                  tmp$ret$0 = NameGenerator_getInstance().random();
                }
                list.add_1j60pz_k$(tmp$ret$0);
              }
            }
             while (inductionVariable < size);
        }
        tmp$ret$1 = list;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  NameGenerator.$metadata$ = objectMeta('NameGenerator');
  Object.defineProperty(NameGenerator.prototype, 'fakeNames', {
    configurable: true,
    get: NameGenerator.prototype.get_fakeNames_pc7x3e_k$
  });
  var NameGenerator_instance;
  function NameGenerator_getInstance() {
    if (NameGenerator_instance == null)
      new NameGenerator();
    return NameGenerator_instance;
  }
  function PhoneGenerator() {
    PhoneGenerator_instance = this;
    this.providerNumbers_1 = listOf([22, 61, 65, 67, 68, 71, 74, 75, 76, 78]);
  }
  PhoneGenerator.prototype.get_providerNumbers_taqkeo_k$ = function () {
    return this.providerNumbers_1;
  };
  PhoneGenerator.prototype.random = function (code) {
    return this.random_18kw1u_k$(code === void 1 ? '255' : code);
  };
  PhoneGenerator.prototype.random_18kw1u_k$ = function (code) {
    var tmp = Companion_getInstance_0();
    var tmp$ret$0;
    {
      var tmp0_random = this.providerNumbers_1;
      tmp$ret$0 = random_0(tmp0_random, Default_getInstance());
    }
    var tmp_0 = code + tmp$ret$0;
    var tmp$ret$1;
    {
      var tmp1_random = numberRangeToNumber(1000000, 9999999);
      tmp$ret$1 = random(tmp1_random, Default_getInstance());
    }
    return tmp.invoke(tmp_0 + tmp$ret$1);
  };
  PhoneGenerator.prototype.random$default_3cx9qa_k$ = function (code, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      code = '255';
    return this.random_18kw1u_k$(code);
  };
  PhoneGenerator.prototype.randomPhones = function (size) {
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        var list = ArrayList_init_$Create$(size);
        {
          {
          }
          var inductionVariable = 0;
          if (inductionVariable < size)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              {
                var tmp$ret$0;
                {
                  var tmp = PhoneGenerator_getInstance();
                  tmp$ret$0 = tmp.random$default_3cx9qa_k$(null, 1, null);
                }
                list.add_1j60pz_k$(tmp$ret$0);
              }
            }
             while (inductionVariable < size);
        }
        tmp$ret$1 = list;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  PhoneGenerator.$metadata$ = objectMeta('PhoneGenerator');
  Object.defineProperty(PhoneGenerator.prototype, 'providerNumbers', {
    configurable: true,
    get: PhoneGenerator.prototype.get_providerNumbers_taqkeo_k$
  });
  var PhoneGenerator_instance;
  function PhoneGenerator_getInstance() {
    if (PhoneGenerator_instance == null)
      new PhoneGenerator();
    return PhoneGenerator_instance;
  }
  //region block: exports
  function $jsExportAll$(_) {
    var $identifier = _.identifier || (_.identifier = {});
    Object.defineProperty($identifier, 'EmailGenerator', {
      configurable: true,
      get: EmailGenerator_getInstance
    });
    var $identifier = _.identifier || (_.identifier = {});
    Object.defineProperty($identifier, 'NameGenerator', {
      configurable: true,
      get: NameGenerator_getInstance
    });
    var $identifier = _.identifier || (_.identifier = {});
    Object.defineProperty($identifier, 'PhoneGenerator', {
      configurable: true,
      get: PhoneGenerator_getInstance
    });
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = EmailGenerator_getInstance;
  _.$_$.b = PhoneGenerator_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=asoft-identifier-generators.js.map