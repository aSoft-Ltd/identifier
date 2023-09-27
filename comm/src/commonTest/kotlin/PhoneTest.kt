import identifier.Phone
import kommander.expect
import kommander.expect
import kotlin.test.*

class PhoneTest {

    @Test
    fun shouldBeLocalizedNormalized() {
        val phone1 = Phone("0752748674")
        assertEquals("255752748674", phone1.value)

        val phone2 = Phone("255752748674")
        assertEquals("255752748674", phone2.value)

        val phone3 = Phone("254752748674")
        assertEquals("254752748674", phone3.value)

        val phone4 = Phone("+255752748674")
        assertEquals("255752748674", phone4.value)

        val phone5 = Phone("+256752748674")
        assertEquals("256752748674", phone5.value)

        val adminPhone = Phone(255000000000)
        assertEquals(255000000000, adminPhone.value.toLong())
    }

    @Test
    fun shouldBeInvalid() {
        assertFails { Phone("255") }

//        assertFails { Phone("0000000000") }
    }

    @Test
    fun should_throw_error() {
        assertFails { Phone(2) }
        assertFails { Phone(0) }
    }

    @Test
    fun should_parse_SA_phone_numbers() {
        expect<Phone>(Phone("+27728772937")).toBe(Phone("+27728772937"))
    }

    @Test
    fun should_be_equal() {
        expect(Phone("255752748674")).toBe(Phone("255752748674"))
    }
}