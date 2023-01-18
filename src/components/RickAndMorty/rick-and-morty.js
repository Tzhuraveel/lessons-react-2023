
const RickAndMorty = () => {
    const arrRickAndMorty = [
        {
            id: 1,
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        },
        {
            id: 2,
            name: "Morty Smith",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        },
        {
            id: 3,
            name: "Summer Smith",
            status: "Alive",
            species: "Human",
            gender: "Female",
            image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        },
        {
            id: 4,
            name: "Beth Smith",
            status: "Alive",
            species: "Human",
            gender: "Female",
            image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        },
        {
            id: 5,
            name: "Jerry Smith",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
        },
        {
            id: 6,
            name: "Abadango Cluster Princess",
            status: "Alive",
            species: "Alien",
            gender: "Female",
            image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
        }
    ]



    return(
        arrRickAndMorty.map(({id,name,status,species,gender,image}) => {
            return(
                <div className='container__character'>
                    <h2 className='title__character shadow'>{id}) {name}</h2>
                    <div className='mini-block__information shadow'>
                        <h3>Status: {status}</h3>
                        <h3>Species: {species}</h3>
                        <h3>Gender: {gender}</h3>
                    </div>
                    <img src={image} alt={name} className='image__character shadow'/>
                </div>
            )
        })
    )
}
export {RickAndMorty}