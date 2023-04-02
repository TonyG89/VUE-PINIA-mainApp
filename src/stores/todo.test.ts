import { setActivePinia, createPinia } from 'pinia';
import { describe, test, expect, beforeAll, afterAll } from 'vitest';
import {useTodoStore} from './todo';

beforeAll(() => setActivePinia(createPinia()))

describe("useTodoStore", () => {
    test("creates a store", () => {
        const store = useTodoStore()
        expect(store).toBeDefined()
    })
})