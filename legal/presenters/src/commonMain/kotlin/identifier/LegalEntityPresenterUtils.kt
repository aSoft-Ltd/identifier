package identifier

import identifier.transformers.toPresenter

fun LegalEntityPresenter.toCorporate() = when (this) {
    is CorporatePresenter -> this
    is IndividualPresenter -> src.toCorporate().toPresenter()
}

fun LegalEntityPresenter.toIndividual() = when (this) {
    is CorporatePresenter -> src.toIndividual().toPresenter()
    is IndividualPresenter -> this
}

val CorporatePresenter.primaryContact get() = headQuarters.contacts.firstOrNull()

val LegalEntityPresenter.primaryEmail
    get() = when (this) {
        is CorporatePresenter -> primaryEmail
        is IndividualPresenter -> primaryEmail
    }

val LegalEntityPresenter.primaryPhone
    get() = when (this) {
        is CorporatePresenter -> primaryPhone
        is IndividualPresenter -> primaryPhone
    }

private inline val CorporatePresenter.primaryEmail get() = primaryContact?.emails?.firstOrNull()

private inline val CorporatePresenter.primaryPhone get() = primaryContact?.phones?.firstOrNull()

private inline val IndividualPresenter.primaryEmail get() = emails.firstOrNull()

private inline val IndividualPresenter.primaryPhone get() = phones.firstOrNull()