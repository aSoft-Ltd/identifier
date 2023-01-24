@file:JsExport

package identifier

import identifier.serializers.NameSerializer
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@Serializable(with = NameSerializer::class)
class Name(val value: String) : CharSequence by value {

    private val v = value.lowercase().split(" ").joinToString(" ") { it.capitalize() }

    private val parts get() = v.split(" ")

    val full get() = v

    val first get() = parts.getOrElse(0) { "" }

    val middle: String
        get() = if (parts.size > 2) {
            parts.subList(1, parts.size - 1).joinToString(" ")
        } else {
            ""
        }

    val last: String
        get() = if (parts.size > 1) {
            parts.last()
        } else {
            ""
        }

    val firstLast get() = "$first $last"

    fun randomized() = Name(parts.shuffled().joinToString(" "))

    override fun equals(other: Any?): Boolean = when (other) {
        is String -> v == other
        is Name -> v == other.value
        else -> false
    }

    override fun hashCode(): Int = v.hashCode()

    override fun toString() = v
}