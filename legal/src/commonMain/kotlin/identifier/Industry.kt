package identifier

import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

@Serializable
@JsExport
enum class Industry(val label: String) {
    AUTOMOTIVE("Automotive"),
    BASIC_MATERIALS("Basic Materials"),
    BEAUTY_PRODUCTS("Beauty Products"),
    CONSUMER_GOODS("Consumer Goods"),
    CONSTRUCTION("Construction"),
    CONSUMER_SERVICES("Consumer Services"),
    EDUCATION("Education"),
    ENERGY("Energy"),
    ENTERTAINMENT("Entertaiment"),
    FASHION("Fashion"),
    FINANCIAL_SERVICES("Financial Services"),
    FOOD_AND_BEVERAGE("Food and Beverage"),
    HEALTH_CARE("Health Care"),
    INDUSTRIALS("Industrials"),
    MANUFACTURING("Manufacturing"),
    OIL_AND_GAS("Oil and Gas"),
    PROFESSIONAL_SERVICES("Professional Services"),
    TECHNOLOGY("Technology"),
    TOURISM("Tourism"),
    TELECOMMUNICATIONS("Telecommunications"),
    UTILITIES("Utilities"),
}