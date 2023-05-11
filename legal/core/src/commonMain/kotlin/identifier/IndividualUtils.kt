package identifier

import identifier.params.IndividualProfileParams

fun Individual.toProfileParams() = IndividualProfileParams(
    name, title, dob, gender, idDocumentNumber, idDocumentType, location
)