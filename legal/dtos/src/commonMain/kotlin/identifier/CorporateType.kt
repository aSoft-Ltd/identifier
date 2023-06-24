@file:JsExport

package identifier

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@Serializable
enum class CorporateType(val label: String) {
    NGO("NGO"),
    COMPANY("Company"),
    GOVERNMENT_INSTITUTION("Government Institution")
}