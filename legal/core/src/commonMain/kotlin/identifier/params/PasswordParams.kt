package identifier.params

import kotlinx.serialization.Serializable

@Serializable
data class PasswordParams(
    val previous: String,
    val current: String
)