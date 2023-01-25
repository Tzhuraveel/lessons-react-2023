
const Car = ({car, setUpdateCar, setDeleteCar, index}) => {
    const {brand, price, year, id} = car



    return (
        <div>
            <div>ID: {id}</div>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => setUpdateCar(car)}>Update</button>
            <button onClick={() => setDeleteCar(car, index)}>Delete</button>
            <hr/>
        </div>
    );
};

export {Car};