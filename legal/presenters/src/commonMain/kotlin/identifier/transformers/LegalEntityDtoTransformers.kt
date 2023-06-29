package identifier.transformers

import identifier.CorporateDto
import identifier.IdentifierSettings
import identifier.IndividualDto
import identifier.LegalEntityDto

fun LegalEntityDto.toPresenter() = when (this) {
    is CorporateDto -> toPresenter()
    is IndividualDto -> toPresenter()
}

fun Collection<LegalEntityDto>.toPresenters() = map { it.toPresenter() }