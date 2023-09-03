@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package symphony

import geo.Country
import kollections.List
import symphony.properties.Settable
import kotlin.js.JsExport
import kotlin.js.JsName

interface PhoneField : Field<PhoneOutput,PhoneFieldState>, PhoneFieldState {

    fun options(withSelect: Boolean = false): List<Option>

    fun searchByFiltering(key: String?)

    fun searchByOrdering(key: String?)

    fun clearSearch()

    fun selectCountryOption(option: Option)

    fun selectCountryLabel(optionLabel: String)

    fun selectCountryValue(optionValue: String)

    fun unsetCountry()

    fun setCountry(country: Country?)

    fun setBody(value: String?)

    @JsName("setBodyAsLong")
    fun setBody(long: Long?)
}