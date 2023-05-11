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
import kotlin.js.JsExport

abstract class LegalEntityFormScene(
    private val config: IdentifierScopeConfig<Loader<LegalEntity>>
) : LazyScene<LegalEntityForm>(Pending) {

    val original = mutableLiveOf<LazyState<LegalEntity?>>(Pending)

    fun initialize(uid: String? = null): Later<LegalEntityForm> = config.loadCacheableLegalEntityOrNull(uid) {
        val loading = loading(uid, "form")
        original.value = loading
        ui.value = loading
    }.then {
        when (it) {
            is Corporate -> corporateForm(it)
            is Individual -> individualForm(it)
            null -> individualForm(it)
        }
    }.finally { res ->
        val state = res.toLazyState { onRetry { initialize(uid) } }
        original.value = state.map { it.entity }
        ui.value = state
    }

    fun switchToCorporateForm() {
        ui.value = Success(corporateForm(original.value.data?.toCorporate()))
    }

    fun switchToIndividualForm() {
        ui.value = Success(individualForm(original.value.data?.toIndividual()))
    }

    override fun deInitialize() {
        original.value = Pending
        super.deInitialize()
    }

    abstract fun individualForm(customer: Individual?): IndividualForm

    abstract fun corporateForm(customer: Corporate?): CorporateForm
}