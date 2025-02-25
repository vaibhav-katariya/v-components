"use client";
import React, { useState } from "react";
import ComponentsLayout from "@/app/component/ComponentsLayout";

// Input Component with Props
type InputType = "text" | "password" | "email" | "number";

interface InputProps {
  type?: InputType;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorText?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const inputStyles = {
  base: "p-2 border rounded-md focus:outline-none",
  error: "border-red-500 text-red-800",
  default: "border-gray-300 text-black",
};

// Input Component Definition
const Input: React.FC<InputProps> = ({
  type = "text",
  label,
  placeholder,
  helperText,
  errorText,
  value,
  onChange,
}) => {
  const hasError = Boolean(errorText);
  const inputClassName = `${inputStyles.base} ${
    hasError ? inputStyles.error : inputStyles.default
  }`;

  return (
    <div className="flex flex-col mb-4">
      {label && <label className="font-semibold mb-1">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={inputClassName}
      />
      {helperText && !hasError && (
        <span className="text-sm text-gray-500">{helperText}</span>
      )}
      {hasError && <span className="text-sm text-red-500">{errorText}</span>}
    </div>
  );
};

// Demo Component for Input
const InputDemo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="space-y-4">
      <Input
        type="text"
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        helperText="Please provide your full name."
      />

      <Input
        type="email"
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        helperText="We'll never share your email."
        errorText={email === "" ? "Email is required." : ""}
      />

      <Input
        type="password"
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        errorText={
          password.length < 6 ? "Password must be at least 6 characters." : ""
        }
      />
    </div>
  );
};

// Main Component with ComponentsLayout Wrapper
const InputComponentLayout = () => {
  const codeSnippet = `
import React, { useState } from 'react';
import { Input } from '@/components/Input/input';

const InputDemo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="space-y-4">
      <Input
        type="text"
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        helperText="Please provide your full name."
      />
      <Input
        type="email"
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        helperText="We'll never share your email."
        errorText={email === "" ? "Email is required." : ""}
      />
      <Input
        type="password"
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        errorText={password.length < 6 ? "Password must be at least 6 characters." : ""}
      />
    </div>
  );
};

export default InputDemo;
`;

  const componentCode = `
//@/components/Input/Input.tsx

import React, { useState } from 'react';

type InputType = "text" | "password" | "email" | "number";

interface InputProps {
  type?: InputType;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorText?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const inputStyles = {
  base: "p-2 border rounded-md focus:outline-none",
  error: "border-red-500 text-red-800",
  default: "border-gray-300 text-black",
};

const Input: React.FC<InputProps> = ({
  type = "text",
  label,
  placeholder,
  helperText,
  errorText,
  value,
  onChange,
}) => {
  const hasError = Boolean(errorText);
  const inputClassName = \`\${inputStyles.base} \${hasError ? inputStyles.error : inputStyles.default}\`;

  return (
    <div className="flex flex-col mb-4">
      {label && <label className="font-semibold mb-1">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={inputClassName}
      />
      {helperText && !hasError && <span className="text-sm text-gray-500">{helperText}</span>}
      {hasError && <span className="text-sm text-red-500">{errorText}</span>}
    </div>
  );
};

export { Input };
`;

  return (
    <ComponentsLayout
      componentTitle="Input Field"
      componentDescription="A versatile input field with support for validation and helper text."
      codeSnippet={codeSnippet}
      componentCode={componentCode}
      componentPath="@/components/Input"
      componentsUses="The Input component can handle various input types and provide visual feedback for validation."
      livePreviewCode={<InputDemo />}
    />
  );
};

export default InputComponentLayout;
