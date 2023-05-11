@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package identifier

import kollections.iListOf
import krono.LocalDate
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@Serializable
data class Corporate(
    override val uid: String,
    override val name: String,
    override val image: String? = null,
    val headQuarters: CorporateBranch = CorporateBranch("Head Quarters"),
    val branches: List<CorporateBranch> = iListOf(),
    val registrationNo: String? = null,
    val registrationDate: LocalDate? = null,
    val taxPayerIdentificationNo: String? = null,
    val vatNo: String? = null,
    val website: String? = null,
    val industry: Industry? = null,
    override val gid: String = UNSET,
    @SerialName("businessType") val type: Type = Type.COMPANY,
) : LegalEntity() {

    @Serializable
    enum class Type(val label: String) {
        NGO("NGO"),
        COMPANY("Company"),
        GOVERNMENT_INSTITUTION("Government Institution")
    }
}