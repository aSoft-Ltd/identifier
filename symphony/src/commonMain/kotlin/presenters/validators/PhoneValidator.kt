package presenters.validators

import identifier.Phone
import live.MutableLive
import presenters.InputFieldState
import presenters.Data

class PhoneValidator(
    override val data: MutableLive<Data<String>>,
    feedback: MutableLive<InputFieldState>,
    label: String,
    isRequired: Boolean,
) : IdentifierValidator(feedback, label, isRequired) {
    override fun validate(value: String?) = purifyThen(value) {
        Phone(it)
    }
}