@file:JsExport

package identifier

import kotlin.js.JsExport

interface Savable : Unique, Deletable {
    @Deprecated("Try not to have this here. It is for backward compatibility with early versions of bitframe 2.0")
    fun copy(uid: String, deleted: Boolean): Savable
}