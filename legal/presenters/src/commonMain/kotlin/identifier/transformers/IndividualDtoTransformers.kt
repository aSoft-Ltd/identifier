package identifier.transformers

import identifier.IndividualDto
import identifier.IndividualPresenter
import identifier.params.IndividualParams

fun IndividualDto.toPresenter():IndividualPresenter {
    println("toPresenter====");
    println(address)
    println(location)
    return IndividualPresenter(
        src = this,
        uid = uid,
        name = name,
        image = image,
        title = title,
        dob = dob,
        gender = gender,
        comms = comms,
        gid = gid,
        idDocumentNumber = idDocumentNumber,
        idDocumentType = idDocumentType,
        location = location,
        address = address
    )
}

fun IndividualDto?.toParams() = IndividualParams(
    name = this?.name ?: "",
    email = this?.emails?.firstOrNull()?.value,
    phone = this?.phones?.firstOrNull()?.value,
    title = this?.title,
    dob = this?.dob,
    gender = this?.gender,
    idDocumentNumber = this?.idDocumentNumber,
    idDocumentType = this?.idDocumentType,
    location = this?.location,
    address = this?.address
)