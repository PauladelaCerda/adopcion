import "./App.css";
import Header from "./assets/Components/Header";
import MyCard from "./assets/Components/MyCard";

function App() {
  return (
    <>
      <Header nombre="Adopción de perritos" />
      <div>
        <MyCard
          img="https://www.elcomercio.com/wp-content/uploads/2023/01/perrito-700x391.jpg"
          nombre="Diego"
          descripcion="Perrito que a veces esta chico y a veces esta grande, se adapta a cualquier situacion"
          bgcolor="yellow"
          tags="chico, grande"
        />
      </div>
      <div>
        <MyCard
          img="https://images.ecestaticos.com/UMEMV3zKIyWEbonlN4JnqVWoSHE=/114x0:1997x1410/600x450/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F721%2F122%2F714%2F72112271431cb1078c3fe3e75ad5ab41.jpg"
          nombre="lolita"
          descripcion="Perrito cobarde, buen pelaje, brillante"
          bgcolor="pink"
          tags="suave, pelaje"
        />
      </div>
      <div>
        <MyCard
          img="https://humanidades.com/wp-content/uploads/2017/02/perro-1-e1561678907722.jpg"
          nombre="Elpe Rito"
          descripcion="un perrito simple, goza de buena salud y un sibarita"
          bgcolor="blue"
          tags="sibarita, simple dog"
        />
      </div>
      <div>
        <MyCard
          img="https://humanidades.com/wp-content/uploads/2017/02/perro-5-e1561680169372.jpg"
          nombre="José"
          descripcion="Ama los calcetines y comerse todo"
          bgcolor="green"
          tags="El peor de todos"
        />
      </div>
    </>
  );
}

export default App;
