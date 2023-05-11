package presenters.validators

import identifier.Email
import live.MutableLive
import presenters.InputFieldState
import presenters.Data

class EmailValidator(
    override val data: MutableLive<Data<String>>,
    feedback: MutableLive<InputFieldState>,
    label: String,
    isRequired: Boolean,
) : IdentifierValidator(feedback, label, isRequired) {
    override fun validate(value: String?) = purifyThen(value) {
        Email(it)
    }
}