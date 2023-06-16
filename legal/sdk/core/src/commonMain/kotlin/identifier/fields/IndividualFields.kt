@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package identifier.fields

import identifier.params.IndividualParams as Params
import identifier.DocumentType
import identifier.Individual
import identifier.transformers.toParams
import symphony.Fields
import symphony.Option
import symphony.date
import symphony.email
import symphony.location
import symphony.name
import symphony.phone
import symphony.selectSingle
import symphony.text
import kotlin.js.JsExport

class IndividualFields(customer: Individual?) : Fields<Params>(customer.toParams()) {
    val name = name(
        name = output::name,
        isRequired = true
    )

    val title = selectSingle(
        name = output::title,
        items = listOf("Mr", "Mrs", "Ms"),
        mapper = { Option(it) }
    )

    val email = email(
        name = output::email,
        value = customer?.emails?.firstOrNull()?.value
    )

//    val phone = phone(
//        name = output::phone,
//        value = customer?.phones?.firstOrNull()?.value
//    )

    val dob = date(
        name = output::dob,
        label = "Date of birth",
        value = customer?.dob
    )

    val location = location(
        name = output::location,
        value = customer?.location
    )

    val address = text(
        name = "address",
        value = customer?.location?.address
    )

    val idNumber = text(
        name = output::idDocumentNumber,
        label = "Id Number",
        value = customer?.idDocumentNumber
    )

    val idType = selectSingle(
        name = output::idDocumentType,
        label = "Id Type",
        items = (DocumentType.values().toSet() - DocumentType.UNKNOWN),
        value = customer?.idDocumentType,
        mapper = { Option(it.label, it.name) }
    )
}