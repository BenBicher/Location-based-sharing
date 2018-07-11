export class Init{
    load(){
        if(localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined){
            var markers = [];

            localStorage.setItem('markers', JSON.stringify(markers));
        } else {
            console.log('loading.....');
        }
    }
}