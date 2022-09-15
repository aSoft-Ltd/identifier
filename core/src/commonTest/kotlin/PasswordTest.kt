import expect.expect
import identifier.Password
import kotlin.test.Test

class PasswordTest {

    @Test
    fun prints_starts_instead_of_clear_text() {
        val pass = Password("1234")
        println(pass)
        expect(Password(123)).toBe(Password(123L))
        expect(pass).toBe(Password(1234))
    }
}