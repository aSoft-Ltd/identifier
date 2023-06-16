@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package identifier.forms

import identifier.fields.IndividualFields as Fields
import identifier.params.IndividualParams as Params
import identifier.Individual
import symphony.Form
import symphony.FormActionsBuildingBlock
import symphony.FormConfig
import kotlin.js.JsExport

class IndividualForm(
    override val heading: String,
    override val entity: Individual?,
    config: FormConfig,
    initializer: FormActionsBuildingBlock<Params, Individual>
) : Form<Fields, Params, Individual>(
    heading, "Enter customer's info",
    fields = Fields(entity),
    config, initializer
), LegalEntityForm