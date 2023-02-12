package identifier.utils

import identifier.Corporate
import identifier.LegalEntity
import identifier.Individual
import presenters.collections.columnsOf

fun LegalEntityColumns() = columnsOf<LegalEntity> {
    selectable()
    column("Id") { it.item.gid }
    column("Name") { it.item.name }
    column("industry") {
        when (val c = it.item) {
            is Corporate -> c.industry.toString()
            is Individual -> "N/A"
        }
    }
    column("Country") {
        when (val c = it.item) {
            is Corporate -> c.headQuarters.location?.country.toString()
            is Individual -> c.location?.country.toString()
        }
    }
    column("HeadQuarters") {
        when (val c = it.item) {
            is Corporate -> c.headQuarters.location.toString()
            is Individual -> "N/A"
        }
    }

    column("d.o.b") { (it.item as? Individual)?.dob?.toString() ?: "N/A" }

    column("Registration No") {
        when (val c = it.item) {
            is Corporate -> c.registrationNo.toString()
            is Individual -> "N/A"
        }
    }
    column("Registration Date") {
        when (val c = it.item) {
            is Corporate -> c.registrationDate.toString()
            is Individual -> "N/A"
        }
    }
    column("TIN") {
        when (val c = it.item) {
            is Corporate -> c.taxPayerIdentificationNo.toString()
            is Individual -> "N/A"
        }
    }
    column("Website") {
        when (val c = it.item) {
            is Corporate -> c.website.toString()
            is Individual -> "N/A"
        }
    }
}