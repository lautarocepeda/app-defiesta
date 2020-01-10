import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor(private storage: Storage) { }


    async store(storageKey: string, value: string) {
        const encryptedValue = btoa(JSON.stringify(value));
        await this.storage.set(storageKey, encryptedValue);
    }


    async get(key: string) {
        let value;
        await this.storage.get(key).then(res => {
            value = res;
        });

        return JSON.parse(atob(value));
    }


    async remove(key: string) {
        await this.storage.remove(key);
    }


    async clear() {
        await this.storage.clear()
    }
    
}
