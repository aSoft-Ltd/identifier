package identifier

import kotlin.js.JsExport

object NameGenerator {
    val fakeNames = listOf(
        "Raiden",
        "Anderson",
        "Hanzo",
        "Lameck",
        "Hasashi",
        "Kenshi",
        "Takeda",
        "Jackson",
        "Sonya",
        "Tremor",
        "Kotal",
        "Khan",
        "Cassie",
        "Johnny",
        "Cage",
        "Kabal",
        "Enenra",
        "Cyrax",
        "Sektor",
        "Jean",
        "T'Challa",
        "T'Chaka",
        "Okoye",
        "Wakabi"
    )

    fun randomFullName() = if ((0..10).random() < 5) {
        "${fakeNames.random()} ${fakeNames.random()}"
    } else {
        "${fakeNames.random()} ${fakeNames.random()} ${fakeNames.random()}"
    }

    fun random() = Name(randomFullName())

    fun randomNames(size: Int): List<Name> = List(size) { random() }
}