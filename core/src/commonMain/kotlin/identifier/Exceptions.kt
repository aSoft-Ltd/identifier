package identifier

class InvalidEmailException(val email: String, override val cause: IllegalArgumentException) : IllegalArgumentException("Invalid email: $email", cause)

class InvalidPhoneException(val phone: String, override val cause: IllegalArgumentException) : IllegalArgumentException("Invalid phone: $phone", cause)