@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package identifier

import kotlin.js.JsExport
import kotlin.js.JsName

class Password(val value: String) : CharSequence by value {
    @JsName("from")
    constructor(value: Any) : this(value.toString())

    val clearText get() = value

    override fun equals(other: Any?): Boolean = when (other) {
        is Password -> value == other.value
        else -> false
    }

    override fun hashCode(): Int = value.hashCode()

    override fun toString(): String = value.toCharArray().joinToString(separator = "") { "*" }
}