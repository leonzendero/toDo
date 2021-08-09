const App = {
    data() {
        return {
            placeholderString: 'Enter a title for the note',
            title: 'Create a new note',
            inputValue: '',
            inputChange: '',
            inputTask: '',
            editTitle: 'Edit page',
            notes: [],
            num: [],
            task: [],
            changeNum: 'Change title',
            toDo: 'Write an assignment'
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

        if (localStorage.getItem('num')) {
            try {
                this.num = JSON.parse(localStorage.getItem('num'));
            } catch (e) {
                localStorage.removeItem('num');
            }
        }

        if (localStorage.getItem('task')) {
            try {
                this.task = JSON.parse(localStorage.getItem('task'));
            } catch (e) {
                localStorage.removeItem('task');
            }
        }
    },

    methods: {

        seeArray(index) {
            console.log(index);
            this.num.push(index)
            console.log(this.num);
            this.saveNum();
        },

        saveNum() {
            const parsedNum = JSON.stringify(this.num);
            localStorage.setItem('num', parsedNum);
        },

        changeNotes() {
            const count = this.num[this.num.length - 1];
            if (this.inputChange !== '') {
                this.notes.splice(count, 1, this.inputChange);
                this.inputChange = '';
                this.saveNotes();
            }
        },

        AddNewTask() {
            if (this.inputTask !== '') {
                this.task.push(this.inputTask);
                this.inputTask = '';
                this.saveTask();
            }
        },

        deleteTask(index) {
            this.task.splice(index, 1);
            this.saveTask();
        },

        saveTask() {
            const parsedTask = JSON.stringify(this.task);
            localStorage.setItem('task', parsedTask);
        },

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

        KeyPressInput(event) {
            if (event.key === 'Enter') {
                this.addNewNote();
                this.saveNotes();
            }
        },

        saveNotes() {
            const parsed = JSON.stringify(this.notes);
            localStorage.setItem('notes', parsed);
        },
    },
    computed: {},

    watch: {}
}

Vue.createApp(App).mount('#app')