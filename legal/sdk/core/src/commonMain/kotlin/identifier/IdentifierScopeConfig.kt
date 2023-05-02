package identifier

import keep.Cacheable

interface IdentifierScopeConfig<out A> : Cacheable {
    val api: A
}