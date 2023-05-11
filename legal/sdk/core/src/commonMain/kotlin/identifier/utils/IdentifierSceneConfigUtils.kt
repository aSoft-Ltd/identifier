package identifier.utils

import hormone.Loader
import identifier.IdentifierScopeConfig
import identifier.LegalEntity
import koncurrent.Later

fun IdentifierScopeConfig<Loader<LegalEntity>>.loadCacheableLegalEntity(
    uid: String,
    beforeNetwork: () -> Unit
) = cache.loadSelectedCustomer().andThen {
    if (it?.uid == uid) return@andThen Later(it)
    beforeNetwork()
    api.load(uid)
}

internal fun IdentifierScopeConfig<Loader<LegalEntity>>.loadCacheableLegalEntityOrNull(
    uid: String?,
    beforeNetwork: () -> Unit
) = if (uid == null) Later(null) else loadCacheableLegalEntity(uid, beforeNetwork)