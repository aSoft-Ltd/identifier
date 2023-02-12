@file:JsExport

package identifier

import bitframe.Deleter
import bitframe.Loader
import kotlin.js.JsExport

interface LegalEntityApi :
    Deleter<LegalEntity>,
    Loader<LegalEntity>