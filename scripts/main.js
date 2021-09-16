const app = Vue.createApp({
    components: {
    'nav-bar': Vue.defineAsyncComponent( () => loadVueFile('./components/navbar.vue') ),
    'home': Vue.defineAsyncComponent( () => loadVueFile('./components/home.vue') ),
    'games': Vue.defineAsyncComponent( () => loadVueFile('./components/games.vue') ),
    'tfapi': Vue.defineAsyncComponent( () => loadVueFile('./components/tfapi.vue') ),
    'calc': Vue.defineAsyncComponent( () => loadVueFile('./components/calculator.vue') ),
  }
});

async function fetchURL(url) {
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}