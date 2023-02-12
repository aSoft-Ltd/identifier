@file:JsExport

package identifier.params

import kotlin.js.JsExport

data class ContactParams(
    val name: String,
    val role: String? = null,
    val email: String? = null,
    val phone: String? = null,
)