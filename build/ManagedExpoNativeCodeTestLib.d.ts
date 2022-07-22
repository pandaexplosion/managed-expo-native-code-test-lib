import { Subscription } from 'expo-modules-core';
import ManagedExpoNativeCodeTestLibView from './ManagedExpoNativeCodeTestLibView';
import { ChangeEventPayload, ManagedExpoNativeCodeTestLibViewProps } from './ManagedExpoNativeCodeTestLib.types';
export declare const PI: any;
export declare function hello(): string;
export declare function setValueAsync(value: string): Promise<any>;
export declare function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription;
export { ManagedExpoNativeCodeTestLibView, ManagedExpoNativeCodeTestLibViewProps, ChangeEventPayload };
