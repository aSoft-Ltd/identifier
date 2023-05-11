package presenters.internal.text

import presenters.Label
import presenters.internal.validators.CompoundValidator
import presenters.internal.validators.LambdaValidator
import presenters.internal.validators.RequirementValidator
import presenters.internal.validators.TextValidator
import presenters.validators.EmailValidator
import presenters.validators.PhoneValidator

@PublishedApi
internal class PhoneInputFieldImpl(
    override val name: String,
    override val isRequired: Boolean = false,
    override val label: Label = Label(name, isRequired),
    override val hint: String = label.capitalizedWithAstrix(),
    override val isReadonly: Boolean = false,
    maxLength: Int? = null,
    minLength: Int? = null,
    value: String? = null,
    validator: ((String?) -> Unit)? = null,
) : AbstractBasicTextInputField(value) {
    override val cv = CompoundValidator(
        data, feedback,
        RequirementValidator(data, feedback, label.capitalizedWithoutAstrix(), isRequired),
        TextValidator(data, feedback, label.capitalizedWithoutAstrix(), isRequired, maxLength, minLength),
        PhoneValidator(data, feedback, label.capitalizedWithoutAstrix(), isRequired),
        LambdaValidator(data, feedback, validator)
    )
}