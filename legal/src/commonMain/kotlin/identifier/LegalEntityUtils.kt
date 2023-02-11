package identifier

import kollections.iListOf

fun LegalEntity.toCorporate() = when (this) {
    is Corporate -> this
    is Individual -> toCorporate()
}

fun LegalEntity.toIndividual() = when (this) {
    is Corporate -> toIndividual()
    is Individual -> this
}

private inline fun Individual.toCorporate() = Corporate(
    uid = uid,
    name = name,
    headQuarters = CorporateBranch(
        name = "Headquarters",
        contacts = iListOf(
            Contact(
                uid = uid,
                name = name,
                comms = comms,
                role = "Owner"
            )
        ),
        location = location
    )
)

private inline fun Corporate.toIndividual() = Individual(
    uid = uid,
    name = name,
    comms = primaryContact?.comms ?: iListOf()
)

val Corporate.primaryContact get() = headQuarters.contacts.firstOrNull()

val LegalEntity.primaryEmail
    get() = when (this) {
        is Corporate -> primaryEmail
        is Individual -> primaryEmail
    }

val LegalEntity.primaryPhone
    get() = when (this) {
        is Corporate -> primaryPhone
        is Individual -> primaryPhone
    }

private inline val Corporate.primaryEmail get() = primaryContact?.emails?.firstOrNull()

private inline val Corporate.primaryPhone get() = primaryContact?.phones?.firstOrNull()

private inline val Individual.primaryEmail get() = emails.firstOrNull()

private inline val Individual.primaryPhone get() = phones.firstOrNull()