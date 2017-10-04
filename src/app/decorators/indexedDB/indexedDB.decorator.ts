export function IndexedDB() {
    const getFromDB = (userId: string) => {};
    const setInDB = (userId: string, value: string) => {};

    return (target: any, propertyName: string): void => {
        Object.defineProperty(target, propertyName, {
            get: () => getFromDB(propertyName),
            set: (newValue: string) => setInDB(propertyName, newValue),
            enumerable: true,
            configurable: true
        });
    };
}
