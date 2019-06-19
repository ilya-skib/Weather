import * as types from 'ActionType'

const initialState = {
    geolocateCity : {
        lat : 0.0,
        lon : 0.0
    }
};

export  default  function weatherReducer(state = initialState , action) {
    switch (action.type) {
        case types.GEOLOCATE_CITY:
            return {
               geolocateCity : {
                   lat : action.lat,
                   lon : action.lon
               }
            };
        default :
            return  state;
    }
}