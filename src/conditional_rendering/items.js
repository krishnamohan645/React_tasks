import ItemsData from "./itemsdata";




const Items = ()=>{
    const isVegetable = true
    return(
        <>
        <h2>Vegetables Lists</h2>
        {
            ItemsData.map(values=>{
                return(
                    <>
                    <p>{isVegetable ? values.name : values.name1}</p>
                    </>
                )
            })
        }
        </>
    )
}


export default Items;