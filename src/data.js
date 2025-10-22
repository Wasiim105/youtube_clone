export const API_KEY = 'AIzaSyD3Lbbic5EXk6-25Yza1glgFpSIj7jwI_c';

export const value_converter = (value) =>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else
    {
        return value;
    }
}