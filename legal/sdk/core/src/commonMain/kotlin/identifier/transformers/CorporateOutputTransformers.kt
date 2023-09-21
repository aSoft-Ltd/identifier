package identifier.transformers

import identifier.fields.CorporateOutput
import identifier.params.CorporateParams
import kase.catching

fun CorporateOutput.toParams() = catching {
    CorporateParams(
        name = name ?: throw IllegalArgumentException("Name must not be null"),
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
        address = null, // Lets find a reversible way
        businessType = businessType,
    )
}