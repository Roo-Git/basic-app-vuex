import { createStore } from "vuex";

export default createStore({
  state: {
    titleApp: "Memes",
    memes: [],
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {},
});

/*

*** VUEX ***

STORE - Donde guardamos todos los datos de nuestra APP.

STATE - Datos de nuestra APP accesibles para ser renderizados desde cualquier componente.

MUTATIONS - Funciones encargadas de actualizar el estado de nuestro Store cuando nosotros se lo indiquemos y lo necesitemos.

ACTIONS - Parecidas a las Mutations. La diferencia es que en lugar de mutar un estado directamente, lo que hace es realizar un commit sobre una mutacion. Esto significa que puede ejecutar cualquier mutation y las actions pueden ser operaciones asíncronas.

GETTERS - Son funciones que sirven para obtener cualquier estado.

MODULES - Los modulos sirven para dividir nuestra STORE, en pequeños objetos pequeños (modulos). Los cuales tendrán sus propios states, mutations, actions e incluso sus propios modulos anidados.

FLOW - Flujo de como trabaja Vuex el estado de nuestra APP.

1. Se carga un componente.

2. El componente dispachea una accion que llama a una API(Backend)

3. Esa API devuelve los datos a la accion.

4. La accion ejecuta un commit.

5. El commit ejecuta un mutation que a su vez este mutation actualiza un estado.

6. Este estado es recogido y renderizado por un componente.

*/
