@file:JsExport

package identifier

import kotlin.js.JsExport

sealed interface Comm {
    val value: String
}