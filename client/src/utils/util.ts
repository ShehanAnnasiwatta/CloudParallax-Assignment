enum Category{
    SMARTPHONES = 'smartphones',
    FRAGRANCES = 'fragrances',
    TOPS = 'tops',
}

export function getCategory(){
    return Object.keys(Category).map(key=>{{value:Category[key as keyof typeof Category], key}})
}