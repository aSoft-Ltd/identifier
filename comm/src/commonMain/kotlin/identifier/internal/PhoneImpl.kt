@file:Suppress("SERIALIZER_TYPE_INCOMPATIBLE")

package identifier.internal

import identifier.InvalidPhoneException
import identifier.Phone
import identifier.UNSET

@PublishedApi
internal data class PhoneImpl private constructor(
    override val value: String,
    override val verified: Boolean = false,
    override val userId: String = UNSET,
) : Phone {

    companion object {
        operator fun invoke(value: String): PhoneImpl {
            var phone = value
            if (value.startsWith("0")) {
                phone = value.substring(1)
            }

            if (phone.startsWith("+")) {
                phone = phone.substring(1)
            }

            if (phone.length < 9) {
                val cause = IllegalArgumentException("Too few digits")
                throw InvalidPhoneException(value, cause)
            }

            return when (phone.length) {
                9 -> PhoneImpl("255$phone")
                else -> PhoneImpl(phone)
            }
        }
    }

    override fun equals(other: Any?): Boolean = when (other) {
        is String -> value == other
        is Phone -> value == other.value
        else -> false
    }

    override fun hashCode(): Int = value.hashCode()

    override fun toString() = value
}