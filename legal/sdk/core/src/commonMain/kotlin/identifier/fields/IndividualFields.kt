@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package identifier.fields

import identifier.params.IndividualParams as Params
import identifier.DocumentType
import identifier.Individual
import identifier.transformers.toParams
import neat.required
import symphony.Fields
import symphony.Option
import symphony.date
import symphony.email
import symphony.location
import symphony.name
import symphony.selectSingle
import symphony.text
import kotlin.js.JsExport

class IndividualFields(
    override val entity: Individual?
) : LegalEntityFields<Params>(entity.toParams()) {
    val name = name(name = output::name) { required() }

    val title = selectSingle(
        name = output::title,
        items = listOf("Mr", "Mrs", "Ms"),
        mapper = { Option(it) }
    )

    val email = email(
        name = output::email,
        value = entity?.emails?.firstOrNull()?.value
    )

//    val phone = phone(
//        name = output::phone,
//        value = customer?.phones?.firstOrNull()?.value
//    )

    val dob = date(
        name = output::dob,
        label = "Date of birth",
        value = entity?.dob
    )

    val location = location(
        name = output::location,
        value = entity?.location
    )

//    val address = text(
//        name = "address",
//        value = customer?.location?.address
//    )

    val idNumber = text(
        name = output::idDocumentNumber,
        label = "Id Number",
        value = entity?.idDocumentNumber
    )

    val idType = selectSingle(
        name = output::idDocumentType,
        label = "Id Type",
        items = (DocumentType.values().toSet() - DocumentType.UNKNOWN),
        value = entity?.idDocumentType,
        mapper = { Option(it.label, it.name) }
    )
}