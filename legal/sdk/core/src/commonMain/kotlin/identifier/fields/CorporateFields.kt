@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package identifier.fields

import geo.Country
import identifier.CorporatePresenter
import identifier.CorporateType
import identifier.Industry
import identifier.transformers.toOutput
import neat.min
import neat.required
import symphony.Option
import krono.date
import symphony.email
import symphony.filter
import symphony.integer
import geo.location
import symphony.name
import symphony.phone
import symphony.selectSingle
import symphony.text
import symphony.toOption
import kotlin.js.JsExport

class CorporateFields(
    override val entity: CorporatePresenter?,
    country: Country
) : LegalEntityFields<CorporateOutput>(entity.toOutput()) {

    val name = name(output::name)

    val industry = selectSingle(
        name = output::industry,
        label = "Industry",
        items = Industry.values().toList(),
        mapper = { it.toOption(it.label) },
        filter = { it, key -> it.filter(it.label, key) }
    )

    val businessType = selectSingle(
        name = output::businessType,
        label = "Business Type",
        items = CorporateType.values().toList(),
        mapper = { it.toOption(label = it.label) },
        filter = { it, key -> it.filter(it.label, key) }
    ) { required() }

    val headquarters = location(
        name = output::headquarters,
        label = "Headquarters",
    )

    val address = text(
        name = output::address,
        label = "Address"
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

    val contactPhone = phone(
        name = output::contactPhone,
        label = "Contact Phone",
        country = country
    )

    val numberOfEmployees = integer(
        name = output::numberOfEmployees,
        label = "Number of Employees"
    )

    val contactRole = selectSingle(
        name = output::contactRole,
        label = "Contact Role",
        items = listOf("Manager", "Officer", "Accountant", "Other"),
        mapper = { Option(it) }
    )

    val contactTitle = selectSingle(
        name = output::contactTitle,
        label = "Contact Title",
        items = titles,
        mapper = { Option(it) }
    )
}