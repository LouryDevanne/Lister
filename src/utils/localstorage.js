/**
* @name localstorage
* @description données persistantes dans le navigateur
* @author Loury Devanne
* @version 1.0
**/

export default{
    save(key, value){
        //convertir les donnes en string avant l'insertion
        localStorage.setItem(key, JSON.stringify(value));
    },
    load(key){
        const value = localStorage.getItem(key);
        if(value != null){
            //reconvertir le string json en valeurs javascript
        return JSON.parse(value);
        };
        return null;
    },
    delete(){}
}