package identifier.fields

import geo.GeoLocation
import identifier.CorporatePresenter
import identifier.CorporateType
import identifier.Industry
import krono.LocalDate
import symphony.PhoneOutput

class CorporateOutput(
    val src: CorporatePresenter?,
    var name: String?,
    var industry: Industry?,
    var businessType: CorporateType?,
    var headquarters: GeoLocation?,
    var address: String?,
    var registrationNo: String?,
    var registrationDate: LocalDate?,
    var tin: String?,
    var vat: String?,
    var website: String?,
    var contactName: String?,
    var contactEmail: String?,
    var contactPhone: PhoneOutput?,
    var contactRole: String?,
    var contactTitle: String?,
    var numberOfEmployees: Int?,
)