export function filterData(searchText,restaurant){
    return restaurant.filter(restaurant=>{
        return restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
    })
}