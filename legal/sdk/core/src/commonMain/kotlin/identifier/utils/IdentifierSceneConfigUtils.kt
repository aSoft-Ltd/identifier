package identifier.utils

import hormone.Loader
import identifier.IdentifierScopeConfig
import identifier.LegalEntityDto
import koncurrent.Later

fun IdentifierScopeConfig<Loader<LegalEntityDto>>.loadCacheableLegalEntity(
    uid: String,
    beforeNetwork: () -> Unit
) = cache.loadSelectedCustomer().andThen {
    if (it?.uid == uid) return@andThen Later(it)
    beforeNetwork()
    api.load(uid)
}

internal fun IdentifierScopeConfig<Loader<LegalEntityDto>>.loadCacheableLegalEntityOrNull(
    uid: String?,
    beforeNetwork: () -> Unit
) = if (uid == null) Later(null) else loadCacheableLegalEntity(uid, beforeNetwork)