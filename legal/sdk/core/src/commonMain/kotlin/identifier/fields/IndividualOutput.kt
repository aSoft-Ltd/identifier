package identifier.fields

import geo.GeoLocation
import identifier.DocumentType
import identifier.Gender
import identifier.IndividualPresenter
import krono.LocalDate
import symphony.PhoneOutput

class IndividualOutput(
    val src: IndividualPresenter?,
    var name: String?,
    var title: String?,
    var email: String?,
    var phone: PhoneOutput?,
    var gender: Gender?,
    var dob: LocalDate?,
    var location: GeoLocation?,
    var address: String?,
    var idType: DocumentType?,
    var idNumber: String?
)