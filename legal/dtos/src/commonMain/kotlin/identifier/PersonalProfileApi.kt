@file:JsExport
@file:Suppress("NON_EXPORTABLE_TYPE")

package identifier

import epsilon.Blob
import identifier.params.IndividualProfileParams
import identifier.params.PasswordParams
import koncurrent.Later
import kotlin.js.JsExport

interface PersonalProfileApi {

    fun changeProfilePicture(file: Blob): Later<IndividualDto>

    fun changePassword(params: PasswordParams): Later<IndividualDto>

    fun update(params: IndividualProfileParams): Later<IndividualDto>

    /**
     * You can't login with an unverified email, but you can sure add them
     */
    fun addEmail(email: String): Later<IndividualDto>

    /**
     * should kick off the email verification process.
     * Should fail even when the email is already verified
     */
    fun beginEmailVerificationProcess(email: String): Later<String>

    /**
     * send the token to verify this email
     */
    fun completeEmailVerificationProcess(token: String): Later<String>

    /**
     * This delete action must leave at least one verified email/phone.
     * This [Later] would fail if you are deleting the last verified email
     */
    fun deleteEmail(email: String): Later<IndividualDto>

    /**
     * should kick off the email verification process.
     * Should fail even when the email is already verified
     */
    fun beginPhoneVerificationProcess(phone: String): Later<String>

    /**
     * send the token to verify this email
     */
    fun completePhoneVerificationProcess(phone: String): Later<String>

    /**
     * You can't login with an unverified phone number, but you can sure add them
     */
    fun addPhone(phone: String): Later<IndividualDto>

    /**
     * This delete action must leave at least one verified email.
     * This [Later] would fail if you are deleting the last verified email
     */
    fun deletePhone(phone: String): Later<IndividualDto>
}