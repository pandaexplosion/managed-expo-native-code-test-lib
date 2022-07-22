import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ManagedExpoNativeCodeTestLibViewProps } from './ManagedExpoNativeCodeTestLib.types';

const NativeView: React.ComponentType<ManagedExpoNativeCodeTestLibViewProps> =
  requireNativeViewManager('ManagedExpoNativeCodeTestLib');

export default function ManagedExpoNativeCodeTestLibView(props: ManagedExpoNativeCodeTestLibViewProps) {
  return <NativeView name={props.name} />;
}
