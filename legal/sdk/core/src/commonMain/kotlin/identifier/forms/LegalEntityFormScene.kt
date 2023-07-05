@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package identifier.forms

import cinematic.LazyScene
import geo.Country
import hormone.Loader
import identifier.CorporatePresenter
import identifier.IdentifierScenesConfig
import identifier.IdentifierSettings
import identifier.IndividualPresenter
import identifier.LegalEntityDto
import identifier.LegalEntityPresenter
import identifier.fields.CorporateFields
import identifier.fields.IndividualFields
import identifier.fields.LegalEntityFields
import identifier.toCorporate
import identifier.toIndividual
import identifier.utils.loadCacheableLegalEntityOrNull
import identifier.utils.loading
import kase.Pending
import kase.Success
import kase.toLazyState
import koncurrent.Later
import koncurrent.later.finally
import symphony.FormField
import kotlin.js.JsExport

abstract class LegalEntityFormScene(
    private val config: IdentifierScenesConfig<Loader<LegalEntityDto>>
) : LazyScene<FormField<LegalEntityPresenter, LegalEntityFields<*>>>(Pending) {

    abstract val api: Loader<LegalEntityDto>

    var original: IdentifierSettings<LegalEntityPresenter?>? = null

    protected fun load(
        uid: String?,
        loader: (LegalEntityDto?) -> Later<IdentifierSettings<LegalEntityPresenter?>>
    ): Later<Any> = config.loadCacheableLegalEntityOrNull(uid) {
        ui.value = loading(uid, "form")
    }.andThen {
        ui.value = loading(uid, "settings")
        loader(it)
    }.then {
        original = it
        when (val entity = it.data) {
            is CorporatePresenter -> corporateForm(it.country, entity)
            else -> individualForm(it.country, entity as? IndividualPresenter)
        }
    }.finally {
        ui.value = it.toLazyState { onRetry { load(uid, loader) } }
    }

    fun switchToCorporateForm() {
        val og = original ?: return
        ui.value = Success(corporateForm(og.country, og.data?.toCorporate()))
    }

    fun switchToIndividualForm() {
        val og = original ?: return
        ui.value = Success(individualForm(og.country, og.data?.toIndividual()))
    }

    override fun deInitialize() {
        original = null
        super.deInitialize()
    }

    abstract fun individualForm(
        country: Country,
        customer: IndividualPresenter?
    ): FormField<LegalEntityPresenter, IndividualFields>

    abstract fun corporateForm(
        country: Country,
        customer: CorporatePresenter?
    ): FormField<LegalEntityPresenter, CorporateFields>
}