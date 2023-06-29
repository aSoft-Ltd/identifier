package identifier.utils

import identifier.CorporatePresenter
import identifier.IndividualDto
import identifier.IndividualPresenter
import identifier.LegalEntityPresenter
import symphony.columnsOf

fun columnsOfLegalEntity() = columnsOf<LegalEntityPresenter> {
    selectable()
    column("Id") { it.item.gid }
    column("Name") { it.item.name }
    column("industry") {
        when (val c = it.item) {
            is CorporatePresenter -> c.industry
            is IndividualPresenter -> "N/A"
        }
    }
    column("Country") {
        when (val c = it.item) {
            is CorporatePresenter -> c.headQuarters.location?.country
            is IndividualPresenter -> c.location?.country
        }
    }
    column("HeadQuarters") {
        when (val c = it.item) {
            is CorporatePresenter -> c.headQuarters.location
            is IndividualPresenter -> "N/A"
        }
    }

    column("d.o.b") { (it.item as? IndividualDto)?.dob?.toString() ?: "N/A" }

    column("Registration No") {
        when (val c = it.item) {
            is CorporatePresenter -> c.registrationNo.toString()
            is IndividualPresenter -> "N/A"
        }
    }
    column("Registration Date") {
        when (val c = it.item) {
            is CorporatePresenter -> c.registrationDate.toString()
            is IndividualPresenter -> "N/A"
        }
    }
    column("TIN") {
        when (val c = it.item) {
            is CorporatePresenter -> c.taxPayerIdentificationNo.toString()
            is IndividualPresenter -> "N/A"
        }
    }
    column("Website") {
        when (val c = it.item) {
            is CorporatePresenter -> c.website.toString()
            is IndividualPresenter -> "N/A"
        }
    }
}