import { Header } from "../../components/Header";
import { TaskInput } from "../../components/TaskInput";
import { Task } from "../../components/Task";
import { Footer } from "../../components/Footer";
export default function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        <TaskInput />
        <Task title="Read a book" />
        <Task title="Take a shower" />
        <Task title="Sleep" />
      </div>
      <Footer
        year="2023"
        fullName="Theeraphan Phanwattanasin"
        studentId="650610773"
      />
    </div>
  );
}
