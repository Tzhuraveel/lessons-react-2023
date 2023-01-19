const spaceData = () => {
    return (
        fetch('https://api.spacexdata.com/v4/launches/').then(response => response.json())
    );
};

export {spaceData};