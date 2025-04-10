/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, CollectionProps, FlexProps } from "@aws-amplify/ui-react";
import { MyFlexProps } from "./MyFlex";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ButtonListPocOverridesProps = {
    ButtonListPoc?: PrimitiveOverrideProps<CollectionProps>;
    MyFlex?: PrimitiveOverrideProps<FlexProps>;
    MyButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ButtonListPocProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => MyFlexProps;
} & {
    variant?: "primary";
} & {
    overrides?: ButtonListPocOverridesProps | undefined | null;
}>;
export default function ButtonListPoc(props: ButtonListPocProps): React.ReactElement;
