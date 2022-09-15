import identifier.Email
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import kotlin.test.Test

class EmailSerializationTest {

    @Test
    fun should_serialize_email_properly() {
        val email = Email("andy@test.com")
        println(Json.encodeToString(email))
    }
}