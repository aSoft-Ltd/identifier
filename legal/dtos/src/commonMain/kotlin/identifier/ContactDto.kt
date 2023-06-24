@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package identifier

import kotlin.js.JsExport
import kollections.iListOf
import kollections.toIList
import kotlinx.serialization.Serializable

@Serializable
data class ContactDto(
    val uid: String,
    /**
     * Can be either
     * - Desk
     * - Support
     * - John
     */
    val name: String,
    val comms: List<Comm> = iListOf(),
    val role: String? = null,
    val isPrimary: Boolean = true,
) {
    val emails get() = comms.filterIsInstance<UserEmail>().toIList()
    val phones get() = comms.filterIsInstance<UserPhone>().toIList()
}