// Basic structure

// (function(){
//     // Declare private vars and functions
//     return {
//         // Declare public var and functions
//     }
// })();

// STANDARD MODULE PATTERN
// const UICtrl = (function(){
//     let text = 'Hello World';

//     const changeText = function() {
//         const element = document.querySelector("h1");
//         element.textContent = text;
//     }

//     return {
//         callChangeText: function(){
//             changeText();
//             console.log(text)
//         }
//     }
// })();

// UICtrl.callChangeText();

// REVEALING MODULE PATTERN
const ItemCtrl = (function(){
    let _data = [];
    function add(item) {
        _data.push(item);
        console.log("Item Added....")
    }

    function get(id){
        return _data.find(item => item.id === id)
    }

    return {
        add: add,
        get: get
    }
})();

ItemCtrl.add(
    {
        id: 1,
        title: "One"
    }
)

console.log(ItemCtrl.get(1))