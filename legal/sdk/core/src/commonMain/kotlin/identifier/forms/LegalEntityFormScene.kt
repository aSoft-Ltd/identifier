@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package identifier.forms

import cinematic.LazyScene
import hormone.Loader
import identifier.Corporate
import identifier.Individual
import identifier.LegalEntity
import identifier.toCorporate
import identifier.toIndividual
import identifier.utils.loadCacheableLegalEntityOrNull
import identifier.utils.loading
import kase.LazyState
import kase.Pending
import kase.Success
import kase.map
import kase.toLazyState
import koncurrent.Later
import koncurrent.later.finally
import cinematic.mutableLiveOf
import identifier.IdentifierScopeConfig
import kase.bagOf
import kotlin.js.JsExport

abstract class LegalEntityFormScene(
    private val config: IdentifierScopeConfig<Loader<LegalEntity>>
) : LazyScene<LegalEntityForm>(Pending) {

    val original = bagOf<LegalEntity>()

    protected fun initializeWith(uid: String?): Later<LegalEntityForm> = config.loadCacheableLegalEntityOrNull(uid) {
        val loading = loading(uid, "form")
        ui.value = loading
    }.then {
        original.value = it
        when (it) {
            is Corporate -> corporateForm(it)
            is Individual -> individualForm(it)
            null -> individualForm(it)
        }
    }.finally {
        ui.value = it.toLazyState { onRetry { initializeWith(uid) } }
    }

    fun switchToCorporateForm() {
        ui.value = Success(corporateForm(original.value?.toCorporate()))
    }

    fun switchToIndividualForm() {
        ui.value = Success(individualForm(original.value?.toIndividual()))
    }

    override fun deInitialize() {
        original.clean()
        super.deInitialize()
    }

    abstract fun individualForm(customer: Individual?): IndividualForm

    abstract fun corporateForm(customer: Corporate?): CorporateForm
}