import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
    const [ storedValue, setStoredValue ] = useState(() => {
        const store = window.localStorage.getItem(key); 
        return store ? JSON.parse(store) : initialValue;
    })

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [ storedValue, setValue ];
}