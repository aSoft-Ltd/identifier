@file:JsExport

package identifier

import hormone.Deleter
import hormone.Loader
import kotlin.js.JsExport

interface LegalEntityApi :
    Deleter<LegalEntityDto>,
    Loader<LegalEntityDto>