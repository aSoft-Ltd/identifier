package identifier.transformers

import identifier.fields.IndividualOutput
import identifier.params.IndividualParams
import kase.catching

fun IndividualOutput.toParams() = catching {
    IndividualParams(
        name = name ?: throw IllegalArgumentException("Name must not be null"),
        email = email,
        phone = phone?.toString(),
        title = title,
        dob = dob,
        gender = gender,
        idDocumentNumber = idNumber,
        idDocumentType = idType,
        location = location,
        address = address,
    )
}