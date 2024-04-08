'use client'

import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, HTMLAttributes, createContext, forwardRef, useContext } from "react";
import { cn } from "../utils";

interface DialogContextData {
  onClose: () => void;
}

const dialogContext = createContext<DialogContextData>({} as DialogContextData)

interface DialogRootProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
}

const DialogRoot = forwardRef<HTMLDivElement, DialogRootProps>(
  ({ className, children, isOpen, onClose,...props }) => {
    if(!isOpen) return;

    return (
      <div
        className={cn(
          'absolute inset-0',
          className
        )}
        {...props}
      >
        <dialogContext.Provider value={{ onClose }}>
          {children}
        </dialogContext.Provider>
      </div>
    )
  },
);

DialogRoot.displayName = 'DialogRoot';

const DialogOverlay = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }) => (
      <div
        className={cn(
          'absolute inset-0 bg-black/50 backdrop-blur',
          className
        )}
        {...props}
      />
    ),
);

DialogOverlay.displayName = 'DialogOverlay';

const dialogContentVariants = cva(
  'relative mx-auto flex flex-col bg-white w-full rounded shadow-xl px-8 py-4',
  {
    variants: {
      size: {
        default: 'max-w-2xl',
        sm: 'max-w-xl',
        lg: 'max-w-3xl',
        xl: 'max-w-4xl',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

interface DialogContentProps
  extends HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof dialogContentVariants> {
}

const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  ({ className, children, size, ...props }, ref) => {
    return (
      <div className="px-10 absolutely-centered w-full">
        <div
          className={cn(dialogContentVariants({ size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </div>
    );
  },
);

DialogContent.displayName = 'DialogContent';

const DialogTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <h1
        className={cn(
          'text-3xl font-semibold mb-6',
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </h1>
    );
  },
);

DialogTitle.displayName = 'DialogTitle';

const DialogCloseButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => {
    const { onClose } = useContext(dialogContext)

    return (
      <button
        className={cn(
          'w-5 h-auto aspect-square p-4 transition-colors cursor-pointer absolute right-8 top-4 leading-[0px] flex justify-center content-center rounded-sm hover:bg-black/10',
          className
        )}
        ref={ref}
        onClick={onClose}
        {...props}
      >
        X
      </button>
    );
  },
);

DialogCloseButton.displayName = 'DialogCloseButton';

export { DialogCloseButton, DialogContent, DialogOverlay, DialogRoot, DialogTitle };

