package identifier.serializers

import identifier.Phone
import kotlinx.serialization.KSerializer
import kotlinx.serialization.Serializer
import kotlinx.serialization.descriptors.PrimitiveKind
import kotlinx.serialization.descriptors.PrimitiveSerialDescriptor
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder

@Serializer(forClass = Phone::class)
object PhoneSerializer : KSerializer<Phone> {
    override fun deserialize(decoder: Decoder) = Phone(decoder.decodeString())
    override val descriptor: SerialDescriptor = PrimitiveSerialDescriptor("identifier.Phone", PrimitiveKind.STRING)
    override fun serialize(encoder: Encoder, value: Phone) = encoder.encodeString(value.value)
}