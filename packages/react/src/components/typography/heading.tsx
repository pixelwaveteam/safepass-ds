import { cva } from 'class-variance-authority';
import { ElementType, HTMLAttributes, forwardRef } from 'react';

const headingVariants = cva('font-bold', {
  variants: {
     size: {
      default: 'text-xl',
      sm: 'text-sm uppercase',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '4xl': 'text-4xl',
     },
  },
  defaultVariants: {
    size: 'default',
  },
})

interface HeadingProps extends HTMLAttributes<typeof HTMLHeadingElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl';
  as?: ElementType; // HTMLHeadingElement;
}

const DEFAULT_HEADING_AS = 'h2';

export const Heading = forwardRef<HTMLHeadElement, HeadingProps>(
  (
    {
      as: HeadingComponent = DEFAULT_HEADING_AS,
      size,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <HeadingComponent
        className={headingVariants({ size, className })}
        ref={ref}
        {...props}
      >
        {children}
      </HeadingComponent>
    );
  }
)

Heading.displayName = 'Heading';