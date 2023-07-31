package identifier.transformers

import identifier.CorporateDto
import identifier.CorporatePresenter
import identifier.params.CorporateParams
import identifier.primaryContact

fun CorporateDto?.toParams() = CorporateParams(
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

fun CorporateDto.toPresenter() = CorporatePresenter(
    src = this,
    uid = uid,
    name = name,
    image = image,
    headQuarters = headQuarters.toPresenter(),
    branches = branches.map { it.toPresenter() },
    registrationNo = registrationNo,
    registrationDate = registrationDate,
    taxPayerIdentificationNo = taxPayerIdentificationNo,
    vatNo = vatNo,
    website = website,
    industry = industry,
    gid = gid,
    type = type,
)