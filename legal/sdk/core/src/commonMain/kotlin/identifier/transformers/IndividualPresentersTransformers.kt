package identifier.transformers

import identifier.IndividualPresenter
import identifier.fields.IndividualOutput
import identifier.primaryEmail
import identifier.primaryPhone

fun IndividualPresenter?.toOutput() = IndividualOutput(
    src = this,
    name = this?.name ?: "",
    title = this?.title,
    email = this?.primaryEmail?.value ?: "",
    phone = this?.primaryPhone?.toOutput(),
    dob = this?.dob,
    gender = this?.gender,
    location = this?.location,
    address = this?.address,
    idType = this?.idDocumentType,
    idNumber = this?.idDocumentNumber,
)