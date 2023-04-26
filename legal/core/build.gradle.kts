plugins {
    kotlin("multiplatform")
    kotlin("plugin.serialization")
    id("tz.co.asoft.library")
    signing
}

description = "A multiplatform library modeling legal entities"

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
                api(projects.identifierComm)
                api(projects.hormoneCore)
                api(projects.kronoApi)
                api(projects.geoCore)
            }
        }

        val commonTest by getting {
            dependencies {
                implementation(projects.kommanderCore)
                implementation(kotlinx.serialization.json)
            }
        }
    }
}
