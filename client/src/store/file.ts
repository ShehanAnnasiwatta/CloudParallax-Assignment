import { writable } from "svelte/store";

export const categoryFilter = writable({
    category: ''
})

export const updateCategoryFilter = (filterValue: string): void => {
    categoryFilter.update(filter => {
        filter.category = filterValue
        return filter
    })
}
