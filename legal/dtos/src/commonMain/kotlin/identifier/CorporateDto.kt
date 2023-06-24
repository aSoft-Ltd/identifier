@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package identifier

import kollections.iListOf
import krono.LocalDate
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@Serializable
data class CorporateDto(
    override val uid: String,
    override val name: String,
    override val image: String? = null,
    val headQuarters: CorporateBranchDto = CorporateBranchDto("Head Quarters"),
    val branches: List<CorporateBranchDto> = iListOf(),
    val registrationNo: String? = null,
    val registrationDate: LocalDate? = null,
    val taxPayerIdentificationNo: String? = null,
    val vatNo: String? = null,
    val website: String? = null,
    val industry: Industry? = null,
    override val gid: String = UNSET,
    @SerialName("businessType") val type: CorporateType = CorporateType.COMPANY,
) : LegalEntityDto()