type Nullable<T> = T | null | undefined
declare const __doNotImplementIt: unique symbol
type __doNotImplementIt = typeof __doNotImplementIt
export namespace identifier {
    interface Comm {
        readonly value: string;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export namespace identifier {
    interface Email extends identifier.Comm {
        readonly parts: Array<string>;
        readonly identity: string;
        readonly domain: string;
        static get Companion(): {
            invoke(value: string): identifier.Email;
        };
        readonly value: string;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export namespace identifier {
    class Name /* implements kotlin.CharSequence */ {
        constructor(value: string);
        get full(): string;
        get first(): string;
        get middle(): string;
        get last(): string;
        get firstLast(): string;
        randomized(): identifier.Name;
        equals(other: Nullable<any>): boolean;
        hashCode(): number;
        toString(): string;
        static get Companion(): {
            serializer(): any/* kotlinx.serialization.KSerializer<identifier.Name> */;
        };
    }
}
export namespace identifier {
    class Password /* implements kotlin.CharSequence */ {
        constructor(value: string);
        get value(): string;
        static from(value: any): identifier.Password;
        get clearText(): string;
        equals(other: Nullable<any>): boolean;
        hashCode(): number;
        toString(): string;
    }
}
export namespace identifier {
    interface Phone extends identifier.Comm {
        static get Companion(): {
            invoke(value: string): identifier.Phone;
            fromInt(value: number): identifier.Phone;
            _ignore_fromLong(value: any/* kotlin.Long */): identifier.Phone;
        };
        readonly value: string;
        readonly __doNotUseIt: __doNotImplementIt;
    }
}
export as namespace asoft_identifier_core_test;