@file:JsExport

package identifier

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@Serializable
data class UserPhone(
    override val value: String,
    override val userId: String,
    override val verified: Boolean = false,
    val whatsapp: Boolean = false
) : Comm {

    init {
        // validate the phone
        Phone(value)
    }

    fun asPrimitivePhone() = Phone(value)
}