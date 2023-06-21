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
import kase.Pending
import kase.Success
import kase.toLazyState
import koncurrent.later.finally
import identifier.IdentifierScopeConfig
import identifier.fields.CorporateFields
import identifier.fields.IndividualFields
import identifier.fields.LegalEntityFields
import kase.bagOf
import koncurrent.Later
import symphony.FormField
import symphony.toForm
import kotlin.js.JsExport

abstract class LegalEntityFormScene(
    private val config: IdentifierScopeConfig<Loader<LegalEntity>>
) : LazyScene<FormField<LegalEntityFields<*>>>(Pending) {

    val original = bagOf<LegalEntity>()

    protected fun initializeWith(uid: String?): Later<Any> = config.loadCacheableLegalEntityOrNull(uid) {
        val loading = loading(uid, "form")
        ui.value = loading
    }.then {
        original.value = it
        when (it) {
            is Corporate -> corporateForm(it)
            else -> individualForm(it as? Individual)
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

    abstract fun individualForm(customer: Individual?): FormField<IndividualFields>

    abstract fun corporateForm(customer: Corporate?): FormField<CorporateFields>
}