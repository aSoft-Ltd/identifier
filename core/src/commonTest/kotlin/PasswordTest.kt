import kommander.expect
import identifier.Password
import kommander.expect
import kotlin.test.Test

class PasswordTest {

    @Test
    fun prints_starts_instead_of_clear_text() {
        val pass = Password("1234")
        println(pass)
        expect<Password>(Password(123)).toBe(Password(123L))
        expect(pass).toBe(Password(1234))
    }
}