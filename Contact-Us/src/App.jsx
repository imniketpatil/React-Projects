import "./App.css";
import Navigation from "./components'/Navigation/Navigation";
import Header from "./components'/Header/Header";
import ContactForm from "./components'/ContactForm/ContactForm";

function App() {
  return (
    <div>
      <Navigation />
      <main className="main_container">
        <Header />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
