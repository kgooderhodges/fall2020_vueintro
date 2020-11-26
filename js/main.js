// this variable is pointing to the vue engine, so we are linking Vue to an element in our HTML
import { fetchData } from "./components/DataMiner.js";
import ProfCard from "./components/TheProfCard.js";

(() => {
    // Vue.component("prof-card", {
    //     props:["prof"],
        
    //     template: `<li>
    //                     <img :src="'images/' + prof.Avatar" :alt="{{ prof.Name }}">
    //                     <p>Prof Name: {{ prof.Name }}</p>
    //                     <a href="" class="remove-prof">Show {{ prof.Name }}'s Info</a>
    //                     <a href="" class="remove-prof">Remove {{ prof.Name }}</a>
    //                 </li>`,

    //     created: function() {
    //         console.log('created a prof card');
    //     }
    // });

    let vue_vm = new Vue({
        // el: "#app",

        // data has keys and values. keys are completely dynamic
        data: {
            message: "Hello From Vue!",
            anotherMessage: "You can change this message so easily",
            removeAformat: true,
            showBioData: false,
            currentProfData: {},

            professors: []
            // collection is an array of data
            // professors: [
            //     { name: "Justin", role: "coordinator", nickname: "nitsuJ" },
            //     { name: "John", role: "prof", nickname: "Super chill" },
            //     { name: "Joe", role: "prof", nickname: "Teddy Bear" },
            //     { name: "Jarrod", role: "supermodel prof", nickname: "Zoolander" }
            // ]
        },

        // this is the lifecycle hook we want to target. Vue is done creating itself, and has attached itself to the "app" div on the the page. 

        // mounted events only fire once in it's lifecycle. You would need to use updated if it should fire more than once
        mounted: function() {
            console.log("Vue is mounted, trying a fetch for the initial data");
            // alert("Hey there! your vue instance is ready");
            fetchData("./includes/index.php")
                .then(data => {
                    data.forEach(profs => this.professors.push(profs));
                })
                .catch(err => console.error(err));
            // this is saying "Go grab THIS array, professors".
            // push says "Shove THIS array into this place". Push is an array method
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

            showProfData(target) {
                // show this prof from the professors array 
                console.log("clicked to view prof bio data", target, target.name);
                // the "this" keyword inside a vue instance REFERS to the Vue instance itself
                // question mark is a shorthand for IF. This statement is saying if it's false, make it true. if it's true make it false.
                this.showBioData = this.showBioData ? false: true;
                // make the selected prof's data visible
                this.currentProfData = target;
            },
            
            removeProf(target) {
                // remove this prof from the professors array 
                console.log("clicked to remove prof", target, target.name);
                // the "this" keyword inside a vue instance REFERS to the Vue instance itself
                // Splice is an array method and takes out the part of the array that you've selected. like editing out a bad scene and cutting video back together
                // indexOf the professors array. saying just remove 1 element
                // this.professors.splice(this.professors.indexOf(target), 1);
                this.$delete(this.professors, target); // splice works, but delete here works better. It's more readable
            }
        },

        components: {
            "prof-card": ProfCard
        }
    }).$mount("#app"); // this is a more common way of linking Vue to wrapper in HTML (the main #app)
})();