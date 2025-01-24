import { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const ErrorMessage = ({ children }: Props): ReactElement => {
  return <span className="text-sm text-Schemes-Error">{children}</span>;
};
