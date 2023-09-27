package fields.email

import kommander.expect
import kommander.toBe
import kotlinx.coroutines.test.runTest
import presenters.EmailInputField
import presenters.validation.Invalid
import presenters.validation.Valid
import kotlin.test.Test

class EmailInputValidationTest {
    @Test
    fun should_fail_validation_if_input_is_not_a_valid_email() = runTest {
        val email = EmailInputField("email")
        email.type("andy")
        val res = expect(email.validate()).toBe<Invalid>()
        expect(res.cause.message).toBe("Invalid email: andy")
    }

    @Test
    fun should_pass_validation_if_input_is_a_valid_email() = runTest {
        val email = EmailInputField("email")
        email.type("andy@lamax.com")
        expect(email.validate()).toBe<Valid>()
        expect(email.data.value.output).toBe("andy@lamax.com")
    }
}