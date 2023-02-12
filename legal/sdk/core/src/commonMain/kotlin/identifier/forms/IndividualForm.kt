@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package identifier.forms

import identifier.fields.IndividualFields as Fields
import identifier.params.IndividualParams as Params
import identifier.Individual
import presenters.Form
import presenters.FormActionsBuildingBlock
import presenters.FormConfig
import kotlin.js.JsExport

class IndividualForm(
    override val heading: String,
    override val entity: Individual?,
    config: FormConfig<Params>,
    initializer: FormActionsBuildingBlock<Params, Individual>
) : Form<Fields, Params, Individual>(
    heading, "Enter customer's info",
    fields = Fields(entity),
    config, initializer
), LegalEntityForm