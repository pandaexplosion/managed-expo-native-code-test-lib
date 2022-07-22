import * as React from 'react';

import { ManagedExpoNativeCodeTestLibViewProps } from './ManagedExpoNativeCodeTestLib.types';

function ManagedExpoNativeCodeTestLibWebView(props: ManagedExpoNativeCodeTestLibViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}

export default ManagedExpoNativeCodeTestLibWebView;
