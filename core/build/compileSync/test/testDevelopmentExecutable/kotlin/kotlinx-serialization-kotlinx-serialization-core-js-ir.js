(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core-js-ir'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-core-js-ir'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var THROW_CCE = kotlin_kotlin.$_$.v7;
  var Annotation = kotlin_kotlin.$_$.m7;
  var classMeta = kotlin_kotlin.$_$.m5;
  var getKClass = kotlin_kotlin.$_$.d;
  var getStringHashCode = kotlin_kotlin.$_$.q5;
  var interfaceMeta = kotlin_kotlin.$_$.s5;
  var asList = kotlin_kotlin.$_$.m3;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.m2;
  var Unit_getInstance = kotlin_kotlin.$_$.v2;
  var emptyList = kotlin_kotlin.$_$.a4;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.e;
  var lazy = kotlin_kotlin.$_$.k8;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var KProperty1 = kotlin_kotlin.$_$.r6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.p5;
  var Entry = kotlin_kotlin.$_$.g3;
  var isInterface = kotlin_kotlin.$_$.a6;
  var Grouping = kotlin_kotlin.$_$.y2;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.i1;
  var zip = kotlin_kotlin.$_$.a5;
  var toMap = kotlin_kotlin.$_$.y4;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var toString = kotlin_kotlin.$_$.l6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l1;
  var mapCapacity = kotlin_kotlin.$_$.n4;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var Map = kotlin_kotlin.$_$.h3;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.f1;
  var captureStack = kotlin_kotlin.$_$.h5;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.h1;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.j1;
  var IllegalArgumentException_init_$Init$_2 = kotlin_kotlin.$_$.e1;
  var IllegalArgumentException = kotlin_kotlin.$_$.s7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.n3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var KClass = kotlin_kotlin.$_$.q6;
  var copyToArray = kotlin_kotlin.$_$.z3;
  var Triple = kotlin_kotlin.$_$.x7;
  var Pair = kotlin_kotlin.$_$.u7;
  var LinkedHashMap = kotlin_kotlin.$_$.d3;
  var MutableMap = kotlin_kotlin.$_$.j3;
  var HashMap = kotlin_kotlin.$_$.z2;
  var LinkedHashSet = kotlin_kotlin.$_$.e3;
  var MutableSet = kotlin_kotlin.$_$.k3;
  var Set = kotlin_kotlin.$_$.l3;
  var HashSet = kotlin_kotlin.$_$.a3;
  var ArrayList = kotlin_kotlin.$_$.w2;
  var MutableList = kotlin_kotlin.$_$.i3;
  var List = kotlin_kotlin.$_$.f3;
  var Collection = kotlin_kotlin.$_$.x2;
  var equals = kotlin_kotlin.$_$.n5;
  var Iterator = kotlin_kotlin.$_$.c3;
  var Iterable = kotlin_kotlin.$_$.b3;
  var isBlank = kotlin_kotlin.$_$.v6;
  var toList = kotlin_kotlin.$_$.x4;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.t;
  var toHashSet = kotlin_kotlin.$_$.v4;
  var toBooleanArray = kotlin_kotlin.$_$.u4;
  var withIndex = kotlin_kotlin.$_$.z4;
  var to = kotlin_kotlin.$_$.q8;
  var lazy_0 = kotlin_kotlin.$_$.l8;
  var contentEquals = kotlin_kotlin.$_$.o3;
  var until = kotlin_kotlin.$_$.p6;
  var joinToString$default = kotlin_kotlin.$_$.f;
  var objectMeta = kotlin_kotlin.$_$.h6;
  var ensureNotNull = kotlin_kotlin.$_$.g8;
  var Long = kotlin_kotlin.$_$.t7;
  var Char = kotlin_kotlin.$_$.o7;
  var isObject = kotlin_kotlin.$_$.c6;
  var toIntOrNull = kotlin_kotlin.$_$.c7;
  var hashCode = kotlin_kotlin.$_$.r5;
  var isArray = kotlin_kotlin.$_$.t5;
  var arrayIterator = kotlin_kotlin.$_$.f5;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.o;
  var step = kotlin_kotlin.$_$.o6;
  var getValue = kotlin_kotlin.$_$.f4;
  var LinkedHashMap_init_$Create$_1 = kotlin_kotlin.$_$.x;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.u;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.y;
  var LinkedHashSet_init_$Create$_0 = kotlin_kotlin.$_$.z;
  var longArray = kotlin_kotlin.$_$.f6;
  var Companion_getInstance = kotlin_kotlin.$_$.p2;
  var get_lastIndex = kotlin_kotlin.$_$.i4;
  var countTrailingZeroBits = kotlin_kotlin.$_$.e8;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.k2;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.y1;
  var UInt = kotlin_kotlin.$_$.z7;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.x1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.b2;
  var ULong = kotlin_kotlin.$_$.a8;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.a2;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.h2;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.v1;
  var UByte = kotlin_kotlin.$_$.y7;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.u1;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.l2;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.e2;
  var UShort = kotlin_kotlin.$_$.b8;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.d2;
  var KTypeParameter = kotlin_kotlin.$_$.s6;
  var HashSet_init_$Create$_1 = kotlin_kotlin.$_$.s;
  var contentHashCode = kotlin_kotlin.$_$.p3;
  var fillArrayVal = kotlin_kotlin.$_$.o5;
  var booleanArray = kotlin_kotlin.$_$.g5;
  var emptyMap = kotlin_kotlin.$_$.b4;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.o2;
  var isCharArray = kotlin_kotlin.$_$.w5;
  var charArray = kotlin_kotlin.$_$.i5;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.i2;
  var isDoubleArray = kotlin_kotlin.$_$.x5;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.j2;
  var isFloatArray = kotlin_kotlin.$_$.y5;
  var isLongArray = kotlin_kotlin.$_$.b6;
  var isIntArray = kotlin_kotlin.$_$.z5;
  var isShortArray = kotlin_kotlin.$_$.d6;
  var isByteArray = kotlin_kotlin.$_$.v5;
  var BooleanCompanionObject_getInstance = kotlin_kotlin.$_$.g2;
  var isBooleanArray = kotlin_kotlin.$_$.u5;
  var coerceAtLeast = kotlin_kotlin.$_$.m6;
  var copyOf = kotlin_kotlin.$_$.t3;
  var copyOf_0 = kotlin_kotlin.$_$.v3;
  var copyOf_1 = kotlin_kotlin.$_$.w3;
  var copyOf_2 = kotlin_kotlin.$_$.r3;
  var copyOf_3 = kotlin_kotlin.$_$.y3;
  var copyOf_4 = kotlin_kotlin.$_$.q3;
  var copyOf_5 = kotlin_kotlin.$_$.u3;
  var copyOf_6 = kotlin_kotlin.$_$.s3;
  var Unit = kotlin_kotlin.$_$.c8;
  var trimIndent = kotlin_kotlin.$_$.l7;
  var equals_0 = kotlin_kotlin.$_$.u6;
  var charSequenceLength = kotlin_kotlin.$_$.k5;
  var charSequenceGet = kotlin_kotlin.$_$.j5;
  var toString_0 = kotlin_kotlin.$_$.q1;
  var titlecase = kotlin_kotlin.$_$.y6;
  var isLowerCase = kotlin_kotlin.$_$.w6;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.n2;
  var mapOf = kotlin_kotlin.$_$.o4;
  var last = kotlin_kotlin.$_$.l4;
  var lastOrNull = kotlin_kotlin.$_$.k4;
  var get_lastIndex_0 = kotlin_kotlin.$_$.j4;
  var get_indices = kotlin_kotlin.$_$.h4;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var get_indices_0 = kotlin_kotlin.$_$.g4;
  var get_js = kotlin_kotlin.$_$.e6;
  var findAssociatedObject = kotlin_kotlin.$_$.b;
  //endregion
  //region block: pre-declaration
  PolymorphicSerializer.prototype = Object.create(AbstractPolymorphicSerializer.prototype);
  PolymorphicSerializer.prototype.constructor = PolymorphicSerializer;
  SealedClassSerializer.prototype = Object.create(AbstractPolymorphicSerializer.prototype);
  SealedClassSerializer.prototype.constructor = SealedClassSerializer;
  SerializationException.prototype = Object.create(IllegalArgumentException.prototype);
  SerializationException.prototype.constructor = SerializationException;
  UnknownFieldException.prototype = Object.create(SerializationException.prototype);
  UnknownFieldException.prototype.constructor = UnknownFieldException;
  MissingFieldException.prototype = Object.create(SerializationException.prototype);
  MissingFieldException.prototype.constructor = MissingFieldException;
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  ENUM.prototype = Object.create(SerialKind.prototype);
  ENUM.prototype.constructor = ENUM;
  CONTEXTUAL.prototype = Object.create(SerialKind.prototype);
  CONTEXTUAL.prototype.constructor = CONTEXTUAL;
  PrimitiveKind.prototype = Object.create(SerialKind.prototype);
  PrimitiveKind.prototype.constructor = PrimitiveKind;
  BOOLEAN.prototype = Object.create(PrimitiveKind.prototype);
  BOOLEAN.prototype.constructor = BOOLEAN;
  BYTE.prototype = Object.create(PrimitiveKind.prototype);
  BYTE.prototype.constructor = BYTE;
  CHAR.prototype = Object.create(PrimitiveKind.prototype);
  CHAR.prototype.constructor = CHAR;
  SHORT.prototype = Object.create(PrimitiveKind.prototype);
  SHORT.prototype.constructor = SHORT;
  INT.prototype = Object.create(PrimitiveKind.prototype);
  INT.prototype.constructor = INT;
  LONG.prototype = Object.create(PrimitiveKind.prototype);
  LONG.prototype.constructor = LONG;
  FLOAT.prototype = Object.create(PrimitiveKind.prototype);
  FLOAT.prototype.constructor = FLOAT;
  DOUBLE.prototype = Object.create(PrimitiveKind.prototype);
  DOUBLE.prototype.constructor = DOUBLE;
  STRING.prototype = Object.create(PrimitiveKind.prototype);
  STRING.prototype.constructor = STRING;
  StructureKind.prototype = Object.create(SerialKind.prototype);
  StructureKind.prototype.constructor = StructureKind;
  CLASS.prototype = Object.create(StructureKind.prototype);
  CLASS.prototype.constructor = CLASS;
  LIST.prototype = Object.create(StructureKind.prototype);
  LIST.prototype.constructor = LIST;
  MAP.prototype = Object.create(StructureKind.prototype);
  MAP.prototype.constructor = MAP;
  OBJECT.prototype = Object.create(StructureKind.prototype);
  OBJECT.prototype.constructor = OBJECT;
  PolymorphicKind.prototype = Object.create(SerialKind.prototype);
  PolymorphicKind.prototype.constructor = PolymorphicKind;
  SEALED.prototype = Object.create(PolymorphicKind.prototype);
  SEALED.prototype.constructor = SEALED;
  OPEN.prototype = Object.create(PolymorphicKind.prototype);
  OPEN.prototype.constructor = OPEN;
  function decodeSerializableValue(deserializer) {
    return deserializer.deserialize_2t41fm_k$(this);
  }
  function decodeNullableSerializableValue(deserializer) {
    var isNullabilitySupported = deserializer.get_descriptor_wjt6a0_k$().get_isNullable_67sy7o_k$();
    return (isNullabilitySupported ? true : this.decodeNotNullMark_us4ba1_k$()) ? this.decodeSerializableValue_xpp80o_k$(deserializer) : this.decodeNull_jzrmuj_k$();
  }
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      previousValue = null;
    return $handler == null ? this.decodeSerializableElement_5lsbxj_k$(descriptor, index, deserializer, previousValue) : $handler(descriptor, index, deserializer, previousValue);
  }
  function decodeNullableSerializableElement$default(descriptor, index, deserializer, previousValue, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      previousValue = null;
    return $handler == null ? this.decodeNullableSerializableElement_ri3t5d_k$(descriptor, index, deserializer, previousValue) : $handler(descriptor, index, deserializer, previousValue);
  }
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.beginStructure_dv3yt3_k$(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.serialize_32qylj_k$(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.get_descriptor_wjt6a0_k$().get_isNullable_67sy7o_k$();
    if (isNullabilitySupported) {
      return this.encodeSerializableValue_bps9ot_k$(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.encodeNull_ek2hec_k$();
    } else {
      this.encodeNotNullMark_40lhgg_k$();
      this.encodeSerializableValue_bps9ot_k$(serializer, value);
    }
  }
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  PrimitiveArrayDescriptor.prototype = Object.create(ListLikeDescriptor.prototype);
  PrimitiveArrayDescriptor.prototype.constructor = PrimitiveArrayDescriptor;
  ArrayClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  ArrayClassDesc.prototype.constructor = ArrayClassDesc;
  LinkedHashMapClassDesc.prototype = Object.create(MapLikeDescriptor.prototype);
  LinkedHashMapClassDesc.prototype.constructor = LinkedHashMapClassDesc;
  HashMapClassDesc.prototype = Object.create(MapLikeDescriptor.prototype);
  HashMapClassDesc.prototype.constructor = HashMapClassDesc;
  ArrayListClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  ArrayListClassDesc.prototype.constructor = ArrayListClassDesc;
  LinkedHashSetClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  LinkedHashSetClassDesc.prototype.constructor = LinkedHashSetClassDesc;
  HashSetClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  HashSetClassDesc.prototype.constructor = HashSetClassDesc;
  CollectionLikeSerializer.prototype = Object.create(AbstractCollectionSerializer.prototype);
  CollectionLikeSerializer.prototype.constructor = CollectionLikeSerializer;
  PrimitiveArraySerializer.prototype = Object.create(CollectionLikeSerializer.prototype);
  PrimitiveArraySerializer.prototype.constructor = PrimitiveArraySerializer;
  ReferenceArraySerializer.prototype = Object.create(CollectionLikeSerializer.prototype);
  ReferenceArraySerializer.prototype.constructor = ReferenceArraySerializer;
  CollectionSerializer.prototype = Object.create(CollectionLikeSerializer.prototype);
  CollectionSerializer.prototype.constructor = CollectionSerializer;
  MapLikeSerializer.prototype = Object.create(AbstractCollectionSerializer.prototype);
  MapLikeSerializer.prototype.constructor = MapLikeSerializer;
  LinkedHashMapSerializer.prototype = Object.create(MapLikeSerializer.prototype);
  LinkedHashMapSerializer.prototype.constructor = LinkedHashMapSerializer;
  HashMapSerializer.prototype = Object.create(MapLikeSerializer.prototype);
  HashMapSerializer.prototype.constructor = HashMapSerializer;
  ArrayListSerializer.prototype = Object.create(CollectionSerializer.prototype);
  ArrayListSerializer.prototype.constructor = ArrayListSerializer;
  HashSetSerializer.prototype = Object.create(CollectionSerializer.prototype);
  HashSetSerializer.prototype.constructor = HashSetSerializer;
  LinkedHashSetSerializer.prototype = Object.create(CollectionSerializer.prototype);
  LinkedHashSetSerializer.prototype.constructor = LinkedHashSetSerializer;
  InlineClassDescriptor.prototype = Object.create(PluginGeneratedSerialDescriptor.prototype);
  InlineClassDescriptor.prototype.constructor = InlineClassDescriptor;
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  NoOpEncoder.prototype = Object.create(AbstractEncoder.prototype);
  NoOpEncoder.prototype.constructor = NoOpEncoder;
  CharArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  CharArraySerializer_0.prototype.constructor = CharArraySerializer_0;
  DoubleArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  DoubleArraySerializer_0.prototype.constructor = DoubleArraySerializer_0;
  FloatArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  FloatArraySerializer_0.prototype.constructor = FloatArraySerializer_0;
  LongArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  LongArraySerializer_0.prototype.constructor = LongArraySerializer_0;
  IntArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  IntArraySerializer_0.prototype.constructor = IntArraySerializer_0;
  ShortArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  ShortArraySerializer_0.prototype.constructor = ShortArraySerializer_0;
  ByteArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  ByteArraySerializer_0.prototype.constructor = ByteArraySerializer_0;
  BooleanArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  BooleanArraySerializer_0.prototype.constructor = BooleanArraySerializer_0;
  CharArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  CharArrayBuilder.prototype.constructor = CharArrayBuilder;
  DoubleArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  DoubleArrayBuilder.prototype.constructor = DoubleArrayBuilder;
  FloatArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  FloatArrayBuilder.prototype.constructor = FloatArrayBuilder;
  LongArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  LongArrayBuilder.prototype.constructor = LongArrayBuilder;
  IntArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  IntArrayBuilder.prototype.constructor = IntArrayBuilder;
  ShortArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  ShortArrayBuilder.prototype.constructor = ShortArrayBuilder;
  ByteArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  ByteArrayBuilder.prototype.constructor = ByteArrayBuilder;
  BooleanArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  BooleanArrayBuilder.prototype.constructor = BooleanArrayBuilder;
  NamedValueEncoder.prototype = Object.create(TaggedEncoder.prototype);
  NamedValueEncoder.prototype.constructor = NamedValueEncoder;
  NamedValueDecoder.prototype = Object.create(TaggedDecoder.prototype);
  NamedValueDecoder.prototype.constructor = NamedValueDecoder;
  MapEntrySerializer_0.prototype = Object.create(KeyValueSerializer.prototype);
  MapEntrySerializer_0.prototype.constructor = MapEntrySerializer_0;
  PairSerializer_0.prototype = Object.create(KeyValueSerializer.prototype);
  PairSerializer_0.prototype.constructor = PairSerializer_0;
  SerialModuleImpl.prototype = Object.create(SerializersModule.prototype);
  SerialModuleImpl.prototype.constructor = SerialModuleImpl;
  Argless.prototype = Object.create(ContextualProvider.prototype);
  Argless.prototype.constructor = Argless;
  WithTypeArguments.prototype = Object.create(ContextualProvider.prototype);
  WithTypeArguments.prototype.constructor = WithTypeArguments;
  function contextual(kClass, serializer) {
    return this.contextual_e1eobl_k$(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  function polymorphicDefault(baseClass, defaultDeserializerProvider) {
    this.polymorphicDefaultDeserializer_1n0ayq_k$(baseClass, defaultDeserializerProvider);
  }
  //endregion
  function ExperimentalSerializationApi() {
  }
  ExperimentalSerializationApi.prototype.equals = function (other) {
    if (!(other instanceof ExperimentalSerializationApi))
      return false;
    var tmp0_other_with_cast = other instanceof ExperimentalSerializationApi ? other : THROW_CCE();
    return true;
  };
  ExperimentalSerializationApi.prototype.hashCode = function () {
    return 0;
  };
  ExperimentalSerializationApi.prototype.toString = function () {
    return '@kotlinx.serialization.ExperimentalSerializationApi()';
  };
  ExperimentalSerializationApi.$metadata$ = classMeta('ExperimentalSerializationApi', [Annotation]);
  function InternalSerializationApi() {
  }
  InternalSerializationApi.prototype.equals = function (other) {
    if (!(other instanceof InternalSerializationApi))
      return false;
    var tmp0_other_with_cast = other instanceof InternalSerializationApi ? other : THROW_CCE();
    return true;
  };
  InternalSerializationApi.prototype.hashCode = function () {
    return 0;
  };
  InternalSerializationApi.prototype.toString = function () {
    return '@kotlinx.serialization.InternalSerializationApi()';
  };
  InternalSerializationApi.$metadata$ = classMeta('InternalSerializationApi', [Annotation]);
  function Serializable_init_$Init$(with_0, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      with_0 = getKClass(KSerializer);
    Serializable.call($this, with_0);
    return $this;
  }
  function Serializable_init_$Create$(with_0, $mask0, $marker) {
    return Serializable_init_$Init$(with_0, $mask0, $marker, Object.create(Serializable.prototype));
  }
  function Serializable(with_0) {
    this.with_1 = with_0;
  }
  Serializable.prototype.get_with_wowvm7_k$ = function () {
    return this.with_1;
  };
  Serializable.prototype.equals = function (other) {
    if (!(other instanceof Serializable))
      return false;
    var tmp0_other_with_cast = other instanceof Serializable ? other : THROW_CCE();
    if (!this.with_1.equals(tmp0_other_with_cast.with_1))
      return false;
    return true;
  };
  Serializable.prototype.hashCode = function () {
    return imul(getStringHashCode('with'), 127) ^ this.with_1.hashCode();
  };
  Serializable.prototype.toString = function () {
    return '@kotlinx.serialization.Serializable(with=' + this.with_1 + ')';
  };
  Serializable.$metadata$ = classMeta('Serializable', [Annotation]);
  function Serializer(forClass) {
    this.forClass_1 = forClass;
  }
  Serializer.prototype.get_forClass_olla14_k$ = function () {
    return this.forClass_1;
  };
  Serializer.prototype.equals = function (other) {
    if (!(other instanceof Serializer))
      return false;
    var tmp0_other_with_cast = other instanceof Serializer ? other : THROW_CCE();
    if (!this.forClass_1.equals(tmp0_other_with_cast.forClass_1))
      return false;
    return true;
  };
  Serializer.prototype.hashCode = function () {
    return imul(getStringHashCode('forClass'), 127) ^ this.forClass_1.hashCode();
  };
  Serializer.prototype.toString = function () {
    return '@kotlinx.serialization.Serializer(forClass=' + this.forClass_1 + ')';
  };
  Serializer.$metadata$ = classMeta('Serializer', [Annotation]);
  function InheritableSerialInfo() {
  }
  InheritableSerialInfo.prototype.equals = function (other) {
    if (!(other instanceof InheritableSerialInfo))
      return false;
    var tmp0_other_with_cast = other instanceof InheritableSerialInfo ? other : THROW_CCE();
    return true;
  };
  InheritableSerialInfo.prototype.hashCode = function () {
    return 0;
  };
  InheritableSerialInfo.prototype.toString = function () {
    return '@kotlinx.serialization.InheritableSerialInfo()';
  };
  InheritableSerialInfo.$metadata$ = classMeta('InheritableSerialInfo', [Annotation]);
  function SerialInfo() {
  }
  SerialInfo.prototype.equals = function (other) {
    if (!(other instanceof SerialInfo))
      return false;
    var tmp0_other_with_cast = other instanceof SerialInfo ? other : THROW_CCE();
    return true;
  };
  SerialInfo.prototype.hashCode = function () {
    return 0;
  };
  SerialInfo.prototype.toString = function () {
    return '@kotlinx.serialization.SerialInfo()';
  };
  SerialInfo.$metadata$ = classMeta('SerialInfo', [Annotation]);
  function KSerializer() {
  }
  KSerializer.$metadata$ = interfaceMeta('KSerializer', [SerializationStrategy, DeserializationStrategy]);
  function SerializationStrategy() {
  }
  SerializationStrategy.$metadata$ = interfaceMeta('SerializationStrategy');
  function DeserializationStrategy() {
  }
  DeserializationStrategy.$metadata$ = interfaceMeta('DeserializationStrategy');
  function PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, $this) {
    PolymorphicSerializer.call($this, baseClass);
    $this._annotations_1 = asList(classAnnotations);
    return $this;
  }
  function PolymorphicSerializer_init_$Create$(baseClass, classAnnotations) {
    return PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, Object.create(PolymorphicSerializer.prototype));
  }
  function _set__annotations__kk13ma($this, _set____db54di) {
    $this._annotations_1 = _set____db54di;
  }
  function _get__annotations__yxc7sq($this) {
    return $this._annotations_1;
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      var tmp = serializer_0(StringCompanionObject_getInstance()).get_descriptor_wjt6a0_k$();
      $this$buildSerialDescriptor.element$default_m7h690_k$('type', tmp, null, false, 12, null);
      var tmp_0 = 'kotlinx.serialization.Polymorphic<' + this$0.baseClass_1.get_simpleName_r6f8py_k$() + '>';
      var tmp_1 = CONTEXTUAL_getInstance();
      var tmp_2 = buildSerialDescriptor$default(tmp_0, tmp_1, [], null, 12, null);
      $this$buildSerialDescriptor.element$default_m7h690_k$('value', tmp_2, null, false, 12, null);
      $this$buildSerialDescriptor.annotations_1 = this$0._annotations_1;
      return Unit_getInstance();
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor$default('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0), 4, null), this$0.baseClass_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.baseClass_1 = baseClass;
    this._annotations_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.descriptor$delegate_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  PolymorphicSerializer.prototype.get_baseClass_lygw3m_k$ = function () {
    return this.baseClass_1;
  };
  PolymorphicSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    var tmp$ret$0;
    {
      var tmp0_getValue = descriptor$factory();
      tmp$ret$0 = this.descriptor$delegate_1.get_value_j01efc_k$();
    }
    return tmp$ret$0;
  };
  PolymorphicSerializer.prototype.toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + this.baseClass_1 + ')';
  };
  PolymorphicSerializer.$metadata$ = classMeta('PolymorphicSerializer', undefined, undefined, undefined, undefined, AbstractPolymorphicSerializer.prototype);
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.findPolymorphicSerializerOrNull_mimmn_k$(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.get_baseClass_lygw3m_k$());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.findPolymorphicSerializerOrNull_e7t5h9_k$(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.get_baseClass_lygw3m_k$());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.get_descriptor_wjt6a0_k$();
    }, null);
  }
  function SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, $this) {
    SealedClassSerializer.call($this, serialName, baseClass, subclasses, subclassSerializers);
    $this._annotations_1 = asList(classAnnotations);
    return $this;
  }
  function SealedClassSerializer_init_$Create$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations) {
    return SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, Object.create(SealedClassSerializer.prototype));
  }
  function _set__annotations__kk13ma_0($this, _set____db54di) {
    $this._annotations_1 = _set____db54di;
  }
  function _get__annotations__yxc7sq_0($this) {
    return $this._annotations_1;
  }
  function _get_class2Serializer__mdbm1r($this) {
    return $this.class2Serializer_1;
  }
  function _get_serialName2Serializer__sjlyic($this) {
    return $this.serialName2Serializer_1;
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda($subclassSerializers) {
    return function ($this$buildSerialDescriptor) {
      var indexedObject = $subclassSerializers;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        {
          var d = element.get_descriptor_wjt6a0_k$();
          var tmp = d.get_serialName_u2rqhk_k$();
          $this$buildSerialDescriptor.element$default_m7h690_k$(tmp, d, null, false, 12, null);
        }
      }
      return Unit_getInstance();
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0, $subclassSerializers) {
    return function ($this$buildSerialDescriptor) {
      var tmp = serializer_0(StringCompanionObject_getInstance()).get_descriptor_wjt6a0_k$();
      $this$buildSerialDescriptor.element$default_m7h690_k$('type', tmp, null, false, 12, null);
      var tmp_0 = 'kotlinx.serialization.Sealed<' + this$0.baseClass_1.get_simpleName_r6f8py_k$() + '>';
      var tmp_1 = CONTEXTUAL_getInstance();
      var elementDescriptor = buildSerialDescriptor$default(tmp_0, tmp_1, [], SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda($subclassSerializers), 4, null);
      $this$buildSerialDescriptor.element$default_m7h690_k$('value', elementDescriptor, null, false, 12, null);
      $this$buildSerialDescriptor.annotations_1 = this$0._annotations_1;
      return Unit_getInstance();
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda($serialName, this$0, $subclassSerializers) {
    return function () {
      var tmp = SEALED_getInstance();
      return buildSerialDescriptor$default($serialName, tmp, [], SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0, $subclassSerializers), 4, null);
    };
  }
  function _no_name_provided__qut3iv($tmp0_groupingBy) {
    this.$tmp0_groupingBy_1 = $tmp0_groupingBy;
  }
  _no_name_provided__qut3iv.prototype.sourceIterator_2zqxcn_k$ = function () {
    return this.$tmp0_groupingBy_1.iterator_jk1svi_k$();
  };
  _no_name_provided__qut3iv.prototype.keyOf_p5nlxy_k$ = function (element) {
    var tmp$ret$0;
    {
      tmp$ret$0 = element.get_value_j01efc_k$().get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$();
    }
    return tmp$ret$0;
  };
  _no_name_provided__qut3iv.prototype.keyOf_dhlc0l_k$ = function (element) {
    return this.keyOf_p5nlxy_k$((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [Grouping]);
  function SealedClassSerializer(serialName, baseClass, subclasses, subclassSerializers) {
    AbstractPolymorphicSerializer.call(this);
    this.baseClass_1 = baseClass;
    this._annotations_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.descriptor$delegate_1 = lazy(tmp_0, SealedClassSerializer$descriptor$delegate$lambda(serialName, this, subclassSerializers));
    if (!(subclasses.length === subclassSerializers.length)) {
      throw IllegalArgumentException_init_$Create$('All subclasses of sealed class ' + this.baseClass_1.get_simpleName_r6f8py_k$() + ' should be marked @Serializable');
    }
    this.class2Serializer_1 = toMap(zip(subclasses, subclassSerializers));
    var tmp_1 = this;
    var tmp$ret$10;
    {
      var tmp$ret$5;
      {
        var tmp$ret$0;
        {
          var tmp0_groupingBy = this.class2Serializer_1.get_entries_p20ztl_k$();
          tmp$ret$0 = new _no_name_provided__qut3iv(tmp0_groupingBy);
        }
        var tmp1_aggregate = tmp$ret$0;
        var tmp$ret$4;
        {
          var tmp$ret$1;
          {
            tmp$ret$1 = LinkedHashMap_init_$Create$();
          }
          var tmp2_aggregateTo = tmp$ret$1;
          var tmp$ret$2;
          {
            var tmp0_iterator = tmp1_aggregate.sourceIterator_2zqxcn_k$();
            tmp$ret$2 = tmp0_iterator;
          }
          var tmp0_iterator_0 = tmp$ret$2;
          while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
            var e = tmp0_iterator_0.next_20eer_k$();
            var key = tmp1_aggregate.keyOf_dhlc0l_k$(e);
            var accumulator = tmp2_aggregateTo.get_1mhr4y_k$(key);
            {
              var tmp$ret$3;
              {
                var tmp2__anonymous__z9zvc9 = accumulator == null ? !tmp2_aggregateTo.containsKey_wgk31w_k$(key) : false;
                if (!(accumulator == null)) {
                  {
                    var tmp0_error = "Multiple sealed subclasses of '" + this.baseClass_1 + "' have the same serial name '" + key + "':" + (" '" + accumulator.get_key_18j28a_k$() + "', '" + e.get_key_18j28a_k$() + "'");
                    throw IllegalStateException_init_$Create$(toString(tmp0_error));
                  }
                }
                tmp$ret$3 = e;
              }
              var tmp1_set = tmp$ret$3;
              tmp2_aggregateTo.put_3mhbri_k$(key, tmp1_set);
            }
          }
          tmp$ret$4 = tmp2_aggregateTo;
        }
        tmp$ret$5 = tmp$ret$4;
      }
      var tmp3_mapValues = tmp$ret$5;
      var tmp$ret$9;
      {
        var tmp1_mapValuesTo = LinkedHashMap_init_$Create$_0(mapCapacity(tmp3_mapValues.get_size_woubt6_k$()));
        var tmp$ret$8;
        {
          var tmp0_associateByTo = tmp3_mapValues.get_entries_p20ztl_k$();
          var tmp0_iterator_1 = tmp0_associateByTo.iterator_jk1svi_k$();
          while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator_1.next_20eer_k$();
            var tmp$ret$6;
            {
              tmp$ret$6 = element.get_key_18j28a_k$();
            }
            var tmp_2 = tmp$ret$6;
            var tmp$ret$7;
            {
              tmp$ret$7 = element.get_value_j01efc_k$().get_value_j01efc_k$();
            }
            tmp1_mapValuesTo.put_3mhbri_k$(tmp_2, tmp$ret$7);
          }
          tmp$ret$8 = tmp1_mapValuesTo;
        }
        tmp$ret$9 = tmp$ret$8;
      }
      tmp$ret$10 = tmp$ret$9;
    }
    tmp_1.serialName2Serializer_1 = tmp$ret$10;
  }
  SealedClassSerializer.prototype.get_baseClass_lygw3m_k$ = function () {
    return this.baseClass_1;
  };
  SealedClassSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    var tmp$ret$0;
    {
      var tmp0_getValue = descriptor$factory_0();
      tmp$ret$0 = this.descriptor$delegate_1.get_value_j01efc_k$();
    }
    return tmp$ret$0;
  };
  SealedClassSerializer.prototype.findPolymorphicSerializerOrNull_e7t5h9_k$ = function (decoder, klassName) {
    var tmp$ret$0;
    {
      var tmp0_get = this.serialName2Serializer_1;
      tmp$ret$0 = (isInterface(tmp0_get, Map) ? tmp0_get : THROW_CCE()).get_1mhr4y_k$(klassName);
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    return tmp0_elvis_lhs == null ? AbstractPolymorphicSerializer.prototype.findPolymorphicSerializerOrNull_e7t5h9_k$.call(this, decoder, klassName) : tmp0_elvis_lhs;
  };
  SealedClassSerializer.prototype.findPolymorphicSerializerOrNull_mimmn_k$ = function (encoder, value) {
    var tmp0_elvis_lhs = this.class2Serializer_1.get_1mhr4y_k$(getKClassFromExpression(value));
    var tmp1_safe_receiver = tmp0_elvis_lhs == null ? AbstractPolymorphicSerializer.prototype.findPolymorphicSerializerOrNull_mimmn_k$.call(this, encoder, value) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      {
        tmp$ret$0 = (!(tmp1_safe_receiver == null) ? isInterface(tmp1_safe_receiver, SerializationStrategy) : false) ? tmp1_safe_receiver : THROW_CCE();
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  };
  SealedClassSerializer.$metadata$ = classMeta('SealedClassSerializer', undefined, undefined, undefined, undefined, AbstractPolymorphicSerializer.prototype);
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.get_descriptor_wjt6a0_k$();
    }, null);
  }
  function StringFormat() {
  }
  StringFormat.$metadata$ = interfaceMeta('StringFormat', [SerialFormat]);
  function SerialFormat() {
  }
  SerialFormat.$metadata$ = interfaceMeta('SerialFormat');
  function SerializationException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$() {
    var tmp = SerializationException_init_$Init$(Object.create(SerializationException.prototype));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_0(message) {
    var tmp = SerializationException_init_$Init$_0(message, Object.create(SerializationException.prototype));
    captureStack(tmp, SerializationException_init_$Create$_0);
    return tmp;
  }
  function SerializationException_init_$Init$_1(message, cause, $this) {
    IllegalArgumentException_init_$Init$_1(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_1(message, cause) {
    var tmp = SerializationException_init_$Init$_1(message, cause, Object.create(SerializationException.prototype));
    captureStack(tmp, SerializationException_init_$Create$_1);
    return tmp;
  }
  function SerializationException_init_$Init$_2(cause, $this) {
    IllegalArgumentException_init_$Init$_2(cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_2(cause) {
    var tmp = SerializationException_init_$Init$_2(cause, Object.create(SerializationException.prototype));
    captureStack(tmp, SerializationException_init_$Create$_2);
    return tmp;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  SerializationException.$metadata$ = classMeta('SerializationException', undefined, undefined, undefined, undefined, IllegalArgumentException.prototype);
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, Object.create(UnknownFieldException.prototype));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$_0(message, this);
    captureStack(this, UnknownFieldException);
  }
  UnknownFieldException.$metadata$ = classMeta('UnknownFieldException', undefined, undefined, undefined, undefined, SerializationException.prototype);
  function MissingFieldException_init_$Init$(fieldName, $this) {
    MissingFieldException.call($this, "Field '" + fieldName + "' is required, but it was missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(fieldName) {
    var tmp = MissingFieldException_init_$Init$(fieldName, Object.create(MissingFieldException.prototype));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException_init_$Init$_0(fieldNames, serialName, $this) {
    MissingFieldException.call($this, fieldNames.get_size_woubt6_k$() === 1 ? "Field '" + fieldNames.get_fkrdnv_k$(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + fieldNames + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$_0(fieldNames, serialName) {
    var tmp = MissingFieldException_init_$Init$_0(fieldNames, serialName, Object.create(MissingFieldException.prototype));
    captureStack(tmp, MissingFieldException_init_$Create$_0);
    return tmp;
  }
  function MissingFieldException(message, cause) {
    SerializationException_init_$Init$_1(message, cause, this);
    captureStack(this, MissingFieldException);
  }
  MissingFieldException.$metadata$ = classMeta('MissingFieldException', undefined, undefined, undefined, undefined, SerializationException.prototype);
  function serializer(_this__u8e3s4, type) {
    var tmp0_elvis_lhs = serializerByKTypeImpl(_this__u8e3s4, type, true);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      platformSpecificSerializerNotRegistered(kclass(type));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializerByKTypeImpl(_this__u8e3s4, type, failOnMissingTypeArgSerializer) {
    var rootClass = kclass(type);
    var isNullable = type.get_isMarkedNullable_4el8ow_k$();
    var tmp$ret$4;
    {
      var tmp0_map = type.get_arguments_p5ddub_k$();
      var tmp$ret$3;
      {
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
        var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var item = tmp0_iterator.next_20eer_k$();
          var tmp$ret$2;
          {
            var tmp$ret$1;
            $l$block: {
              var tmp0_requireNotNull = item.type_1;
              {
              }
              if (tmp0_requireNotNull == null) {
                var tmp$ret$0;
                {
                  tmp$ret$0 = 'Star projections in type arguments are not allowed, but had ' + type;
                }
                var message = tmp$ret$0;
                throw IllegalArgumentException_init_$Create$(toString(message));
              } else {
                tmp$ret$1 = tmp0_requireNotNull;
                break $l$block;
              }
            }
            tmp$ret$2 = tmp$ret$1;
          }
          tmp0_mapTo.add_1j60pz_k$(tmp$ret$2);
        }
        tmp$ret$3 = tmp0_mapTo;
      }
      tmp$ret$4 = tmp$ret$3;
    }
    var typeArguments = tmp$ret$4;
    var tmp;
    if (typeArguments.isEmpty_y1axqb_k$()) {
      var tmp0_elvis_lhs = serializerOrNull(rootClass);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        tmp_0 = _this__u8e3s4.getContextual$default_ocirm0_k$(rootClass, null, 2, null);
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      tmp = builtinSerializer(_this__u8e3s4, typeArguments, rootClass, failOnMissingTypeArgSerializer);
    }
    var tmp1_safe_receiver = tmp;
    var tmp_1;
    if (tmp1_safe_receiver == null) {
      tmp_1 = null;
    } else {
      var tmp$ret$5;
      {
        tmp$ret$5 = (!(tmp1_safe_receiver == null) ? isInterface(tmp1_safe_receiver, KSerializer) : false) ? tmp1_safe_receiver : THROW_CCE();
      }
      tmp_1 = tmp$ret$5;
    }
    var result = tmp_1;
    var tmp2_safe_receiver = result;
    return tmp2_safe_receiver == null ? null : nullable(tmp2_safe_receiver, isNullable);
  }
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function builtinSerializer(_this__u8e3s4, typeArguments, rootClass, failOnMissingTypeArgSerializer) {
    var tmp;
    if (failOnMissingTypeArgSerializer) {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
          var tmp0_iterator = typeArguments.iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var item = tmp0_iterator.next_20eer_k$();
            tmp0_mapTo.add_1j60pz_k$(serializer(_this__u8e3s4, item));
          }
          tmp$ret$0 = tmp0_mapTo;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    } else {
      var tmp$ret$4;
      {
        var tmp$ret$3;
        {
          var tmp0_mapTo_0 = ArrayList_init_$Create$(collectionSizeOrDefault(typeArguments, 10));
          var tmp0_iterator_0 = typeArguments.iterator_jk1svi_k$();
          while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
            var item_0 = tmp0_iterator_0.next_20eer_k$();
            var tmp$ret$2;
            {
              var tmp0_elvis_lhs = serializerOrNull_0(_this__u8e3s4, item_0);
              var tmp_0;
              if (tmp0_elvis_lhs == null) {
                return null;
              } else {
                tmp_0 = tmp0_elvis_lhs;
              }
              tmp$ret$2 = tmp_0;
            }
            tmp0_mapTo_0.add_1j60pz_k$(tmp$ret$2);
          }
          tmp$ret$3 = tmp0_mapTo_0;
        }
        tmp$ret$4 = tmp$ret$3;
      }
      tmp = tmp$ret$4;
    }
    var serializers = tmp;
    var tmp0_subject = rootClass;
    var tmp_1;
    if (((tmp0_subject.equals(getKClass(Collection)) ? true : tmp0_subject.equals(getKClass(List))) ? true : tmp0_subject.equals(getKClass(MutableList))) ? true : tmp0_subject.equals(getKClass(ArrayList))) {
      tmp_1 = new ArrayListSerializer(serializers.get_fkrdnv_k$(0));
    } else if (tmp0_subject.equals(getKClass(HashSet))) {
      tmp_1 = new HashSetSerializer(serializers.get_fkrdnv_k$(0));
    } else if ((tmp0_subject.equals(getKClass(Set)) ? true : tmp0_subject.equals(getKClass(MutableSet))) ? true : tmp0_subject.equals(getKClass(LinkedHashSet))) {
      tmp_1 = new LinkedHashSetSerializer(serializers.get_fkrdnv_k$(0));
    } else if (tmp0_subject.equals(getKClass(HashMap))) {
      tmp_1 = new HashMapSerializer(serializers.get_fkrdnv_k$(0), serializers.get_fkrdnv_k$(1));
    } else if ((tmp0_subject.equals(getKClass(Map)) ? true : tmp0_subject.equals(getKClass(MutableMap))) ? true : tmp0_subject.equals(getKClass(LinkedHashMap))) {
      tmp_1 = new LinkedHashMapSerializer(serializers.get_fkrdnv_k$(0), serializers.get_fkrdnv_k$(1));
    } else if (tmp0_subject.equals(getKClass(Entry))) {
      tmp_1 = MapEntrySerializer(serializers.get_fkrdnv_k$(0), serializers.get_fkrdnv_k$(1));
    } else if (tmp0_subject.equals(getKClass(Pair))) {
      tmp_1 = PairSerializer(serializers.get_fkrdnv_k$(0), serializers.get_fkrdnv_k$(1));
    } else if (tmp0_subject.equals(getKClass(Triple))) {
      tmp_1 = TripleSerializer(serializers.get_fkrdnv_k$(0), serializers.get_fkrdnv_k$(1), serializers.get_fkrdnv_k$(2));
    } else {
      if (isReferenceArray(rootClass)) {
        var tmp$ret$5;
        {
          var tmp_2 = typeArguments.get_fkrdnv_k$(0).get_classifier_ottyl2_k$();
          var tmp0_cast = ArraySerializer((!(tmp_2 == null) ? isInterface(tmp_2, KClass) : false) ? tmp_2 : THROW_CCE(), serializers.get_fkrdnv_k$(0));
          tmp$ret$5 = isInterface(tmp0_cast, KSerializer) ? tmp0_cast : THROW_CCE();
        }
        return tmp$ret$5;
      }
      var tmp$ret$6;
      {
        tmp$ret$6 = copyToArray(serializers);
      }
      var args = tmp$ret$6;
      var tmp1_elvis_lhs = constructSerializerForGivenTypeArgs(rootClass, args.slice());
      tmp_1 = tmp1_elvis_lhs == null ? reflectiveOrContextual(_this__u8e3s4, rootClass, serializers) : tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function nullable(_this__u8e3s4, shouldBeNullable) {
    if (shouldBeNullable)
      return get_nullable(_this__u8e3s4);
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function serializerOrNull_0(_this__u8e3s4, type) {
    return serializerByKTypeImpl(_this__u8e3s4, type, false);
  }
  function reflectiveOrContextual(_this__u8e3s4, kClass, typeArgumentsSerializers) {
    var tmp0_elvis_lhs = serializerOrNull(kClass);
    return tmp0_elvis_lhs == null ? _this__u8e3s4.getContextual_3ymxok_k$(kClass, typeArgumentsSerializers) : tmp0_elvis_lhs;
  }
  function serializer_0(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_1(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.get_descriptor_wjt6a0_k$().get_isNullable_67sy7o_k$()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function _get_original__l7ku1m($this) {
    return $this.original_1;
  }
  function ContextDescriptor(original, kClass) {
    this.original_1 = original;
    this.kClass_1 = kClass;
    this.serialName_1 = this.original_1.get_serialName_u2rqhk_k$() + '<' + this.kClass_1.get_simpleName_r6f8py_k$() + '>';
  }
  ContextDescriptor.prototype.get_kClass_f4awuu_k$ = function () {
    return this.kClass_1;
  };
  ContextDescriptor.prototype.get_annotations_20dirp_k$ = function () {
    return this.original_1.get_annotations_20dirp_k$();
  };
  ContextDescriptor.prototype.get_elementsCount_288r0x_k$ = function () {
    return this.original_1.get_elementsCount_288r0x_k$();
  };
  ContextDescriptor.prototype.get_isInline_usk17w_k$ = function () {
    return this.original_1.get_isInline_usk17w_k$();
  };
  ContextDescriptor.prototype.get_isNullable_67sy7o_k$ = function () {
    return this.original_1.get_isNullable_67sy7o_k$();
  };
  ContextDescriptor.prototype.get_kind_wop7ml_k$ = function () {
    return this.original_1.get_kind_wop7ml_k$();
  };
  ContextDescriptor.prototype.getElementAnnotations_a57oar_k$ = function (index) {
    return this.original_1.getElementAnnotations_a57oar_k$(index);
  };
  ContextDescriptor.prototype.getElementDescriptor_sqz94k_k$ = function (index) {
    return this.original_1.getElementDescriptor_sqz94k_k$(index);
  };
  ContextDescriptor.prototype.getElementIndex_2hwbkl_k$ = function (name) {
    return this.original_1.getElementIndex_2hwbkl_k$(name);
  };
  ContextDescriptor.prototype.getElementName_ykpypc_k$ = function (index) {
    return this.original_1.getElementName_ykpypc_k$(index);
  };
  ContextDescriptor.prototype.isElementOptional_c3hgb3_k$ = function (index) {
    return this.original_1.isElementOptional_c3hgb3_k$(index);
  };
  ContextDescriptor.prototype.get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  ContextDescriptor.prototype.equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.original_1, another.original_1) ? another.kClass_1.equals(this.kClass_1) : false;
  };
  ContextDescriptor.prototype.hashCode = function () {
    var result = this.kClass_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.serialName_1) | 0;
    return result;
  };
  ContextDescriptor.prototype.toString = function () {
    return 'ContextDescriptor(kClass: ' + this.kClass_1 + ', original: ' + this.original_1 + ')';
  };
  ContextDescriptor.$metadata$ = classMeta('ContextDescriptor', [SerialDescriptor]);
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      {
        {
        }
        var tmp$ret$0;
        {
          var tmp0_safe_receiver_0 = _this__u8e3s4.getContextual$default_ocirm0_k$(tmp0_safe_receiver, null, 2, null);
          tmp$ret$0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.get_descriptor_wjt6a0_k$();
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.kClass_1;
    } else {
      if (tmp0_subject instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.original_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function SerialDescriptor() {
  }
  SerialDescriptor.$metadata$ = interfaceMeta('SerialDescriptor');
  function get_elementDescriptors(_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = new _no_name_provided__qut3iv_0(_this__u8e3s4);
    }
    return tmp$ret$0;
  }
  function _set_elementsLeft__kqd1tz($this, _set____db54di) {
    $this.elementsLeft_1 = _set____db54di;
  }
  function _get_elementsLeft__56mb9v($this) {
    return $this.elementsLeft_1;
  }
  function elementDescriptors$1$1($this_elementDescriptors) {
    this.$this_elementDescriptors_1 = $this_elementDescriptors;
    this.elementsLeft_1 = $this_elementDescriptors.get_elementsCount_288r0x_k$();
  }
  elementDescriptors$1$1.prototype.hasNext_bitz1p_k$ = function () {
    return this.elementsLeft_1 > 0;
  };
  elementDescriptors$1$1.prototype.next_20eer_k$ = function () {
    var tmp = this.$this_elementDescriptors_1.get_elementsCount_288r0x_k$();
    var tmp0_this = this;
    var tmp1 = tmp0_this.elementsLeft_1;
    tmp0_this.elementsLeft_1 = tmp1 - 1 | 0;
    return this.$this_elementDescriptors_1.getElementDescriptor_sqz94k_k$(tmp - tmp1 | 0);
  };
  elementDescriptors$1$1.$metadata$ = classMeta(undefined, [Iterator]);
  function _no_name_provided__qut3iv_0($this_elementDescriptors) {
    this.$this_elementDescriptors_1 = $this_elementDescriptors;
  }
  _no_name_provided__qut3iv_0.prototype.iterator_jk1svi_k$ = function () {
    var tmp$ret$0;
    {
      tmp$ret$0 = new elementDescriptors$1$1(this.$this_elementDescriptors_1);
    }
    return tmp$ret$0;
  };
  _no_name_provided__qut3iv_0.$metadata$ = classMeta(undefined, [Iterable]);
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = !isBlank(serialName);
      }
      var tmp0_require = tmp$ret$0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$1;
        {
          tmp$ret$1 = 'Blank serial names are prohibited';
        }
        var message = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    {
      var tmp1_require = !equals(kind, CLASS_getInstance());
      {
      }
      if (!tmp1_require) {
        var tmp$ret$2;
        {
          tmp$ret$2 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
        }
        var message_0 = tmp$ret$2;
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.elementNames_1.get_size_woubt6_k$(), toList(typeParameters), sdBuilder);
  }
  function buildSerialDescriptor$default(serialName, kind, typeParameters, builder, $mask0, $handler) {
    if (!(($mask0 & 8) === 0)) {
      builder = buildSerialDescriptor$lambda();
    }
    return buildSerialDescriptor(serialName, kind, typeParameters, builder);
  }
  function _get_uniqueNames__t2j14q($this) {
    return $this.uniqueNames_1;
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.serialName_1 = serialName;
    this.isNullable_1 = false;
    this.annotations_1 = emptyList();
    this.elementNames_1 = ArrayList_init_$Create$_0();
    this.uniqueNames_1 = HashSet_init_$Create$();
    this.elementDescriptors_1 = ArrayList_init_$Create$_0();
    this.elementAnnotations_1 = ArrayList_init_$Create$_0();
    this.elementOptionality_1 = ArrayList_init_$Create$_0();
  }
  ClassSerialDescriptorBuilder.prototype.get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  ClassSerialDescriptorBuilder.prototype.set_isNullable_o72f9b_k$ = function (_set____db54di) {
    this.isNullable_1 = _set____db54di;
  };
  ClassSerialDescriptorBuilder.prototype.get_isNullable_67sy7o_k$ = function () {
    return this.isNullable_1;
  };
  ClassSerialDescriptorBuilder.prototype.set_annotations_vlf62n_k$ = function (_set____db54di) {
    this.annotations_1 = _set____db54di;
  };
  ClassSerialDescriptorBuilder.prototype.get_annotations_20dirp_k$ = function () {
    return this.annotations_1;
  };
  ClassSerialDescriptorBuilder.prototype.get_elementNames_57dki3_k$ = function () {
    return this.elementNames_1;
  };
  ClassSerialDescriptorBuilder.prototype.get_elementDescriptors_jxewnl_k$ = function () {
    return this.elementDescriptors_1;
  };
  ClassSerialDescriptorBuilder.prototype.get_elementAnnotations_wjl0r5_k$ = function () {
    return this.elementAnnotations_1;
  };
  ClassSerialDescriptorBuilder.prototype.get_elementOptionality_sheked_k$ = function () {
    return this.elementOptionality_1;
  };
  ClassSerialDescriptorBuilder.prototype.element_t1rubu_k$ = function (elementName, descriptor, annotations, isOptional) {
    {
      var tmp0_require = this.uniqueNames_1.add_1j60pz_k$(elementName);
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = "Element with name '" + elementName + "' is already registered";
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var tmp0_this = this;
    {
      var tmp1_plusAssign = tmp0_this.elementNames_1;
      tmp1_plusAssign.add_1j60pz_k$(elementName);
    }
    var tmp1_this = this;
    {
      var tmp2_plusAssign = tmp1_this.elementDescriptors_1;
      tmp2_plusAssign.add_1j60pz_k$(descriptor);
    }
    var tmp2_this = this;
    {
      var tmp3_plusAssign = tmp2_this.elementAnnotations_1;
      tmp3_plusAssign.add_1j60pz_k$(annotations);
    }
    var tmp3_this = this;
    {
      var tmp4_plusAssign = tmp3_this.elementOptionality_1;
      tmp4_plusAssign.add_1j60pz_k$(isOptional);
    }
  };
  ClassSerialDescriptorBuilder.prototype.element$default_m7h690_k$ = function (elementName, descriptor, annotations, isOptional, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      annotations = emptyList();
    if (!(($mask0 & 8) === 0))
      isOptional = false;
    return this.element_t1rubu_k$(elementName, descriptor, annotations, isOptional);
  };
  ClassSerialDescriptorBuilder.$metadata$ = classMeta('ClassSerialDescriptorBuilder');
  function _get_elementNames__mdlk9t($this) {
    return $this.elementNames_1;
  }
  function _get_elementDescriptors__y23q9p($this) {
    return $this.elementDescriptors_1;
  }
  function _get_elementAnnotations__1vliwz($this) {
    return $this.elementAnnotations_1;
  }
  function _get_elementOptionality__ruzsih($this) {
    return $this.elementOptionality_1;
  }
  function _get_name2Index__3zzra8($this) {
    return $this.name2Index_1;
  }
  function _get_typeParametersDescriptors__7g731r($this) {
    return $this.typeParametersDescriptors_1;
  }
  function _get__hashCode__tgwhef($this) {
    var tmp$ret$0;
    {
      var tmp0_getValue = _hashCode$factory();
      tmp$ret$0 = $this._hashCode$delegate_1.get_value_j01efc_k$();
    }
    return tmp$ret$0;
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.typeParametersDescriptors_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.getElementName_ykpypc_k$(it) + ': ' + this$0.getElementDescriptor_sqz94k_k$(it).get_serialName_u2rqhk_k$();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.serialName_1 = serialName;
    this.kind_1 = kind;
    this.elementsCount_1 = elementsCount;
    this.annotations_1 = builder.annotations_1;
    this.serialNames_1 = toHashSet(builder.elementNames_1);
    var tmp = this;
    var tmp$ret$0;
    {
      var tmp0_toTypedArray = builder.elementNames_1;
      tmp$ret$0 = copyToArray(tmp0_toTypedArray);
    }
    tmp.elementNames_1 = tmp$ret$0;
    this.elementDescriptors_1 = compactArray(builder.elementDescriptors_1);
    var tmp_0 = this;
    var tmp$ret$1;
    {
      var tmp0_toTypedArray_0 = builder.elementAnnotations_1;
      tmp$ret$1 = copyToArray(tmp0_toTypedArray_0);
    }
    tmp_0.elementAnnotations_1 = tmp$ret$1;
    this.elementOptionality_1 = toBooleanArray(builder.elementOptionality_1);
    var tmp_1 = this;
    var tmp$ret$4;
    {
      var tmp0_map = withIndex(this.elementNames_1);
      var tmp$ret$3;
      {
        var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
        var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var item = tmp0_iterator.next_20eer_k$();
          var tmp$ret$2;
          {
            tmp$ret$2 = to(item.value_1, item.index_1);
          }
          tmp0_mapTo.add_1j60pz_k$(tmp$ret$2);
        }
        tmp$ret$3 = tmp0_mapTo;
      }
      tmp$ret$4 = tmp$ret$3;
    }
    tmp_1.name2Index_1 = toMap(tmp$ret$4);
    this.typeParametersDescriptors_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2._hashCode$delegate_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  SerialDescriptorImpl.prototype.get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  SerialDescriptorImpl.prototype.get_kind_wop7ml_k$ = function () {
    return this.kind_1;
  };
  SerialDescriptorImpl.prototype.get_elementsCount_288r0x_k$ = function () {
    return this.elementsCount_1;
  };
  SerialDescriptorImpl.prototype.get_annotations_20dirp_k$ = function () {
    return this.annotations_1;
  };
  SerialDescriptorImpl.prototype.get_serialNames_8zf3cl_k$ = function () {
    return this.serialNames_1;
  };
  SerialDescriptorImpl.prototype.getElementName_ykpypc_k$ = function (index) {
    return getChecked(this.elementNames_1, index);
  };
  SerialDescriptorImpl.prototype.getElementIndex_2hwbkl_k$ = function (name) {
    var tmp0_elvis_lhs = this.name2Index_1.get_1mhr4y_k$(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_1();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  SerialDescriptorImpl.prototype.getElementAnnotations_a57oar_k$ = function (index) {
    return getChecked(this.elementAnnotations_1, index);
  };
  SerialDescriptorImpl.prototype.getElementDescriptor_sqz94k_k$ = function (index) {
    return getChecked(this.elementDescriptors_1, index);
  };
  SerialDescriptorImpl.prototype.isElementOptional_c3hgb3_k$ = function (index) {
    return getChecked_0(this.elementOptionality_1, index);
  };
  SerialDescriptorImpl.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.get_serialName_u2rqhk_k$() === other.get_serialName_u2rqhk_k$())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      {
        var tmp0__anonymous__q1qw7t = other;
        tmp$ret$1 = contentEquals(this.typeParametersDescriptors_1, tmp0__anonymous__q1qw7t.typeParametersDescriptors_1);
      }
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.get_elementsCount_288r0x_k$() === other.get_elementsCount_288r0x_k$())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.get_elementsCount_288r0x_k$();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.getElementDescriptor_sqz94k_k$(index).get_serialName_u2rqhk_k$() === other.getElementDescriptor_sqz94k_k$(index).get_serialName_u2rqhk_k$())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.getElementDescriptor_sqz94k_k$(index).get_kind_wop7ml_k$(), other.getElementDescriptor_sqz94k_k$(index).get_kind_wop7ml_k$())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  SerialDescriptorImpl.prototype.hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  SerialDescriptorImpl.prototype.toString = function () {
    var tmp = until(0, this.elementsCount_1);
    var tmp_0 = this.serialName_1 + '(';
    return joinToString$default(tmp, ', ', tmp_0, ')', 0, null, SerialDescriptorImpl$toString$lambda(this), 24, null);
  };
  SerialDescriptorImpl.$metadata$ = classMeta('SerialDescriptorImpl', [SerialDescriptor, CachedNames]);
  function PrimitiveSerialDescriptor(serialName, kind) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = !isBlank(serialName);
      }
      var tmp0_require = tmp$ret$0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$1;
        {
          tmp$ret$1 = 'Blank serial names are prohibited';
        }
        var message = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = !isBlank(serialName);
      }
      var tmp0_require = tmp$ret$0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$1;
        {
          tmp$ret$1 = 'Blank serial names are prohibited';
        }
        var message = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.elementNames_1.get_size_woubt6_k$(), toList(typeParameters), sdBuilder);
  }
  function buildClassSerialDescriptor$default(serialName, typeParameters, builderAction, $mask0, $handler) {
    if (!(($mask0 & 4) === 0)) {
      builderAction = buildClassSerialDescriptor$lambda();
    }
    return buildClassSerialDescriptor(serialName, typeParameters, builderAction);
  }
  function buildSerialDescriptor$lambda() {
    return function ($this$null) {
      return Unit_getInstance();
    };
  }
  function buildClassSerialDescriptor$lambda() {
    return function ($this$null) {
      return Unit_getInstance();
    };
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  ENUM.$metadata$ = objectMeta('ENUM', undefined, undefined, undefined, undefined, SerialKind.prototype);
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  CONTEXTUAL.$metadata$ = objectMeta('CONTEXTUAL', undefined, undefined, undefined, undefined, SerialKind.prototype);
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  SerialKind.prototype.toString = function () {
    return ensureNotNull(getKClassFromExpression(this).get_simpleName_r6f8py_k$());
  };
  SerialKind.prototype.hashCode = function () {
    return getStringHashCode(this.toString());
  };
  SerialKind.$metadata$ = classMeta('SerialKind');
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  BOOLEAN.$metadata$ = objectMeta('BOOLEAN', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  BYTE.$metadata$ = objectMeta('BYTE', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  CHAR.$metadata$ = objectMeta('CHAR', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  SHORT.$metadata$ = objectMeta('SHORT', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  INT.$metadata$ = objectMeta('INT', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  LONG.$metadata$ = objectMeta('LONG', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  FLOAT.$metadata$ = objectMeta('FLOAT', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  DOUBLE.$metadata$ = objectMeta('DOUBLE', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  STRING.$metadata$ = objectMeta('STRING', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  PrimitiveKind.$metadata$ = classMeta('PrimitiveKind', undefined, undefined, undefined, undefined, SerialKind.prototype);
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  CLASS.$metadata$ = objectMeta('CLASS', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  LIST.$metadata$ = objectMeta('LIST', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  MAP.$metadata$ = objectMeta('MAP', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  OBJECT.$metadata$ = objectMeta('OBJECT', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  StructureKind.$metadata$ = classMeta('StructureKind', undefined, undefined, undefined, undefined, SerialKind.prototype);
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  SEALED.$metadata$ = objectMeta('SEALED', undefined, undefined, undefined, undefined, PolymorphicKind.prototype);
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  OPEN.$metadata$ = objectMeta('OPEN', undefined, undefined, undefined, undefined, PolymorphicKind.prototype);
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  PolymorphicKind.$metadata$ = classMeta('PolymorphicKind', undefined, undefined, undefined, undefined, SerialKind.prototype);
  function AbstractDecoder() {
  }
  AbstractDecoder.prototype.decodeValue_jl9esj_k$ = function () {
    throw SerializationException_init_$Create$_0('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  AbstractDecoder.prototype.decodeNotNullMark_us4ba1_k$ = function () {
    return true;
  };
  AbstractDecoder.prototype.decodeNull_jzrmuj_k$ = function () {
    return null;
  };
  AbstractDecoder.prototype.decodeBoolean_m0aca_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.decodeByte_jzz7je_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.decodeShort_jjqk32_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.decodeInt_8iq8f5_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.decodeLong_jzt186_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.decodeFloat_jcnrwu_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.decodeDouble_ur8l0f_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.decodeChar_dc2jtx_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return tmp instanceof Char ? tmp.value_1 : THROW_CCE();
  };
  AbstractDecoder.prototype.decodeString_x3hxsx_k$ = function () {
    var tmp = this.decodeValue_jl9esj_k$();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.decodeEnum_w3hzf6_k$ = function (enumDescriptor) {
    var tmp = this.decodeValue_jl9esj_k$();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  AbstractDecoder.prototype.decodeInline_k1q7ba_k$ = function (inlineDescriptor) {
    return this;
  };
  AbstractDecoder.prototype.decodeSerializableValue_613aoe_k$ = function (deserializer, previousValue) {
    return this.decodeSerializableValue_xpp80o_k$(deserializer);
  };
  AbstractDecoder.prototype.decodeSerializableValue$default_7yctd9_k$ = function (deserializer, previousValue, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      previousValue = null;
    return $handler == null ? this.decodeSerializableValue_613aoe_k$(deserializer, previousValue) : $handler(deserializer, previousValue);
  };
  AbstractDecoder.prototype.beginStructure_dv3yt3_k$ = function (descriptor) {
    return this;
  };
  AbstractDecoder.prototype.endStructure_e64gd4_k$ = function (descriptor) {
  };
  AbstractDecoder.prototype.decodeBooleanElement_3vswy_k$ = function (descriptor, index) {
    return this.decodeBoolean_m0aca_k$();
  };
  AbstractDecoder.prototype.decodeByteElement_76b0gq_k$ = function (descriptor, index) {
    return this.decodeByte_jzz7je_k$();
  };
  AbstractDecoder.prototype.decodeShortElement_zjkfm_k$ = function (descriptor, index) {
    return this.decodeShort_jjqk32_k$();
  };
  AbstractDecoder.prototype.decodeIntElement_cmpvet_k$ = function (descriptor, index) {
    return this.decodeInt_8iq8f5_k$();
  };
  AbstractDecoder.prototype.decodeLongElement_kyznym_k$ = function (descriptor, index) {
    return this.decodeLong_jzt186_k$();
  };
  AbstractDecoder.prototype.decodeFloatElement_nl5jiq_k$ = function (descriptor, index) {
    return this.decodeFloat_jcnrwu_k$();
  };
  AbstractDecoder.prototype.decodeDoubleElement_42w6gz_k$ = function (descriptor, index) {
    return this.decodeDouble_ur8l0f_k$();
  };
  AbstractDecoder.prototype.decodeCharElement_pg5vs7_k$ = function (descriptor, index) {
    return this.decodeChar_dc2jtx_k$();
  };
  AbstractDecoder.prototype.decodeStringElement_4is7ib_k$ = function (descriptor, index) {
    return this.decodeString_x3hxsx_k$();
  };
  AbstractDecoder.prototype.decodeInlineElement_ddno8l_k$ = function (descriptor, index) {
    return this.decodeInline_k1q7ba_k$(descriptor.getElementDescriptor_sqz94k_k$(index));
  };
  AbstractDecoder.prototype.decodeSerializableElement_5lsbxj_k$ = function (descriptor, index, deserializer, previousValue) {
    return this.decodeSerializableValue_613aoe_k$(deserializer, previousValue);
  };
  AbstractDecoder.prototype.decodeNullableSerializableElement_ri3t5d_k$ = function (descriptor, index, deserializer, previousValue) {
    var isNullabilitySupported = deserializer.get_descriptor_wjt6a0_k$().get_isNullable_67sy7o_k$();
    return (isNullabilitySupported ? true : this.decodeNotNullMark_us4ba1_k$()) ? this.decodeSerializableValue_613aoe_k$(deserializer, previousValue) : this.decodeNull_jzrmuj_k$();
  };
  AbstractDecoder.$metadata$ = classMeta('AbstractDecoder', [Decoder, CompositeDecoder]);
  function AbstractEncoder() {
  }
  AbstractEncoder.prototype.beginStructure_dv3yt3_k$ = function (descriptor) {
    return this;
  };
  AbstractEncoder.prototype.endStructure_e64gd4_k$ = function (descriptor) {
  };
  AbstractEncoder.prototype.encodeElement_gaiom2_k$ = function (descriptor, index) {
    return true;
  };
  AbstractEncoder.prototype.encodeValue_g5opg2_k$ = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + getKClassFromExpression(value) + ' is not supported by ' + getKClassFromExpression(this) + ' encoder');
  };
  AbstractEncoder.prototype.encodeNull_ek2hec_k$ = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  AbstractEncoder.prototype.encodeBoolean_6cztl5_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(value);
  };
  AbstractEncoder.prototype.encodeByte_gpyndp_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(value);
  };
  AbstractEncoder.prototype.encodeShort_rh3vxz_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(value);
  };
  AbstractEncoder.prototype.encodeInt_5vxmon_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(value);
  };
  AbstractEncoder.prototype.encodeLong_rk3ab9_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(value);
  };
  AbstractEncoder.prototype.encodeFloat_f5fde1_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(value);
  };
  AbstractEncoder.prototype.encodeDouble_79ztsb_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(value);
  };
  AbstractEncoder.prototype.encodeChar_kkx54x_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(new Char(value));
  };
  AbstractEncoder.prototype.encodeString_90sumj_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(value);
  };
  AbstractEncoder.prototype.encodeEnum_dzauii_k$ = function (enumDescriptor, index) {
    return this.encodeValue_g5opg2_k$(index);
  };
  AbstractEncoder.prototype.encodeInline_8gn4q6_k$ = function (inlineDescriptor) {
    return this;
  };
  AbstractEncoder.prototype.encodeBooleanElement_2l5aov_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index))
      this.encodeBoolean_6cztl5_k$(value);
  };
  AbstractEncoder.prototype.encodeByteElement_r2fm3n_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index))
      this.encodeByte_gpyndp_k$(value);
  };
  AbstractEncoder.prototype.encodeShortElement_2nnlvd_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index))
      this.encodeShort_rh3vxz_k$(value);
  };
  AbstractEncoder.prototype.encodeIntElement_utywpf_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index))
      this.encodeInt_5vxmon_k$(value);
  };
  AbstractEncoder.prototype.encodeLongElement_xtv8il_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index))
      this.encodeLong_rk3ab9_k$(value);
  };
  AbstractEncoder.prototype.encodeFloatElement_o97mfb_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index))
      this.encodeFloat_f5fde1_k$(value);
  };
  AbstractEncoder.prototype.encodeDoubleElement_m8xcw3_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index))
      this.encodeDouble_79ztsb_k$(value);
  };
  AbstractEncoder.prototype.encodeCharElement_4fawdf_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index))
      this.encodeChar_kkx54x_k$(value);
  };
  AbstractEncoder.prototype.encodeStringElement_pgmbgj_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index))
      this.encodeString_90sumj_k$(value);
  };
  AbstractEncoder.prototype.encodeInlineElement_9d3ws3_k$ = function (descriptor, index) {
    return this.encodeElement_gaiom2_k$(descriptor, index) ? this.encodeInline_8gn4q6_k$(descriptor.getElementDescriptor_sqz94k_k$(index)) : NoOpEncoder_getInstance();
  };
  AbstractEncoder.prototype.encodeSerializableElement_pr92am_k$ = function (descriptor, index, serializer, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index))
      this.encodeSerializableValue_bps9ot_k$(serializer, value);
  };
  AbstractEncoder.prototype.encodeNullableSerializableElement_m9ow0w_k$ = function (descriptor, index, serializer, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index))
      this.encodeNullableSerializableValue_35ub11_k$(serializer, value);
  };
  AbstractEncoder.$metadata$ = classMeta('AbstractEncoder', [Encoder, CompositeEncoder]);
  function Decoder() {
  }
  Decoder.$metadata$ = interfaceMeta('Decoder');
  function Companion() {
    Companion_instance = this;
    this.DECODE_DONE_1 = -1;
    this.UNKNOWN_NAME_1 = -3;
  }
  Companion.prototype.get_DECODE_DONE_1b8fna_k$ = function () {
    return this.DECODE_DONE_1;
  };
  Companion.prototype.get_UNKNOWN_NAME_lj8hxl_k$ = function () {
    return this.UNKNOWN_NAME_1;
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CompositeDecoder() {
    Companion_getInstance_1();
  }
  CompositeDecoder.$metadata$ = interfaceMeta('CompositeDecoder');
  function decodeStructure(_this__u8e3s4, descriptor, block) {
    var composite = _this__u8e3s4.beginStructure_dv3yt3_k$(descriptor);
    var result = block(composite);
    composite.endStructure_e64gd4_k$(descriptor);
    return result;
  }
  function Encoder() {
  }
  Encoder.$metadata$ = interfaceMeta('Encoder');
  function CompositeEncoder() {
  }
  CompositeEncoder.$metadata$ = interfaceMeta('CompositeEncoder');
  function encodeCollection(_this__u8e3s4, descriptor, collectionSize, block) {
    var composite = _this__u8e3s4.beginCollection_dgpn47_k$(descriptor, collectionSize);
    block(composite);
    composite.endStructure_e64gd4_k$(descriptor);
  }
  function encodeStructure(_this__u8e3s4, descriptor, block) {
    var composite = _this__u8e3s4.beginStructure_dv3yt3_k$(descriptor);
    block(composite);
    composite.endStructure_e64gd4_k$(descriptor);
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.decodeStringElement_4is7ib_k$($this.get_descriptor_wjt6a0_k$(), 0);
    var serializer = findPolymorphicSerializer_0($this, compositeDecoder, klassName);
    var tmp = $this.get_descriptor_wjt6a0_k$();
    return compositeDecoder.decodeSerializableElement$default_xyql7s_k$(tmp, 1, serializer, null, 8, null);
  }
  function AbstractPolymorphicSerializer() {
  }
  AbstractPolymorphicSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    {
      var tmp0_encodeStructure = this.get_descriptor_wjt6a0_k$();
      var composite = encoder.beginStructure_dv3yt3_k$(tmp0_encodeStructure);
      {
        composite.encodeStringElement_pgmbgj_k$(this.get_descriptor_wjt6a0_k$(), 0, actualSerializer.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$());
        var tmp = this.get_descriptor_wjt6a0_k$();
        var tmp$ret$0;
        {
          tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
        }
        composite.encodeSerializableElement_pr92am_k$(tmp, 1, tmp$ret$0, value);
      }
      composite.endStructure_e64gd4_k$(tmp0_encodeStructure);
    }
  };
  AbstractPolymorphicSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp$ret$5;
    {
      var tmp0_decodeStructure = this.get_descriptor_wjt6a0_k$();
      var composite = decoder.beginStructure_dv3yt3_k$(tmp0_decodeStructure);
      var tmp$ret$0;
      $l$block: {
        var klassName = null;
        var value = null;
        if (composite.decodeSequentially_xlblqy_k$()) {
          tmp$ret$0 = decodeSequentially_0(this, composite);
          break $l$block;
        }
        mainLoop: while (true) {
          var index = composite.decodeElementIndex_nk5a2l_k$(this.get_descriptor_wjt6a0_k$());
          Companion_getInstance_1();
          if (index === -1) {
            break mainLoop;
          } else {
            if (index === 0) {
              klassName = composite.decodeStringElement_4is7ib_k$(this.get_descriptor_wjt6a0_k$(), index);
            } else {
              if (index === 1) {
                var tmp$ret$2;
                $l$block_0: {
                  var tmp0_requireNotNull = klassName;
                  {
                  }
                  if (tmp0_requireNotNull == null) {
                    var tmp$ret$1;
                    {
                      tmp$ret$1 = 'Cannot read polymorphic value before its type token';
                    }
                    var message = tmp$ret$1;
                    throw IllegalArgumentException_init_$Create$(toString(message));
                  } else {
                    tmp$ret$2 = tmp0_requireNotNull;
                    break $l$block_0;
                  }
                }
                klassName = tmp$ret$2;
                var serializer = findPolymorphicSerializer_0(this, composite, klassName);
                var tmp = this.get_descriptor_wjt6a0_k$();
                value = composite.decodeSerializableElement$default_xyql7s_k$(tmp, index, serializer, null, 8, null);
              } else {
                var tmp0_elvis_lhs = klassName;
                throw SerializationException_init_$Create$_0('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
              }
            }
          }
        }
        var tmp$ret$4;
        $l$block_1: {
          var tmp1_requireNotNull = value;
          {
          }
          if (tmp1_requireNotNull == null) {
            var tmp$ret$3;
            {
              tmp$ret$3 = 'Polymorphic value has not been read for class ' + klassName;
            }
            var message_0 = tmp$ret$3;
            throw IllegalArgumentException_init_$Create$(toString(message_0));
          } else {
            tmp$ret$4 = tmp1_requireNotNull;
            break $l$block_1;
          }
        }
        var tmp_0 = tmp$ret$4;
        tmp$ret$0 = isObject(tmp_0) ? tmp_0 : THROW_CCE();
      }
      var result = tmp$ret$0;
      composite.endStructure_e64gd4_k$(tmp0_decodeStructure);
      tmp$ret$5 = result;
    }
    return tmp$ret$5;
  };
  AbstractPolymorphicSerializer.prototype.findPolymorphicSerializerOrNull_e7t5h9_k$ = function (decoder, klassName) {
    return decoder.get_serializersModule_piitvg_k$().getPolymorphic_gixe6f_k$(this.get_baseClass_lygw3m_k$(), klassName);
  };
  AbstractPolymorphicSerializer.prototype.findPolymorphicSerializerOrNull_mimmn_k$ = function (encoder, value) {
    return encoder.get_serializersModule_piitvg_k$().getPolymorphic_1pjrjm_k$(this.get_baseClass_lygw3m_k$(), value);
  };
  AbstractPolymorphicSerializer.$metadata$ = classMeta('AbstractPolymorphicSerializer', [KSerializer]);
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.get_simpleName_r6f8py_k$();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? '' + subClass : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the scope of '" + baseClass.get_simpleName_r6f8py_k$() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default polymorphic serializers were registered ' + scope : "Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + "Mark the base class as 'sealed' or register the serializer explicitly.");
  }
  function CachedNames() {
  }
  CachedNames.$metadata$ = interfaceMeta('CachedNames');
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.serialName_1 = primitive.get_serialName_u2rqhk_k$() + 'Array';
  }
  PrimitiveArrayDescriptor.prototype.get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  PrimitiveArrayDescriptor.$metadata$ = classMeta('PrimitiveArrayDescriptor', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  ArrayClassDesc.prototype.get_serialName_u2rqhk_k$ = function () {
    return 'kotlin.Array';
  };
  ArrayClassDesc.$metadata$ = classMeta('ArrayClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  LinkedHashMapClassDesc.$metadata$ = classMeta('LinkedHashMapClassDesc', undefined, undefined, undefined, undefined, MapLikeDescriptor.prototype);
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  HashMapClassDesc.$metadata$ = classMeta('HashMapClassDesc', undefined, undefined, undefined, undefined, MapLikeDescriptor.prototype);
  function ListLikeDescriptor(elementDescriptor) {
    this.elementDescriptor_1 = elementDescriptor;
    this.elementsCount_1 = 1;
  }
  ListLikeDescriptor.prototype.get_elementDescriptor_pui6ea_k$ = function () {
    return this.elementDescriptor_1;
  };
  ListLikeDescriptor.prototype.get_kind_wop7ml_k$ = function () {
    return LIST_getInstance();
  };
  ListLikeDescriptor.prototype.get_elementsCount_288r0x_k$ = function () {
    return this.elementsCount_1;
  };
  ListLikeDescriptor.prototype.getElementName_ykpypc_k$ = function (index) {
    return index.toString();
  };
  ListLikeDescriptor.prototype.getElementIndex_2hwbkl_k$ = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  ListLikeDescriptor.prototype.isElementOptional_c3hgb3_k$ = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.get_serialName_u2rqhk_k$() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return false;
  };
  ListLikeDescriptor.prototype.getElementAnnotations_a57oar_k$ = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.get_serialName_u2rqhk_k$() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return emptyList();
  };
  ListLikeDescriptor.prototype.getElementDescriptor_sqz94k_k$ = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.get_serialName_u2rqhk_k$() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return this.elementDescriptor_1;
  };
  ListLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.elementDescriptor_1, other.elementDescriptor_1) ? this.get_serialName_u2rqhk_k$() === other.get_serialName_u2rqhk_k$() : false)
      return true;
    return false;
  };
  ListLikeDescriptor.prototype.hashCode = function () {
    return imul(hashCode(this.elementDescriptor_1), 31) + getStringHashCode(this.get_serialName_u2rqhk_k$()) | 0;
  };
  ListLikeDescriptor.prototype.toString = function () {
    return this.get_serialName_u2rqhk_k$() + '(' + this.elementDescriptor_1 + ')';
  };
  ListLikeDescriptor.$metadata$ = classMeta('ListLikeDescriptor', [SerialDescriptor]);
  function get_ARRAY_NAME() {
    return ARRAY_NAME;
  }
  var ARRAY_NAME;
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.serialName_1 = serialName;
    this.keyDescriptor_1 = keyDescriptor;
    this.valueDescriptor_1 = valueDescriptor;
    this.elementsCount_1 = 2;
  }
  MapLikeDescriptor.prototype.get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  MapLikeDescriptor.prototype.get_keyDescriptor_qkqayt_k$ = function () {
    return this.keyDescriptor_1;
  };
  MapLikeDescriptor.prototype.get_valueDescriptor_j2bi95_k$ = function () {
    return this.valueDescriptor_1;
  };
  MapLikeDescriptor.prototype.get_kind_wop7ml_k$ = function () {
    return MAP_getInstance();
  };
  MapLikeDescriptor.prototype.get_elementsCount_288r0x_k$ = function () {
    return this.elementsCount_1;
  };
  MapLikeDescriptor.prototype.getElementName_ykpypc_k$ = function (index) {
    return index.toString();
  };
  MapLikeDescriptor.prototype.getElementIndex_2hwbkl_k$ = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  MapLikeDescriptor.prototype.isElementOptional_c3hgb3_k$ = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.get_serialName_u2rqhk_k$() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return false;
  };
  MapLikeDescriptor.prototype.getElementAnnotations_a57oar_k$ = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.get_serialName_u2rqhk_k$() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return emptyList();
  };
  MapLikeDescriptor.prototype.getElementDescriptor_sqz94k_k$ = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.get_serialName_u2rqhk_k$() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var tmp0_subject = index % 2 | 0;
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = this.keyDescriptor_1;
        break;
      case 1:
        tmp = this.valueDescriptor_1;
        break;
      default:
        throw IllegalStateException_init_$Create$('Unreached');
    }
    return tmp;
  };
  MapLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.get_serialName_u2rqhk_k$() === other.get_serialName_u2rqhk_k$()))
      return false;
    if (!equals(this.keyDescriptor_1, other.keyDescriptor_1))
      return false;
    if (!equals(this.valueDescriptor_1, other.valueDescriptor_1))
      return false;
    return true;
  };
  MapLikeDescriptor.prototype.hashCode = function () {
    var result = getStringHashCode(this.get_serialName_u2rqhk_k$());
    result = imul(31, result) + hashCode(this.keyDescriptor_1) | 0;
    result = imul(31, result) + hashCode(this.valueDescriptor_1) | 0;
    return result;
  };
  MapLikeDescriptor.prototype.toString = function () {
    return this.get_serialName_u2rqhk_k$() + '(' + this.keyDescriptor_1 + ', ' + this.valueDescriptor_1 + ')';
  };
  MapLikeDescriptor.$metadata$ = classMeta('MapLikeDescriptor', [SerialDescriptor]);
  function get_LINKED_HASH_MAP_NAME() {
    return LINKED_HASH_MAP_NAME;
  }
  var LINKED_HASH_MAP_NAME;
  function get_HASH_MAP_NAME() {
    return HASH_MAP_NAME;
  }
  var HASH_MAP_NAME;
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  ArrayListClassDesc.prototype.get_serialName_u2rqhk_k$ = function () {
    return 'kotlin.collections.ArrayList';
  };
  ArrayListClassDesc.$metadata$ = classMeta('ArrayListClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  LinkedHashSetClassDesc.prototype.get_serialName_u2rqhk_k$ = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  LinkedHashSetClassDesc.$metadata$ = classMeta('LinkedHashSetClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  HashSetClassDesc.prototype.get_serialName_u2rqhk_k$ = function () {
    return 'kotlin.collections.HashSet';
  };
  HashSetClassDesc.$metadata$ = classMeta('HashSetClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function get_ARRAY_LIST_NAME() {
    return ARRAY_LIST_NAME;
  }
  var ARRAY_LIST_NAME;
  function get_LINKED_HASH_SET_NAME() {
    return LINKED_HASH_SET_NAME;
  }
  var LINKED_HASH_SET_NAME;
  function get_HASH_SET_NAME() {
    return HASH_SET_NAME;
  }
  var HASH_SET_NAME;
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.descriptor_1 = new PrimitiveArrayDescriptor(primitiveSerializer.get_descriptor_wjt6a0_k$());
  }
  PrimitiveArraySerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  PrimitiveArraySerializer.prototype.builderSize_mmbugq_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_position_jfponi_k$();
  };
  PrimitiveArraySerializer.prototype.toResult_nzwaf2_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.build_1k0s4u_k$();
  };
  PrimitiveArraySerializer.prototype.checkCapacity_ge5iis_k$ = function (_this__u8e3s4, size) {
    return _this__u8e3s4.ensureCapacity_ignus8_k$(size);
  };
  PrimitiveArraySerializer.prototype.collectionIterator_apv53g_k$ = function (_this__u8e3s4) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use writeContents instead');
  };
  PrimitiveArraySerializer.prototype.collectionIterator_v9vfqb_k$ = function (_this__u8e3s4) {
    return this.collectionIterator_apv53g_k$((_this__u8e3s4 == null ? true : isObject(_this__u8e3s4)) ? _this__u8e3s4 : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.insert_64qdau_k$ = function (_this__u8e3s4, index, element) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use Builder.append instead');
  };
  PrimitiveArraySerializer.prototype.builder_3thy1n_k$ = function () {
    return this.toBuilder_9n7g5t_k$(this.empty_1lj7f1_k$());
  };
  PrimitiveArraySerializer.prototype.serialize_q3dfzy_k$ = function (encoder, value) {
    var size = this.collectionSize_gnp0og_k$(value);
    {
      var tmp0_encodeCollection = this.descriptor_1;
      var composite = encoder.beginCollection_dgpn47_k$(tmp0_encodeCollection, size);
      {
        this.writeContent_jq3j40_k$(composite, value, size);
      }
      composite.endStructure_e64gd4_k$(tmp0_encodeCollection);
    }
  };
  PrimitiveArraySerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_q3dfzy_k$(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.serialize_wciw4p_k$ = function (encoder, value) {
    return this.serialize_q3dfzy_k$(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return this.merge_6fpf53_k$(decoder, null);
  };
  PrimitiveArraySerializer.$metadata$ = classMeta('PrimitiveArraySerializer', undefined, undefined, undefined, undefined, CollectionLikeSerializer.prototype);
  function PrimitiveArrayBuilder() {
  }
  PrimitiveArrayBuilder.prototype.ensureCapacity$default_ya9857_k$ = function (requiredCapacity, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      requiredCapacity = this.get_position_jfponi_k$() + 1 | 0;
    return $handler == null ? this.ensureCapacity_ignus8_k$(requiredCapacity) : $handler(requiredCapacity);
  };
  PrimitiveArrayBuilder.$metadata$ = classMeta('PrimitiveArrayBuilder');
  function _get_elementSerializer__tegbkt($this) {
    return $this.elementSerializer_1;
  }
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.elementSerializer_1 = elementSerializer;
  }
  CollectionLikeSerializer.prototype.serialize_wciw4p_k$ = function (encoder, value) {
    var size = this.collectionSize_gnp0og_k$(value);
    {
      var tmp0_encodeCollection = this.get_descriptor_wjt6a0_k$();
      var composite = encoder.beginCollection_dgpn47_k$(tmp0_encodeCollection, size);
      {
        var iterator = this.collectionIterator_v9vfqb_k$(value);
        var inductionVariable = 0;
        if (inductionVariable < size)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            composite.encodeSerializableElement_pr92am_k$(this.get_descriptor_wjt6a0_k$(), index, this.elementSerializer_1, iterator.next_20eer_k$());
          }
           while (inductionVariable < size);
      }
      composite.endStructure_e64gd4_k$(tmp0_encodeCollection);
    }
  };
  CollectionLikeSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_wciw4p_k$(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  CollectionLikeSerializer.prototype.readAll_s7t1kq_k$ = function (decoder, builder, startIndex, size) {
    {
      var tmp0_require = size >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Size must be known in advance when using READ_ALL';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.readElement_yuufx2_k$(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  CollectionLikeSerializer.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    var tmp = this.get_descriptor_wjt6a0_k$();
    this.insert_64qdau_k$(builder, index, decoder.decodeSerializableElement$default_xyql7s_k$(tmp, index, this.elementSerializer_1, null, 8, null));
  };
  CollectionLikeSerializer.$metadata$ = classMeta('CollectionLikeSerializer', undefined, undefined, undefined, undefined, AbstractCollectionSerializer.prototype);
  function readSize($this, decoder, builder) {
    var size = decoder.decodeCollectionSize_cd6i6s_k$($this.get_descriptor_wjt6a0_k$());
    $this.checkCapacity_ge5iis_k$(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  AbstractCollectionSerializer.prototype.merge_6fpf53_k$ = function (decoder, previous) {
    var tmp0_safe_receiver = previous;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.toBuilder_9n7g5t_k$(tmp0_safe_receiver);
    var builder = tmp1_elvis_lhs == null ? this.builder_3thy1n_k$() : tmp1_elvis_lhs;
    var startIndex = this.builderSize_mmbugq_k$(builder);
    var compositeDecoder = decoder.beginStructure_dv3yt3_k$(this.get_descriptor_wjt6a0_k$());
    if (compositeDecoder.decodeSequentially_xlblqy_k$()) {
      this.readAll_s7t1kq_k$(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.decodeElementIndex_nk5a2l_k$(this.get_descriptor_wjt6a0_k$());
        Companion_getInstance_1();
        if (index === -1)
          break $l$loop;
        var tmp = startIndex + index | 0;
        this.readElement$default_s49edv_k$(compositeDecoder, tmp, builder, false, 8, null);
      }
    }
    compositeDecoder.endStructure_e64gd4_k$(this.get_descriptor_wjt6a0_k$());
    return this.toResult_nzwaf2_k$(builder);
  };
  AbstractCollectionSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return this.merge_6fpf53_k$(decoder, null);
  };
  AbstractCollectionSerializer.prototype.readElement$default_s49edv_k$ = function (decoder, index, builder, checkIndex, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      checkIndex = true;
    return $handler == null ? this.readElement_yuufx2_k$(decoder, index, builder, checkIndex) : $handler(decoder, index, builder, checkIndex);
  };
  AbstractCollectionSerializer.$metadata$ = classMeta('AbstractCollectionSerializer', [KSerializer]);
  function _get_kClass__80op26($this) {
    return $this.kClass_1;
  }
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.kClass_1 = kClass;
    this.descriptor_1 = new ArrayClassDesc(eSerializer.get_descriptor_wjt6a0_k$());
  }
  ReferenceArraySerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  ReferenceArraySerializer.prototype.collectionSize_sgvbkw_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ReferenceArraySerializer.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_sgvbkw_k$((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.collectionIterator_hdgi7n_k$ = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  ReferenceArraySerializer.prototype.collectionIterator_v9vfqb_k$ = function (_this__u8e3s4) {
    return this.collectionIterator_hdgi7n_k$((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.builder_3thy1n_k$ = function () {
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$_0();
    }
    return tmp$ret$0;
  };
  ReferenceArraySerializer.prototype.builderSize_q7iht4_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$();
  };
  ReferenceArraySerializer.prototype.builderSize_mmbugq_k$ = function (_this__u8e3s4) {
    return this.builderSize_q7iht4_k$(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.toResult_l9vbl8_k$ = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.kClass_1);
  };
  ReferenceArraySerializer.prototype.toResult_nzwaf2_k$ = function (_this__u8e3s4) {
    return this.toResult_l9vbl8_k$(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.toBuilder_qnyl35_k$ = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  ReferenceArraySerializer.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_qnyl35_k$((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.checkCapacity_3yirqq_k$ = function (_this__u8e3s4, size) {
    return _this__u8e3s4.ensureCapacity_ignus8_k$(size);
  };
  ReferenceArraySerializer.prototype.checkCapacity_ge5iis_k$ = function (_this__u8e3s4, size) {
    return this.checkCapacity_3yirqq_k$(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  ReferenceArraySerializer.prototype.insert_5tew8_k$ = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.add_ydlf05_k$(index, element);
  };
  ReferenceArraySerializer.prototype.insert_64qdau_k$ = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.insert_5tew8_k$(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  ReferenceArraySerializer.$metadata$ = classMeta('ReferenceArraySerializer', undefined, undefined, undefined, undefined, CollectionLikeSerializer.prototype);
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  CollectionSerializer.prototype.collectionSize_diz0mn_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$();
  };
  CollectionSerializer.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_diz0mn_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CollectionSerializer.prototype.collectionIterator_pvbym6_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.iterator_jk1svi_k$();
  };
  CollectionSerializer.prototype.collectionIterator_v9vfqb_k$ = function (_this__u8e3s4) {
    return this.collectionIterator_pvbym6_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CollectionSerializer.$metadata$ = classMeta('CollectionSerializer', undefined, undefined, undefined, undefined, CollectionLikeSerializer.prototype);
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.keySerializer_1 = keySerializer;
    this.valueSerializer_1 = valueSerializer;
  }
  MapLikeSerializer.prototype.get_keySerializer_t29hrc_k$ = function () {
    return this.keySerializer_1;
  };
  MapLikeSerializer.prototype.get_valueSerializer_gksbgm_k$ = function () {
    return this.valueSerializer_1;
  };
  MapLikeSerializer.prototype.readAll_s7t1kq_k$ = function (decoder, builder, startIndex, size) {
    {
      var tmp0_require = size >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Size must be known in advance when using READ_ALL';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.first_1;
    var last = progression.last_1;
    var step_0 = progression.step_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.readElement_yuufx2_k$(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  MapLikeSerializer.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    var tmp = this.get_descriptor_wjt6a0_k$();
    var key = decoder.decodeSerializableElement$default_xyql7s_k$(tmp, index, this.keySerializer_1, null, 8, null);
    var tmp_0;
    if (checkIndex) {
      var tmp$ret$1;
      {
        var tmp0_also = decoder.decodeElementIndex_nk5a2l_k$(this.get_descriptor_wjt6a0_k$());
        {
        }
        {
          {
            var tmp0_require = tmp0_also === (index + 1 | 0);
            {
            }
            if (!tmp0_require) {
              var tmp$ret$0;
              {
                tmp$ret$0 = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + tmp0_also;
              }
              var message = tmp$ret$0;
              throw IllegalArgumentException_init_$Create$(toString(message));
            }
          }
        }
        tmp$ret$1 = tmp0_also;
      }
      tmp_0 = tmp$ret$1;
    } else {
      tmp_0 = index + 1 | 0;
    }
    var vIndex = tmp_0;
    var tmp_1;
    var tmp_2;
    if (builder.containsKey_wgk31w_k$(key)) {
      var tmp_3 = this.valueSerializer_1.get_descriptor_wjt6a0_k$().get_kind_wop7ml_k$();
      tmp_2 = !(tmp_3 instanceof PrimitiveKind);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = decoder.decodeSerializableElement_5lsbxj_k$(this.get_descriptor_wjt6a0_k$(), vIndex, this.valueSerializer_1, getValue(builder, key));
    } else {
      var tmp_4 = this.get_descriptor_wjt6a0_k$();
      tmp_1 = decoder.decodeSerializableElement$default_xyql7s_k$(tmp_4, vIndex, this.valueSerializer_1, null, 8, null);
    }
    var value = tmp_1;
    {
      builder.put_3mhbri_k$(key, value);
    }
  };
  MapLikeSerializer.prototype.serialize_wciw4p_k$ = function (encoder, value) {
    var size = this.collectionSize_gnp0og_k$(value);
    {
      var tmp0_encodeCollection = this.get_descriptor_wjt6a0_k$();
      var composite = encoder.beginCollection_dgpn47_k$(tmp0_encodeCollection, size);
      {
        var iterator = this.collectionIterator_v9vfqb_k$(value);
        var index = 0;
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = iterator;
          }
          var tmp0_iterator = tmp$ret$0;
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            {
              var tmp$ret$1;
              {
                tmp$ret$1 = element.get_key_18j28a_k$();
              }
              var k = tmp$ret$1;
              var tmp$ret$2;
              {
                tmp$ret$2 = element.get_value_j01efc_k$();
              }
              var v = tmp$ret$2;
              var tmp = this.get_descriptor_wjt6a0_k$();
              var tmp0 = index;
              index = tmp0 + 1 | 0;
              composite.encodeSerializableElement_pr92am_k$(tmp, tmp0, this.keySerializer_1, k);
              var tmp_0 = this.get_descriptor_wjt6a0_k$();
              var tmp1 = index;
              index = tmp1 + 1 | 0;
              composite.encodeSerializableElement_pr92am_k$(tmp_0, tmp1, this.valueSerializer_1, v);
            }
          }
        }
      }
      composite.endStructure_e64gd4_k$(tmp0_encodeCollection);
    }
  };
  MapLikeSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_wciw4p_k$(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  MapLikeSerializer.$metadata$ = classMeta('MapLikeSerializer', undefined, undefined, undefined, undefined, AbstractCollectionSerializer.prototype);
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.descriptor_1 = new LinkedHashMapClassDesc(kSerializer.get_descriptor_wjt6a0_k$(), vSerializer.get_descriptor_wjt6a0_k$());
  }
  LinkedHashMapSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  LinkedHashMapSerializer.prototype.collectionSize_1ouzjx_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$();
  };
  LinkedHashMapSerializer.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_1ouzjx_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.collectionIterator_kjktzq_k$ = function (_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    }
    return tmp$ret$0;
  };
  LinkedHashMapSerializer.prototype.collectionIterator_v9vfqb_k$ = function (_this__u8e3s4) {
    return this.collectionIterator_kjktzq_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.builder_3thy1n_k$ = function () {
    return LinkedHashMap_init_$Create$();
  };
  LinkedHashMapSerializer.prototype.builderSize_39d0bl_k$ = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.get_size_woubt6_k$(), 2);
  };
  LinkedHashMapSerializer.prototype.builderSize_mmbugq_k$ = function (_this__u8e3s4) {
    return this.builderSize_39d0bl_k$(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.toResult_8706jh_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  LinkedHashMapSerializer.prototype.toResult_nzwaf2_k$ = function (_this__u8e3s4) {
    return this.toResult_8706jh_k$(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.toBuilder_iza02_k$ = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  LinkedHashMapSerializer.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_iza02_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.checkCapacity_n86247_k$ = function (_this__u8e3s4, size) {
  };
  LinkedHashMapSerializer.prototype.checkCapacity_ge5iis_k$ = function (_this__u8e3s4, size) {
    return this.checkCapacity_n86247_k$(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  LinkedHashMapSerializer.prototype.insertKeyValuePair_o57l8p_k$ = function (_this__u8e3s4, index, key, value) {
    _this__u8e3s4.put_3mhbri_k$(key, value);
    return Unit_getInstance();
  };
  LinkedHashMapSerializer.prototype.insertKeyValuePair_nrn1wz_k$ = function (_this__u8e3s4, index, key, value) {
    var tmp = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE();
    var tmp_0 = (key == null ? true : isObject(key)) ? key : THROW_CCE();
    return this.insertKeyValuePair_o57l8p_k$(tmp, index, tmp_0, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  LinkedHashMapSerializer.$metadata$ = classMeta('LinkedHashMapSerializer', undefined, undefined, undefined, undefined, MapLikeSerializer.prototype);
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.descriptor_1 = new HashMapClassDesc(kSerializer.get_descriptor_wjt6a0_k$(), vSerializer.get_descriptor_wjt6a0_k$());
  }
  HashMapSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  HashMapSerializer.prototype.collectionSize_1ouzjx_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$();
  };
  HashMapSerializer.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_1ouzjx_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.collectionIterator_kjktzq_k$ = function (_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    }
    return tmp$ret$0;
  };
  HashMapSerializer.prototype.collectionIterator_v9vfqb_k$ = function (_this__u8e3s4) {
    return this.collectionIterator_kjktzq_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.builder_3thy1n_k$ = function () {
    return HashMap_init_$Create$();
  };
  HashMapSerializer.prototype.builderSize_f8e7zc_k$ = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.get_size_woubt6_k$(), 2);
  };
  HashMapSerializer.prototype.builderSize_mmbugq_k$ = function (_this__u8e3s4) {
    return this.builderSize_f8e7zc_k$(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.toResult_ii3mzo_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  HashMapSerializer.prototype.toResult_nzwaf2_k$ = function (_this__u8e3s4) {
    return this.toResult_ii3mzo_k$(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.toBuilder_iza02_k$ = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  HashMapSerializer.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_iza02_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.checkCapacity_bomj8i_k$ = function (_this__u8e3s4, size) {
  };
  HashMapSerializer.prototype.checkCapacity_ge5iis_k$ = function (_this__u8e3s4, size) {
    return this.checkCapacity_bomj8i_k$(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  HashMapSerializer.prototype.insertKeyValuePair_ogcj1a_k$ = function (_this__u8e3s4, index, key, value) {
    _this__u8e3s4.put_3mhbri_k$(key, value);
    return Unit_getInstance();
  };
  HashMapSerializer.prototype.insertKeyValuePair_nrn1wz_k$ = function (_this__u8e3s4, index, key, value) {
    var tmp = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE();
    var tmp_0 = (key == null ? true : isObject(key)) ? key : THROW_CCE();
    return this.insertKeyValuePair_ogcj1a_k$(tmp, index, tmp_0, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  HashMapSerializer.$metadata$ = classMeta('HashMapSerializer', undefined, undefined, undefined, undefined, MapLikeSerializer.prototype);
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.descriptor_1 = new ArrayListClassDesc(element.get_descriptor_wjt6a0_k$());
  }
  ArrayListSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  ArrayListSerializer.prototype.builder_3thy1n_k$ = function () {
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$_0();
    }
    return tmp$ret$0;
  };
  ArrayListSerializer.prototype.builderSize_pted1r_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$();
  };
  ArrayListSerializer.prototype.builderSize_mmbugq_k$ = function (_this__u8e3s4) {
    return this.builderSize_pted1r_k$(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.toResult_t33s23_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  ArrayListSerializer.prototype.toResult_nzwaf2_k$ = function (_this__u8e3s4) {
    return this.toResult_t33s23_k$(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.toBuilder_9sdg76_k$ = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  ArrayListSerializer.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_9sdg76_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, List) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.checkCapacity_ao7vf_k$ = function (_this__u8e3s4, size) {
    return _this__u8e3s4.ensureCapacity_ignus8_k$(size);
  };
  ArrayListSerializer.prototype.checkCapacity_ge5iis_k$ = function (_this__u8e3s4, size) {
    return this.checkCapacity_ao7vf_k$(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  ArrayListSerializer.prototype.insert_fxdj4m_k$ = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.add_ydlf05_k$(index, element);
  };
  ArrayListSerializer.prototype.insert_64qdau_k$ = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.insert_fxdj4m_k$(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  ArrayListSerializer.$metadata$ = classMeta('ArrayListSerializer', undefined, undefined, undefined, undefined, CollectionSerializer.prototype);
  function HashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.descriptor_1 = new HashSetClassDesc(eSerializer.get_descriptor_wjt6a0_k$());
  }
  HashSetSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  HashSetSerializer.prototype.builder_3thy1n_k$ = function () {
    return HashSet_init_$Create$();
  };
  HashSetSerializer.prototype.builderSize_9hxhhu_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$();
  };
  HashSetSerializer.prototype.builderSize_mmbugq_k$ = function (_this__u8e3s4) {
    return this.builderSize_9hxhhu_k$(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.toResult_bsa6lu_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  HashSetSerializer.prototype.toResult_nzwaf2_k$ = function (_this__u8e3s4) {
    return this.toResult_bsa6lu_k$(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.toBuilder_lmw6bc_k$ = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  HashSetSerializer.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_lmw6bc_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashSetSerializer.prototype.checkCapacity_bde2fc_k$ = function (_this__u8e3s4, size) {
  };
  HashSetSerializer.prototype.checkCapacity_ge5iis_k$ = function (_this__u8e3s4, size) {
    return this.checkCapacity_bde2fc_k$(_this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  HashSetSerializer.prototype.insert_66pcc9_k$ = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.add_1j60pz_k$(element);
  };
  HashSetSerializer.prototype.insert_64qdau_k$ = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof HashSet ? _this__u8e3s4 : THROW_CCE();
    return this.insert_66pcc9_k$(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  HashSetSerializer.$metadata$ = classMeta('HashSetSerializer', undefined, undefined, undefined, undefined, CollectionSerializer.prototype);
  function LinkedHashSetSerializer(eSerializer) {
    CollectionSerializer.call(this, eSerializer);
    this.descriptor_1 = new LinkedHashSetClassDesc(eSerializer.get_descriptor_wjt6a0_k$());
  }
  LinkedHashSetSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  LinkedHashSetSerializer.prototype.builder_3thy1n_k$ = function () {
    var tmp$ret$0;
    {
      tmp$ret$0 = LinkedHashSet_init_$Create$();
    }
    return tmp$ret$0;
  };
  LinkedHashSetSerializer.prototype.builderSize_c7xn2j_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$();
  };
  LinkedHashSetSerializer.prototype.builderSize_mmbugq_k$ = function (_this__u8e3s4) {
    return this.builderSize_c7xn2j_k$(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.toResult_rgrz5l_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  LinkedHashSetSerializer.prototype.toResult_nzwaf2_k$ = function (_this__u8e3s4) {
    return this.toResult_rgrz5l_k$(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.toBuilder_lmw6bc_k$ = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashSet_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  LinkedHashSetSerializer.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_lmw6bc_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Set) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashSetSerializer.prototype.checkCapacity_qs5vdt_k$ = function (_this__u8e3s4, size) {
  };
  LinkedHashSetSerializer.prototype.checkCapacity_ge5iis_k$ = function (_this__u8e3s4, size) {
    return this.checkCapacity_qs5vdt_k$(_this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE(), size);
  };
  LinkedHashSetSerializer.prototype.insert_3b5fv6_k$ = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.add_1j60pz_k$(element);
  };
  LinkedHashSetSerializer.prototype.insert_64qdau_k$ = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof LinkedHashSet ? _this__u8e3s4 : THROW_CCE();
    return this.insert_3b5fv6_k$(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  LinkedHashSetSerializer.$metadata$ = classMeta('LinkedHashSetSerializer', undefined, undefined, undefined, undefined, CollectionSerializer.prototype);
  function _get_EMPTY_HIGH_MARKS__mj061c($this) {
    return $this.EMPTY_HIGH_MARKS_1;
  }
  function _get_descriptor__bbb664($this) {
    return $this.descriptor_1;
  }
  function _get_readIfAbsent__dod95t($this) {
    return $this.readIfAbsent_1;
  }
  function _set_lowerMarks__z5lqxa($this, _set____db54di) {
    $this.lowerMarks_1 = _set____db54di;
  }
  function _get_lowerMarks__kt9pwm($this) {
    return $this.lowerMarks_1;
  }
  function _get_highMarksArray__2omaie($this) {
    return $this.highMarksArray_1;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.EMPTY_HIGH_MARKS_1 = longArray(0);
  }
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    Companion_getInstance();
    var elementsInLastSlot = elementsCount & (64 - 1 | 0);
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = (new Long(-1, -1)).shl_po5ip6_k$(elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    Companion_getInstance();
    var offsetInSlot = index & (64 - 1 | 0);
    $this.highMarksArray_1[slot] = $this.highMarksArray_1[slot].or_s401rn_k$((new Long(1, 0)).shl_po5ip6_k$(offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.highMarksArray_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = slot + 1 | 0;
        Companion_getInstance();
        var slotOffset = imul(tmp, 64);
        var slotMarks = $this.highMarksArray_1[slot];
        while (!slotMarks.equals(new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(slotMarks.inv_28kx_k$());
          slotMarks = slotMarks.or_s401rn_k$((new Long(1, 0)).shl_po5ip6_k$(indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.readIfAbsent_1($this.descriptor_1, index)) {
            $this.highMarksArray_1[slot] = slotMarks;
            return index;
          }
        }
        $this.highMarksArray_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    Companion_getInstance_1();
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance_2();
    this.descriptor_1 = descriptor;
    this.readIfAbsent_1 = readIfAbsent;
    var elementsCount = this.descriptor_1.get_elementsCount_288r0x_k$();
    Companion_getInstance();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      Companion_getInstance();
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = (new Long(-1, -1)).shl_po5ip6_k$(elementsCount);
      }
      tmp.lowerMarks_1 = tmp_0;
      this.highMarksArray_1 = Companion_getInstance_2().EMPTY_HIGH_MARKS_1;
    } else {
      this.lowerMarks_1 = new Long(0, 0);
      this.highMarksArray_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  ElementMarker.prototype.mark_xwbrr1_k$ = function (index) {
    Companion_getInstance();
    if (index < 64) {
      this.lowerMarks_1 = this.lowerMarks_1.or_s401rn_k$((new Long(1, 0)).shl_po5ip6_k$(index));
    } else {
      markHigh(this, index);
    }
  };
  ElementMarker.prototype.nextUnmarkedIndex_u6mxd2_k$ = function () {
    var elementsCount = this.descriptor_1.get_elementsCount_288r0x_k$();
    while (!this.lowerMarks_1.equals(new Long(-1, -1))) {
      var index = countTrailingZeroBits(this.lowerMarks_1.inv_28kx_k$());
      this.lowerMarks_1 = this.lowerMarks_1.or_s401rn_k$((new Long(1, 0)).shl_po5ip6_k$(index));
      if (this.readIfAbsent_1(this.descriptor_1, index)) {
        return index;
      }
    }
    Companion_getInstance();
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    Companion_getInstance_1();
    return -1;
  };
  ElementMarker.$metadata$ = classMeta('ElementMarker');
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.isInline_1 = true;
  }
  InlineClassDescriptor.prototype.get_isInline_usk17w_k$ = function () {
    return this.isInline_1;
  };
  InlineClassDescriptor.prototype.hashCode = function () {
    return imul(PluginGeneratedSerialDescriptor.prototype.hashCode.call(this), 31);
  };
  InlineClassDescriptor.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.get_serialName_u2rqhk_k$() === other.get_serialName_u2rqhk_k$())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      {
        var tmp0__anonymous__q1qw7t = other;
        tmp$ret$1 = tmp0__anonymous__q1qw7t.isInline_1 ? contentEquals(this.get_typeParameterDescriptors_hcpg9q_k$(), tmp0__anonymous__q1qw7t.get_typeParameterDescriptors_hcpg9q_k$()) : false;
      }
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.get_elementsCount_288r0x_k$() === other.get_elementsCount_288r0x_k$())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.get_elementsCount_288r0x_k$();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.getElementDescriptor_sqz94k_k$(index).get_serialName_u2rqhk_k$() === other.getElementDescriptor_sqz94k_k$(index).get_serialName_u2rqhk_k$())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.getElementDescriptor_sqz94k_k$(index).get_kind_wop7ml_k$(), other.getElementDescriptor_sqz94k_k$(index).get_kind_wop7ml_k$())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  InlineClassDescriptor.$metadata$ = classMeta('InlineClassDescriptor', undefined, undefined, undefined, undefined, PluginGeneratedSerialDescriptor.prototype);
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.$primitiveSerializer_1 = $primitiveSerializer;
  }
  InlinePrimitiveDescriptor$1.prototype.childSerializers_5ghqw5_k$ = function () {
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = [this.$primitiveSerializer_1];
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  InlinePrimitiveDescriptor$1.prototype.get_descriptor_wjt6a0_k$ = function () {
    throw IllegalStateException_init_$Create$('unsupported');
  };
  InlinePrimitiveDescriptor$1.prototype.serialize_32qylj_k$ = function (encoder, value) {
    {
      throw IllegalStateException_init_$Create$('unsupported');
    }
  };
  InlinePrimitiveDescriptor$1.prototype.deserialize_2t41fm_k$ = function (decoder) {
    {
      throw IllegalStateException_init_$Create$('unsupported');
    }
  };
  InlinePrimitiveDescriptor$1.$metadata$ = classMeta(undefined, [GeneratedSerializer]);
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.descriptor_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_5(IntCompanionObject_getInstance()));
  }
  UIntSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  UIntSerializer.prototype.serialize_to749g_k$ = function (encoder, value) {
    var tmp = encoder.encodeInline_8gn4q6_k$(this.descriptor_1);
    var tmp$ret$0;
    {
      tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    }
    tmp.encodeInt_5vxmon_k$(tmp$ret$0);
  };
  UIntSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_to749g_k$(encoder, value instanceof UInt ? value.data_1 : THROW_CCE());
  };
  UIntSerializer.prototype.deserialize_a51uql_k$ = function (decoder) {
    var tmp$ret$0;
    {
      var tmp0_toUInt = decoder.decodeInline_k1q7ba_k$(this.descriptor_1).decodeInt_8iq8f5_k$();
      tmp$ret$0 = _UInt___init__impl__l7qpdl(tmp0_toUInt);
    }
    return tmp$ret$0;
  };
  UIntSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return new UInt(this.deserialize_a51uql_k$(decoder));
  };
  UIntSerializer.$metadata$ = objectMeta('UIntSerializer', [KSerializer]);
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.descriptor_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_4(Companion_getInstance()));
  }
  ULongSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  ULongSerializer.prototype.serialize_ruyvqb_k$ = function (encoder, value) {
    var tmp = encoder.encodeInline_8gn4q6_k$(this.descriptor_1);
    var tmp$ret$0;
    {
      tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    }
    tmp.encodeLong_rk3ab9_k$(tmp$ret$0);
  };
  ULongSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_ruyvqb_k$(encoder, value instanceof ULong ? value.data_1 : THROW_CCE());
  };
  ULongSerializer.prototype.deserialize_u83bco_k$ = function (decoder) {
    var tmp$ret$0;
    {
      var tmp0_toULong = decoder.decodeInline_k1q7ba_k$(this.descriptor_1).decodeLong_jzt186_k$();
      tmp$ret$0 = _ULong___init__impl__c78o9k(tmp0_toULong);
    }
    return tmp$ret$0;
  };
  ULongSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return new ULong(this.deserialize_u83bco_k$(decoder));
  };
  ULongSerializer.$metadata$ = objectMeta('ULongSerializer', [KSerializer]);
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.descriptor_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_7(ByteCompanionObject_getInstance()));
  }
  UByteSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  UByteSerializer.prototype.serialize_uilp5j_k$ = function (encoder, value) {
    var tmp = encoder.encodeInline_8gn4q6_k$(this.descriptor_1);
    var tmp$ret$0;
    {
      tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    }
    tmp.encodeByte_gpyndp_k$(tmp$ret$0);
  };
  UByteSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_uilp5j_k$(encoder, value instanceof UByte ? value.data_1 : THROW_CCE());
  };
  UByteSerializer.prototype.deserialize_u89hnw_k$ = function (decoder) {
    var tmp$ret$0;
    {
      var tmp0_toUByte = decoder.decodeInline_k1q7ba_k$(this.descriptor_1).decodeByte_jzz7je_k$();
      tmp$ret$0 = _UByte___init__impl__g9hnc4(tmp0_toUByte);
    }
    return tmp$ret$0;
  };
  UByteSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return new UByte(this.deserialize_u89hnw_k$(decoder));
  };
  UByteSerializer.$metadata$ = objectMeta('UByteSerializer', [KSerializer]);
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.descriptor_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_6(ShortCompanionObject_getInstance()));
  }
  UShortSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  UShortSerializer.prototype.serialize_b1j6tj_k$ = function (encoder, value) {
    var tmp = encoder.encodeInline_8gn4q6_k$(this.descriptor_1);
    var tmp$ret$0;
    {
      tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    }
    tmp.encodeShort_rh3vxz_k$(tmp$ret$0);
  };
  UShortSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_b1j6tj_k$(encoder, value instanceof UShort ? value.data_1 : THROW_CCE());
  };
  UShortSerializer.prototype.deserialize_dgnxw0_k$ = function (decoder) {
    var tmp$ret$0;
    {
      var tmp0_toUShort = decoder.decodeInline_k1q7ba_k$(this.descriptor_1).decodeShort_jjqk32_k$();
      tmp$ret$0 = _UShort___init__impl__jigrne(tmp0_toUShort);
    }
    return tmp$ret$0;
  };
  UShortSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return new UShort(this.deserialize_dgnxw0_k$(decoder));
  };
  UShortSerializer.$metadata$ = objectMeta('UShortSerializer', [KSerializer]);
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.serializersModule_1 = get_EmptySerializersModule();
  }
  NoOpEncoder.prototype.get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  NoOpEncoder.prototype.encodeValue_g5opg2_k$ = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.encodeNull_ek2hec_k$ = function () {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.encodeBoolean_6cztl5_k$ = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.encodeByte_gpyndp_k$ = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.encodeShort_rh3vxz_k$ = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.encodeInt_5vxmon_k$ = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.encodeLong_rk3ab9_k$ = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.encodeFloat_f5fde1_k$ = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.encodeDouble_79ztsb_k$ = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.encodeChar_kkx54x_k$ = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.encodeString_90sumj_k$ = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.encodeEnum_dzauii_k$ = function (enumDescriptor, index) {
    return Unit_getInstance();
  };
  NoOpEncoder.$metadata$ = objectMeta('NoOpEncoder', undefined, undefined, undefined, undefined, AbstractEncoder.prototype);
  var NoOpEncoder_instance;
  function NoOpEncoder_getInstance() {
    if (NoOpEncoder_instance == null)
      new NoOpEncoder();
    return NoOpEncoder_instance;
  }
  function _get_serializer__hdpyrd($this) {
    return $this.serializer_1;
  }
  function NullableSerializer(serializer) {
    this.serializer_1 = serializer;
    this.descriptor_1 = new SerialDescriptorForNullable(this.serializer_1.get_descriptor_wjt6a0_k$());
  }
  NullableSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  NullableSerializer.prototype.serialize_l9nmnw_k$ = function (encoder, value) {
    if (!(value == null)) {
      encoder.encodeNotNullMark_40lhgg_k$();
      encoder.encodeSerializableValue_bps9ot_k$(this.serializer_1, value);
    } else {
      encoder.encodeNull_ek2hec_k$();
    }
  };
  NullableSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_l9nmnw_k$(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  NullableSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeNotNullMark_us4ba1_k$() ? decoder.decodeSerializableValue_xpp80o_k$(this.serializer_1) : decoder.decodeNull_jzrmuj_k$();
  };
  NullableSerializer.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof NullableSerializer)
      other;
    else
      THROW_CCE();
    if (!equals(this.serializer_1, other.serializer_1))
      return false;
    return true;
  };
  NullableSerializer.prototype.hashCode = function () {
    return hashCode(this.serializer_1);
  };
  NullableSerializer.$metadata$ = classMeta('NullableSerializer', [KSerializer]);
  function SerialDescriptorForNullable(original) {
    this.original_1 = original;
    this.serialName_1 = this.original_1.get_serialName_u2rqhk_k$() + '?';
    this.serialNames_1 = cachedSerialNames(this.original_1);
  }
  SerialDescriptorForNullable.prototype.get_original_8zw1nq_k$ = function () {
    return this.original_1;
  };
  SerialDescriptorForNullable.prototype.get_annotations_20dirp_k$ = function () {
    return this.original_1.get_annotations_20dirp_k$();
  };
  SerialDescriptorForNullable.prototype.get_elementsCount_288r0x_k$ = function () {
    return this.original_1.get_elementsCount_288r0x_k$();
  };
  SerialDescriptorForNullable.prototype.get_isInline_usk17w_k$ = function () {
    return this.original_1.get_isInline_usk17w_k$();
  };
  SerialDescriptorForNullable.prototype.get_kind_wop7ml_k$ = function () {
    return this.original_1.get_kind_wop7ml_k$();
  };
  SerialDescriptorForNullable.prototype.getElementAnnotations_a57oar_k$ = function (index) {
    return this.original_1.getElementAnnotations_a57oar_k$(index);
  };
  SerialDescriptorForNullable.prototype.getElementDescriptor_sqz94k_k$ = function (index) {
    return this.original_1.getElementDescriptor_sqz94k_k$(index);
  };
  SerialDescriptorForNullable.prototype.getElementIndex_2hwbkl_k$ = function (name) {
    return this.original_1.getElementIndex_2hwbkl_k$(name);
  };
  SerialDescriptorForNullable.prototype.getElementName_ykpypc_k$ = function (index) {
    return this.original_1.getElementName_ykpypc_k$(index);
  };
  SerialDescriptorForNullable.prototype.isElementOptional_c3hgb3_k$ = function (index) {
    return this.original_1.isElementOptional_c3hgb3_k$(index);
  };
  SerialDescriptorForNullable.prototype.get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  SerialDescriptorForNullable.prototype.get_serialNames_8zf3cl_k$ = function () {
    return this.serialNames_1;
  };
  SerialDescriptorForNullable.prototype.get_isNullable_67sy7o_k$ = function () {
    return true;
  };
  SerialDescriptorForNullable.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.original_1, other.original_1))
      return false;
    return true;
  };
  SerialDescriptorForNullable.prototype.toString = function () {
    return '' + this.original_1 + '?';
  };
  SerialDescriptorForNullable.prototype.hashCode = function () {
    return imul(hashCode(this.original_1), 31);
  };
  SerialDescriptorForNullable.$metadata$ = classMeta('SerialDescriptorForNullable', [SerialDescriptor, CachedNames]);
  function _get_objectInstance__h8002x($this) {
    return $this.objectInstance_1;
  }
  function ObjectSerializer_init_$Init$(serialName, objectInstance, classAnnotations, $this) {
    ObjectSerializer.call($this, serialName, objectInstance);
    $this._annotations_1 = asList(classAnnotations);
    return $this;
  }
  function ObjectSerializer_init_$Create$(serialName, objectInstance, classAnnotations) {
    return ObjectSerializer_init_$Init$(serialName, objectInstance, classAnnotations, Object.create(ObjectSerializer.prototype));
  }
  function _set__annotations__kk13ma_1($this, _set____db54di) {
    $this._annotations_1 = _set____db54di;
  }
  function _get__annotations__yxc7sq_1($this) {
    return $this._annotations_1;
  }
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.annotations_1 = this$0._annotations_1;
      return Unit_getInstance();
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor$default($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0), 4, null);
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.objectInstance_1 = objectInstance;
    this._annotations_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.descriptor$delegate_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  ObjectSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    var tmp$ret$0;
    {
      var tmp0_getValue = descriptor$factory_1();
      tmp$ret$0 = this.descriptor$delegate_1.get_value_j01efc_k$();
    }
    return tmp$ret$0;
  };
  ObjectSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    encoder.beginStructure_dv3yt3_k$(this.get_descriptor_wjt6a0_k$()).endStructure_e64gd4_k$(this.get_descriptor_wjt6a0_k$());
  };
  ObjectSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp$ret$1;
    {
      var tmp0_decodeStructure = this.get_descriptor_wjt6a0_k$();
      var composite = decoder.beginStructure_dv3yt3_k$(tmp0_decodeStructure);
      var tmp$ret$0;
      $l$block: {
        var index = composite.decodeElementIndex_nk5a2l_k$(this.get_descriptor_wjt6a0_k$());
        Companion_getInstance_1();
        if (index === -1) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        } else {
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
        }
      }
      var result = tmp$ret$0;
      composite.endStructure_e64gd4_k$(tmp0_decodeStructure);
      tmp$ret$1 = result;
    }
    return this.objectInstance_1;
  };
  ObjectSerializer.$metadata$ = classMeta('ObjectSerializer', [KSerializer]);
  function descriptor$factory_1() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.get_descriptor_wjt6a0_k$();
    }, null);
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    init_properties_Platform_common_kt_9ujmfm();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cast(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function compactArray(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    var tmp$ret$2;
    {
      {
      }
      var tmp;
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          {
          }
          tmp$ret$0 = _this__u8e3s4 == null ? true : _this__u8e3s4.isEmpty_y1axqb_k$();
        }
        tmp$ret$1 = tmp$ret$0;
      }
      if (!tmp$ret$1) {
        tmp = _this__u8e3s4;
      } else {
        tmp = null;
      }
      tmp$ret$2 = tmp;
    }
    var tmp0_safe_receiver = tmp$ret$2;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      {
        tmp$ret$3 = copyToArray(tmp0_safe_receiver);
      }
      tmp_0 = tmp$ret$3;
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  function elementsHashCodeBy(_this__u8e3s4, selector) {
    init_properties_Platform_common_kt_9ujmfm();
    var tmp$ret$2;
    {
      var accumulator = 1;
      var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$1;
        {
          var tmp0__anonymous__q1qw7t = accumulator;
          var tmp = imul(31, tmp0__anonymous__q1qw7t);
          var tmp$ret$0;
          {
            var tmp0_hashCode = selector(element);
            var tmp0_safe_receiver = tmp0_hashCode;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
            tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          }
          tmp$ret$1 = tmp + tmp$ret$0 | 0;
        }
        accumulator = tmp$ret$1;
      }
      tmp$ret$2 = accumulator;
    }
    return tmp$ret$2;
  }
  function kclass(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    var t = _this__u8e3s4.get_classifier_ottyl2_k$();
    var tmp;
    if (!(t == null) ? isInterface(t, KClass) : false) {
      tmp = t;
    } else {
      if (!(t == null) ? isInterface(t, KTypeParameter) : false) {
        var tmp0_error = 'Captured type paramerer ' + t + ' from generic non-reified function. ' + ('Such functionality cannot be supported as ' + t + ' is erased, either specify serializer explicitly or make ') + ('calling function inline with reified ' + t);
        throw IllegalStateException_init_$Create$(toString(tmp0_error));
      } else {
        var tmp1_error = 'Only KClass supported as classifier, got ' + t;
        throw IllegalStateException_init_$Create$(toString(tmp1_error));
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, KClass) ? tmp_0 : THROW_CCE();
  }
  function cachedSerialNames(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.get_serialNames_8zf3cl_k$();
    var result = HashSet_init_$Create$_1(_this__u8e3s4.get_elementsCount_288r0x_k$());
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_elementsCount_288r0x_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        {
          var tmp0_plusAssign = _this__u8e3s4.getElementName_ykpypc_k$(i);
          result.add_1j60pz_k$(tmp0_plusAssign);
        }
      }
       while (inductionVariable < last);
    return result;
  }
  function cast_0(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    return isInterface(_this__u8e3s4, SerializationStrategy) ? _this__u8e3s4 : THROW_CCE();
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function init_properties_Platform_common_kt_9ujmfm() {
    if (properties_initialized_Platform_common_kt_i7q4ty) {
    } else {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = [];
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      EMPTY_DESCRIPTOR_ARRAY = tmp$ret$2;
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$_0();
    }
    var missingFields = tmp$ret$0;
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          {
            var tmp0_plusAssign = descriptor.getElementName_ykpypc_k$(i);
            missingFields.add_1j60pz_k$(tmp0_plusAssign);
          }
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$_0(missingFields, descriptor.get_serialName_u2rqhk_k$());
  }
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.get_serialName_u2rqhk_k$());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    var tmp$ret$4;
    {
      var tmp$ret$3;
      {
        var accumulator = 1;
        var tmp0_iterator = elementDescriptors.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          var tmp$ret$2;
          {
            var tmp0__anonymous__q1qw7t = accumulator;
            var tmp = imul(31, tmp0__anonymous__q1qw7t);
            var tmp$ret$1;
            {
              var tmp$ret$0;
              {
                tmp$ret$0 = element.get_serialName_u2rqhk_k$();
              }
              var tmp0_hashCode = tmp$ret$0;
              var tmp0_safe_receiver = tmp0_hashCode;
              var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
              tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
            }
            tmp$ret$2 = tmp + tmp$ret$1 | 0;
          }
          accumulator = tmp$ret$2;
        }
        tmp$ret$3 = accumulator;
      }
      tmp$ret$4 = tmp$ret$3;
    }
    var namesHash = tmp$ret$4;
    var tmp$ret$9;
    {
      var tmp$ret$8;
      {
        var accumulator_0 = 1;
        var tmp0_iterator_0 = elementDescriptors.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var element_0 = tmp0_iterator_0.next_20eer_k$();
          var tmp$ret$7;
          {
            var tmp0__anonymous__q1qw7t_0 = accumulator_0;
            var tmp_0 = imul(31, tmp0__anonymous__q1qw7t_0);
            var tmp$ret$6;
            {
              var tmp$ret$5;
              {
                tmp$ret$5 = element_0.get_kind_wop7ml_k$();
              }
              var tmp0_hashCode_0 = tmp$ret$5;
              var tmp0_safe_receiver_0 = tmp0_hashCode_0;
              var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
              tmp$ret$6 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
            }
            tmp$ret$7 = tmp_0 + tmp$ret$6 | 0;
          }
          accumulator_0 = tmp$ret$7;
        }
        tmp$ret$8 = accumulator_0;
      }
      tmp$ret$9 = tmp$ret$8;
    }
    var kindHash = tmp$ret$9;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function PluginGeneratedSerialDescriptor_init_$Init$(serialName, generatedSerializer, elementsCount, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      generatedSerializer = null;
    PluginGeneratedSerialDescriptor.call($this, serialName, generatedSerializer, elementsCount);
    return $this;
  }
  function PluginGeneratedSerialDescriptor_init_$Create$(serialName, generatedSerializer, elementsCount, $mask0, $marker) {
    return PluginGeneratedSerialDescriptor_init_$Init$(serialName, generatedSerializer, elementsCount, $mask0, $marker, Object.create(PluginGeneratedSerialDescriptor.prototype));
  }
  function _get_generatedSerializer__wsoshc($this) {
    return $this.generatedSerializer_1;
  }
  function _set_added__c0kt39($this, _set____db54di) {
    $this.added_1 = _set____db54di;
  }
  function _get_added__k0jne7($this) {
    return $this.added_1;
  }
  function _get_names__dwg6t3($this) {
    return $this.names_1;
  }
  function _get_propertiesAnnotations__ni45q8($this) {
    return $this.propertiesAnnotations_1;
  }
  function _set_classAnnotations__ucvd1n($this, _set____db54di) {
    $this.classAnnotations_1 = _set____db54di;
  }
  function _get_classAnnotations__bl4fup($this) {
    return $this.classAnnotations_1;
  }
  function _get_elementsOptionality__u17gre($this) {
    return $this.elementsOptionality_1;
  }
  function _set_indices__8cam9u($this, _set____db54di) {
    $this.indices_1 = _set____db54di;
  }
  function _get_indices__xyiwmu($this) {
    return $this.indices_1;
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp$ret$0;
    {
      var tmp0_getValue = childSerializers$factory();
      tmp$ret$0 = $this.childSerializers$delegate_1.get_value_j01efc_k$();
    }
    return tmp$ret$0;
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp$ret$0;
    {
      var tmp0_getValue = _hashCode$factory_0();
      tmp$ret$0 = $this._hashCode$delegate_1.get_value_j01efc_k$();
    }
    return tmp$ret$0;
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.names_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        {
          var tmp0_set = $this.names_1[i];
          indices.put_3mhbri_k$(tmp0_set, i);
        }
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.generatedSerializer_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.childSerializers_5ghqw5_k$();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.generatedSerializer_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.typeParametersSerializers_fr94fx_k$();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$2;
        {
          var tmp$ret$1;
          {
            var tmp0_mapTo = ArrayList_init_$Create$(tmp1_safe_receiver.length);
            var tmp0_iterator = arrayIterator(tmp1_safe_receiver);
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
              var item = tmp0_iterator.next_20eer_k$();
              var tmp$ret$0;
              {
                tmp$ret$0 = item.get_descriptor_wjt6a0_k$();
              }
              tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
            }
            tmp$ret$1 = tmp0_mapTo;
          }
          tmp$ret$2 = tmp$ret$1;
        }
        tmp = tmp$ret$2;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.get_typeParameterDescriptors_hcpg9q_k$());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.getElementName_ykpypc_k$(i) + ': ' + this$0.getElementDescriptor_sqz94k_k$(i).get_serialName_u2rqhk_k$();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    this.serialName_1 = serialName;
    this.generatedSerializer_1 = generatedSerializer;
    this.elementsCount_1 = elementsCount;
    this.added_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.elementsCount_1;
    var tmp$ret$0;
    {
      tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
    }
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      {
        tmp$ret$1 = '[UNINITIALIZED]';
      }
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.names_1 = tmp_2;
    var tmp_4 = this;
    var tmp$ret$2;
    {
      var tmp0_arrayOfNulls = this.elementsCount_1;
      tmp$ret$2 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    }
    tmp_4.propertiesAnnotations_1 = tmp$ret$2;
    this.classAnnotations_1 = null;
    this.elementsOptionality_1 = booleanArray(this.elementsCount_1);
    this.indices_1 = emptyMap();
    var tmp_5 = this;
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_5.childSerializers$delegate_1 = lazy(tmp_6, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_7 = this;
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_7.typeParameterDescriptors$delegate_1 = lazy(tmp_8, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_9 = this;
    var tmp_10 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_9._hashCode$delegate_1 = lazy(tmp_10, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  PluginGeneratedSerialDescriptor.prototype.get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  PluginGeneratedSerialDescriptor.prototype.get_elementsCount_288r0x_k$ = function () {
    return this.elementsCount_1;
  };
  PluginGeneratedSerialDescriptor.prototype.get_kind_wop7ml_k$ = function () {
    return CLASS_getInstance();
  };
  PluginGeneratedSerialDescriptor.prototype.get_annotations_20dirp_k$ = function () {
    var tmp0_elvis_lhs = this.classAnnotations_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  PluginGeneratedSerialDescriptor.prototype.get_serialNames_8zf3cl_k$ = function () {
    return this.indices_1.get_keys_wop4xp_k$();
  };
  PluginGeneratedSerialDescriptor.prototype.get_typeParameterDescriptors_hcpg9q_k$ = function () {
    var tmp$ret$0;
    {
      var tmp0_getValue = typeParameterDescriptors$factory();
      tmp$ret$0 = this.typeParameterDescriptors$delegate_1.get_value_j01efc_k$();
    }
    return tmp$ret$0;
  };
  PluginGeneratedSerialDescriptor.prototype.addElement_ifop3j_k$ = function (name, isOptional) {
    var tmp0_this = this;
    tmp0_this.added_1 = tmp0_this.added_1 + 1 | 0;
    this.names_1[tmp0_this.added_1] = name;
    this.elementsOptionality_1[this.added_1] = isOptional;
    this.propertiesAnnotations_1[this.added_1] = null;
    if (this.added_1 === (this.elementsCount_1 - 1 | 0)) {
      this.indices_1 = buildIndices(this);
    }
  };
  PluginGeneratedSerialDescriptor.prototype.addElement$default_c7nl76_k$ = function (name, isOptional, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      isOptional = false;
    return this.addElement_ifop3j_k$(name, isOptional);
  };
  PluginGeneratedSerialDescriptor.prototype.pushAnnotation_kbn3rf_k$ = function (annotation) {
    var tmp$ret$1;
    {
      var tmp0_let = this.propertiesAnnotations_1[this.added_1];
      {
      }
      var tmp$ret$0;
      {
        var tmp;
        if (tmp0_let == null) {
          var result = ArrayList_init_$Create$(1);
          this.propertiesAnnotations_1[this.added_1] = result;
          tmp = result;
        } else {
          tmp = tmp0_let;
        }
        tmp$ret$0 = tmp;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    var list = tmp$ret$1;
    list.add_1j60pz_k$(annotation);
  };
  PluginGeneratedSerialDescriptor.prototype.pushClassAnnotation_tfb9g9_k$ = function (a) {
    if (this.classAnnotations_1 == null) {
      this.classAnnotations_1 = ArrayList_init_$Create$(1);
    }
    ensureNotNull(this.classAnnotations_1).add_1j60pz_k$(a);
  };
  PluginGeneratedSerialDescriptor.prototype.getElementDescriptor_sqz94k_k$ = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).get_descriptor_wjt6a0_k$();
  };
  PluginGeneratedSerialDescriptor.prototype.isElementOptional_c3hgb3_k$ = function (index) {
    return getChecked_0(this.elementsOptionality_1, index);
  };
  PluginGeneratedSerialDescriptor.prototype.getElementAnnotations_a57oar_k$ = function (index) {
    var tmp0_elvis_lhs = getChecked(this.propertiesAnnotations_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  PluginGeneratedSerialDescriptor.prototype.getElementName_ykpypc_k$ = function (index) {
    return getChecked(this.names_1, index);
  };
  PluginGeneratedSerialDescriptor.prototype.getElementIndex_2hwbkl_k$ = function (name) {
    var tmp0_elvis_lhs = this.indices_1.get_1mhr4y_k$(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_1();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  PluginGeneratedSerialDescriptor.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.get_serialName_u2rqhk_k$() === other.get_serialName_u2rqhk_k$())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      {
        var tmp0__anonymous__q1qw7t = other;
        tmp$ret$1 = contentEquals(this.get_typeParameterDescriptors_hcpg9q_k$(), tmp0__anonymous__q1qw7t.get_typeParameterDescriptors_hcpg9q_k$());
      }
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.get_elementsCount_288r0x_k$() === other.get_elementsCount_288r0x_k$())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.get_elementsCount_288r0x_k$();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.getElementDescriptor_sqz94k_k$(index).get_serialName_u2rqhk_k$() === other.getElementDescriptor_sqz94k_k$(index).get_serialName_u2rqhk_k$())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.getElementDescriptor_sqz94k_k$(index).get_kind_wop7ml_k$(), other.getElementDescriptor_sqz94k_k$(index).get_kind_wop7ml_k$())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  PluginGeneratedSerialDescriptor.prototype.hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  PluginGeneratedSerialDescriptor.prototype.toString = function () {
    var tmp = until(0, this.elementsCount_1);
    var tmp_0 = this.get_serialName_u2rqhk_k$() + '(';
    return joinToString$default(tmp, ', ', tmp_0, ')', 0, null, PluginGeneratedSerialDescriptor$toString$lambda(this), 24, null);
  };
  PluginGeneratedSerialDescriptor.$metadata$ = classMeta('PluginGeneratedSerialDescriptor', [SerialDescriptor, CachedNames]);
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.get_typeParameterDescriptors_hcpg9q_k$();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef_0(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    init_properties_PluginHelperInterfaces_kt_tblf27();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  GeneratedSerializer.$metadata$ = interfaceMeta('GeneratedSerializer', [KSerializer]);
  function SerializerFactory() {
  }
  SerializerFactory.$metadata$ = interfaceMeta('SerializerFactory');
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function init_properties_PluginHelperInterfaces_kt_tblf27() {
    if (properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
    } else {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = [];
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      EMPTY_SERIALIZER_ARRAY = tmp$ret$2;
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_1(Companion_getInstance_0()));
  }
  CharArraySerializer_0.prototype.collectionSize_ws33uw_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  CharArraySerializer_0.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_ws33uw_k$((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CharArraySerializer_0.prototype.toBuilder_waug93_k$ = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  CharArraySerializer_0.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_waug93_k$((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CharArraySerializer_0.prototype.empty_1lj7f1_k$ = function () {
    return charArray(0);
  };
  CharArraySerializer_0.prototype.readElement_le7skj_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_y20c3x_k$(decoder.decodeCharElement_pg5vs7_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  CharArraySerializer_0.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_le7skj_k$(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  CharArraySerializer_0.prototype.writeContent_wscki9_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeCharElement_4fawdf_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  CharArraySerializer_0.prototype.writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_wscki9_k$(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  CharArraySerializer_0.$metadata$ = objectMeta('CharArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(DoubleCompanionObject_getInstance()));
  }
  DoubleArraySerializer_0.prototype.collectionSize_pzip3n_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  DoubleArraySerializer_0.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_pzip3n_k$((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  DoubleArraySerializer_0.prototype.toBuilder_b07jn0_k$ = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  DoubleArraySerializer_0.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_b07jn0_k$((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  DoubleArraySerializer_0.prototype.empty_1lj7f1_k$ = function () {
    return new Float64Array(0);
  };
  DoubleArraySerializer_0.prototype.readElement_g1li9q_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_g44bp4_k$(decoder.decodeDoubleElement_42w6gz_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  DoubleArraySerializer_0.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_g1li9q_k$(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  DoubleArraySerializer_0.prototype.writeContent_xk6378_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeDoubleElement_m8xcw3_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  DoubleArraySerializer_0.prototype.writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_xk6378_k$(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  DoubleArraySerializer_0.$metadata$ = objectMeta('DoubleArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(FloatCompanionObject_getInstance()));
  }
  FloatArraySerializer_0.prototype.collectionSize_173jc8_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  FloatArraySerializer_0.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_173jc8_k$((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  FloatArraySerializer_0.prototype.toBuilder_g1jv47_k$ = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  FloatArraySerializer_0.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_g1jv47_k$((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  FloatArraySerializer_0.prototype.empty_1lj7f1_k$ = function () {
    return new Float32Array(0);
  };
  FloatArraySerializer_0.prototype.readElement_x45ji7_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_urs3el_k$(decoder.decodeFloatElement_nl5jiq_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  FloatArraySerializer_0.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_x45ji7_k$(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  FloatArraySerializer_0.prototype.writeContent_z7nd2p_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeFloatElement_o97mfb_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  FloatArraySerializer_0.prototype.writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_z7nd2p_k$(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  FloatArraySerializer_0.$metadata$ = objectMeta('FloatArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(Companion_getInstance()));
  }
  LongArraySerializer_0.prototype.collectionSize_91vysi_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  LongArraySerializer_0.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_91vysi_k$((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LongArraySerializer_0.prototype.toBuilder_8knb6p_k$ = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  LongArraySerializer_0.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_8knb6p_k$((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LongArraySerializer_0.prototype.empty_1lj7f1_k$ = function () {
    return longArray(0);
  };
  LongArraySerializer_0.prototype.readElement_qrifnb_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_gvce4t_k$(decoder.decodeLongElement_kyznym_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  LongArraySerializer_0.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_qrifnb_k$(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  LongArraySerializer_0.prototype.writeContent_42fxmf_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeLongElement_xtv8il_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  LongArraySerializer_0.prototype.writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_42fxmf_k$(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  LongArraySerializer_0.$metadata$ = objectMeta('LongArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(IntCompanionObject_getInstance()));
  }
  IntArraySerializer_0.prototype.collectionSize_p5ta3p_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  IntArraySerializer_0.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_p5ta3p_k$((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  IntArraySerializer_0.prototype.toBuilder_murpja_k$ = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  IntArraySerializer_0.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_murpja_k$((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  IntArraySerializer_0.prototype.empty_1lj7f1_k$ = function () {
    return new Int32Array(0);
  };
  IntArraySerializer_0.prototype.readElement_q2v34c_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_da0tyi_k$(decoder.decodeIntElement_cmpvet_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  IntArraySerializer_0.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_q2v34c_k$(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  IntArraySerializer_0.prototype.writeContent_h3vxwe_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeIntElement_utywpf_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  IntArraySerializer_0.prototype.writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_h3vxwe_k$(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  IntArraySerializer_0.$metadata$ = objectMeta('IntArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(ShortCompanionObject_getInstance()));
  }
  ShortArraySerializer_0.prototype.collectionSize_tiggjs_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ShortArraySerializer_0.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_tiggjs_k$((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ShortArraySerializer_0.prototype.toBuilder_qo79nd_k$ = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  ShortArraySerializer_0.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_qo79nd_k$((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ShortArraySerializer_0.prototype.empty_1lj7f1_k$ = function () {
    return new Int16Array(0);
  };
  ShortArraySerializer_0.prototype.readElement_btg9b5_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_piqb6l_k$(decoder.decodeShortElement_zjkfm_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  ShortArraySerializer_0.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_btg9b5_k$(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  ShortArraySerializer_0.prototype.writeContent_i3wixd_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeShortElement_2nnlvd_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  ShortArraySerializer_0.prototype.writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_i3wixd_k$(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  ShortArraySerializer_0.$metadata$ = objectMeta('ShortArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(ByteCompanionObject_getInstance()));
  }
  ByteArraySerializer_0.prototype.collectionSize_qzl5wq_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ByteArraySerializer_0.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_qzl5wq_k$((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ByteArraySerializer_0.prototype.toBuilder_rgttij_k$ = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  ByteArraySerializer_0.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_rgttij_k$((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ByteArraySerializer_0.prototype.empty_1lj7f1_k$ = function () {
    return new Int8Array(0);
  };
  ByteArraySerializer_0.prototype.readElement_9ieobv_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_jiz7k1_k$(decoder.decodeByteElement_76b0gq_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  ByteArraySerializer_0.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_9ieobv_k$(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  ByteArraySerializer_0.prototype.writeContent_16s3nh_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeByteElement_r2fm3n_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  ByteArraySerializer_0.prototype.writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_16s3nh_k$(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  ByteArraySerializer_0.$metadata$ = objectMeta('ByteArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(BooleanCompanionObject_getInstance()));
  }
  BooleanArraySerializer_0.prototype.collectionSize_keckzw_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  BooleanArraySerializer_0.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_keckzw_k$((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  BooleanArraySerializer_0.prototype.toBuilder_uo58bx_k$ = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  BooleanArraySerializer_0.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_uo58bx_k$((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  BooleanArraySerializer_0.prototype.empty_1lj7f1_k$ = function () {
    return booleanArray(0);
  };
  BooleanArraySerializer_0.prototype.readElement_kzf5fx_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_l5nnnz_k$(decoder.decodeBooleanElement_3vswy_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  BooleanArraySerializer_0.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_kzf5fx_k$(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  BooleanArraySerializer_0.prototype.writeContent_j8grad_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeBooleanElement_2l5aov_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  BooleanArraySerializer_0.prototype.writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_j8grad_k$(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  BooleanArraySerializer_0.$metadata$ = objectMeta('BooleanArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function _set_buffer__uxh4x5($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  CharArrayBuilder.prototype.get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  CharArrayBuilder.prototype.ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  CharArrayBuilder.prototype.append_y20c3x_k$ = function (c) {
    this.ensureCapacity$default_ya9857_k$(0, 1, null);
    var tmp = this.buffer_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.position_1;
    tmp0_this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  CharArrayBuilder.prototype.build_1k0s4u_k$ = function () {
    return copyOf(this.buffer_1, this.position_1);
  };
  CharArrayBuilder.$metadata$ = classMeta('CharArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function _set_buffer__uxh4x5_0($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_0($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_0($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  DoubleArrayBuilder.prototype.get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  DoubleArrayBuilder.prototype.ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_0(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  DoubleArrayBuilder.prototype.append_g44bp4_k$ = function (c) {
    this.ensureCapacity$default_ya9857_k$(0, 1, null);
    var tmp = this.buffer_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.position_1;
    tmp0_this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  DoubleArrayBuilder.prototype.build_1k0s4u_k$ = function () {
    return copyOf_0(this.buffer_1, this.position_1);
  };
  DoubleArrayBuilder.$metadata$ = classMeta('DoubleArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function _set_buffer__uxh4x5_1($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_1($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_1($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  FloatArrayBuilder.prototype.get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  FloatArrayBuilder.prototype.ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_1(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  FloatArrayBuilder.prototype.append_urs3el_k$ = function (c) {
    this.ensureCapacity$default_ya9857_k$(0, 1, null);
    var tmp = this.buffer_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.position_1;
    tmp0_this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  FloatArrayBuilder.prototype.build_1k0s4u_k$ = function () {
    return copyOf_1(this.buffer_1, this.position_1);
  };
  FloatArrayBuilder.$metadata$ = classMeta('FloatArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function _set_buffer__uxh4x5_2($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_2($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_2($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  LongArrayBuilder.prototype.get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  LongArrayBuilder.prototype.ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_2(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  LongArrayBuilder.prototype.append_gvce4t_k$ = function (c) {
    this.ensureCapacity$default_ya9857_k$(0, 1, null);
    var tmp = this.buffer_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.position_1;
    tmp0_this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  LongArrayBuilder.prototype.build_1k0s4u_k$ = function () {
    return copyOf_2(this.buffer_1, this.position_1);
  };
  LongArrayBuilder.$metadata$ = classMeta('LongArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function _set_buffer__uxh4x5_3($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_3($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_3($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  IntArrayBuilder.prototype.get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  IntArrayBuilder.prototype.ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_3(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  IntArrayBuilder.prototype.append_da0tyi_k$ = function (c) {
    this.ensureCapacity$default_ya9857_k$(0, 1, null);
    var tmp = this.buffer_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.position_1;
    tmp0_this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  IntArrayBuilder.prototype.build_1k0s4u_k$ = function () {
    return copyOf_3(this.buffer_1, this.position_1);
  };
  IntArrayBuilder.$metadata$ = classMeta('IntArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function _set_buffer__uxh4x5_4($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_4($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_4($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  ShortArrayBuilder.prototype.get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  ShortArrayBuilder.prototype.ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_4(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  ShortArrayBuilder.prototype.append_piqb6l_k$ = function (c) {
    this.ensureCapacity$default_ya9857_k$(0, 1, null);
    var tmp = this.buffer_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.position_1;
    tmp0_this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  ShortArrayBuilder.prototype.build_1k0s4u_k$ = function () {
    return copyOf_4(this.buffer_1, this.position_1);
  };
  ShortArrayBuilder.$metadata$ = classMeta('ShortArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function _set_buffer__uxh4x5_5($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_5($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_5($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  ByteArrayBuilder.prototype.get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  ByteArrayBuilder.prototype.ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_5(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  ByteArrayBuilder.prototype.append_jiz7k1_k$ = function (c) {
    this.ensureCapacity$default_ya9857_k$(0, 1, null);
    var tmp = this.buffer_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.position_1;
    tmp0_this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  ByteArrayBuilder.prototype.build_1k0s4u_k$ = function () {
    return copyOf_5(this.buffer_1, this.position_1);
  };
  ByteArrayBuilder.$metadata$ = classMeta('ByteArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function _set_buffer__uxh4x5_6($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_6($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_6($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  BooleanArrayBuilder.prototype.get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  BooleanArrayBuilder.prototype.ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_6(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  BooleanArrayBuilder.prototype.append_l5nnnz_k$ = function (c) {
    this.ensureCapacity$default_ya9857_k$(0, 1, null);
    var tmp = this.buffer_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.position_1;
    tmp0_this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  BooleanArrayBuilder.prototype.build_1k0s4u_k$ = function () {
    return copyOf_6(this.buffer_1, this.position_1);
  };
  BooleanArrayBuilder.$metadata$ = classMeta('BooleanArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function get_INITIAL_SIZE() {
    return INITIAL_SIZE;
  }
  var INITIAL_SIZE;
  function get_BUILTIN_SERIALIZERS() {
    init_properties_Primitives_kt_u7dn2q();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  StringSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  StringSerializer.prototype.serialize_xxlebn_k$ = function (encoder, value) {
    return encoder.encodeString_90sumj_k$(value);
  };
  StringSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_xxlebn_k$(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  StringSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeString_x3hxsx_k$();
  };
  StringSerializer.$metadata$ = objectMeta('StringSerializer', [KSerializer]);
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  CharSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  CharSerializer.prototype.serialize_t91c8o_k$ = function (encoder, value) {
    return encoder.encodeChar_kkx54x_k$(value);
  };
  CharSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_t91c8o_k$(encoder, value instanceof Char ? value.value_1 : THROW_CCE());
  };
  CharSerializer.prototype.deserialize_a5cptt_k$ = function (decoder) {
    return decoder.decodeChar_dc2jtx_k$();
  };
  CharSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return new Char(this.deserialize_a5cptt_k$(decoder));
  };
  CharSerializer.$metadata$ = objectMeta('CharSerializer', [KSerializer]);
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  DoubleSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  DoubleSerializer.prototype.serialize_jhnp8j_k$ = function (encoder, value) {
    return encoder.encodeDouble_79ztsb_k$(value);
  };
  DoubleSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_jhnp8j_k$(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  DoubleSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeDouble_ur8l0f_k$();
  };
  DoubleSerializer.$metadata$ = objectMeta('DoubleSerializer', [KSerializer]);
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  FloatSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  FloatSerializer.prototype.serialize_4f2ixk_k$ = function (encoder, value) {
    return encoder.encodeFloat_f5fde1_k$(value);
  };
  FloatSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_4f2ixk_k$(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  FloatSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeFloat_jcnrwu_k$();
  };
  FloatSerializer.$metadata$ = objectMeta('FloatSerializer', [KSerializer]);
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  LongSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  LongSerializer.prototype.serialize_95a0ia_k$ = function (encoder, value) {
    return encoder.encodeLong_rk3ab9_k$(value);
  };
  LongSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_95a0ia_k$(encoder, value instanceof Long ? value : THROW_CCE());
  };
  LongSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeLong_jzt186_k$();
  };
  LongSerializer.$metadata$ = objectMeta('LongSerializer', [KSerializer]);
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  IntSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  IntSerializer.prototype.serialize_ui7jaz_k$ = function (encoder, value) {
    return encoder.encodeInt_5vxmon_k$(value);
  };
  IntSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_ui7jaz_k$(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  IntSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeInt_8iq8f5_k$();
  };
  IntSerializer.$metadata$ = objectMeta('IntSerializer', [KSerializer]);
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  ShortSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  ShortSerializer.prototype.serialize_tz9ag_k$ = function (encoder, value) {
    return encoder.encodeShort_rh3vxz_k$(value);
  };
  ShortSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_tz9ag_k$(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  ShortSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeShort_jjqk32_k$();
  };
  ShortSerializer.$metadata$ = objectMeta('ShortSerializer', [KSerializer]);
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  ByteSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  ByteSerializer.prototype.serialize_bswtxi_k$ = function (encoder, value) {
    return encoder.encodeByte_gpyndp_k$(value);
  };
  ByteSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_bswtxi_k$(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  ByteSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeByte_jzz7je_k$();
  };
  ByteSerializer.$metadata$ = objectMeta('ByteSerializer', [KSerializer]);
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  BooleanSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  BooleanSerializer.prototype.serialize_bl0ez0_k$ = function (encoder, value) {
    return encoder.encodeBoolean_6cztl5_k$(value);
  };
  BooleanSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_bl0ez0_k$(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  BooleanSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeBoolean_m0aca_k$();
  };
  BooleanSerializer.$metadata$ = objectMeta('BooleanSerializer', [KSerializer]);
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.$$delegate_0__1 = new ObjectSerializer('kotlin.Unit', Unit_getInstance());
  }
  UnitSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.$$delegate_0__1.get_descriptor_wjt6a0_k$();
  };
  UnitSerializer.prototype.deserialize_a513f7_k$ = function (decoder) {
    this.$$delegate_0__1.deserialize_2t41fm_k$(decoder);
  };
  UnitSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    this.deserialize_a513f7_k$(decoder);
    return Unit_getInstance();
  };
  UnitSerializer.prototype.serialize_x908om_k$ = function (encoder, value) {
    this.$$delegate_0__1.serialize_32qylj_k$(encoder, Unit_getInstance());
  };
  UnitSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_x908om_k$(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  UnitSerializer.$metadata$ = objectMeta('UnitSerializer', [KSerializer]);
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.serialName_1 = serialName;
    this.kind_1 = kind;
  }
  PrimitiveSerialDescriptor_0.prototype.get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  PrimitiveSerialDescriptor_0.prototype.get_kind_wop7ml_k$ = function () {
    return this.kind_1;
  };
  PrimitiveSerialDescriptor_0.prototype.get_elementsCount_288r0x_k$ = function () {
    return 0;
  };
  PrimitiveSerialDescriptor_0.prototype.getElementName_ykpypc_k$ = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.getElementIndex_2hwbkl_k$ = function (name) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.isElementOptional_c3hgb3_k$ = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.getElementDescriptor_sqz94k_k$ = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.getElementAnnotations_a57oar_k$ = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.toString = function () {
    return 'PrimitiveDescriptor(' + this.serialName_1 + ')';
  };
  PrimitiveSerialDescriptor_0.$metadata$ = classMeta('PrimitiveSerialDescriptor', [SerialDescriptor]);
  function PrimitiveDescriptorSafe(serialName, kind) {
    init_properties_Primitives_kt_u7dn2q();
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkName(serialName) {
    init_properties_Primitives_kt_u7dn2q();
    var keys = get_BUILTIN_SERIALIZERS().get_keys_wop4xp_k$();
    var tmp0_iterator = keys.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var primitive = tmp0_iterator.next_20eer_k$();
      var simpleName = capitalize(ensureNotNull(primitive.get_simpleName_r6f8py_k$()));
      var qualifiedName = 'kotlin.' + simpleName;
      if (equals_0(serialName, qualifiedName, true) ? true : equals_0(serialName, simpleName, true)) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exist ' + capitalize(simpleName) + 'Serializer.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function capitalize(_this__u8e3s4) {
    init_properties_Primitives_kt_u7dn2q();
    var tmp$ret$4;
    {
      var tmp;
      var tmp$ret$0;
      {
        tmp$ret$0 = charSequenceLength(_this__u8e3s4) > 0;
      }
      if (tmp$ret$0) {
        var tmp$ret$1;
        {
          var tmp0__anonymous__q1qw7t = charSequenceGet(_this__u8e3s4, 0);
          tmp$ret$1 = isLowerCase(tmp0__anonymous__q1qw7t) ? titlecase(tmp0__anonymous__q1qw7t) : toString_0(tmp0__anonymous__q1qw7t);
        }
        var tmp_0 = toString(tmp$ret$1);
        var tmp$ret$3;
        {
          var tmp$ret$2;
          {
            tmp$ret$2 = _this__u8e3s4;
          }
          tmp$ret$3 = tmp$ret$2.substring(1);
        }
        tmp = tmp_0 + tmp$ret$3;
      } else {
        tmp = _this__u8e3s4;
      }
      tmp$ret$4 = tmp;
    }
    return tmp$ret$4;
  }
  function builtinSerializerOrNull(_this__u8e3s4) {
    init_properties_Primitives_kt_u7dn2q();
    var tmp = get_BUILTIN_SERIALIZERS().get_1mhr4y_k$(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function init_properties_Primitives_kt_u7dn2q() {
    if (properties_initialized_Primitives_kt_6dpii6) {
    } else {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = mapOf([to(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), serializer_0(StringCompanionObject_getInstance())), to(getKClass(Char), serializer_1(Companion_getInstance_0())), to(PrimitiveClasses_getInstance().get_charArrayClass_7lhfoe_k$(), CharArraySerializer()), to(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$(), serializer_2(DoubleCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().get_doubleArrayClass_84hee1_k$(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().get_floatClass_xlwq2t_k$(), serializer_3(FloatCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().get_floatArrayClass_qngmha_k$(), FloatArraySerializer()), to(getKClass(Long), serializer_4(Companion_getInstance())), to(PrimitiveClasses_getInstance().get_longArrayClass_v379a4_k$(), LongArraySerializer()), to(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$(), serializer_5(IntCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().get_intArrayClass_h44pbv_k$(), IntArraySerializer()), to(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$(), serializer_6(ShortCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().get_shortArrayClass_c1p7wy_k$(), ShortArraySerializer()), to(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$(), serializer_7(ByteCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().get_byteArrayClass_57my8g_k$(), ByteArraySerializer()), to(PrimitiveClasses_getInstance().get_booleanClass_d285fr_k$(), serializer_8(BooleanCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().get_booleanArrayClass_lnbwea_k$(), BooleanArraySerializer()), to(getKClass(Unit), serializer_9(Unit_getInstance()))]);
    }
  }
  function SerializationConstructorMarker() {
  }
  SerializationConstructorMarker.$metadata$ = classMeta('SerializationConstructorMarker');
  function NamedValueEncoder() {
    TaggedEncoder.call(this);
  }
  NamedValueEncoder.prototype.getTag_8zycz2_k$ = function (_this__u8e3s4, index) {
    return this.nested_xy40wa_k$(this.elementName_9sehmv_k$(_this__u8e3s4, index));
  };
  NamedValueEncoder.prototype.nested_xy40wa_k$ = function (nestedName) {
    var tmp0_elvis_lhs = this.get_currentTagOrNull_yhyzw_k$();
    return this.composeName_t9idc5_k$(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  NamedValueEncoder.prototype.elementName_9sehmv_k$ = function (descriptor, index) {
    return descriptor.getElementName_ykpypc_k$(index);
  };
  NamedValueEncoder.prototype.composeName_t9idc5_k$ = function (parentName, childName) {
    var tmp;
    var tmp$ret$0;
    {
      tmp$ret$0 = charSequenceLength(parentName) === 0;
    }
    if (tmp$ret$0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  NamedValueEncoder.$metadata$ = classMeta('NamedValueEncoder', undefined, undefined, undefined, undefined, TaggedEncoder.prototype);
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  NamedValueDecoder.prototype.getTag_8zycz2_k$ = function (_this__u8e3s4, index) {
    return this.nested_xy40wa_k$(this.elementName_9sehmv_k$(_this__u8e3s4, index));
  };
  NamedValueDecoder.prototype.nested_xy40wa_k$ = function (nestedName) {
    var tmp0_elvis_lhs = this.get_currentTagOrNull_yhyzw_k$();
    return this.composeName_t9idc5_k$(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  NamedValueDecoder.prototype.elementName_9sehmv_k$ = function (desc, index) {
    return desc.getElementName_ykpypc_k$(index);
  };
  NamedValueDecoder.prototype.composeName_t9idc5_k$ = function (parentName, childName) {
    var tmp;
    var tmp$ret$0;
    {
      tmp$ret$0 = charSequenceLength(parentName) === 0;
    }
    if (tmp$ret$0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  NamedValueDecoder.$metadata$ = classMeta('NamedValueDecoder', undefined, undefined, undefined, undefined, TaggedDecoder.prototype);
  function encodeElement($this, desc, index) {
    var tag = $this.getTag_8zycz2_k$(desc, index);
    $this.pushTag_2jen4a_k$(tag);
    return true;
  }
  function _get_tagStack__hmgdc3($this) {
    return $this.tagStack_1;
  }
  function TaggedEncoder() {
    var tmp = this;
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$_0();
    }
    tmp.tagStack_1 = tmp$ret$0;
  }
  TaggedEncoder.prototype.get_serializersModule_piitvg_k$ = function () {
    return get_EmptySerializersModule();
  };
  TaggedEncoder.prototype.encodeTaggedValue_rik3ib_k$ = function (tag, value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + getKClassFromExpression(value) + ' is not supported by ' + getKClassFromExpression(this) + ' encoder');
  };
  TaggedEncoder.prototype.encodeTaggedNull_qi5bv1_k$ = function (tag) {
    throw SerializationException_init_$Create$_0('null is not supported');
  };
  TaggedEncoder.prototype.encodeTaggedInt_ndzaig_k$ = function (tag, value) {
    return this.encodeTaggedValue_rik3ib_k$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedByte_e5naty_k$ = function (tag, value) {
    return this.encodeTaggedValue_rik3ib_k$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedShort_4ro7mw_k$ = function (tag, value) {
    return this.encodeTaggedValue_rik3ib_k$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedLong_68sg4u_k$ = function (tag, value) {
    return this.encodeTaggedValue_rik3ib_k$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedFloat_xhp5co_k$ = function (tag, value) {
    return this.encodeTaggedValue_rik3ib_k$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedDouble_dgqq9w_k$ = function (tag, value) {
    return this.encodeTaggedValue_rik3ib_k$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedBoolean_wlumqg_k$ = function (tag, value) {
    return this.encodeTaggedValue_rik3ib_k$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedChar_2dcv0m_k$ = function (tag, value) {
    return this.encodeTaggedValue_rik3ib_k$(tag, new Char(value));
  };
  TaggedEncoder.prototype.encodeTaggedString_ault6k_k$ = function (tag, value) {
    return this.encodeTaggedValue_rik3ib_k$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedEnum_j126tp_k$ = function (tag, enumDescriptor, ordinal) {
    return this.encodeTaggedValue_rik3ib_k$(tag, ordinal);
  };
  TaggedEncoder.prototype.encodeTaggedInline_nljf4l_k$ = function (tag, inlineDescriptor) {
    var tmp$ret$0;
    {
      {
      }
      {
        this.pushTag_2jen4a_k$(tag);
      }
      tmp$ret$0 = this;
    }
    return tmp$ret$0;
  };
  TaggedEncoder.prototype.encodeInline_8gn4q6_k$ = function (inlineDescriptor) {
    return this.encodeTaggedInline_nljf4l_k$(this.popTag_g8zwqf_k$(), inlineDescriptor);
  };
  TaggedEncoder.prototype.encodeNotNullMark_40lhgg_k$ = function () {
  };
  TaggedEncoder.prototype.encodeNull_ek2hec_k$ = function () {
    return this.encodeTaggedNull_qi5bv1_k$(this.popTag_g8zwqf_k$());
  };
  TaggedEncoder.prototype.encodeBoolean_6cztl5_k$ = function (value) {
    return this.encodeTaggedBoolean_wlumqg_k$(this.popTag_g8zwqf_k$(), value);
  };
  TaggedEncoder.prototype.encodeByte_gpyndp_k$ = function (value) {
    return this.encodeTaggedByte_e5naty_k$(this.popTag_g8zwqf_k$(), value);
  };
  TaggedEncoder.prototype.encodeShort_rh3vxz_k$ = function (value) {
    return this.encodeTaggedShort_4ro7mw_k$(this.popTag_g8zwqf_k$(), value);
  };
  TaggedEncoder.prototype.encodeInt_5vxmon_k$ = function (value) {
    return this.encodeTaggedInt_ndzaig_k$(this.popTag_g8zwqf_k$(), value);
  };
  TaggedEncoder.prototype.encodeLong_rk3ab9_k$ = function (value) {
    return this.encodeTaggedLong_68sg4u_k$(this.popTag_g8zwqf_k$(), value);
  };
  TaggedEncoder.prototype.encodeFloat_f5fde1_k$ = function (value) {
    return this.encodeTaggedFloat_xhp5co_k$(this.popTag_g8zwqf_k$(), value);
  };
  TaggedEncoder.prototype.encodeDouble_79ztsb_k$ = function (value) {
    return this.encodeTaggedDouble_dgqq9w_k$(this.popTag_g8zwqf_k$(), value);
  };
  TaggedEncoder.prototype.encodeChar_kkx54x_k$ = function (value) {
    return this.encodeTaggedChar_2dcv0m_k$(this.popTag_g8zwqf_k$(), value);
  };
  TaggedEncoder.prototype.encodeString_90sumj_k$ = function (value) {
    return this.encodeTaggedString_ault6k_k$(this.popTag_g8zwqf_k$(), value);
  };
  TaggedEncoder.prototype.encodeEnum_dzauii_k$ = function (enumDescriptor, index) {
    return this.encodeTaggedEnum_j126tp_k$(this.popTag_g8zwqf_k$(), enumDescriptor, index);
  };
  TaggedEncoder.prototype.beginStructure_dv3yt3_k$ = function (descriptor) {
    return this;
  };
  TaggedEncoder.prototype.endStructure_e64gd4_k$ = function (descriptor) {
    var tmp$ret$0;
    {
      var tmp0_isNotEmpty = this.tagStack_1;
      tmp$ret$0 = !tmp0_isNotEmpty.isEmpty_y1axqb_k$();
    }
    if (tmp$ret$0) {
      this.popTag_g8zwqf_k$();
    }
    this.endEncode_2disap_k$(descriptor);
  };
  TaggedEncoder.prototype.endEncode_2disap_k$ = function (descriptor) {
  };
  TaggedEncoder.prototype.encodeBooleanElement_2l5aov_k$ = function (descriptor, index, value) {
    return this.encodeTaggedBoolean_wlumqg_k$(this.getTag_8zycz2_k$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeByteElement_r2fm3n_k$ = function (descriptor, index, value) {
    return this.encodeTaggedByte_e5naty_k$(this.getTag_8zycz2_k$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeShortElement_2nnlvd_k$ = function (descriptor, index, value) {
    return this.encodeTaggedShort_4ro7mw_k$(this.getTag_8zycz2_k$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeIntElement_utywpf_k$ = function (descriptor, index, value) {
    return this.encodeTaggedInt_ndzaig_k$(this.getTag_8zycz2_k$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeLongElement_xtv8il_k$ = function (descriptor, index, value) {
    return this.encodeTaggedLong_68sg4u_k$(this.getTag_8zycz2_k$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeFloatElement_o97mfb_k$ = function (descriptor, index, value) {
    return this.encodeTaggedFloat_xhp5co_k$(this.getTag_8zycz2_k$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeDoubleElement_m8xcw3_k$ = function (descriptor, index, value) {
    return this.encodeTaggedDouble_dgqq9w_k$(this.getTag_8zycz2_k$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeCharElement_4fawdf_k$ = function (descriptor, index, value) {
    return this.encodeTaggedChar_2dcv0m_k$(this.getTag_8zycz2_k$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeStringElement_pgmbgj_k$ = function (descriptor, index, value) {
    return this.encodeTaggedString_ault6k_k$(this.getTag_8zycz2_k$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeInlineElement_9d3ws3_k$ = function (descriptor, index) {
    return this.encodeTaggedInline_nljf4l_k$(this.getTag_8zycz2_k$(descriptor, index), descriptor.getElementDescriptor_sqz94k_k$(index));
  };
  TaggedEncoder.prototype.encodeSerializableElement_pr92am_k$ = function (descriptor, index, serializer, value) {
    if (encodeElement(this, descriptor, index))
      this.encodeSerializableValue_bps9ot_k$(serializer, value);
  };
  TaggedEncoder.prototype.encodeNullableSerializableElement_m9ow0w_k$ = function (descriptor, index, serializer, value) {
    if (encodeElement(this, descriptor, index))
      this.encodeNullableSerializableValue_35ub11_k$(serializer, value);
  };
  TaggedEncoder.prototype.get_currentTag_wui9re_k$ = function () {
    return last(this.tagStack_1);
  };
  TaggedEncoder.prototype.get_currentTagOrNull_yhyzw_k$ = function () {
    return lastOrNull(this.tagStack_1);
  };
  TaggedEncoder.prototype.pushTag_2jen4a_k$ = function (name) {
    this.tagStack_1.add_1j60pz_k$(name);
  };
  TaggedEncoder.prototype.popTag_g8zwqf_k$ = function () {
    var tmp;
    var tmp$ret$0;
    {
      var tmp0_isNotEmpty = this.tagStack_1;
      tmp$ret$0 = !tmp0_isNotEmpty.isEmpty_y1axqb_k$();
    }
    if (tmp$ret$0) {
      tmp = this.tagStack_1.removeAt_qvpkxi_k$(get_lastIndex_0(this.tagStack_1));
    } else {
      throw SerializationException_init_$Create$_0('No tag in stack for requested element');
    }
    return tmp;
  };
  TaggedEncoder.$metadata$ = classMeta('TaggedEncoder', [Encoder, CompositeEncoder]);
  function tagBlock($this, tag, block) {
    $this.pushTag_2jen4a_k$(tag);
    var r = block();
    if (!$this.flag_1) {
      $this.popTag_g8zwqf_k$();
    }
    $this.flag_1 = false;
    return r;
  }
  function _get_tagStack__hmgdc3_0($this) {
    return $this.tagStack_1;
  }
  function _set_flag__9mskff($this, _set____db54di) {
    $this.flag_1 = _set____db54di;
  }
  function _get_flag__d6kk0v($this) {
    return $this.flag_1;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.decodeSerializableValue_613aoe_k$($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.decodeNotNullMark_us4ba1_k$() ? this$0.decodeSerializableValue_613aoe_k$($deserializer, $previousValue) : this$0.decodeNull_jzrmuj_k$();
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$_0();
    }
    tmp.tagStack_1 = tmp$ret$0;
    this.flag_1 = false;
  }
  TaggedDecoder.prototype.get_serializersModule_piitvg_k$ = function () {
    return get_EmptySerializersModule();
  };
  TaggedDecoder.prototype.decodeTaggedValue_b9nx02_k$ = function (tag) {
    throw SerializationException_init_$Create$_0('' + getKClassFromExpression(this) + " can't retrieve untyped values");
  };
  TaggedDecoder.prototype.decodeTaggedNotNullMark_lc2tyw_k$ = function (tag) {
    return true;
  };
  TaggedDecoder.prototype.decodeTaggedNull_x1ibl0_k$ = function (tag) {
    return null;
  };
  TaggedDecoder.prototype.decodeTaggedBoolean_kbjyq1_k$ = function (tag) {
    var tmp = this.decodeTaggedValue_b9nx02_k$(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.decodeTaggedByte_weg8ir_k$ = function (tag) {
    var tmp = this.decodeTaggedValue_b9nx02_k$(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.decodeTaggedShort_9lw2oz_k$ = function (tag) {
    var tmp = this.decodeTaggedValue_b9nx02_k$(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.decodeTaggedInt_rqx040_k$ = function (tag) {
    var tmp = this.decodeTaggedValue_b9nx02_k$(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.decodeTaggedLong_z7jgpd_k$ = function (tag) {
    var tmp = this.decodeTaggedValue_b9nx02_k$(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.decodeTaggedFloat_azhupv_k$ = function (tag) {
    var tmp = this.decodeTaggedValue_b9nx02_k$(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.decodeTaggedDouble_qq3qze_k$ = function (tag) {
    var tmp = this.decodeTaggedValue_b9nx02_k$(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.decodeTaggedChar_xsxsj0_k$ = function (tag) {
    var tmp = this.decodeTaggedValue_b9nx02_k$(tag);
    return tmp instanceof Char ? tmp.value_1 : THROW_CCE();
  };
  TaggedDecoder.prototype.decodeTaggedString_5es7hi_k$ = function (tag) {
    var tmp = this.decodeTaggedValue_b9nx02_k$(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.decodeTaggedEnum_jxsvth_k$ = function (tag, enumDescriptor) {
    var tmp = this.decodeTaggedValue_b9nx02_k$(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  TaggedDecoder.prototype.decodeTaggedInline_lzvm4z_k$ = function (tag, inlineDescriptor) {
    var tmp$ret$0;
    {
      {
      }
      {
        this.pushTag_2jen4a_k$(tag);
      }
      tmp$ret$0 = this;
    }
    return tmp$ret$0;
  };
  TaggedDecoder.prototype.decodeSerializableValue_613aoe_k$ = function (deserializer, previousValue) {
    return this.decodeSerializableValue_xpp80o_k$(deserializer);
  };
  TaggedDecoder.prototype.decodeInline_k1q7ba_k$ = function (inlineDescriptor) {
    return this.decodeTaggedInline_lzvm4z_k$(this.popTag_g8zwqf_k$(), inlineDescriptor);
  };
  TaggedDecoder.prototype.decodeNotNullMark_us4ba1_k$ = function () {
    var tmp0_elvis_lhs = this.get_currentTagOrNull_yhyzw_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.decodeTaggedNotNullMark_lc2tyw_k$(currentTag);
  };
  TaggedDecoder.prototype.decodeNull_jzrmuj_k$ = function () {
    return null;
  };
  TaggedDecoder.prototype.decodeBoolean_m0aca_k$ = function () {
    return this.decodeTaggedBoolean_kbjyq1_k$(this.popTag_g8zwqf_k$());
  };
  TaggedDecoder.prototype.decodeByte_jzz7je_k$ = function () {
    return this.decodeTaggedByte_weg8ir_k$(this.popTag_g8zwqf_k$());
  };
  TaggedDecoder.prototype.decodeShort_jjqk32_k$ = function () {
    return this.decodeTaggedShort_9lw2oz_k$(this.popTag_g8zwqf_k$());
  };
  TaggedDecoder.prototype.decodeInt_8iq8f5_k$ = function () {
    return this.decodeTaggedInt_rqx040_k$(this.popTag_g8zwqf_k$());
  };
  TaggedDecoder.prototype.decodeLong_jzt186_k$ = function () {
    return this.decodeTaggedLong_z7jgpd_k$(this.popTag_g8zwqf_k$());
  };
  TaggedDecoder.prototype.decodeFloat_jcnrwu_k$ = function () {
    return this.decodeTaggedFloat_azhupv_k$(this.popTag_g8zwqf_k$());
  };
  TaggedDecoder.prototype.decodeDouble_ur8l0f_k$ = function () {
    return this.decodeTaggedDouble_qq3qze_k$(this.popTag_g8zwqf_k$());
  };
  TaggedDecoder.prototype.decodeChar_dc2jtx_k$ = function () {
    return this.decodeTaggedChar_xsxsj0_k$(this.popTag_g8zwqf_k$());
  };
  TaggedDecoder.prototype.decodeString_x3hxsx_k$ = function () {
    return this.decodeTaggedString_5es7hi_k$(this.popTag_g8zwqf_k$());
  };
  TaggedDecoder.prototype.decodeEnum_w3hzf6_k$ = function (enumDescriptor) {
    return this.decodeTaggedEnum_jxsvth_k$(this.popTag_g8zwqf_k$(), enumDescriptor);
  };
  TaggedDecoder.prototype.beginStructure_dv3yt3_k$ = function (descriptor) {
    return this;
  };
  TaggedDecoder.prototype.endStructure_e64gd4_k$ = function (descriptor) {
  };
  TaggedDecoder.prototype.decodeBooleanElement_3vswy_k$ = function (descriptor, index) {
    return this.decodeTaggedBoolean_kbjyq1_k$(this.getTag_8zycz2_k$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeByteElement_76b0gq_k$ = function (descriptor, index) {
    return this.decodeTaggedByte_weg8ir_k$(this.getTag_8zycz2_k$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeShortElement_zjkfm_k$ = function (descriptor, index) {
    return this.decodeTaggedShort_9lw2oz_k$(this.getTag_8zycz2_k$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeIntElement_cmpvet_k$ = function (descriptor, index) {
    return this.decodeTaggedInt_rqx040_k$(this.getTag_8zycz2_k$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeLongElement_kyznym_k$ = function (descriptor, index) {
    return this.decodeTaggedLong_z7jgpd_k$(this.getTag_8zycz2_k$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeFloatElement_nl5jiq_k$ = function (descriptor, index) {
    return this.decodeTaggedFloat_azhupv_k$(this.getTag_8zycz2_k$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeDoubleElement_42w6gz_k$ = function (descriptor, index) {
    return this.decodeTaggedDouble_qq3qze_k$(this.getTag_8zycz2_k$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeCharElement_pg5vs7_k$ = function (descriptor, index) {
    return this.decodeTaggedChar_xsxsj0_k$(this.getTag_8zycz2_k$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeStringElement_4is7ib_k$ = function (descriptor, index) {
    return this.decodeTaggedString_5es7hi_k$(this.getTag_8zycz2_k$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeInlineElement_ddno8l_k$ = function (descriptor, index) {
    return this.decodeTaggedInline_lzvm4z_k$(this.getTag_8zycz2_k$(descriptor, index), descriptor.getElementDescriptor_sqz94k_k$(index));
  };
  TaggedDecoder.prototype.decodeSerializableElement_5lsbxj_k$ = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.getTag_8zycz2_k$(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  TaggedDecoder.prototype.decodeNullableSerializableElement_ri3t5d_k$ = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.getTag_8zycz2_k$(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  TaggedDecoder.prototype.get_currentTag_wui9re_k$ = function () {
    return last(this.tagStack_1);
  };
  TaggedDecoder.prototype.get_currentTagOrNull_yhyzw_k$ = function () {
    return lastOrNull(this.tagStack_1);
  };
  TaggedDecoder.prototype.pushTag_2jen4a_k$ = function (name) {
    this.tagStack_1.add_1j60pz_k$(name);
  };
  TaggedDecoder.prototype.copyTagsTo_jzbkv7_k$ = function (other) {
    other.tagStack_1.addAll_oxxjjk_k$(this.tagStack_1);
  };
  TaggedDecoder.prototype.popTag_g8zwqf_k$ = function () {
    var r = this.tagStack_1.removeAt_qvpkxi_k$(get_lastIndex_0(this.tagStack_1));
    this.flag_1 = true;
    return r;
  };
  TaggedDecoder.$metadata$ = classMeta('TaggedDecoder', [Decoder, CompositeDecoder]);
  function get_NULL() {
    init_properties_Tuples_kt_v8bvox();
    return NULL;
  }
  var NULL;
  function MapEntry(key, value) {
    this.key_1 = key;
    this.value_1 = value;
  }
  MapEntry.prototype.get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  MapEntry.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  MapEntry.prototype.component1_7eebsc_k$ = function () {
    return this.key_1;
  };
  MapEntry.prototype.component2_7eebsb_k$ = function () {
    return this.value_1;
  };
  MapEntry.prototype.copy_8d20yw_k$ = function (key, value) {
    return new MapEntry(key, value);
  };
  MapEntry.prototype.copy$default_mlmd97_k$ = function (key, value, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      key = this.key_1;
    if (!(($mask0 & 2) === 0))
      value = this.value_1;
    return this.copy_8d20yw_k$(key, value);
  };
  MapEntry.prototype.toString = function () {
    return 'MapEntry(key=' + this.key_1 + ', value=' + this.value_1 + ')';
  };
  MapEntry.prototype.hashCode = function () {
    var result = this.key_1 == null ? 0 : hashCode(this.key_1);
    result = imul(result, 31) + (this.value_1 == null ? 0 : hashCode(this.value_1)) | 0;
    return result;
  };
  MapEntry.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.key_1, tmp0_other_with_cast.key_1))
      return false;
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  MapEntry.$metadata$ = classMeta('MapEntry', [Entry]);
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      var tmp = $keySerializer.get_descriptor_wjt6a0_k$();
      $this$buildSerialDescriptor.element$default_m7h690_k$('key', tmp, null, false, 12, null);
      var tmp_0 = $valueSerializer.get_descriptor_wjt6a0_k$();
      $this$buildSerialDescriptor.element$default_m7h690_k$('value', tmp_0, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.descriptor_1 = buildSerialDescriptor$default('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer), 4, null);
  }
  MapEntrySerializer_0.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  MapEntrySerializer_0.prototype.get_key_xwaw0y_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_key_18j28a_k$();
  };
  MapEntrySerializer_0.prototype.get_key_c7qyp5_k$ = function (_this__u8e3s4) {
    return this.get_key_xwaw0y_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  MapEntrySerializer_0.prototype.get_value_ajqqfk_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_value_j01efc_k$();
  };
  MapEntrySerializer_0.prototype.get_value_455tcn_k$ = function (_this__u8e3s4) {
    return this.get_value_ajqqfk_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  MapEntrySerializer_0.prototype.toResult_qr0m57_k$ = function (key, value) {
    return new MapEntry(key, value);
  };
  MapEntrySerializer_0.$metadata$ = classMeta('MapEntrySerializer', undefined, undefined, undefined, undefined, KeyValueSerializer.prototype);
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      var tmp = $keySerializer.get_descriptor_wjt6a0_k$();
      $this$buildClassSerialDescriptor.element$default_m7h690_k$('first', tmp, null, false, 12, null);
      var tmp_0 = $valueSerializer.get_descriptor_wjt6a0_k$();
      $this$buildClassSerialDescriptor.element$default_m7h690_k$('second', tmp_0, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.descriptor_1 = buildClassSerialDescriptor$default('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer), 2, null);
  }
  PairSerializer_0.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  PairSerializer_0.prototype.get_key_70crl3_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.first_1;
  };
  PairSerializer_0.prototype.get_key_c7qyp5_k$ = function (_this__u8e3s4) {
    return this.get_key_70crl3_k$(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  PairSerializer_0.prototype.get_value_bt5arr_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.second_1;
  };
  PairSerializer_0.prototype.get_value_455tcn_k$ = function (_this__u8e3s4) {
    return this.get_value_bt5arr_k$(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  PairSerializer_0.prototype.toResult_qr0m57_k$ = function (key, value) {
    return to(key, value);
  };
  PairSerializer_0.$metadata$ = classMeta('PairSerializer', undefined, undefined, undefined, undefined, KeyValueSerializer.prototype);
  function _get_aSerializer__qgvori($this) {
    return $this.aSerializer_1;
  }
  function _get_bSerializer__slqdml($this) {
    return $this.bSerializer_1;
  }
  function _get_cSerializer__uql2ho($this) {
    return $this.cSerializer_1;
  }
  function decodeSequentially_1($this, composite) {
    var a = composite.decodeSerializableElement$default_xyql7s_k$($this.descriptor_1, 0, $this.aSerializer_1, null, 8, null);
    var b = composite.decodeSerializableElement$default_xyql7s_k$($this.descriptor_1, 1, $this.bSerializer_1, null, 8, null);
    var c = composite.decodeSerializableElement$default_xyql7s_k$($this.descriptor_1, 2, $this.cSerializer_1, null, 8, null);
    composite.endStructure_e64gd4_k$($this.descriptor_1);
    return new Triple(a, b, c);
  }
  function decodeStructure_0($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.decodeElementIndex_nk5a2l_k$($this.descriptor_1);
      Companion_getInstance_1();
      if (index === -1) {
        break mainLoop;
      } else {
        if (index === 0) {
          a = composite.decodeSerializableElement$default_xyql7s_k$($this.descriptor_1, 0, $this.aSerializer_1, null, 8, null);
        } else {
          if (index === 1) {
            b = composite.decodeSerializableElement$default_xyql7s_k$($this.descriptor_1, 1, $this.bSerializer_1, null, 8, null);
          } else {
            if (index === 2) {
              c = composite.decodeSerializableElement$default_xyql7s_k$($this.descriptor_1, 2, $this.cSerializer_1, null, 8, null);
            } else {
              throw SerializationException_init_$Create$_0('Unexpected index ' + index);
            }
          }
        }
      }
    }
    composite.endStructure_e64gd4_k$($this.descriptor_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'third' is missing");
    var tmp = (a == null ? true : isObject(a)) ? a : THROW_CCE();
    var tmp_0 = (b == null ? true : isObject(b)) ? b : THROW_CCE();
    return new Triple(tmp, tmp_0, (c == null ? true : isObject(c)) ? c : THROW_CCE());
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      var tmp = this$0.aSerializer_1.get_descriptor_wjt6a0_k$();
      $this$buildClassSerialDescriptor.element$default_m7h690_k$('first', tmp, null, false, 12, null);
      var tmp_0 = this$0.bSerializer_1.get_descriptor_wjt6a0_k$();
      $this$buildClassSerialDescriptor.element$default_m7h690_k$('second', tmp_0, null, false, 12, null);
      var tmp_1 = this$0.cSerializer_1.get_descriptor_wjt6a0_k$();
      $this$buildClassSerialDescriptor.element$default_m7h690_k$('third', tmp_1, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.aSerializer_1 = aSerializer;
    this.bSerializer_1 = bSerializer;
    this.cSerializer_1 = cSerializer;
    var tmp = this;
    tmp.descriptor_1 = buildClassSerialDescriptor$default('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this), 2, null);
  }
  TripleSerializer_0.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  TripleSerializer_0.prototype.serialize_dxgg6y_k$ = function (encoder, value) {
    var structuredEncoder = encoder.beginStructure_dv3yt3_k$(this.descriptor_1);
    structuredEncoder.encodeSerializableElement_pr92am_k$(this.descriptor_1, 0, this.aSerializer_1, value.first_1);
    structuredEncoder.encodeSerializableElement_pr92am_k$(this.descriptor_1, 1, this.bSerializer_1, value.second_1);
    structuredEncoder.encodeSerializableElement_pr92am_k$(this.descriptor_1, 2, this.cSerializer_1, value.third_1);
    structuredEncoder.endStructure_e64gd4_k$(this.descriptor_1);
  };
  TripleSerializer_0.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_dxgg6y_k$(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  TripleSerializer_0.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var composite = decoder.beginStructure_dv3yt3_k$(this.descriptor_1);
    if (composite.decodeSequentially_xlblqy_k$()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure_0(this, composite);
  };
  TripleSerializer_0.$metadata$ = classMeta('TripleSerializer', [KSerializer]);
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.keySerializer_1 = keySerializer;
    this.valueSerializer_1 = valueSerializer;
  }
  KeyValueSerializer.prototype.get_keySerializer_t29hrc_k$ = function () {
    return this.keySerializer_1;
  };
  KeyValueSerializer.prototype.get_valueSerializer_gksbgm_k$ = function () {
    return this.valueSerializer_1;
  };
  KeyValueSerializer.prototype.serialize_n6wuhj_k$ = function (encoder, value) {
    var structuredEncoder = encoder.beginStructure_dv3yt3_k$(this.get_descriptor_wjt6a0_k$());
    structuredEncoder.encodeSerializableElement_pr92am_k$(this.get_descriptor_wjt6a0_k$(), 0, this.keySerializer_1, this.get_key_c7qyp5_k$(value));
    structuredEncoder.encodeSerializableElement_pr92am_k$(this.get_descriptor_wjt6a0_k$(), 1, this.valueSerializer_1, this.get_value_455tcn_k$(value));
    structuredEncoder.endStructure_e64gd4_k$(this.get_descriptor_wjt6a0_k$());
  };
  KeyValueSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_n6wuhj_k$(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  KeyValueSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var composite = decoder.beginStructure_dv3yt3_k$(this.get_descriptor_wjt6a0_k$());
    if (composite.decodeSequentially_xlblqy_k$()) {
      var tmp = this.get_descriptor_wjt6a0_k$();
      var key = composite.decodeSerializableElement$default_xyql7s_k$(tmp, 0, this.keySerializer_1, null, 8, null);
      var tmp_0 = this.get_descriptor_wjt6a0_k$();
      var value = composite.decodeSerializableElement$default_xyql7s_k$(tmp_0, 1, this.valueSerializer_1, null, 8, null);
      return this.toResult_qr0m57_k$(key, value);
    }
    var key_0 = get_NULL();
    var value_0 = get_NULL();
    mainLoop: while (true) {
      var idx = composite.decodeElementIndex_nk5a2l_k$(this.get_descriptor_wjt6a0_k$());
      Companion_getInstance_1();
      if (idx === -1) {
        break mainLoop;
      } else {
        if (idx === 0) {
          var tmp_1 = this.get_descriptor_wjt6a0_k$();
          key_0 = composite.decodeSerializableElement$default_xyql7s_k$(tmp_1, 0, this.keySerializer_1, null, 8, null);
        } else {
          if (idx === 1) {
            var tmp_2 = this.get_descriptor_wjt6a0_k$();
            value_0 = composite.decodeSerializableElement$default_xyql7s_k$(tmp_2, 1, this.valueSerializer_1, null, 8, null);
          } else {
            throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
          }
        }
      }
    }
    composite.endStructure_e64gd4_k$(this.get_descriptor_wjt6a0_k$());
    if (key_0 === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'key' is missing");
    if (value_0 === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'value' is missing");
    var tmp_3 = (key_0 == null ? true : isObject(key_0)) ? key_0 : THROW_CCE();
    return this.toResult_qr0m57_k$(tmp_3, (value_0 == null ? true : isObject(value_0)) ? value_0 : THROW_CCE());
  };
  KeyValueSerializer.$metadata$ = classMeta('KeyValueSerializer', [KSerializer]);
  var properties_initialized_Tuples_kt_3vs7ar;
  function init_properties_Tuples_kt_v8bvox() {
    if (properties_initialized_Tuples_kt_3vs7ar) {
    } else {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function get_EmptySerializersModule() {
    init_properties_SerializersModule_kt_swldyf();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  SerializersModule.prototype.getContextual_715qcj_k$ = function (kclass) {
    return this.getContextual_3ymxok_k$(kclass, emptyList());
  };
  SerializersModule.prototype.getContextual$default_ocirm0_k$ = function (kClass, typeArgumentsSerializers, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      typeArgumentsSerializers = emptyList();
    return $handler == null ? this.getContextual_3ymxok_k$(kClass, typeArgumentsSerializers) : $handler(kClass, typeArgumentsSerializers);
  };
  SerializersModule.$metadata$ = classMeta('SerializersModule');
  function _get_class2ContextualFactory__qh9mum($this) {
    return $this.class2ContextualFactory_1;
  }
  function _get_polyBase2DefaultSerializerProvider__mm2oxw($this) {
    return $this.polyBase2DefaultSerializerProvider_1;
  }
  function _get_polyBase2NamedSerializers__2zbzbo($this) {
    return $this.polyBase2NamedSerializers_1;
  }
  function _get_polyBase2DefaultDeserializerProvider__uja6n9($this) {
    return $this.polyBase2DefaultDeserializerProvider_1;
  }
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.class2ContextualFactory_1 = class2ContextualFactory;
    this.polyBase2Serializers_1 = polyBase2Serializers;
    this.polyBase2DefaultSerializerProvider_1 = polyBase2DefaultSerializerProvider;
    this.polyBase2NamedSerializers_1 = polyBase2NamedSerializers;
    this.polyBase2DefaultDeserializerProvider_1 = polyBase2DefaultDeserializerProvider;
  }
  SerialModuleImpl.prototype.get_polyBase2Serializers_eilxqt_k$ = function () {
    return this.polyBase2Serializers_1;
  };
  SerialModuleImpl.prototype.getPolymorphic_1pjrjm_k$ = function (baseClass, value) {
    if (!isInstanceOf(value, baseClass))
      return null;
    var tmp0_safe_receiver = this.polyBase2Serializers_1.get_1mhr4y_k$(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_1mhr4y_k$(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.polyBase2DefaultSerializerProvider_1.get_1mhr4y_k$(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  SerialModuleImpl.prototype.getPolymorphic_gixe6f_k$ = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.polyBase2NamedSerializers_1.get_1mhr4y_k$(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      {
        tmp$ret$0 = ((!(tmp0_safe_receiver == null) ? isInterface(tmp0_safe_receiver, Map) : false) ? tmp0_safe_receiver : THROW_CCE()).get_1mhr4y_k$(serializedClassName);
      }
      tmp = tmp$ret$0;
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.polyBase2DefaultDeserializerProvider_1.get_1mhr4y_k$(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  SerialModuleImpl.prototype.getContextual_3ymxok_k$ = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.class2ContextualFactory_1.get_1mhr4y_k$(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.invoke_wrqehj_k$(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  SerialModuleImpl.prototype.dumpTo_q6va1n_k$ = function (collector) {
    {
      var tmp0_forEach = this.class2ContextualFactory_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_forEach.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      }
      var tmp0_iterator = tmp$ret$0;
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        {
          var tmp$ret$1;
          {
            tmp$ret$1 = element.get_key_18j28a_k$();
          }
          var kclass = tmp$ret$1;
          var tmp$ret$2;
          {
            tmp$ret$2 = element.get_value_j01efc_k$();
          }
          var serial = tmp$ret$2;
          var tmp0_subject = serial;
          if (tmp0_subject instanceof Argless) {
            var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
            var tmp_0 = serial.serializer_1;
            collector.contextual_7ekeez_k$(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
          } else {
            if (tmp0_subject instanceof WithTypeArguments)
              collector.contextual_e1eobl_k$(kclass, serial.provider_1);
          }
        }
      }
    }
    {
      var tmp1_forEach = this.polyBase2Serializers_1;
      var tmp$ret$3;
      {
        tmp$ret$3 = tmp1_forEach.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      }
      var tmp0_iterator_0 = tmp$ret$3;
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        {
          var tmp$ret$4;
          {
            tmp$ret$4 = element_0.get_key_18j28a_k$();
          }
          var baseClass = tmp$ret$4;
          var tmp$ret$5;
          {
            tmp$ret$5 = element_0.get_value_j01efc_k$();
          }
          var classMap = tmp$ret$5;
          {
            var tmp$ret$6;
            {
              tmp$ret$6 = classMap.get_entries_p20ztl_k$().iterator_jk1svi_k$();
            }
            var tmp0_iterator_1 = tmp$ret$6;
            while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
              var element_1 = tmp0_iterator_1.next_20eer_k$();
              {
                var tmp$ret$7;
                {
                  tmp$ret$7 = element_1.get_key_18j28a_k$();
                }
                var actualClass = tmp$ret$7;
                var tmp$ret$8;
                {
                  tmp$ret$8 = element_1.get_value_j01efc_k$();
                }
                var serializer = tmp$ret$8;
                var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
                var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
                var tmp$ret$9;
                {
                  tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
                }
                collector.polymorphic_2hf1qx_k$(tmp_1, tmp_2, tmp$ret$9);
              }
            }
          }
        }
      }
    }
    {
      var tmp2_forEach = this.polyBase2DefaultSerializerProvider_1;
      var tmp$ret$10;
      {
        tmp$ret$10 = tmp2_forEach.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      }
      var tmp0_iterator_2 = tmp$ret$10;
      while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
        var element_2 = tmp0_iterator_2.next_20eer_k$();
        {
          var tmp$ret$11;
          {
            tmp$ret$11 = element_2.get_key_18j28a_k$();
          }
          var baseClass_0 = tmp$ret$11;
          var tmp$ret$12;
          {
            tmp$ret$12 = element_2.get_value_j01efc_k$();
          }
          var provider = tmp$ret$12;
          var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
          collector.polymorphicDefaultSerializer_mjilks_k$(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
        }
      }
    }
    {
      var tmp3_forEach = this.polyBase2DefaultDeserializerProvider_1;
      var tmp$ret$13;
      {
        tmp$ret$13 = tmp3_forEach.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      }
      var tmp0_iterator_3 = tmp$ret$13;
      while (tmp0_iterator_3.hasNext_bitz1p_k$()) {
        var element_3 = tmp0_iterator_3.next_20eer_k$();
        {
          var tmp$ret$14;
          {
            tmp$ret$14 = element_3.get_key_18j28a_k$();
          }
          var baseClass_1 = tmp$ret$14;
          var tmp$ret$15;
          {
            tmp$ret$15 = element_3.get_value_j01efc_k$();
          }
          var provider_0 = tmp$ret$15;
          var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
          collector.polymorphicDefaultDeserializer_1n0ayq_k$(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
        }
      }
    }
  };
  SerialModuleImpl.$metadata$ = classMeta('SerialModuleImpl', undefined, undefined, undefined, undefined, SerializersModule.prototype);
  function Argless(serializer) {
    ContextualProvider.call(this);
    this.serializer_1 = serializer;
  }
  Argless.prototype.get_serializer_u29zhh_k$ = function () {
    return this.serializer_1;
  };
  Argless.prototype.invoke_wrqehj_k$ = function (typeArgumentsSerializers) {
    return this.serializer_1;
  };
  Argless.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Argless) {
      tmp = equals(other.serializer_1, this.serializer_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  Argless.prototype.hashCode = function () {
    return hashCode(this.serializer_1);
  };
  Argless.$metadata$ = classMeta('Argless', undefined, undefined, undefined, undefined, ContextualProvider.prototype);
  function WithTypeArguments(provider) {
    ContextualProvider.call(this);
    this.provider_1 = provider;
  }
  WithTypeArguments.prototype.get_provider_mw8vcq_k$ = function () {
    return this.provider_1;
  };
  WithTypeArguments.prototype.invoke_wrqehj_k$ = function (typeArgumentsSerializers) {
    return this.provider_1(typeArgumentsSerializers);
  };
  WithTypeArguments.$metadata$ = classMeta('WithTypeArguments', undefined, undefined, undefined, undefined, ContextualProvider.prototype);
  function ContextualProvider() {
  }
  ContextualProvider.$metadata$ = classMeta('ContextualProvider');
  var properties_initialized_SerializersModule_kt_fjigjn;
  function init_properties_SerializersModule_kt_swldyf() {
    if (properties_initialized_SerializersModule_kt_fjigjn) {
    } else {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap());
    }
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  SerializersModuleCollector.$metadata$ = interfaceMeta('SerializersModuleCollector');
  function SerializableWith(serializer) {
    this.serializer_1 = serializer;
  }
  SerializableWith.prototype.get_serializer_u29zhh_k$ = function () {
    return this.serializer_1;
  };
  SerializableWith.prototype.equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.serializer_1.equals(tmp0_other_with_cast.serializer_1))
      return false;
    return true;
  };
  SerializableWith.prototype.hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.serializer_1.hashCode();
  };
  SerializableWith.prototype.toString = function () {
    return '@kotlinx.serialization.SerializableWith(serializer=' + this.serializer_1 + ')';
  };
  SerializableWith.$metadata$ = classMeta('SerializableWith', [Annotation], 0);
  function isInstanceOf(_this__u8e3s4, kclass) {
    return kclass.isInstance_6tn68w_k$(_this__u8e3s4);
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    var tmp$ret$0;
    {
      tmp$ret$0 = copyToArray(_this__u8e3s4);
    }
    return tmp$ret$0;
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function platformSpecificSerializerNotRegistered(_this__u8e3s4) {
    throw SerializationException_init_$Create$_0("Serializer for class '" + _this__u8e3s4.get_simpleName_r6f8py_k$() + "' is not found.\n" + 'Mark the class as @Serializable or provide the serializer explicitly.\n' + 'On Kotlin/JS explicitly declared serializer should be used for interfaces and enums without @Serializable annotation');
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp1_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$0;
      {
        var tmp0_asDynamic = get_js(_this__u8e3s4);
        tmp$ret$0 = tmp0_asDynamic;
      }
      var tmp0_safe_receiver = tmp$ret$0.Companion;
      var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.serializer();
      tmp = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function isReferenceArray(rootClass) {
    return rootClass.equals(PrimitiveClasses_getInstance().get_arrayClass_udg0fc_k$());
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      var tmp$ret$0;
      {
        tmp$ret$0 = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      }
      var assocObject = tmp$ret$0;
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.serializer_5xgt5t_k$(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          if (get_isInterface(_this__u8e3s4)) {
            tmp_0 = new PolymorphicSerializer(_this__u8e3s4);
          } else {
            tmp_0 = null;
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      {
        tmp_2 = null;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function get_isInterface(_this__u8e3s4) {
    var tmp$ret$0;
    {
      var tmp0_asDynamic = get_js(_this__u8e3s4);
      tmp$ret$0 = tmp0_asDynamic;
    }
    var tmp0_safe_receiver = tmp$ret$0.$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  //region block: post-declaration
  SerialDescriptorImpl.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  SerialDescriptorImpl.prototype.get_isInline_usk17w_k$ = get_isInline;
  AbstractDecoder.prototype.decodeSerializableElement$default_xyql7s_k$ = decodeSerializableElement$default;
  AbstractDecoder.prototype.decodeNullableSerializableElement$default_9il7ee_k$ = decodeNullableSerializableElement$default;
  AbstractDecoder.prototype.decodeSerializableValue_xpp80o_k$ = decodeSerializableValue;
  AbstractDecoder.prototype.decodeNullableSerializableValue_927wg6_k$ = decodeNullableSerializableValue;
  AbstractDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  AbstractDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  AbstractEncoder.prototype.encodeNotNullMark_40lhgg_k$ = encodeNotNullMark;
  AbstractEncoder.prototype.beginCollection_dgpn47_k$ = beginCollection;
  AbstractEncoder.prototype.encodeSerializableValue_bps9ot_k$ = encodeSerializableValue;
  AbstractEncoder.prototype.encodeNullableSerializableValue_35ub11_k$ = encodeNullableSerializableValue;
  AbstractEncoder.prototype.shouldEncodeElementDefault_m92hrm_k$ = shouldEncodeElementDefault;
  ListLikeDescriptor.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  ListLikeDescriptor.prototype.get_isInline_usk17w_k$ = get_isInline;
  ListLikeDescriptor.prototype.get_annotations_20dirp_k$ = get_annotations;
  PrimitiveArrayDescriptor.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  PrimitiveArrayDescriptor.prototype.get_isInline_usk17w_k$ = get_isInline;
  PrimitiveArrayDescriptor.prototype.get_annotations_20dirp_k$ = get_annotations;
  ArrayClassDesc.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  ArrayClassDesc.prototype.get_isInline_usk17w_k$ = get_isInline;
  ArrayClassDesc.prototype.get_annotations_20dirp_k$ = get_annotations;
  MapLikeDescriptor.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  MapLikeDescriptor.prototype.get_isInline_usk17w_k$ = get_isInline;
  MapLikeDescriptor.prototype.get_annotations_20dirp_k$ = get_annotations;
  LinkedHashMapClassDesc.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  LinkedHashMapClassDesc.prototype.get_isInline_usk17w_k$ = get_isInline;
  LinkedHashMapClassDesc.prototype.get_annotations_20dirp_k$ = get_annotations;
  HashMapClassDesc.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  HashMapClassDesc.prototype.get_isInline_usk17w_k$ = get_isInline;
  HashMapClassDesc.prototype.get_annotations_20dirp_k$ = get_annotations;
  ArrayListClassDesc.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  ArrayListClassDesc.prototype.get_isInline_usk17w_k$ = get_isInline;
  ArrayListClassDesc.prototype.get_annotations_20dirp_k$ = get_annotations;
  LinkedHashSetClassDesc.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  LinkedHashSetClassDesc.prototype.get_isInline_usk17w_k$ = get_isInline;
  LinkedHashSetClassDesc.prototype.get_annotations_20dirp_k$ = get_annotations;
  HashSetClassDesc.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  HashSetClassDesc.prototype.get_isInline_usk17w_k$ = get_isInline;
  HashSetClassDesc.prototype.get_annotations_20dirp_k$ = get_annotations;
  PluginGeneratedSerialDescriptor.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  PluginGeneratedSerialDescriptor.prototype.get_isInline_usk17w_k$ = get_isInline;
  InlineClassDescriptor.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  InlinePrimitiveDescriptor$1.prototype.typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  NoOpEncoder.prototype.encodeNotNullMark_40lhgg_k$ = encodeNotNullMark;
  NoOpEncoder.prototype.beginCollection_dgpn47_k$ = beginCollection;
  NoOpEncoder.prototype.encodeSerializableValue_bps9ot_k$ = encodeSerializableValue;
  NoOpEncoder.prototype.encodeNullableSerializableValue_35ub11_k$ = encodeNullableSerializableValue;
  NoOpEncoder.prototype.shouldEncodeElementDefault_m92hrm_k$ = shouldEncodeElementDefault;
  PrimitiveSerialDescriptor_0.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  PrimitiveSerialDescriptor_0.prototype.get_isInline_usk17w_k$ = get_isInline;
  PrimitiveSerialDescriptor_0.prototype.get_annotations_20dirp_k$ = get_annotations;
  TaggedEncoder.prototype.beginCollection_dgpn47_k$ = beginCollection;
  TaggedEncoder.prototype.encodeSerializableValue_bps9ot_k$ = encodeSerializableValue;
  TaggedEncoder.prototype.encodeNullableSerializableValue_35ub11_k$ = encodeNullableSerializableValue;
  TaggedEncoder.prototype.shouldEncodeElementDefault_m92hrm_k$ = shouldEncodeElementDefault;
  NamedValueEncoder.prototype.beginCollection_dgpn47_k$ = beginCollection;
  NamedValueEncoder.prototype.encodeSerializableValue_bps9ot_k$ = encodeSerializableValue;
  NamedValueEncoder.prototype.encodeNullableSerializableValue_35ub11_k$ = encodeNullableSerializableValue;
  NamedValueEncoder.prototype.shouldEncodeElementDefault_m92hrm_k$ = shouldEncodeElementDefault;
  TaggedDecoder.prototype.decodeSerializableElement$default_xyql7s_k$ = decodeSerializableElement$default;
  TaggedDecoder.prototype.decodeNullableSerializableElement$default_9il7ee_k$ = decodeNullableSerializableElement$default;
  TaggedDecoder.prototype.decodeSerializableValue_xpp80o_k$ = decodeSerializableValue;
  TaggedDecoder.prototype.decodeNullableSerializableValue_927wg6_k$ = decodeNullableSerializableValue;
  TaggedDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  TaggedDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  NamedValueDecoder.prototype.decodeSerializableValue_xpp80o_k$ = decodeSerializableValue;
  NamedValueDecoder.prototype.decodeSerializableElement$default_xyql7s_k$ = decodeSerializableElement$default;
  NamedValueDecoder.prototype.decodeNullableSerializableElement$default_9il7ee_k$ = decodeNullableSerializableElement$default;
  NamedValueDecoder.prototype.decodeNullableSerializableValue_927wg6_k$ = decodeNullableSerializableValue;
  NamedValueDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  NamedValueDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  //endregion
  //region block: init
  ARRAY_NAME = 'kotlin.Array';
  LINKED_HASH_MAP_NAME = 'kotlin.collections.LinkedHashMap';
  HASH_MAP_NAME = 'kotlin.collections.HashMap';
  ARRAY_LIST_NAME = 'kotlin.collections.ArrayList';
  LINKED_HASH_SET_NAME = 'kotlin.collections.LinkedHashSet';
  HASH_SET_NAME = 'kotlin.collections.HashSet';
  INITIAL_SIZE = 10;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = buildSerialDescriptor$default;
  _.$_$.b = decodeNullableSerializableElement$default;
  _.$_$.c = decodeSerializableElement$default;
  _.$_$.d = SerializationException_init_$Init$_0;
  _.$_$.e = SerializationException_init_$Create$_0;
  _.$_$.f = UnknownFieldException_init_$Create$;
  _.$_$.g = SEALED_getInstance;
  _.$_$.h = STRING_getInstance;
  _.$_$.i = CONTEXTUAL_getInstance;
  _.$_$.j = ENUM_getInstance;
  _.$_$.k = LIST_getInstance;
  _.$_$.l = MAP_getInstance;
  _.$_$.m = Companion_getInstance_1;
  _.$_$.n = ListSerializer;
  _.$_$.o = MapSerializer;
  _.$_$.p = serializer_0;
  _.$_$.q = serializer_13;
  _.$_$.r = serializer_10;
  _.$_$.s = serializer_12;
  _.$_$.t = serializer_11;
  _.$_$.u = PolymorphicKind;
  _.$_$.v = PrimitiveKind;
  _.$_$.w = PrimitiveSerialDescriptor;
  _.$_$.x = get_annotations;
  _.$_$.y = get_isInline;
  _.$_$.z = get_isNullable;
  _.$_$.a1 = SerialDescriptor;
  _.$_$.b1 = ENUM;
  _.$_$.c1 = getContextualDescriptor;
  _.$_$.d1 = AbstractDecoder;
  _.$_$.e1 = AbstractEncoder;
  _.$_$.f1 = decodeCollectionSize;
  _.$_$.g1 = decodeSequentially;
  _.$_$.h1 = CompositeDecoder;
  _.$_$.i1 = shouldEncodeElementDefault;
  _.$_$.j1 = CompositeEncoder;
  _.$_$.k1 = decodeNullableSerializableValue;
  _.$_$.l1 = decodeSerializableValue;
  _.$_$.m1 = Decoder;
  _.$_$.n1 = beginCollection;
  _.$_$.o1 = encodeNotNullMark;
  _.$_$.p1 = encodeNullableSerializableValue;
  _.$_$.q1 = encodeSerializableValue;
  _.$_$.r1 = Encoder;
  _.$_$.s1 = AbstractPolymorphicSerializer;
  _.$_$.t1 = ElementMarker;
  _.$_$.u1 = typeParametersSerializers;
  _.$_$.v1 = GeneratedSerializer;
  _.$_$.w1 = NamedValueDecoder;
  _.$_$.x1 = NamedValueEncoder;
  _.$_$.y1 = PluginGeneratedSerialDescriptor;
  _.$_$.z1 = SerializerFactory;
  _.$_$.a2 = jsonCachedSerialNames;
  _.$_$.b2 = throwMissingFieldException;
  _.$_$.c2 = get_EmptySerializersModule;
  _.$_$.d2 = contextual;
  _.$_$.e2 = polymorphicDefault;
  _.$_$.f2 = SerializersModuleCollector;
  _.$_$.g2 = DeserializationStrategy;
  _.$_$.h2 = KSerializer;
  _.$_$.i2 = MissingFieldException;
  _.$_$.j2 = SealedClassSerializer;
  _.$_$.k2 = SerializationException;
  _.$_$.l2 = StringFormat;
  _.$_$.m2 = findPolymorphicSerializer;
  _.$_$.n2 = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core-js-ir.js.map