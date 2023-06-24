package identifier.transformers

import identifier.fields.CorporateOutput
import identifier.params.CorporateParams

fun CorporateOutput.toParams() = CorporateParams(
    name = name,
    contactName = contactName,
    contactEmail = contactEmail,
    contactPhone = contactPhone?.toString(),
    contactRole = contactRole,
    industry = industry,
    registrationNo = registrationNo,
    registrationDate = registrationDate,
    tin = tin,
    vat = vat,
    website = website,
    hqLocation = headquarters,
    businessType = businessType,
)