/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DogCreateFormInputValues = {
    name?: string;
    avatar?: string;
    specs?: string;
    location?: string;
    money?: number;
    time?: string;
    keyColor?: string;
};
export declare type DogCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    avatar?: ValidationFunction<string>;
    specs?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    money?: ValidationFunction<number>;
    time?: ValidationFunction<string>;
    keyColor?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DogCreateFormOverridesProps = {
    DogCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    avatar?: PrimitiveOverrideProps<TextFieldProps>;
    specs?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    money?: PrimitiveOverrideProps<TextFieldProps>;
    time?: PrimitiveOverrideProps<TextFieldProps>;
    keyColor?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DogCreateFormProps = React.PropsWithChildren<{
    overrides?: DogCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DogCreateFormInputValues) => DogCreateFormInputValues;
    onSuccess?: (fields: DogCreateFormInputValues) => void;
    onError?: (fields: DogCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DogCreateFormInputValues) => DogCreateFormInputValues;
    onValidate?: DogCreateFormValidationValues;
} & React.CSSProperties>;
export default function DogCreateForm(props: DogCreateFormProps): React.ReactElement;
