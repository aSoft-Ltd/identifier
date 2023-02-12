@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package identifier.fields

import identifier.params.CorporateParams as Params
import identifier.Corporate
import identifier.Industry
import identifier.primaryContact
import identifier.primaryEmail
import identifier.primaryPhone
import presenters.Fields
import presenters.Option
import presenters.date
import presenters.email
import presenters.integer
import presenters.location
import presenters.name
import presenters.phone
import presenters.selectSingle
import presenters.text
import kotlin.js.JsExport

class CorporateFields(val customer: Corporate?) : Fields() {

    val name = name(
        name = Params::name,
        value = customer?.name,
        isRequired = true
    )

    val industry = selectSingle(
        name = Params::industry,
        label = "Industry",
        items = Industry.values().toList(),
        value = customer?.industry,
        mapper = { Option(it.label, it.name) },
    )

    val businessType = selectSingle(
        name = Params::businessType,
        label = "Business Type",
        isRequired = true,
        items = Corporate.Type.values().toList(),
        value = customer?.type,
        mapper = { Option(it.label, it.name) },
    )

    val headquarters = location(
        name = Params::hqLocation,
        label = "Headquarters",
        value = customer?.headQuarters?.location
    )

    val registrationNo = text(
        name = Params::registrationNo,
        label = "Registration No",
        value = customer?.registrationNo
    )

    val registrationDate = date(
        name = Params::registrationDate,
        label = "Registration Date",
        value = customer?.registrationDate
    )

    val tin = text(
        name = Params::tin,
        label = "TIN",
        value = customer?.taxPayerIdentificationNo
    )

    val vat = text(
        name = Params::vat,
        label = "VAT Number",
        value = customer?.vatNo
    )

    val website = text(
        name = Params::website,
        label = "Website",
        value = customer?.website,
        minLength = 3
    )

    val contactName = name(
        name = Params::contactName,
        label = "Contact Name",
        value = customer?.primaryContact?.name,
    )

    val contactEmail = email(
        name = Params::contactEmail,
        label = "Contact Email",
        value = customer?.primaryEmail?.value
    )

    val contactPhone = phone(
        name = Params::contactPhone,
        label = "Contact Phone",
        value = customer?.primaryPhone?.value
    )

    val numberOfEmployees = integer(
        name = "NoE",
        label = "Number of Employees"
    )

    val contactRole = selectSingle(
        name = Params::contactRole,
        label = "Contact Role",
        items = listOf("Manager", "Officer", "Accountant", "Other"),
        mapper = { Option(it) }
    )
}