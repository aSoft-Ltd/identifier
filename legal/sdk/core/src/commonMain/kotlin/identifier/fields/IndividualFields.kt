@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package identifier.fields

import geo.Country
import identifier.DocumentType
import identifier.Gender
import identifier.IndividualPresenter
import identifier.transformers.toOutput
import neat.required
import symphony.Option
import krono.date
import symphony.email
import geo.location
import symphony.name
import symphony.selectSingle
import symphony.text
import symphony.phone
import symphony.toOption
import kotlin.js.JsExport

class IndividualFields(
    override val entity: IndividualPresenter?,
    country: Country
) : LegalEntityFields<IndividualOutput>(entity.toOutput()) {
    val name = name(name = output::name) { required() }

    val title = selectSingle(
        name = output::title,
        items = titles,
        mapper = { Option(it) }
    )

    val email = email(output::email)

    val phone = phone(
        name = output::phone,
        country = country
    )

    val dob = date(
        name = output::dob,
        label = "Date of birth"
    )

    val location = location(name = output::location)

    val address = text(name = output::address)

    val idNumber = text(
        name = output::idNumber,
        label = "Id Number"
    )

    val gender = selectSingle(
        name = output::gender,
        items = Gender.values().toList(),
        mapper = { it.toOption() }
    )

    val idType = selectSingle(
        name = output::idType,
        label = "Id Type",
        items = (DocumentType.values().toSet() - DocumentType.UNKNOWN),
        mapper = { Option(it.label, it.name) }
    )
}