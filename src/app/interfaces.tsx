export interface ILocation {
    
    name: string,
    region?: string,
    country: string,
    lat: number,
    lon: number,
    tz_id: string,
    localtime_epoch: number,
    localtime: string

}

export interface IWeather {

    last_updated_epoch: number,
    last_updated: string,
    temp_c:number,
    temp_f: number,
    is_day: number,
    condition: {
        text: string,
        icon: string,
        code: number
    },
    wind_mph: number,
    wind_kph: number,
    wind_degree: number,
    wind_dir: string,
    pressure_mb: number,
    pressure_in: number,
    precip_mm: number,
    precip_in: number,
    humidity: number,
    cloud: number,
    feelslike_c:number,
    feelslike_f: number,
    vis_km: number,
    vis_miles:number,
    uv: number,
    gust_mph: number,
    gust_kph: number

}


export interface WeatherDisplayProps {
    weatherDetails: {
      condition: {
        icon: string;
        text: string;
      };
      temp_c: number;
      temp_f: number;
      humidity: number;
      wind_kph: number;
      wind_mph: number;
    };
    locationDetails: {
      country: string;
      name: string;
      localtime: string;
    };
    isCelsius: boolean;
  }
  
export interface ISignUp{
    name: string
    email: string
    password: string
    confirmPassword:string
}

export interface ISignIn{
    
    email: string
    password: string
   
}

export interface IUser{
    
    email: string
    hashedPassword: string
   
}