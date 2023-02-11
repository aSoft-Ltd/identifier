@file:JsExport
@file:Suppress("WRONG_EXPORTED_DECLARATION")

package identifier

import identifier.internal.EmailImpl
import identifier.serializers.EmailSerializer
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.jvm.JvmName
import kotlin.jvm.JvmStatic

@Serializable(with = EmailSerializer::class)
interface Email : Comm {
    val parts: Array<String>
    val identity: String
    val domain: String

    companion object {
        @JvmName("of")
        @JvmStatic
        operator fun invoke(value: String): Email = EmailImpl(value)
    }
}