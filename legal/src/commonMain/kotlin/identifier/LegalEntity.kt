@file:JsExport

package identifier

import geo.GeoLocation
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@Serializable
sealed class LegalEntity {
    abstract val uid: String
    abstract val gid: String
    abstract val name: String

    val asIndividual get() = this as? Individual

    val asCorporate get() = this as? Corporate

    val loc: GeoLocation?
        get() = when (this) {
            is Corporate -> headQuarters.location
            is Individual -> location
        }
}