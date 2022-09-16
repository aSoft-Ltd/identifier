package identifier

import kotlin.js.JsName

object PhoneGenerator {
    val providerNumbers = listOf(22, 61, 65, 67, 68, 71, 74, 75, 76, 78)
    fun random(code: String = "255") = Phone(code + providerNumbers.random() + (1000000..9999999).random())

    @JsName("randomPhones")
    fun random(size: Int) = List(size) { random() }
}