import { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";

export interface Task {
    id: number;
    text: string;
    done: boolean;
}

const tasks = [
    { id: 1, text: "Faire le tuto rxjs", done: false },
    { id: 2, text: "V2 Manga", done: false },
    { id: 3, text: "Faire du CodeNQuest", done: false },
    { id: 4, text: "Mettre en ligne le questionnaire", done: false },
];

export const useTasks = (): Task[] => {
    const [tasks, setTasks] = useState<Task[]>([]);
  
    useEffect(() => {
      const subscription = tasks$.subscribe(newTasks => setTasks([...newTasks]));
      return () => {
        subscription.unsubscribe();
      };
    }, []);
  
    return tasks;
  };

export const tasks$ = new BehaviorSubject(tasks);

export const addTask = (text : string) => {
    const newTask = {
        id: Math.random(),
        done: false,
        text
    };

    tasks.push(newTask);
    tasks$.next([...tasks]); 
}

export const deleteTask = (id: number) => {
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) { 
        tasks.splice(index, 1);
        tasks$.next([...tasks]); 
    }
}

export const toggleTask = (id: number) => {
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) { 
        tasks[index].done = !tasks[index].done;
        tasks$.next([...tasks]); 
    }
}

