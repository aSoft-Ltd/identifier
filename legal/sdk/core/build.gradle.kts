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
                api(projects.hormoneCore)
                api(projects.cinematicLiveKollections)
                api(projects.symphonyCollections)
                api(projects.symphonyInputChoice)
                api(projects.symphonyInputText)
                api(projects.symphonyInputNumber)
                api(projects.symphonyInputKrono)
                api(projects.symphonyInputGeo)
                api(projects.symphonyInputIdentifier)
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