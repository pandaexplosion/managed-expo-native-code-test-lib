import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';
const NativeView = requireNativeViewManager('ManagedExpoNativeCodeTestLib');
export default function ManagedExpoNativeCodeTestLibView(props) {
    return React.createElement(NativeView, { name: props.name });
}
//# sourceMappingURL=ManagedExpoNativeCodeTestLibView.js.map