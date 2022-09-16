@file:JvmName("PhoneUtils")

package identifier

import kotlin.jvm.JvmName

internal fun parse(phone: String): String {
    if (phone.startsWith("0")) {
        return parse(phone.substring(1))
    }

    if (phone.startsWith("+")) {
        return parse(phone.substring(1))
    }

    if (phone.length < 9) {
        throw IllegalArgumentException("Invalid phone: $phone")
    }

    return when (phone.length) {
        9 -> "255$phone"
        else -> phone
    }
}