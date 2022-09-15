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

    return when (phone.length) {
        9 -> "255$phone"
        12 -> phone
        else -> throw IllegalArgumentException("Invalid phone number $phone")
    }
}