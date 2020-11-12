// this variable is pointing to the vue engine, so we are linking Vue to an element in our HTML
(() => {
    let vue_vm = new Vue({
        // el: "#app",
        // data has keys and values. keys are completely dynamic
        data: {
            message: "Hello From Vue!",
            anotherMessage: "You can change this message so easily",

            // collection is an array of data
            collection: [
                { name: "Justin", role: "coordinator", nickname: "nitsuJ" },
                { name: "John", role: "prof", nickname: "Super chill" },
                { name: "Joe", role: "prof", nickname: "Teddy Bear" }
            ]
        },

        methods: {
            logClicked() {
                console.log("clicked on a prof name");
            },

            clickHeader() {
                console.log("clicked on the header");
            }
        }
    }).$mount("#app"); // this is a more common way of linking Vue to wrapper in HTML (the main #app)
})();