@file:JsExport @file:Suppress("WRONG_EXPORTED_DECLARATION", "NON_EXPORTABLE_TYPE")

package identifier

import identifier.internal.PhoneImpl
import identifier.serializers.PhoneSerializer
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlin.jvm.JvmName
import kotlin.jvm.JvmStatic

@Serializable(with = PhoneSerializer::class)
interface Phone : Comm {
    companion object {
        @JvmStatic
        @JvmName("of")
        operator fun invoke(value: String): Phone = PhoneImpl(value)

        @JvmStatic
        @JvmName("of")
        @JsName("fromInt")
        operator fun invoke(value: Int): Phone = PhoneImpl(value.toString())

        @JvmName("of")
        @JvmStatic
        @JsName("_ignore_fromLong")
        operator fun invoke(value: Long): Phone = PhoneImpl(value.toString())
    }
}