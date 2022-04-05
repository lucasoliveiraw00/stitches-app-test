import { ButtonType } from '../../../../../button/types';

export type DialogProps = {
  title: string;
  description: string;
  triggerButtonName: string;
  triggerButtonType?: ButtonType;
  confirmButtonName: string;
  confirmButtonType?: ButtonType;
  children: React.ReactNode;
  confirmCallback?: () => void;
};
