import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service';

describe('StorageService', () => {
    let service: StorageService;
    const TOKEN = 'keyToken';

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [StorageService]
        });
        service = TestBed.get(StorageService);
    });

    beforeEach(() => {
        let store = {};
        const mockLocalStorage = {
            getItem: (key: string): string => {
                return key in store ? store[key] : null;
            },
            setItem: (key: string, value: string) => {
                store[key] = `${value}`;
            },
            removeItem: (key: string) => {
                delete store[key];
            },
            clear: () => {
                store = {};
            }
        };

        spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
        spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
        spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
        spyOn(localStorage, 'clear').and.callFake(mockLocalStorage.clear);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should store a string in localStorage', () => {
        service.setItem(TOKEN, 'someString');
        expect(localStorage.getItem(TOKEN)).toEqual('someString');
    });

    it('should return stored string from localStorage', () => {
        localStorage.setItem(TOKEN, 'anotherString');
        expect(service.getItem(TOKEN)).toEqual('anotherString');
    });


});
