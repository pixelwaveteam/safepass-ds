import { ButtonHTMLAttributes } from '../../../../../node_modules/react';
import { ClassProp } from 'class-variance-authority/types';
import { ForwardRefExoticComponent } from '../../../../../node_modules/react';
import { InputHTMLAttributes } from '../../../../../node_modules/react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { RefAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';

export declare const Button: ForwardRefExoticComponent<ButtonProps & RefAttributes<HTMLButtonElement>>;

export declare interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Input: ForwardRefExoticComponent<InputProps & RefAttributes<HTMLInputElement>>;

export declare interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}

export declare const Test: {
    (): JSX_2.Element;
    displayName: string;
};

export { }
