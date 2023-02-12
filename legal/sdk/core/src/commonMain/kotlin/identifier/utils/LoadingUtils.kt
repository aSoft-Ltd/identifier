package identifier.utils

import kase.Loading

inline fun loading(
    uid: String?,
    context: String
) = Loading<Nothing>("Loading $context for (uid=$uid), please wait . . .")