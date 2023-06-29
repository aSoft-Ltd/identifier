import identifier.Phone
import identifier.serializers.PhoneSerializer
import kommander.expect
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import kotlin.test.Test

class PhoneSerializationTest {
    val phone = Phone("0752748674")

    @Test
    fun should_serialize_the_phone_well() {
        val json = Json.encodeToString(PhoneSerializer, phone)
        expect(json).toBe(""""255752748674"""")
    }

    @Test
    fun should_serialize_the_phone_well_even_as_an_embedded_object() {
        val json = Json.encodeToString(Contact(phone))
        expect(json).toBe("""{"phone":"255752748674"}""")
    }
}