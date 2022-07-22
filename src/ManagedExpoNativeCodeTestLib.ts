import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ManagedExpoNativeCodeTestLib.web.ts
// and on native platforms to ManagedExpoNativeCodeTestLib.ts
import ManagedExpoNativeCodeTestLib from './ManagedExpoNativeCodeTestLibModule';
import ManagedExpoNativeCodeTestLibView from './ManagedExpoNativeCodeTestLibView';
import { ChangeEventPayload, ManagedExpoNativeCodeTestLibViewProps } from './ManagedExpoNativeCodeTestLib.types';

// Get the native constant value.
export const PI = ManagedExpoNativeCodeTestLib.PI;

export function hello(): string {
  return ManagedExpoNativeCodeTestLib.hello();
}

export async function setValueAsync(value: string) {
  return await ManagedExpoNativeCodeTestLib.setValueAsync(value);
}

// For now the events are not going through the JSI, so we have to use its bridge equivalent.
// This will be fixed in the stable release and built into the module object.
// Note: On web, NativeModulesProxy.ManagedExpoNativeCodeTestLib is undefined, so we fall back to the directly imported implementation
const emitter = new EventEmitter(NativeModulesProxy.ManagedExpoNativeCodeTestLib ?? ManagedExpoNativeCodeTestLib);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ManagedExpoNativeCodeTestLibView, ManagedExpoNativeCodeTestLibViewProps, ChangeEventPayload };
