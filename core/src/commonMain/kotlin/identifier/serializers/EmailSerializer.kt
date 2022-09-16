package identifier.serializers

import identifier.Email
import kotlinx.serialization.KSerializer
import kotlinx.serialization.Serializer
import kotlinx.serialization.descriptors.PrimitiveKind
import kotlinx.serialization.descriptors.PrimitiveSerialDescriptor
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder

@Serializer(forClass = Email::class)
object EmailSerializer : KSerializer<Email> {
    override val descriptor: SerialDescriptor = PrimitiveSerialDescriptor("identifier.Email", PrimitiveKind.STRING)
    override fun serialize(encoder: Encoder, value: Email) = encoder.encodeString(value.value)
    override fun deserialize(decoder: Decoder): Email = Email(decoder.decodeString())
}