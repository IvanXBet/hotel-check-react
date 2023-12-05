const  useHotellServise = () => {

    const _apiBase ='http://engine.hotellook.com/api/v2/cache.json?';

    

    const getHotels = async (city, checkIn, checkOut ) => {
        const res = await fetch(`${_apiBase}location=${city}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&lookFor=both&limit=10`)
        const data = await res.json();
        return data.map(item => _transform(item));
    }


    const _transform = (hotels) => {
       
        return {
            hotelId: hotels.hotelId,
            hotelName: hotels.hotelName,
            stars: hotels.stars,
            price: hotels.priceAvg,
            cityName: hotels.location.name   
        }
    }

    return {getHotels}
}

export default useHotellServise;