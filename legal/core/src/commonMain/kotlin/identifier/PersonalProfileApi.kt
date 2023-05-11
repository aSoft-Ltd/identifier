package identifier

import epsilon.Blob
import identifier.params.IndividualProfileParams
import identifier.params.PasswordParams
import koncurrent.Later

interface PersonalProfileApi {

    fun changeProfilePicture(file: Blob): Later<Individual>

    fun changePassword(params: PasswordParams): Later<Individual>

    fun update(params: IndividualProfileParams): Later<Individual>

    /**
     * You can't login with an unverified email, but you can sure add them
     */
    fun addEmail(email: String): Later<Individual>

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
    fun deleteEmail(email: String): Later<Individual>

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
    fun addPhone(phone: String): Later<Individual>

    /**
     * This delete action must leave at least one verified email.
     * This [Later] would fail if you are deleting the last verified email
     */
    fun deletePhone(phone: String): Later<Individual>
}