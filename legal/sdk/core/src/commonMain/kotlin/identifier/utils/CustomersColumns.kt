package identifier.utils

import identifier.CorporateDto
import identifier.LegalEntityDto
import identifier.IndividualDto
import symphony.columnsOf

fun LegalEntityColumns() = columnsOf<LegalEntityDto> {
    selectable()
    column("Id") { it.item.gid }
    column("Name") { it.item.name }
    column("industry") {
        when (val c = it.item) {
            is CorporateDto -> c.industry
            is IndividualDto -> "N/A"
        }
    }
    column("Country") {
        when (val c = it.item) {
            is CorporateDto -> c.headQuarters.location?.country
            is IndividualDto -> c.location?.country
        }
    }
    column("HeadQuarters") {
        when (val c = it.item) {
            is CorporateDto -> c.headQuarters.location
            is IndividualDto -> "N/A"
        }
    }

    column("d.o.b") { (it.item as? IndividualDto)?.dob?.toString() ?: "N/A" }

    column("Registration No") {
        when (val c = it.item) {
            is CorporateDto -> c.registrationNo.toString()
            is IndividualDto -> "N/A"
        }
    }
    column("Registration Date") {
        when (val c = it.item) {
            is CorporateDto -> c.registrationDate.toString()
            is IndividualDto -> "N/A"
        }
    }
    column("TIN") {
        when (val c = it.item) {
            is CorporateDto -> c.taxPayerIdentificationNo.toString()
            is IndividualDto -> "N/A"
        }
    }
    column("Website") {
        when (val c = it.item) {
            is CorporateDto -> c.website.toString()
            is IndividualDto -> "N/A"
        }
    }
}