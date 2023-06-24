package identifier

import geo.Country
import identifier.transformers.toOutput
import kommander.expect
import kotlin.test.Test

class UserPhoneTransformerTest {

    @Test
    fun should_be_able_to_parse_a_user_phone_to_the_corect_phone_output() {
        val phone = UserPhone("255752748674", "ddd")
        val out = phone.toOutput()
        expect(out?.country).toBe(Country.TZ)
        expect(out?.body).toBe(752748674L)
    }

    @Test
    fun should_be_able_to_parse_a_user_phone_with_leading_plus_to_the_corect_phone_output() {
        val phone = UserPhone("+255752748674", "ddd")
        val out = phone.toOutput()
        expect(out?.country).toBe(Country.TZ)
        expect(out?.body).toBe(752748674L)
    }

    @Test
    fun should_be_able_to_parse_a_south_african_number_to_a_phone_output() {
        val phone = UserPhone("+27728772937", "ddd")
        val out = phone.toOutput()
        expect(out?.country).toBe(Country.ZA)
        expect(out?.body).toBe(728772937L)
    }
}