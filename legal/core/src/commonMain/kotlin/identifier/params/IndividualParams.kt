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
    var name: String,
    var email: String? = null,
    var phone: String? = null,
    var title: String? = null,
    var dob: LocalDate? = null,
    var gender: Gender? = null,
    var idDocumentNumber: String? = null,
    var idDocumentType: DocumentType? = null,
    var location: GeoLocation? = null
)