@file:JsExport

package identifier

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@Serializable
data class UserEmail(
    override val value: String,
    override val userId: String,
    override val verified: Boolean = false,
    override val uid: String = UNSET,
    override val deleted: Boolean = false,
) : Comm {
    init {
        // validate the email
        Email(value)
    }

    fun asPrimitiveEmail() = Email(value)

    override fun copy(uid: String, deleted: Boolean) = copy(uid = uid, value = value, deleted = deleted)
}