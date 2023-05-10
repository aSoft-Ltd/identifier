package identifier

import epsilon.Blob
import koncurrent.Later

interface PersonalProfileApi {

    fun changeProfilePicture(file: Blob): Later<Individual>

    fun changeUsername(username: String): Later<Individual>

    fun changePassword(params: Password): Later<Individual>

    /**
     * You can't login with an unverified email, but you can sure add them
     */
    fun addEmail(email: String): Later<Individual>

    /**
     * should kick off the email verification process.
     * Should fail even when the email is already verified
     */
    fun beginEmailVerificationProcess(email: String): Later<Individual>

    /**
     * send the token to verify this email
     */
    fun completeEmailVerificationProcess(token: String): Later<Individual>

    /**
     * This delete action must leave at least one verified email/phone.
     * This [Later] would fail if you are deleting the last verified email
     */
    fun deleteEmail(email: String): Later<Individual>

    /**
     * should kick off the email verification process.
     * Should fail even when the email is already verified
     */
    fun beginPhoneVerificationProcess(phone: String): Later<Individual>

    /**
     * send the token to verify this email
     */
    fun completePhoneVerificationProcess(phone: String): Later<Individual>

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