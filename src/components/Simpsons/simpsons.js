import './simpsons-style.css'


const SimpsonsFamily = () => {

    const simpsonsArr = [
        {
            name: 'Homer Simpson',
            year: '1956',
            phrase: "D`oh!",
            url: 'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png'

        },
        {
            name: 'Marge Simpson',
            year: '1950',
            phrase: 'Hrmmm….',
            url: 'https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png'
        },
        {
            name: 'Bart Simpson',
            year: '1980',
            phrase: 'Ay Caramba!',
            url: 'https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png'
        },
        {
            name: 'Homer',
            year: 'Lisa Simpson',
            phrase: 'Bart!',
            url: 'https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png'
        },
        {
            name: 'Maggie Simpson',
            year: '1988',
            phrase: '*suck suck *',
            url: 'https://static.wikia.nocookie.net/simpsons/images/9/9d/Maggie_Simpson.png'
        }
    ]


    return (
        simpsonsArr.map(({name,year,phrase,url}) => {
            return(
                <div className='container__simpson'>
                    <h2 className='information'>Name: {name}</h2>
                    <h3 className='information'>Year: {year}</h3>
                    <h4 className='information'>Phrase: {phrase}</h4>
                    <img src={url} alt={name} className='image__simpson'/>
                </div>
            )
        })
    )

}
export {SimpsonsFamily}