package identifier

import kollections.iListOf

fun LegalEntityDto.toCorporate() = when (this) {
    is CorporateDto -> this
    is IndividualDto -> toCorporate()
}

fun LegalEntityDto.toIndividual() = when (this) {
    is CorporateDto -> toIndividual()
    is IndividualDto -> this
}

private inline fun IndividualDto.toCorporate() = CorporateDto(
    uid = uid,
    name = name,
    headQuarters = CorporateBranchDto(
        name = "Headquarters",
        contacts = iListOf(
            ContactDto(
                uid = uid,
                name = name,
                comms = comms,
                role = "Owner"
            )
        ),
        location = location,
        address = address
    )
)

private inline fun CorporateDto.toIndividual() = IndividualDto(
    uid = uid,
    name = name,
    comms = primaryContact?.comms ?: iListOf()
)

val CorporateDto.primaryContact get() = headQuarters.contacts.firstOrNull()

val LegalEntityDto.primaryEmail
    get() = when (this) {
        is CorporateDto -> primaryEmail
        is IndividualDto -> primaryEmail
    }

val LegalEntityDto.primaryPhone
    get() = when (this) {
        is CorporateDto -> primaryPhone
        is IndividualDto -> primaryPhone
    }

private inline val CorporateDto.primaryEmail get() = primaryContact?.emails?.firstOrNull()

private inline val CorporateDto.primaryPhone get() = primaryContact?.phones?.firstOrNull()

private inline val IndividualDto.primaryEmail get() = emails.firstOrNull()

private inline val IndividualDto.primaryPhone get() = phones.firstOrNull()