import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = '',
}: ContainerProps) {
  return (
    <div
      className={`min-h-screen flex items-center justify-center p-6 w-full h-full ${className}`}
    >
      {children}
    </div>
  );
}
