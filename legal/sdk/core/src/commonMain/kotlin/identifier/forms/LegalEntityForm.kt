@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package identifier.forms

import identifier.LegalEntity
import kotlin.js.JsExport

sealed interface LegalEntityForm {
    val entity: LegalEntity?

    val asIndividual get() = this as? IndividualForm
    val asCorporate get() = this as? CorporateForm
}