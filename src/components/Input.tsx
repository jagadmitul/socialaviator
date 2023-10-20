import React from "react";

interface InputTypes extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  title?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputTypes>(
  ({ className, title, error, ...props }, ref) => {
    return (
      <div className={`${className} flex flex-col relative`}>
        <p className="font-bold text-sm">{title}*</p>

        <input
          ref={ref}
          {...props}
          className="w-full border-0 border-b border-b-[black] bg-[#FFF7D3] text-black focus:outline-none"
        />
        {error && (
          <p className="absolute -bottom-6 text-sm text-primary">{error}</p>
        )}
      </div>
    );
  }
);

export default Input;
