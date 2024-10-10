import toast from "react-hot-toast";
import supabase from "./supabase";
import { getTodayEnd, getTodayStart } from "../utils/handlerData";

//get task
export async function getTasks() {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error(error);
    toast.error(error.message);
    throw new Error(error.message);
  }

  return data;
}

//get task id
export async function getTaskId(id) {
  // console.log("id " + id);

  let { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    toast.error(error.message);
    throw new Error(error.message);
  }

  return data;
}

//create task
export async function createTasks(newTask) {
  const { data, error } = await supabase
    .from("tasks")
    .insert([newTask])
    .select();

  if (error) {
    console.error(error);
    toast.error(error.message);
    throw new Error(error.message);
  }

  return data;
}

//update task
export async function updateTasks(id, obj) {
  const { data, error } = await supabase
    .from("tasks")
    .update(obj)
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    toast.error(error.message);
    throw new Error(error.message);
  }

  return data;
}

//delete task
export async function deleteTasks(id) {
  const { data, error } = await supabase
    .from("tasks")
    .delete()
    .select()
    .eq("id", id);

  if (error) {
    console.error(error);
    toast.error(error.message);
    throw new Error(error.message);
  }

  return data;
}

export async function getTodayTask() {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .or(`status.eq.all,status.eq.doing,status.eq.done`) // فیلتر کردن وضعیت‌ها (all و doing)
    .gte("created_at", getTodayStart()) // تاریخ از ابتدای امروز
    .lt("created_at", getTodayEnd()) // تاریخ تا انتهای امروز
    .order("created_at");

  if (error) {
    console.error(error);
    throw new Error("Task could not get loaded");
  }

  return data;
}
