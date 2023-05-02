package identifier.utils

import hormone.Loader
import identifier.LegalEntity
import koncurrent.Later
import viewmodel.ScopeConfig

//fun ScopeConfig<Loader<LegalEntity>>.loadCacheableLegalEntity(
//    uid: String,
//    beforeNetwork: () -> Unit
//) = cache.loadSelectedCustomer().andThen {
//    if (it?.uid == uid) return@andThen Later(it)
//    beforeNetwork()
//    api.load(uid)
//}
//
//internal fun ScopeConfig<Loader<LegalEntity>>.loadCacheableLegalEntityOrNull(
//    uid: String?,
//    beforeNetwork: () -> Unit
//) = if (uid == null) Later(null) else loadCacheableLegalEntity(uid, beforeNetwork)