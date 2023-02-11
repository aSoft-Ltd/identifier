package identifier

import identifier.exceptions.InvalidIdentifierException

sealed class Identifier(open val primitive: Any, val value: String) {
    companion object {
        fun fromOrNull(value: String): Identifier? = try {
            Email(Email(value))
        } catch (cause: Throwable) {
            null
        } ?: try {
            Phone(Phone(value))
        } catch (cause: Throwable) {
            null
        }

        fun from(value: String): Identifier = fromOrNull(value) ?: throw InvalidIdentifierException(value)
    }

    data class Phone(
        override val primitive: identifier.Phone
    ) : Identifier(primitive, primitive.value)

    data class Email(
        override val primitive: identifier.Email
    ) : Identifier(primitive, primitive.value)
}