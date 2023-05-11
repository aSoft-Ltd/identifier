package identifier

import hormone.HasApi
import keep.Cacheable
import lexi.Logable

interface IdentifierScopeConfig<out A> : HasApi<A>, Cacheable, Logable {
    override fun <R> map(transformer: (A) -> R): IdentifierScopeConfig<R>
}