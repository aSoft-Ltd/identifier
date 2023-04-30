plugins {
    kotlin("multiplatform")
    kotlin("plugin.serialization")
    id("tz.co.asoft.library")
    signing
}

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
				api(projects.identifierLegalCore)
                // api(projects.symphonyInputsKrono)
                // api(projects.symphonyInputsGeo)
                // api(projects.symphonyInputsIdentifier)
                // // api(projects.symphonyMisc)
                api(projects.cinematicLiveKollections)
                api(projects.bitframeServiceBuilderSdkClientCore)
                // api(projects.kaseBuilders)

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

aSoftOSSLibrary(
    version = asoft.versions.root.get(),
    description = "An multiplatform library for communication objects identifiers like email & phone"
)