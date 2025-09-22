// ellathayum import panrom
import React, { useEffect, useState } from "react";
import Tasklist from "./Tasklist";
import AddTask from "./AddTask";
import Confirm from "./Confirm";
import Overview from "./Overview";


// 1st unique id for each task .... like id : 4f2erfc
function generateId() {
  return Math.random().toString(36).slice(2, 9);
}

// Get today's date in YYYY-MM-DD format 
function getTodayDate() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today.toISOString().slice(0, 10);
}

// Convert date string to a Date object starting from midnight
function normalizeDate(date) {
  return new Date(date + "T00:00:00");
}

// ippo itha 4 task aa pirikirom , like split pannikirom
function categorizeTasks(tasks) {
  const today = normalizeDate(getTodayDate());
  const categorized = { Today: [], Upcoming: [], Overdue: [], Completed: [] };

  tasks.forEach((task) => {
    if (task.completed) {
      categorized.Completed.push(task);
    } else {
      const due = normalizeDate(task.dueDate);
      if (due.getTime() === today.getTime()) categorized.Today.push(task);
      else if (due > today) categorized.Upcoming.push(task);
      else categorized.Overdue.push(task);
    }
  });

  return categorized;
}



export default function Main() {
  
  // task state aa local storage la save pannikirom
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("todo_tasks");
    if (saved) {
      return JSON.parse(saved);
    } else {
      return [];
    }
  });

  // add task model & form data model
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [formData, setFormData] = useState(getInitialFormData());

  // confirm state model 
  const [confirmAction, setConfirmAction] = useState(null);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("todo_tasks", JSON.stringify(tasks));
  }, [tasks]);



  function getInitialFormData() {
    return {
      title: "",
      description: "",
      dueDate: getTodayDate(),
      priority: "Medium",
    };
  }
//add task 
  function addTask() {
    //first validate panrom
    if (!formData.title) {
      alert("Task title is required");
      return;
    }

    const newTask = { id: generateId(), ...formData, completed: false };
    setTasks((prev) => [newTask, ...prev]);
    setIsAddModalOpen(false);
    resetForm(); // input field aa clear panum
  }

// updaete
  function updateTask(id, updates) {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
            return { ...task, ...updates };
        }
        else {
            return task 
        }
      } ));
  }
//delete
  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }
//clear
  function clearCompleted() {
    setTasks((prev) => prev.filter((task) => !task.completed));
  }
//format
  function resetForm() {
    setFormData(getInitialFormData());
  }

// Categorize tasks for display
  const categorized = categorizeTasks(tasks);

  return (
    <div className="min-h-screen bg-orange-500 p-6 md:p-10">
      <div className="max-w-5xl mx-auto">
        
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl text-white font-semibold">To-Do App</h1>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
             Add Task
          </button>
        </header>

        
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Tasklist
            categorized={categorized}
            updateTask={updateTask}
            requestDelete={(id) => setConfirmAction(() => () => deleteTask(id))}
          />
          <Overview
            categorized={categorized}
            tasks={tasks}
            clearCompleted={() => setConfirmAction(() => clearCompleted)}
          />
        </section>

        {/* models */}
        {isAddModalOpen && (
          <AddTask
            formData={formData}
            setFormData={setFormData}
            closeModal={() => setIsAddModalOpen(false)}
            saveTask={addTask}
          />
        )}

        {confirmAction && (
          <Confirm
            message="Are you sure?"
            onConfirm={() => {
              confirmAction();
              setConfirmAction(null);
            }}
            onCancel={() => setConfirmAction(null)}
          />
        )}
      </div>
    </div>
  );
}
