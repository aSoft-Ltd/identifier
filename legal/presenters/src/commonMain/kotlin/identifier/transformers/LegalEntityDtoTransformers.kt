package identifier.transformers

import identifier.CorporateDto
import identifier.IndividualDto
import identifier.LegalEntityDto

fun LegalEntityDto.toPresenter() = when (this) {
    is CorporateDto -> toPresenter()
    is IndividualDto -> toPresenter()
}