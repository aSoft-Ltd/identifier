plugins {
    kotlin("multiplatform")
    kotlin("plugin.serialization")
    id("tz.co.asoft.library")
}

description = "An multiplatform library for communication objects identifiers like email & phone"

kotlin {
    jvm { library() }
    if (Targeting.JS) js(IR) { library() }
//    if (Targeting.WASM) wasm { library() }
    val osxTargets = if (Targeting.OSX) osxTargets() else listOf()
//    val ndkTargets = if (Targeting.NDK) ndkTargets() else listOf()
    val linuxTargets = if (Targeting.LINUX) linuxTargets() else listOf()
//    val mingwTargets = if (Targeting.MINGW) mingwTargets() else listOf()

    sourceSets {
        val commonMain by getting {
            dependencies {
                api(projects.identifierLegalPresenters)
                api(projects.identifierFields)
                api(libs.hormone.core)
                api(libs.cinematic.live.kollections)
                api(libs.symphony.collections)
                api(libs.symphony.input.choice)
                api(libs.symphony.input.text)
                api(libs.symphony.input.number)
                api(libs.geo.fields)
                api(libs.krono.fields)
            }
        }

        val commonTest by getting {
            dependencies {
                implementation(libs.kommander.core)
                implementation(kotlinx.serialization.json)
            }
        }
    }
}
