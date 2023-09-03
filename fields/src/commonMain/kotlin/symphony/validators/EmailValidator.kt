package symphony.validators

import identifier.Email
import neat.Validators
import neat.check


// TODO: Move this up to neat module
fun <T : String?, V : Validators<T>> V.email(
    message: (String) -> String = { "$it is an invalid email" },
) = check(message) {
    try {
        Email(it)
        true
    } catch (err: Throwable) {
        false
    }
}