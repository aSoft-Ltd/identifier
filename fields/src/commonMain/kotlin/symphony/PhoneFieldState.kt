@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package symphony

import geo.Country
import kollections.List
import kotlin.js.JsExport

interface PhoneFieldState : FieldState<PhoneOutput> {
    val name: String
    val label: Label
    val countries : List<Country>
    val hint: String
    val country: Country?
    val body: Long?
    val option: Option?
}