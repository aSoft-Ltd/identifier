package identifier.transformers

import identifier.ContactDto
import identifier.ContactPresenter
import identifier.CorporateBranchDto
import identifier.CorporateBranchPresenter

fun CorporateBranchDto.toPresenter() = CorporateBranchPresenter(
    src = this,
    name = name,
    contacts = contacts.map { it.toPresenter() },
    location = location,
    address = address
)

fun ContactDto.toPresenter() = ContactPresenter(
    src = this,
    uid = uid,
    name = name,
    comms = comms,
    role = role,
    isPrimary = isPrimary,
)