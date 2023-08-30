@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package identifier

import geo.GeoLocation
import kotlin.js.JsExport

data class CorporateBranchPresenter(
    val src: CorporateBranchDto,
    val name: String,
    val contacts: List<ContactPresenter>,
    val location: GeoLocation?,
    val address: String?,
)