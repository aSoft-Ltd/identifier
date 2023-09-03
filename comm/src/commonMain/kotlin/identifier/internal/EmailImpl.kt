@file:Suppress("SERIALIZER_TYPE_INCOMPATIBLE")

package identifier.internal

import identifier.Email
import identifier.InvalidEmailException
import identifier.UNSET

@PublishedApi
internal data class EmailImpl private constructor(
    override val value: String,
    override val verified: Boolean = false,
    override val userId: String = UNSET,
) : Email {

    companion object {
        operator fun invoke(value: String): EmailImpl {
            val parts = value.split("@")
            if (parts.size != 2) {
                val cause = IllegalArgumentException("An email must have exactly two parts, the identifier and the domain")
                throw InvalidEmailException(value, cause)
            }

            val domainPart = parts.getOrNull(1)
            if (domainPart == null) {
                val cause = IllegalArgumentException("an Email must have a domain part")
                throw InvalidEmailException(value, cause)
            }

            if (!domainPart.contains(".")) {
                val cause = IllegalArgumentException("an email domain must have a top level domain")
                throw InvalidEmailException(value, cause)
            }

            val topLevelDomain = domainPart.split(".").getOrNull(1)
            if (topLevelDomain == null) {
                val cause = IllegalArgumentException("an email's top level domain must exist")
                throw IllegalArgumentException(value, cause)
            }

            if (topLevelDomain.length < 2) {
                val cause = IllegalArgumentException("invalid top level domain: $topLevelDomain")
                throw IllegalArgumentException(value, cause)
            }
            return EmailImpl(value)
        }
    }

    override val parts = value.split("@").toTypedArray()

    override val identity = parts.first()

    override val domain = parts.last()

    override fun equals(other: Any?): Boolean = when (other) {
        is String -> value == other
        is Email -> value == other.value
        else -> false
    }

    override fun hashCode(): Int = value.hashCode()

    override fun toString() = value
}