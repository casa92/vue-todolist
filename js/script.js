Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            newToDos: '',
            toDos: [
                {
                    text: 'compare il pane',
                    done: false
                },

                {
                    text: 'compare il latte',
                    done: true
                },

                {
                    text: 'compare il vino',
                    done: true
                },

                {
                    text: 'compare il burro',
                    done: true
                },

                {
                    text: 'compare il pesce',
                    done: true
                }
            ]

        },
        methods: {
            //aggiunge un nuovo elemento alla lista
            addNewToDo: function() {
                const newTodoTrimmed = this.newToDos.trim();
                if ( newTodoTrimmed.length > 2) {
                    this.toDos.push({
                        text: newTodoTrimmed,
                        done: false
                    });
                    this.newToDos = '';
                }
            },
            //elimina elemento corrispondente
            deleteTodo: function(index) {
                this.toDos.splice(index, 1);
            },

            toggleCheck: function(index) {
                this.toDos[index].done = !this.toDos[index].done;
            }
        }
    }
);