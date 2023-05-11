package identifier

import epsilon.Blob
import identifier.params.CorporateParams
import kash.Currency
import koncurrent.Later

interface OrganisationProfileApi {

    fun update(params: CorporateParams): Later<Corporate>

    fun updateLogo(logo: Blob): Later<Corporate>

    fun updateCurrency(currency: Currency): Later<Currency>

    fun updateTimezone(tz: String): Later<String>

    fun updateSalesTax(percentage: Int): Later<Int>
}