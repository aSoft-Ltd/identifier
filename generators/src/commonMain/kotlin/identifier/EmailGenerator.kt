package identifier

import kotlin.js.JsName

object EmailGenerator {

    val domains = listOf(
        "google.com",
        "yahoo.com",
        "mail.com",
        "test.com",
        "adobe.com",
        "asoft.co.tz",
        "bing.net",
        "microsoft.com"
    )

    @JsName("generateForName")
    fun generateFor(name: Name): Email {
        val (first, last) = if ((1..10).random() > 5) name.first to name.last else name.last to name.first
        val identity = "$first${if ((1..10).random() > 5) "." else ""}$last"
            .lowercase().replace("'", "")
        return Email("$identity@${domains.random()}")
    }

    fun generateFor(name: String): Email = generateFor(Name(name))

    fun random(): Email = generateFor(NameGenerator.random())

    @JsName("randomWithSizeOf")
    fun random(size: Int): Array<Email> = Array(size) { random() }
}