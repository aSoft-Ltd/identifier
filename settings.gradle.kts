pluginManagement {
    includeBuild("../build-logic")
}

plugins {
    id("multimodule")
}

fun includeSubs(base: String, path: String = base, vararg subs: String) {
    subs.forEach {
        include(":$base-$it")
        project(":$base-$it").projectDir = File("$path/$it")
    }
}

listOf(
    "kash-api", "kash-client", "geo-api", "geo-client",
    "krono-core", "neat", "cinematic", "koncurrent", "kollections",
    "kommander", "epsilon-api", "hormone", "symphony"
).forEach {
    includeBuild("../$it")
}

rootProject.name = "identifier"

includeSubs("identifier", ".", "core", "comm", "fields")
includeSubs("identifier-legal", "legal", "dtos", "presenters")
includeSubs("identifier-legal-sdk-client", "legal/sdk", "core")
