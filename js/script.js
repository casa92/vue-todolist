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
                    done: false
                },

                {
                    text: 'compare il vino',
                    done: false
                },

                {
                    text: 'compare il burro',
                    done: false
                },

                {
                    text: 'compare il pesce',
                    done: false
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

                // if(this.toDos.length === 0) {
                //     const noTaskTitle = document.getElementById('noTaskAdded');
                //     noTaskTitle.classList.remove('title');
                // }
            },
            //al click su li modifico la chiave done da true a false e viceversa
            toggleCheck: function(index) {
                this.toDos[index].done = !this.toDos[index].done;
                // alert(index);
            }

        }
    }
);