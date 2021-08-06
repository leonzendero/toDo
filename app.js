const App = {
    data() {
        return {
            placeholderString: 'Введите название заметки',
            title: 'Создание заметок',
            inputValue: '',
            notes: [],
        }
    },

    mounted() {
        if (localStorage.getItem('notes')) {
            try {
                this.notes = JSON.parse(localStorage.getItem('notes'));
            } catch (e) {
                localStorage.removeItem('notes');
            }
        }
    },

    methods: {

        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue);
                this.inputValue = '';
                this.saveNotes();
            }
        },

        deleteNote(index) {
            this.notes.splice(index, 1);
            this.saveNotes();
        },

        saveNotes() {
            const parsed = JSON.stringify(this.notes);
            localStorage.setItem('notes', parsed);
        },

        KeyPressInput(event) {
            if (event.key === 'Enter') {
                this.addNewNote();
            }
        },
    },
    computed: {

    },

    watch: {

    }
}

Vue.createApp(App).mount('#app')