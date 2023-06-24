package identifier

import koncurrent.Later
import kotlin.js.JsName

interface IdentifierApi {

    @JsName("settingsWithData")
    fun <R> settings(data: R): Later<IdentifierSettings<R>>
    fun settings() = settings(null)
}