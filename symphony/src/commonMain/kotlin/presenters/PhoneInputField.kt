@file:Suppress("NOTHING_TO_INLINE")

package presenters

import presenters.internal.text.PhoneInputFieldImpl
import kotlin.reflect.KProperty

inline fun PhoneInputField(
    name: String,
    label: String = name,
    hint: String = label,
    value: String? = null,
    isReadonly: Boolean = false,
    isRequired: Boolean = false,
    maxLength: Int? = null,
    minLength: Int? = null,
    noinline validator: ((String?) -> Unit)? = null
): BasicTextInputField = PhoneInputFieldImpl(
    name = name,
    label = Label(label, isRequired),
    hint = hint,
    value = value,
    isReadonly = isReadonly,
    isRequired = isRequired,
    maxLength = maxLength,
    minLength = minLength,
    validator = validator,
)

inline fun Fields.phone(
    name: String,
    label: String = name,
    hint: String = label,
    value: String? = null,
    isReadonly: Boolean = false,
    isRequired: Boolean = false,
    maxLength: Int? = null,
    minLength: Int? = null,
    noinline validator: ((String?) -> Unit)? = null
) = getOrCreate(name) {
    PhoneInputField(name, label, hint, value, isReadonly, isRequired, maxLength, minLength, validator)
}

inline fun Fields.phone(
    name: KProperty<Any?>,
    label: String = name.name,
    hint: String = label,
    value: String? = null,
    isReadonly: Boolean = false,
    isRequired: Boolean = false,
    maxLength: Int? = null,
    minLength: Int? = null,
    noinline validator: ((String?) -> Unit)? = null
) = phone(name.name, label, hint, value, isReadonly, isRequired, maxLength, minLength, validator)