package identifier

import identifier.serializers.PhoneSerializer
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@Serializable(with = PhoneSerializer::class)
class Phone(phone: String) {
    @JsName("ofNumber")
    constructor(phone: Int) : this(phone.toString())

    @JsName("_ofNumber")
    constructor(phone: Long) : this(phone.toString())

    val value: String = parse(phone)

    override fun equals(other: Any?): Boolean = when (other) {
        is String -> value == other
        is Phone -> value == other.value
        else -> false
    }

    override fun hashCode(): Int = value.hashCode()

    override fun toString() = value
}