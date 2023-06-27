@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package identifier

import krono.LocalDate
import kotlin.js.JsExport

data class CorporatePresenter(
    override val src: CorporateDto,
    override val uid: String,
    override val name: String,
    override val image: String?,
    val headQuarters: CorporateBranchPresenter,
    val branches: List<CorporateBranchPresenter>,
    val registrationNo: String?,
    val registrationDate: LocalDate?,
    val taxPayerIdentificationNo: String?,
    val vatNo: String?,
    val website: String?,
    val industry: Industry?,
    override val gid: String,
    val type: CorporateType,
) : LegalEntityPresenter()