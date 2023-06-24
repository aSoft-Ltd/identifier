@file:JsExport

package identifier

import geo.GeoLocation
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@Serializable
sealed class LegalEntityDto {
    abstract val uid: String
    abstract val gid: String
    abstract val name: String
    abstract val image: String?

    val asIndividual get() = this as? IndividualDto

    val asCorporate get() = this as? CorporateDto

    val loc: GeoLocation?
        get() = when (this) {
            is CorporateDto -> headQuarters.location
            is IndividualDto -> location
        }
}