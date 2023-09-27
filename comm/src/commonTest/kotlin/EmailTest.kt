import kommander.expect
import identifier.Email
import kommander.expectFunction
import kommander.expect
import kotlin.test.*

class EmailTest {

    @Test
    fun should_have_the_same_equality() {
        expect<String>("${Email("andy@lamax.com")}").toBe("andy@lamax.com")
        expect("andy@lamax.com").toBe(Email("andy@lamax.com").toString())
        expect(Email("andy@lamax.com")).toBe(Email("andy@lamax.com"))
    }

    @Test
    fun should_fail() {
        expectFunction { Email("kitimtim") }.toFail()
        expectFunction { Email("test.com") }.toFail()
    }

    @Test
    fun a_valid_email_should_have_valid_parts() {
        val email = Email("andy@lamax.com")
        expect(email.parts.size).toBe(2)
        expect(email.domain).toBe("lamax.com")
        expect(email.identity).toBe("andy")
    }
}