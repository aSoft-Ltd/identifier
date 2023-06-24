@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package identifier

import kollections.toIList
import kotlin.js.JsExport

data class ContactPresenter(
    val src: ContactDto,
    val uid: String,
    /**
     * Can be either
     * - Desk
     * - Support
     * - John
     */
    val name: String,
    val comms: List<Comm>,
    val role: String?,
    val isPrimary: Boolean,
) {
    val emails get() = comms.filterIsInstance<UserEmail>().toIList()
    val phones get() = comms.filterIsInstance<UserPhone>().toIList()
}