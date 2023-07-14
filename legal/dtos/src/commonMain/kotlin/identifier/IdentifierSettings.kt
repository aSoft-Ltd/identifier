package identifier

import geo.Country

interface IdentifierSettings<out D> {
    val data: D
    val country: Country
    val company: CorporateDto
    val user: IndividualDto

    fun <R> map(transformer: (D) -> R): IdentifierSettings<R>
}