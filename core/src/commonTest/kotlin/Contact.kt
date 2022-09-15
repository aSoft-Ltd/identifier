import identifier.Phone
import kotlinx.serialization.Serializable

@Serializable
data class Contact(
    val phone: Phone
)