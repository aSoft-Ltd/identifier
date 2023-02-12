@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package identifier.fields

import identifier.params.IndividualParams as Params
import identifier.DocumentType
import identifier.Individual
import presenters.Fields
import presenters.Option
import presenters.date
import presenters.email
import presenters.location
import presenters.name
import presenters.phone
import presenters.selectSingle
import presenters.text
import kotlin.js.JsExport

class IndividualFields(customer: Individual?) : Fields() {
    val name = name(
        name = Params::name,
        value = customer?.name,
        isRequired = true
    )

    val title = selectSingle(
        name = Params::title,
        items = listOf("Mr", "Mrs", "Ms"),
        mapper = { Option(it) }
    )

    val email = email(
        name = Params::email,
        value = customer?.emails?.firstOrNull()?.value
    )

    val phone = phone(
        name = Params::phone,
        value = customer?.phones?.firstOrNull()?.value
    )

    val dob = date(
        name = Params::dob,
        label = "Date of birth",
        value = customer?.dob
    )

    val location = location(
        name = Params::location,
        value = customer?.location
    )

    val address = text(
        name = "address",
        value = customer?.location?.address
    )

    val idNumber = text(
        name = Params::idDocumentNumber,
        label = "Id Number",
        value = customer?.idDocumentNumber
    )

    val idType = selectSingle(
        name = Params::idDocumentType,
        label = "Id Type",
        items = (DocumentType.values().toSet() - DocumentType.UNKNOWN),
        value = customer?.idDocumentType,
        mapper = { Option(it.label, it.name) }
    )
}