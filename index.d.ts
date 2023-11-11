import React from 'react';

type ClipboardProps = {
  render: () => React.ReactNode,
  text: string,
  props: object,
  onSuccess?: () => void | undefined,
  onError?: () => void | undefined,
};

export declare function Clipboard({
  render,
  text,
  props,
  onSuccess,
  onError,
}, ClipboardProps): JSX.Element;
