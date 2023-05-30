pluginManagement {
    enableFeaturePreview("TYPESAFE_PROJECT_ACCESSORS")

    repositories {
        google()
        gradlePluginPortal()
        mavenCentral()
    }

    dependencyResolutionManagement {
        versionCatalogs {
            file("../versions/gradle/versions").listFiles().map {
                it.nameWithoutExtension to it.absolutePath
            }.forEach { (name, path) ->
                create(name) { from(files(path)) }
            }
        }
    }
}

fun includeRoot(name: String, path: String) {
    include(":$name")
    project(":$name").projectDir = File(path)
}

fun includeSubs(base: String, path: String = base, vararg subs: String) {
    subs.forEach {
        include(":$base-$it")
        project(":$base-$it").projectDir = File("$path/$it")
    }
}

rootProject.name = "identifier"

includeBuild("../able")
includeBuild("../geo/geo-generator")
includeBuild("../kash/currency-generator")

// dependencies
includeSubs("functions", "../functions", "core")
includeSubs("kommander", "../kommander", "core", "coroutines")
includeSubs("kollections", "../kollections", "interoperable", "atomic")
includeSubs("hormone", "../hormone", "core")
includeSubs("kevlar", "../kevlar", "core")
includeSubs("kase", "../kase", "core")
includeSubs("epsilon", "../epsilon", "core")
includeSubs("koncurrent-executors", "../koncurrent/executors", "core", "coroutines", "mock")
includeSubs("koncurrent-later", "../koncurrent/later", "core", "coroutines", "test")
includeSubs("kronecker", "../kronecker", "core")
includeSubs("liquid", "../liquid", "number")
includeSubs("kash", "../kash/", "currency")
includeSubs("geo", "../geo", "countries", "core")
includeSubs("krono", "../krono", "api")

// dependencies for symphony
includeSubs("keep", "../keep", "api", "file", "mock", "test")
includeSubs("lexi", "../lexi", "api", "console")
includeSubs("lexi-test", "../lexi/test", "android")
includeSubs("krest", "../krest", "core")
includeSubs("cinematic-live", "../cinematic/live", "core", "coroutines", "test", "kollections")
includeSubs("cinematic-scene", "../cinematic/scene", "core")

includeSubs("symphony", "../symphony", "paginator", "selector", "actions", "list", "table", "collections")
includeSubs("symphony-input", "../symphony/input", "core", "form", "text", "number", "choice", "list", "file", "kash", "krono", "identifier", "geo", "dialog")

// submodules
includeSubs("identifier", ".", "core", "comm")
includeSubs("identifier-legal", "legal", "core")
includeSubs("identifier-legal-sdk", "legal/sdk", "core")