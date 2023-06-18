@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package identifier.forms

import identifier.fields.CorporateFields as Fields
import identifier.params.CorporateParams as Params
import identifier.Corporate
import symphony.Form
import symphony.FormInitializer
import symphony.FormConfig
import kotlin.js.JsExport

class CorporateForm(
    override val heading: String,
    override val entity: Corporate?,
    config: FormConfig,
    initializer: FormInitializer<Params, Corporate>
) : Form<Fields, Params, Corporate>(
    heading, "Enter customer's info",
    fields = Fields(entity),
    config, initializer
), LegalEntityForm