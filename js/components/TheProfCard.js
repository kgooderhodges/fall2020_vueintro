export default {
    name: "TheProfCard",

    props:["prof"],

// data needs to be a function inside a component
    data: function() {
        return {
            myName: this.prof.Name,
            myRole: this.prof.Role,
            program: "IDP"
        }
    },
        
        template: 
        `<li @click="logClicked">
            <img :src="'images/' + prof.Avatar" :alt='prof.Name + " image"'>
            <p>Prof Name: {{ prof.Name }}</p>
            <a @click.prevent="noReload" href="" class="remove-prof">Show {{ prof.Name }}'s Info</a>
            <a href="" class="remove-prof">Remove {{ prof.Name }}</a>
        </li>`,

        created: function() {
            console.log(`created ${this.prof.Name}'s`);
        },

        methods: {
            logClicked() {
                console.log(`fired from inside ${this.prof.Name}'s component!`);
            },

            noReload(){
                console.log('no reload page');
            }
        }
}