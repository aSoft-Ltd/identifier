plugins {
    kotlin("multiplatform")
    kotlin("plugin.serialization")
    id("tz.co.asoft.library")
    signing
}

kotlin {
    jvm { library() }
    js(IR) { library() }
    linuxTargets(true)

    sourceSets {
        val commonMain by getting {
            dependencies {
                api(kotlinx.serialization.core)
            }
        }

        val commonTest by getting {
            dependencies {
                implementation(projects.expectCore)
                implementation(kotlinx.serialization.json)
            }
        }
    }
}

aSoftOSSLibrary(
    version = asoft.versions.root.get(),
    description = "An multiplatform library for identifier like email & phone"
)