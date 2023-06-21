@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package identifier.fields

import identifier.Corporate
import identifier.Industry
import identifier.transformers.toParams
import neat.min
import neat.required
import symphony.Option
import symphony.date
import symphony.email
import symphony.location
import symphony.name
import symphony.selectSingle
import symphony.text
import kotlin.js.JsExport
import identifier.params.CorporateParams as Params

class CorporateFields(
    override val entity: Corporate?
) : LegalEntityFields<Params>(entity.toParams()) {

    val name = name(output::name)

    val industry = selectSingle(
        name = output::industry,
        label = "Industry",
        items = Industry.values().toList(),
        mapper = { Option(it.label, it.name) },
    )

    val businessType = selectSingle(
        name = output::businessType,
        label = "Business Type",
        items = Corporate.Type.values().toList(),
        mapper = { Option(it.label, it.name) },
    ) { required() }

    val headquarters = location(
        name = output::hqLocation,
        label = "Headquarters",
    )

    val registrationNo = text(
        name = output::registrationNo,
        label = "Registration No"
    )

    val registrationDate = date(
        name = output::registrationDate,
        label = "Registration Date"
    )

    val tin = text(
        name = output::tin,
        label = "TIN",
    )

    val vat = text(
        name = output::vat,
        label = "VAT Number"
    )

    val website = text(
        name = output::website,
        label = "Website",
    ) {
        min(3)
        optional()
    }

    val contactName = name(
        name = output::contactName,
        label = "Contact Name",
    )

    val contactEmail = email(
        name = output::contactEmail,
        label = "Contact Email",
    )

//    val contactPhone = phone(
//        name = output::contactPhone,
//        label = "Contact Phone",
//    )

//    val numberOfEmployees = integer(
//        name = "NoE",
//        label = "Number of Employees"
//    )

    val contactRole = selectSingle(
        name = output::contactRole,
        label = "Contact Role",
        items = listOf("Manager", "Officer", "Accountant", "Other"),
        mapper = { Option(it) }
    )
}