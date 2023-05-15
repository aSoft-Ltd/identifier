package identifier.utils

import symphony.CacheKeys
import keep.Cache
import keep.loadOrNull
import identifier.LegalEntity
import koncurrent.Later

inline fun Cache.loadSelectedCustomer() = loadOrNull(CacheKeys.SELECTED_ITEM, LegalEntity.serializer())

inline fun Cache.removeSelectedCustomer() = remove(CacheKeys.SELECTED_ITEM)

internal fun Cache.removeCustomer(uid: String?) = loadSelectedCustomer().andThen {
    if (uid == it?.uid) removeSelectedCustomer() else Later(null)
}