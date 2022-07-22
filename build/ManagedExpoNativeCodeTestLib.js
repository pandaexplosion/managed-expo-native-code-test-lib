import { NativeModulesProxy, EventEmitter } from 'expo-modules-core';
// Import the native module. On web, it will be resolved to ManagedExpoNativeCodeTestLib.web.ts
// and on native platforms to ManagedExpoNativeCodeTestLib.ts
import ManagedExpoNativeCodeTestLib from './ManagedExpoNativeCodeTestLibModule';
import ManagedExpoNativeCodeTestLibView from './ManagedExpoNativeCodeTestLibView';
// Get the native constant value.
export const PI = ManagedExpoNativeCodeTestLib.PI;
export function hello() {
    return ManagedExpoNativeCodeTestLib.hello();
}
export async function setValueAsync(value) {
    return await ManagedExpoNativeCodeTestLib.setValueAsync(value);
}
// For now the events are not going through the JSI, so we have to use its bridge equivalent.
// This will be fixed in the stable release and built into the module object.
// Note: On web, NativeModulesProxy.ManagedExpoNativeCodeTestLib is undefined, so we fall back to the directly imported implementation
const emitter = new EventEmitter(NativeModulesProxy.ManagedExpoNativeCodeTestLib ?? ManagedExpoNativeCodeTestLib);
export function addChangeListener(listener) {
    return emitter.addListener('onChange', listener);
}
export { ManagedExpoNativeCodeTestLibView };
//# sourceMappingURL=ManagedExpoNativeCodeTestLib.js.map