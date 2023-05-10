@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package identifier

import geo.GeoLocation
import kollections.iListOf
import kollections.toIList
import krono.LocalDate
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@Serializable
data class Individual(
    override val uid: String,
    override val name: String,
    override val image: String? = null,
    val title: String? = null,
    val dob: LocalDate? = null,
    val gender: Gender? = null,
    val comms: List<Comm> = iListOf(),
    override val gid: String = UNSET,
    val idDocumentNumber: String? = null,
    val idDocumentType: DocumentType? = null,
    val location: GeoLocation? = null
) : LegalEntity() {
    val emails get() = comms.filterIsInstance<UserEmail>().toIList()
    val phones get() = comms.filterIsInstance<UserPhone>().toIList()
}