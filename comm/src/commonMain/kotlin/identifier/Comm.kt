@file:JsExport
@file:Suppress("WRONG_EXPORTED_DECLARATION")

package identifier

import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.jvm.JvmOverloads
import kotlin.jvm.JvmStatic

/**
 * A class representing a way of communicating
 *  currently supports email addresses and phone numbers
 */
@Serializable
sealed interface Comm {
    val verified: Boolean
    val userId: String
    val value: String

    companion object {
        @JvmStatic
        @JvmOverloads
        fun of(
            value: String,
            userId: String,
            verified: Boolean = false
        ): Comm = when (val id = Identifier.from(value)) {
            is Identifier.Phone -> UserPhone(
                value = id.value, userId, verified, whatsapp = false
            )

            is Identifier.Email -> UserEmail(
                value = id.value, userId, verified
            )
        }
    }
}