package identifier

import keep.Cacheable
import lexi.Logable

interface IdentifierScopeConfig<out A> : Cacheable, Logable {
    val api: A

    fun <R> map(transformer: (A) -> R): IdentifierScopeConfig<R>
}