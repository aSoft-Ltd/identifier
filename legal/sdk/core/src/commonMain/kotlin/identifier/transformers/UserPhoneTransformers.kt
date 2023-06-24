package identifier.transformers

import identifier.UserPhone
import symphony.PhoneOutput

fun UserPhone.toOutput() = PhoneOutput(value)