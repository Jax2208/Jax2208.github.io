//all the pages for the navbar
const app = Vue.createApp({
    components: {
    'nav-bar': Vue.defineAsyncComponent( () => loadVueFile('./components/navbar.vue') ),
    'home': Vue.defineAsyncComponent( () => loadVueFile('./components/home.vue') ),
    'game': Vue.defineAsyncComponent( () => loadVueFile('./components/game.vue') ),
    'api': Vue.defineAsyncComponent( () => loadVueFile('./components/api.vue') ),
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