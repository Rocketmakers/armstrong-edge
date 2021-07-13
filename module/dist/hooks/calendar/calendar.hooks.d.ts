import { IConfig } from './calendar.types';
export declare const use: ({ formatString, locale, highlights, max, min, rangeTo, selectedDate }?: IConfig) => {
    days: import("./calendar.types").IDay[];
    months: import("./calendar.types").IMonth[];
    years: import("./calendar.types").IYear[];
    selectedDateParsed: Date;
    monthYearFormState: {
        viewingMonth: number;
        viewingYear: number;
    } | undefined;
    monthYearFormProp: {
        <TDataKey extends "viewingMonth" | "viewingYear">(key1: Extract<TDataKey, unknown>): import("../form/form.types").BindingTools<Required<{
            viewingMonth: number;
            viewingYear: number;
        }>[TDataKey]>;
        <TDataKey_1 extends "viewingMonth" | "viewingYear", TData2 extends Required<{
            viewingMonth: number;
            viewingYear: number;
        }>[TDataKey_1], TDataKey2 extends keyof TData2>(key1: Extract<TDataKey_1, unknown>, key2: import("../form/form.types").KeyOrIndex<TData2, TDataKey2>): import("../form/form.types").BindingTools<TData2[TDataKey2]>;
        <TDataKey_2 extends "viewingMonth" | "viewingYear", TData2_1 extends Required<{
            viewingMonth: number;
            viewingYear: number;
        }>[TDataKey_2], TDataKey2_1 extends keyof TData2_1, TData3 extends TData2_1[TDataKey2_1], TDataKey3 extends keyof TData3>(key1: Extract<TDataKey_2, unknown>, key2: import("../form/form.types").KeyOrIndex<TData2_1, TDataKey2_1>, key3: import("../form/form.types").KeyOrIndex<TData3, TDataKey3>): import("../form/form.types").BindingTools<TData3[TDataKey3]>;
        <TDataKey_3 extends "viewingMonth" | "viewingYear", TData2_2 extends Required<{
            viewingMonth: number;
            viewingYear: number;
        }>[TDataKey_3], TDataKey2_2 extends keyof TData2_2, TData3_1 extends TData2_2[TDataKey2_2], TDataKey3_1 extends keyof TData3_1, TData4 extends TData3_1[TDataKey3_1], TDataKey4 extends keyof TData4>(key1: Extract<TDataKey_3, unknown>, key2: import("../form/form.types").KeyOrIndex<TData2_2, TDataKey2_2>, key3: import("../form/form.types").KeyOrIndex<TData3_1, TDataKey3_1>, key4: import("../form/form.types").KeyOrIndex<TData4, TDataKey4>): import("../form/form.types").BindingTools<TData4[TDataKey4]>;
        <TDataKey_4 extends "viewingMonth" | "viewingYear", TData2_3 extends Required<{
            viewingMonth: number;
            viewingYear: number;
        }>[TDataKey_4], TDataKey2_3 extends keyof TData2_3, TData3_2 extends TData2_3[TDataKey2_3], TDataKey3_2 extends keyof TData3_2, TData4_1 extends TData3_2[TDataKey3_2], TDataKey4_1 extends keyof TData4_1, TData5 extends TData4_1[TDataKey4_1], TDataKey5 extends keyof TData5>(key1: Extract<TDataKey_4, unknown>, key2: import("../form/form.types").KeyOrIndex<TData2_3, TDataKey2_3>, key3: import("../form/form.types").KeyOrIndex<TData3_2, TDataKey3_2>, key4: import("../form/form.types").KeyOrIndex<TData4_1, TDataKey4_1>, key5: import("../form/form.types").KeyOrIndex<TData5, TDataKey5>): import("../form/form.types").BindingTools<TData5[TDataKey5]>;
    };
    stepMonth: (direction: 'back' | 'forward') => void;
};
