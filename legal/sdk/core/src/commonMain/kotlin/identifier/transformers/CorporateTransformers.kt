package identifier.transformers

import identifier.Corporate
import identifier.params.CorporateParams
import identifier.primaryContact

fun Corporate?.toParams() = CorporateParams(
    name = this?.name ?: "",
    contactName = this?.primaryContact?.name,
    contactEmail = this?.primaryContact?.emails?.firstOrNull()?.value,
    contactPhone = this?.primaryContact?.phones?.firstOrNull()?.value,
    contactRole = this?.primaryContact?.role,
    industry = this?.industry,
    registrationNo = this?.registrationNo,
    registrationDate = this?.registrationDate,
    tin = this?.taxPayerIdentificationNo,
    vat = this?.vatNo,
    website = this?.website,
    hqLocation = this?.headQuarters?.location,
    businessType = this?.type
)