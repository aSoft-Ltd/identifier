@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package identifier.fields

import identifier.LegalEntityPresenter
import symphony.Fields
import kotlin.js.JsExport

sealed class LegalEntityFields<O : Any>(initial: O) : Fields<O>(initial) {
    abstract val entity: LegalEntityPresenter?
    val asIndividual get() = this as? IndividualFields
    val asCorporate get() = this as? CorporateFields

    companion object {
        val titles = listOf("Mr", "Mrs", "Ms", "Prof", "Sir", "Madam")
    }
}