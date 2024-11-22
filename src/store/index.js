import { createStore } from 'vuex'

export default createStore({
    strict: true,
    state: {
      
        "posts": [
            {
                "id": 1,
                "author": "",
                "img": "https://github.com/RaioMitt/WAD24_HW1/raw/main/img/halloween.jpg",
                "date": "Oct 31, 2024",
                "post": "Happy halloween!"
            },
            {
                "id": 2,
                "author": "",
                "img": null,
                "date": "Oct 28, 2024",
                "post": "Wishing everyone a beautiful monday!"
            },
            {
                "id": 3,
                "author": "",
                "img": null,
                "date": "Oct 24, 2024",
                "post": "Has anyone seen the new venom movie?"
            },
            {
                "id": 4,
                "author": "",
                "img": "https://github.com/RaioMitt/WAD24_HW1/raw/main/img/ujula_konsum.jpg",
                "date": "Oct 18, 2024",
                "post": "I do not use this word lightly, but this store is GOATED"
            },
            {
                "id": 5,
                "author": "",
                "img": null,
                "date": "Oct 15, 2024",
                "post": "I think, therefor I am"
            },
            {
                "id": 6,
                "author": "",
                "img": "https://github.com/RaioMitt/WAD24_HW1/raw/main/img/ryytli.png",
                "date": "Oct 6, 2024",
                "post": "Rüütli street 10 years ago"
            },
            {
                "id": 7,
                "author": "",
                "img": null,
                "date": "Oct 5, 2024",
                "post": "What are you doing this weekend?"
            },
            {
                "id": 8,
                "author": "",
                "img": null,
                "date": "Oct 4, 2024",
                "post": "All this studying makes me sleepy... zzz..."
            },
            {
                "id": 9,
                "author": "",
                "img": "https://github.com/RaioMitt/WAD24_HW1/raw/main/img/sad.jpg",
                "date": "Oct 4, 2024",
                "post": "MFW I have to wake up 6 am"
            },
            {
                "id": 10,
                "author": "",
                "img": null,
                "date": "Oct 2, 2024",
                "post": "Hello!"
            }
        ]
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
})
