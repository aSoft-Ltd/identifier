@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package identifier.params

import geo.AddressDto
import geo.GeoLocation
import identifier.CorporateType
import identifier.Industry
import kotlinx.serialization.Serializable
import krono.LocalDate
import kotlin.js.JsExport

@Serializable
data class CorporateParams(
    val name: String,
    val contactName: String? = null,
    val contactEmail: String? = null,
    val contactPhone: String? = null,
    val contactRole: String? = null,
    val industry: Industry? = null,
    val registrationNo: String? = null,
    val registrationDate: LocalDate? = null,
    val tin: String? = null,
    val vat: String? = null,
    val website: String? = null,
    val hqLocation: GeoLocation? = null,
    val address: AddressDto? = null,
    val businessType: CorporateType? = null
)