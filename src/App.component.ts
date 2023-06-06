import { Options, Vue } from 'vue-class-component';
import Header from './components/Header/Header.vue';
import "./styles/scroll.css";

@Options({
    components: {
        Header
    },
})
export default class App extends Vue { }