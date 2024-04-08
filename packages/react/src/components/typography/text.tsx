import { VariantProps, cva } from 'class-variance-authority';
import { ElementType, HTMLAttributes } from 'react';

const textVariants = cva('', {
  variants: {
     size: {
      default: 'text-sm',
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '8xl': 'text-8xl',
     },
  },
  defaultVariants: {
    size: 'default',
  },
})

interface TextProps
  extends HTMLAttributes<typeof HTMLSpanElement | HTMLParagraphElement>, 
  VariantProps<typeof textVariants> {
  as?: ElementType;
}

const DEFAULT_TEXT_AS = 'p';

export function Text({
  as: TextComponent = DEFAULT_TEXT_AS,
  size,
  className,
  children,
}: TextProps) {
  return (
    <TextComponent
      className={textVariants({ size, className })}
    >
      {children}
    </TextComponent>
  );
}