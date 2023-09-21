package symphony

import geo.Country
import geo.matches
import neat.ValidationFactory
import symphony.internal.PhoneFieldImpl
import symphony.validators.email
import kotlin.reflect.KMutableProperty0

fun Fields<*>.email(
    name: KMutableProperty0<String?>,
    label: String = name.name,
    hint: String = label,
    visibility: Visibility = Visibility.Visible,
    onChange: Changer<String>? = null,
    factory: ValidationFactory<String>? = null
) = text(name, label, visibility, hint, onChange) {
    email()
    configure(factory)
}

fun Fields<*>.phone(
    name: KMutableProperty0<PhoneOutput?>,
    label: String = name.name,
    hint: String = label,
    visibility: Visibility = Visibility.Visible,
    country: Country? = name.get()?.country,
    filter: (Country, key: String) -> Boolean = { c, key -> c.matches(key)},
    onChange: Changer<PhoneOutput>? = null,
    factory: ValidationFactory<PhoneOutput>? = null
): PhoneField = getOrCreate(name) {
    PhoneFieldImpl(name, label, filter, visibility, hint, country, onChange, factory)
}