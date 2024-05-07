
export function has_data(object: any): boolean{
    
    if(!object || ( object && typeof object === 'string' && object.trim().length === 0)){
        return false;
    }

    if(Array.isArray(object) && object.length === 0){
        return false;
    }

    if(typeof object === 'object' && !Array.isArray(object) && (object instanceof Map || object instanceof Set)&& object.size === 0){
        return false;
    }
    
    return true;

}