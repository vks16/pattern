// constructor function event observer
class EventObserver{
    constructor(){
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    }
    unsubscribe(fn) {
        this.observers = this.observers.filter(item => item !== fn)
    }

    fire(){
        this.observers.forEach(item => item.call())
    }

}



const click = new EventObserver();

// Event Listeners
document.querySelector(".sub-ms")
.addEventListener(
    'click',
    function(){
        click.subscribe(getCurMilliseconds)
    }
);

document.querySelector(".unsub-ms")
.addEventListener(
    'click',
    function(){
        click.unsubscribe(getCurMilliseconds)
    }
);


document.querySelector(".fire")
.addEventListener(
    'click',
    function(){
        click.fire()
    }
);


//Click handler
const getCurMilliseconds = function() {
    console.log(`Current Milliseconds: ${
        new Date().getMilliseconds()
    }`)
}