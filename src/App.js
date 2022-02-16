import React from "react";
import Header from "./features/header/Header";
import TodoList from "./features/todos/TodoList";
import Footer from "./features/footer/Footer";

function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Random Todos - React Redux </h1>
        </section>
      </nav>
      <main>
        <section className="medium-container">
          <h2>Refresh Page to see random Todos</h2>
          <div className="todoapp">
            <Footer />
            <Header />
            <TodoList />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
