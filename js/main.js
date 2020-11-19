// this variable is pointing to the vue engine, so we are linking Vue to an element in our HTML
(() => {
    let vue_vm = new Vue({
        // el: "#app",

        // data has keys and values. keys are completely dynamic
        data: {
            message: "Hello From Vue!",
            anotherMessage: "You can change this message so easily",
            removeAformat: true,
            showBioData: false,
            currentProfData: {},

            // collection is an array of data
            professors: [
                { name: "Justin", role: "coordinator", nickname: "nitsuJ" },
                { name: "John", role: "prof", nickname: "Super chill" },
                { name: "Joe", role: "prof", nickname: "Teddy Bear" }
            ]
        },

        // this is the lifecycle hook we want to target. Vue is done creating itself, and has attached itself to the "app" div on the the page. 

        // mounted events only fire once in it's lifecycle. You would need to use updated if it should fire more than once
        mounted: function() {
            console.log("Vue is mounted!");
            // alert("Hey there! your vue instance is ready");

            // this is saying "Go grab THIS array, professors".
            // push says "Shove THIS array into this place". Push is an array method
            this.professors.push({name: "Jarrod", role: "supermodel prof", nickname: "Zoolander"})
        },
        
        // run a method when we change our view (update the DOM with Vue)
        updated: function() {
            console.log('Vue just updated the DOM');
        },

        // event handling with methods object, then connect the index and this method
        methods: {
            logClicked() {
                console.log("clicked on a prof name");
            },

            // this connects to the H1
            clickHeader() {
                console.log("oof my head");
            },

            removeProf(target) {
                // remove this prof from the professors array 
                console.log("clicked to remove prof", target);
                // the "this" keyword inside a vue instance REFERS to the Vue instance itself
                // question mark is a shorthand for IF. This statement is saying if it's false, make it true. if it's true make it false.
                this.showBioData = this.showBioData ? false: true
                this.currentProfData = target;
            }
        }
    }).$mount("#app"); // this is a more common way of linking Vue to wrapper in HTML (the main #app)
})();