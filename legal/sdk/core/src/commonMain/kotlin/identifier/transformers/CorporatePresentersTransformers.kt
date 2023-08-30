package identifier.transformers

import identifier.CorporatePresenter
import identifier.IndividualPresenter
import identifier.fields.CorporateOutput
import identifier.fields.IndividualOutput
import identifier.primaryContact
import identifier.primaryEmail
import identifier.primaryPhone

fun CorporatePresenter?.toOutput() = CorporateOutput(
    src = this,
    name = this?.name ?: "",
    industry = this?.industry,
    businessType = this?.type,
    headquarters = this?.headQuarters?.location,
    address = this?.headQuarters?.address,
    registrationNo = this?.registrationNo,
    registrationDate = this?.registrationDate,
    tin = this?.taxPayerIdentificationNo,
    vat = this?.vatNo,
    website = this?.website,
    contactName = this?.primaryContact?.name,
    contactEmail = this?.primaryContact?.emails?.firstOrNull()?.value,
    contactPhone = this?.primaryContact?.phones?.firstOrNull()?.toOutput(),
    numberOfEmployees = null,
    contactRole = this?.primaryContact?.role,
    contactTitle = null
)