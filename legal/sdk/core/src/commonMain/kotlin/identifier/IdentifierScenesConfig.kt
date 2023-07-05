package identifier

import hormone.HasApi
import keep.Cacheable
import lexi.Logable

interface IdentifierScenesConfig<out A> : HasApi<A>, Cacheable, Logable {
    override fun <R> map(transformer: (A) -> R): IdentifierScenesConfig<R>
}