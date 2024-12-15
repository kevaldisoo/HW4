
const state = {
    posts: JSON.parse(localStorage.getItem('posts')) || [],
};

const getters = {
    allPosts: (state) => state.posts,
};

const actions = {
    async fetchPosts({ commit }) {
        try {
            if (state.posts.length === 0) {
                const response = await fetch('/api/posts'); 
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json(); 
                commit('setPosts', data); 
            }
        } catch (error) {
            console.error('Error fetching posts: ', error)
        }
    },
    
    

    async logout ({ commit }) {
        try {
            await fetch('/logout', {method: 'POST' });
            commit ('clearState');
            window.location.href = '/login'
        } catch (error) {
            console.error('Error logging out: ', error);
        }
    }
};

const mutations = {
    setPosts: (state, posts) => {
        state.posts = posts;
        
    },

    clearState: (state => {
        state.posts = [];
        localStorage.clear();
    })
};

export default {
    state,
    getters,
    actions,
    mutations
};