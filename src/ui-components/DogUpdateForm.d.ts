/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Dog } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DogUpdateFormInputValues = {
    name?: string;
    avatar?: string;
    specs?: string;
    location?: string;
    money?: number;
    time?: string;
    keyColor?: string;
};
export declare type DogUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    avatar?: ValidationFunction<string>;
    specs?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    money?: ValidationFunction<number>;
    time?: ValidationFunction<string>;
    keyColor?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DogUpdateFormOverridesProps = {
    DogUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    avatar?: PrimitiveOverrideProps<TextFieldProps>;
    specs?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    money?: PrimitiveOverrideProps<TextFieldProps>;
    time?: PrimitiveOverrideProps<TextFieldProps>;
    keyColor?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DogUpdateFormProps = React.PropsWithChildren<{
    overrides?: DogUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    dog?: Dog;
    onSubmit?: (fields: DogUpdateFormInputValues) => DogUpdateFormInputValues;
    onSuccess?: (fields: DogUpdateFormInputValues) => void;
    onError?: (fields: DogUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DogUpdateFormInputValues) => DogUpdateFormInputValues;
    onValidate?: DogUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DogUpdateForm(props: DogUpdateFormProps): React.ReactElement;
