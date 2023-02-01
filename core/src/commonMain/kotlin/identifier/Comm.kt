@file:JsExport

package identifier

import kotlin.js.JsExport

sealed interface Comm {
    val value: String

    val asPhone get() = this as? Phone
    val asEmail get() = this as? Email
}