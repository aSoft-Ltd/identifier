package identifier.utils

import bitframe.CacheKeys
import cache.Cache
import cache.loadOrNull
import identifier.LegalEntity
import koncurrent.Later

inline fun Cache.loadSelectedCustomer() = loadOrNull(CacheKeys.SELECTED_ITEM, LegalEntity.serializer())

internal inline fun Cache.removeSelectedCustomer() = remove(CacheKeys.SELECTED_ITEM)

internal fun Cache.removeCustomer(uid: String?) = loadSelectedCustomer().andThen {
    if (uid == it?.uid) removeSelectedCustomer() else Later(null)
}