package identifier.transformers

import identifier.fields.IndividualOutput
import identifier.params.IndividualParams

fun IndividualOutput.toParams() = IndividualParams(
    name = name,
    email = email,
    phone = phone?.toString(),
    title = title,
    dob = dob,
    gender = gender,
    idDocumentNumber = idNumber,
    idDocumentType = idType,
    location = location,
)