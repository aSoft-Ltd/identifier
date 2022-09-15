package identifier

import identifier.serializers.NameSerializer
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
@Serializable(with = NameSerializer::class)
class Name(value: String) {

    private val value = value.lowercase().split(" ").joinToString(" ") { it.capitalize() }

    private val parts get() = value.split(" ")

    val full get() = value

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
        is String -> value == other
        is Name -> value == other.value
        else -> false
    }

    override fun hashCode(): Int = value.hashCode()

    override fun toString() = value
}