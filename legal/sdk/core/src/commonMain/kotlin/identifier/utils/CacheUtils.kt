package identifier.utils

import symphony.CacheKeys
import keep.Cache
import keep.loadOrNull
import identifier.LegalEntityDto
import koncurrent.Later
import symphony.removeSelectedItem

inline fun Cache.loadSelectedCustomer() = loadOrNull(CacheKeys.SELECTED_ITEM, LegalEntityDto.serializer())

@Deprecated(
    message = "do not use this",
    replaceWith = ReplaceWith("removeSelectedItem()", "symphony.removeSelectedItem")
)
inline fun Cache.removeSelectedCustomer() = remove(CacheKeys.SELECTED_ITEM)

internal fun Cache.removeCustomer(uid: String?) = loadSelectedCustomer().andThen {
    if (uid == it?.uid) removeSelectedItem() else Later(null)
}