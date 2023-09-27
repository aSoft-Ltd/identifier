package forms

import kommander.expect
import kase.Submitting
import kase.Success
import kase.Validating
import kollections.iListOf
import kollections.toIList
import koncurrent.Later
import kotlinx.serialization.Serializable
import live.expect
import live.toHaveGoneThrough3
import presenters.Fields
import presenters.Form
import presenters.Option
import presenters.email
import presenters.name
import presenters.phone
import presenters.selectSingle
import presenters.toFormConfig
import presenters.selectMany
import viewmodel.ViewModelConfig
import kotlin.test.Test

class FormWithManyInputsTest {

    @Serializable
    enum class Color {
        Red, Green, Blue
    }

    class AllFields : Fields() {
        val name = name(isRequired = true)
        val email = email(name = "email", isRequired = true)
        val phone = phone(name = "phone", isRequired = true)
        val color = selectSingle(name = "color", items = Color.values().toIList(), mapper = { Option(it.name) }, isRequired = true)
        val colors = selectMany(name = "colors", items = Color.values().toIList(), mapper = { Option(it.name) }, isRequired = true)
    }

    @Serializable
    class AllParams(
        val name: String,
        val email: String,
        val phone: String,
        val color: Color,
        val colors: List<Color>
    )

    @Test
    fun should_be_able_to_submit_fields() {
        var params: AllParams? = null
        val form = Form<AllFields, AllParams, Any?>(
            heading = "The god form",
            details = "A form to test things out",
            fields = AllFields(),
            config = ViewModelConfig().toFormConfig()
        ) {
            onSubmit {
                params = it
                Later(it)
            }
        }
        form.fields.apply {
            name.set("Andy")
            email.set("andy@lamax.com")
            phone.set("0752748674")
            color.selectItem(Color.Red)
            colors.addSelectedItem(Color.Green)
            colors.addSelectedItem(Color.Blue)
        }
        form.submit()
        expect(form.ui).toHaveGoneThrough3<Validating, Submitting, Success<Any?>>()
        expect(params?.name).toBe("Andy")
        expect(params?.email).toBe("andy@lamax.com")
        expect(params?.phone).toBe("0752748674")
        expect(params?.color).toBe(Color.Red)
        expect(params?.colors?.toIList()).toBe(iListOf(Color.Green, Color.Blue))
    }
}