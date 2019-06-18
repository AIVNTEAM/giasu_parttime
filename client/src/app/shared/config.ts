export const config: any=
{
    //CongThanh: get, set, del cap (key => value) duoc luu trong local storage
    //co the la o trong cache, browser data...
    get : function(key,defaultValue?)
    {
        if (localStorage.getItem(key) !== null)
        {
            return  localStorage.getItem(key);
        }
        else
        {
            return defaultValue;
        }
    },

    set : function(key,value)
    {
        localStorage.setItem(key, value);
    },

    del : function(key)
    {
        localStorage.removeItem(key);
    },
}
