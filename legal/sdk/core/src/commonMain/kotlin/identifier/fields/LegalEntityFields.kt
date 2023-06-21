@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package identifier.fields

import identifier.LegalEntity
import symphony.Fields
import kotlin.js.JsExport

sealed class LegalEntityFields<O>(initial: O) : Fields<O>(initial) {
    abstract val entity: LegalEntity?
    val asIndividual get() = this as? IndividualFields
    val asCorporate get() = this as? IndividualFields
}