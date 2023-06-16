@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package identifier.params

import identifier.Corporate
import geo.GeoLocation
import identifier.Industry
import kotlinx.serialization.Serializable
import krono.LocalDate
import kotlin.js.JsExport

@Serializable
data class CorporateParams(
    var name: String,
    var contactName: String? = null,
    var contactEmail: String? = null,
    var contactPhone: String? = null,
    var contactRole: String? = null,
    var industry: Industry? = null,
    var registrationNo: String? = null,
    var registrationDate: LocalDate? = null,
    var tin: String? = null,
    var vat: String? = null,
    var website: String? = null,
    var hqLocation: GeoLocation? = null,
    var businessType: Corporate.Type? = null
)