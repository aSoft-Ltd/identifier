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
data class IndividualParams(
    val name: String,
    val email: String? = null,
    val phone: String? = null,
    val title: String? = null,
    val dob: LocalDate? = null,
    val gender: Gender? = null,
    val idDocumentNumber: String? = null,
    val idDocumentType: DocumentType? = null,
    val location: GeoLocation? = null,
    val address: String? = null
)