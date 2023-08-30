@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package identifier

import geo.GeoLocation
import kollections.toIList
import krono.LocalDate
import kotlin.js.JsExport

data class IndividualPresenter(
    override val src: IndividualDto,
    override val uid: String,
    override val name: String,
    override val image: String?,
    val title: String?,
    val dob: LocalDate?,
    val gender: Gender?,
    val comms: List<Comm>,
    override val gid: String,
    val idDocumentNumber: String?,
    val idDocumentType: DocumentType?,
    val location: GeoLocation?,
    val address: String?
) : LegalEntityPresenter() {
    val emails get() = comms.filterIsInstance<UserEmail>().toIList()
    val phones get() = comms.filterIsInstance<UserPhone>().toIList()
}