package identifier.transformers

import identifier.Individual
import identifier.params.IndividualParams

fun Individual?.toParams() = IndividualParams(
    name = this?.name ?: "",
    email = this?.emails?.firstOrNull()?.value,
    phone = this?.phones?.firstOrNull()?.value,
    title = this?.title,
    dob = this?.dob,
    gender = this?.gender,
    idDocumentNumber = this?.idDocumentNumber,
    idDocumentType = this?.idDocumentType,
    location = this?.location
)