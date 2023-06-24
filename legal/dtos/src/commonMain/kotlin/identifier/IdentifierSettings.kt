package identifier

import geo.Country

interface IdentifierSettings<out D> {
    val data: D
    val country: Country

    fun <R> map(transformer: (D) -> R): IdentifierSettings<R>
}