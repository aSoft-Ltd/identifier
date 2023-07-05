package identifier.utils

import hormone.Loader
import identifier.IdentifierScenesConfig
import identifier.LegalEntityDto
import koncurrent.Later

fun IdentifierScenesConfig<Loader<LegalEntityDto>>.loadCacheableLegalEntity(
    uid: String,
    beforeNetwork: () -> Unit
) = cache.loadSelectedCustomer().andThen {
    if (it?.uid == uid) return@andThen Later(it)
    beforeNetwork()
    api.load(uid)
}

fun IdentifierScenesConfig<Loader<LegalEntityDto>>.loadCacheableLegalEntityOrNull(
    uid: String?,
    beforeNetwork: () -> Unit
) = if (uid == null) Later(null) else loadCacheableLegalEntity(uid, beforeNetwork)