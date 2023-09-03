package symphony.internal

import cinematic.mutableLiveOf
import geo.Country
import kollections.List
import kollections.iEmptyList
import kollections.toIList
import neat.ValidationFactory
import neat.Validity
import neat.custom
import neat.required
import symphony.Changer
import symphony.Feedbacks
import symphony.Label
import symphony.Option
import symphony.PhoneField
import symphony.PhoneFieldState
import symphony.PhoneOutput
import symphony.Visibility
import symphony.toErrors
import symphony.toWarnings
import kotlin.reflect.KMutableProperty0

@PublishedApi
internal class PhoneFieldImpl(
    private val property: KMutableProperty0<PhoneOutput?>,
    label: String,
    private val filter: (Country, key: String) -> Boolean,
    visibility: Visibility,
    hint: String,
    country: Country?,
    private val onChange: Changer<PhoneOutput>?,
    factory: ValidationFactory<PhoneOutput>?
) : AbstractHideable(), PhoneField {
    protected val validator = custom<PhoneOutput>(label).configure(factory)

    override fun validate() = validator.validate(output)

    override fun setCountry(country: Country?) = setValidateAndNotify(state.value.copy(country = country))

    override fun setBody(long: Long?) = setValidateAndNotify(state.value.copy(body = long))

    override fun setBody(value: String?) = setBody(value?.toLongOrNull())

    private fun setValidateAndNotify(s: State) {
        property.set(s.output)
        val res = validator.validate(s.output)
        state.value = s.copy(feedbacks = Feedbacks(res.toWarnings()))
        onChange?.invoke(s.output)
    }

    override fun validateToErrors(): Validity<PhoneOutput> {
        val res = validator.validate(output)
        state.value = state.value.copy(feedbacks = Feedbacks(res.toErrors()))
        return res
    }

    override fun finish() {
        state.stopAll()
    }

    override fun reset() = setValidateAndNotify(initial)

    override fun clear() = setValidateAndNotify(initial.copy(country = null, body = null))

    private val mapper = { c: Country -> c.toOption(c == this.state.value.country) }

    private fun Country.toOption(selected: Boolean) = Option(label, code, selected)

    private val initial = State(
        name = property.name,
        label = Label(label, this.validator.required),
        visibility = visibility,
        hint = hint,
        required = this.validator.required,
        country = property.get()?.country ?: country,
        option = (property.get()?.country ?: country)?.toOption(true),
        body = property.get()?.body,
        countries = Country.values().toIList(),
        feedbacks = Feedbacks(iEmptyList()),
    )

    data class State(
        override val name: String,
        override val label: Label,
        override val visibility: Visibility,
        override val hint: String,
        override val required: Boolean,
        override val countries: List<Country>,
        override val option: Option?,
        override val country: Country?,
        override val body: Long?,
        override val feedbacks: Feedbacks
    ) : PhoneFieldState {
        override val output get() = if (country != null && body != null) PhoneOutput(country, body) else null
    }

    override val state by lazy { mutableLiveOf(initial) }

    override val option: Option? get() = this.country?.let(mapper)

    override val countries: List<Country> by lazy { Country.values().toIList() }

    override fun searchByFiltering(key: String?) {
        state.value = state.value.copy(
            countries = if (key.isNullOrEmpty()) countries else countries.filter { filter(it, key) }
        )
    }

    override fun searchByOrdering(key: String?) {
        state.value = state.value.copy(
            countries = if (key.isNullOrEmpty()) {
                countries
            } else {
                val partitions = countries.partition { filter(it, key) }
                (partitions.first + partitions.second).toIList()
            }
        )
    }

    override fun clearSearch() {
        state.value = state.value.copy(countries = countries)
    }

    override fun setVisibility(v: Visibility) {
        state.value = state.value.copy(visibility = v)
    }

    override fun options(withSelect: Boolean): List<Option> = (if (withSelect) {
        listOf(Option("Select ${state.value.label.capitalizedWithoutAstrix()}", ""))
    } else {
        emptyList()
    } + countries.toList().map { mapper(it) }).toIList()

    override fun selectCountryOption(option: Option) {
        val country = countries.find { mapper(it).value == option.value }
        if (country != null) setCountry(country)
    }

    override fun selectCountryValue(optionValue: String) {
        val item = countries.find { mapper(it).value == optionValue }
        if (item != null) setCountry(item)
    }

    override fun selectCountryLabel(optionLabel: String) {
        val item = countries.find { mapper(it).label == optionLabel }
        if (item != null) setCountry(item)
    }

    override fun unsetCountry() = setValidateAndNotify(state.value.copy(country = null))

    override val output get() = state.value.output
    override val label get() = state.value.label
    override val required get() = state.value.required
    override val hint get() = state.value.hint
    override val visibility get() = state.value.visibility
    override val feedbacks get() = state.value.feedbacks
    override val body get() = state.value.body
    override val country get() = state.value.country
    override val name get() = property.name
}