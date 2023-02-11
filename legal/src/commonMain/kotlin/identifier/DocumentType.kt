package identifier

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
@Serializable
enum class DocumentType(val label: String) {
    PASSPORT("Passport"),
    DRIVING_LICENSE("Driving License"),
    VOTERS_CARD("Voters Card"),
    NATIONAL_ID("National Id"),
    UNKNOWN("Unknown"),
    CLUB_CARD("Club Card"),
    STUDENT_CARD("Student Card")
}