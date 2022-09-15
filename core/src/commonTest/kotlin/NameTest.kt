import identifier.Name
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import kotlin.test.Test

class NameTest {
    @Test
    fun can_serialize_a_name() {
        val name = Name("anderson lameck")
        println(Json.encodeToString(name))
    }

    @Test
    fun can_deserialize_a_name() {
        val name = Json.decodeFromString<Name>(""""anderson lameck"""")
        println(name)
    }
}