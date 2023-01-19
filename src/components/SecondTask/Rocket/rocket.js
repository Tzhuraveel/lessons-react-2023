const Rocket = ({item}) => {
    const {name,static_fire_date_utc, links} = item
    const {patch} = links
    const {small} = patch



    if(static_fire_date_utc === null || !static_fire_date_utc.includes('2006')){

        return (
            <div className='rocket__container'>
                <h5 className='rocket__name'>Name: {name}</h5>
                <h4 className='rocket__launch'>Rocket launch time: {static_fire_date_utc}</h4>
                <img src={small} alt={name} className='img'/>
            </div>
        )
    }
};

export {Rocket};