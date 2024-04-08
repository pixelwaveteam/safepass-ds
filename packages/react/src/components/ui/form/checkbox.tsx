import { Check } from "lucide-react";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../../utils";

interface CheckboxProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  checked: boolean;
  onToggle: () => void;
  required?: boolean;
}

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(({ 
  checked,  
  onToggle,
  className, 
    ...props 
  }, ref) => (
  <button
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    data-state={checked && 'checked'}
    onClick={onToggle}
    type="button"
    {...props}
  >
    {
      checked &&
        <span
          className={cn("flex items-center justify-center text-current")}
        >
          <Check className="h-4 w-4" />
        </span>
    }
  </button>
));

Checkbox.displayName = 'Checkbox'
