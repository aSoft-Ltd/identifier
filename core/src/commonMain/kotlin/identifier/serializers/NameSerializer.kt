package identifier.serializers

import identifier.Name
import kotlinx.serialization.KSerializer
import kotlinx.serialization.Serializer
import kotlinx.serialization.descriptors.PrimitiveKind
import kotlinx.serialization.descriptors.PrimitiveSerialDescriptor
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder

@Serializer(forClass = Name::class)
object NameSerializer : KSerializer<Name> {
    override fun deserialize(decoder: Decoder): Name = Name(decoder.decodeString())

    override val descriptor: SerialDescriptor = PrimitiveSerialDescriptor("identifier.Name", PrimitiveKind.STRING)

    override fun serialize(encoder: Encoder, value: Name) = encoder.encodeString(value.full)
}