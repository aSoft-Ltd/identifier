plugins {
    kotlin("multiplatform")
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
                api(project(":identifier-core"))
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
    description = "A generator for different identifiers"
)