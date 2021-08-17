import type { Task } from '../models/task'

class TaskService {
    tasks: Task[];

    constructor() {
        this.tasks = [
            { 
                id: '0', 
                title: 'Feed The Dogs!', 
                description: 'Remember to feed phairo and phaira!', 
                status: 'Pending', 
                comments: [
                    'Dont forget the pork mix',
                    'Do this by 7 am',
                    'Max is allergic to pork'
                ]
            },
            { 
                id: '1', 
                title: 'Study UI/UX Design Best Practices', 
                description: 'Catch up on saved ui/ux videos on coursera', 
                status: 'Completed', 
                comments:[]
            }
        ];
    }

    add(t:Task): Task {
        let newTask:Task = {
            id: (this.tasks.length + 1).toString(),
            status: 'Pending',
            comments: [],
            title: t.title,
            description: t.description
        }
        this.tasks.push(newTask);
        this.tasks = this.tasks;
        
        return t;
        /*
        this.tasks.push(t);
        return t;*/
    };

    addComment(t:Task,comment:string): Task {
        t.id = t.id;
        t.status = t.status;
        t.comments.push(comment);
        t.title = t.title
        t.description = t.description
        this.tasks.splice(this.tasks.indexOf(t),1);
        this.tasks.push(t);
        this.tasks = this.tasks;

        return t;
    }

    getAll() : Task[] {
        return this.tasks;
    }

    checkTask(t:Task) : Task {
        t.id = t.id;
        t.status = 'Completed';
        t.comments = t.comments;
        t.title = t.title;
        t.description = t.description;
        this.tasks.splice(this.tasks.indexOf(t),1);
        this.tasks.push(t);
        this.tasks = this.tasks;

        return t;
    }

    unCheckTask(t:Task) : Task {
        t.id = t.id;
        t.status = 'Pending';
        t.comments = t.comments;
        t.title = t.title;
        t.description = t.description;
        this.tasks.splice(this.tasks.indexOf(t),1);
        this.tasks.push(t);
        this.tasks = this.tasks;

        return t;
    }

    deleteTask(t:Task) : Task {
        this.tasks.splice(this.tasks.indexOf(t), 1);
        this.tasks = this.tasks;

        return t;
    }
}

export const taskService = new TaskService();

