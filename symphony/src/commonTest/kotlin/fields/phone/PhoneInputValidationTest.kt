package fields.phone

import kommander.expect
import kommander.toBe
import kotlinx.coroutines.test.runTest
import presenters.validation.Invalid
import presenters.PhoneInputField
import presenters.validation.Valid
import kotlin.test.Test

class PhoneInputValidationTest {
    @Test
    fun should_fail_validation_if_input_is_not_a_valid_phone() = runTest {
        val phone = PhoneInputField("phone")
        phone.set("0")
        val res = expect(phone.validate()).toBe<Invalid>()
        expect(res.cause.message).toBe("Invalid phone: 0")
    }

    @Test
    fun should_pass_validation_if_input_is_a_valid_phone() = runTest {
        val phone = PhoneInputField("phone")
        phone.set("0752748674")
        expect(phone.validate()).toBe<Valid>()
        expect(phone.data.value.output).toBe("0752748674")
    }
}