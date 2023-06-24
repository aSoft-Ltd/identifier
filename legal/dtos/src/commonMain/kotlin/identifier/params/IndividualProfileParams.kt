@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package identifier.params

import identifier.DocumentType
import identifier.Gender
import geo.GeoLocation
import kotlinx.serialization.Serializable
import krono.LocalDate
import kotlin.js.JsExport

@Serializable
data class IndividualProfileParams(
    val name: String,
    val title: String?,
    val dob: LocalDate?,
    val gender: Gender?,
    val idDocumentNumber: String?,
    val idDocumentType: DocumentType?,
    val location: GeoLocation?
)