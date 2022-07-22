import { EventEmitter } from 'expo-modules-core';
const emitter = new EventEmitter({});
export default {
    PI: Math.PI,
    async setValueAsync(value) {
        emitter.emit('onChange', { value });
    },
    hello() {
        return 'Hello from JavaScript! 👋';
    },
};
//# sourceMappingURL=ManagedExpoNativeCodeTestLibModule.web.js.map