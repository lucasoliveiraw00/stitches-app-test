import React from 'react';

import { Cross2Icon } from '@radix-ui/react-icons';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import { Button } from '../../../../button';

import {
  DialogPrimitiveClose,
  DialogPrimitiveRoot,
  DialogPrimitiveTrigger,
  StyledContent,
  StyledDescription,
  StyledFlex,
  StyledIconButton,
  StyledOverlay,
  StyledTitle,
} from './styled-components';

import { DialogProps } from './types';

const Dialog = (props: DialogProps) => {
  const {
    title,
    description,
    triggerButtonName,
    triggerButtonType,
    confirmButtonName,
    confirmButtonType,
    children,
    confirmCallback,
  } = props;

  return (
    <DialogPrimitiveRoot>
      <DialogPrimitiveTrigger asChild>
        <Button btn={triggerButtonType}>{triggerButtonName}</Button>
      </DialogPrimitiveTrigger>
      <DialogPrimitive.Portal>
        <StyledOverlay />
        <StyledContent>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
          {children}
          <StyledFlex css={{ marginTop: 25, justifyContent: 'flex-end' }}>
            <DialogPrimitiveClose asChild>
              <Button
                btn={confirmButtonType}
                aria-label="Close"
                onClick={confirmCallback}
              >
                {confirmButtonName}
              </Button>
            </DialogPrimitiveClose>
          </StyledFlex>
          <DialogPrimitiveClose asChild>
            <StyledIconButton>
              <Cross2Icon />
            </StyledIconButton>
          </DialogPrimitiveClose>
        </StyledContent>
      </DialogPrimitive.Portal>
    </DialogPrimitiveRoot>
  );
};

export { Dialog };
