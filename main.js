//let followedBy = 132;
//Some reason the value do not update in an object scope, so I declare its value in the object.
let username = 'Kirah Haitaka';
let userquote = 'My favourite thing in this game is watching disaster break up their life in this game.';
let usergallerytitle = 'The Nuke Thailand Minecraft Modpack';

const gallery = {
    data() {
        return {
            imagesdata: [{
                    imghref: 'images/img_user001_id001.png',
                    profilehref: 'images/profile_user001.png',
                    imgtitle: 'Your first night in the first coffin',
                    imgdescription: 'First night is a night mare in Minecraft, but in The Nuke, it is even harder. Remember that monsters are your night mare. Building your own house in the first night is not always a good idea. If you plan to build one. you should concern no beauty. Survive is the key anwer for your entire life here. The best way to build your house is to touch the sky.   \n\n It might be too dificult to have some nice looking house in this modpack because most of the monsters hold TNT. If you love building something beautiful, you can skip this mod pack. Monsters bring you a destructive game play experiences that you will finally cover your nice-looking house with something that makes it look so ugly but durable and fast, also you have no choice. However if you can survive and manage to keep them away from your house, you may start something beautiful. Don\'t worry! There will be one day you can do it!' ,
                    diaplayname: username,
                    isliked: false
                }, {
                    imghref: 'images/img_user001_id002.png',
                    profilehref: 'images/profile_user001.png',
                    imgtitle: 'No tree punching and easy tool crafting',
                    imgdescription: 'All basic necessities are significantly harder to maintain. " No Tree Punching " gives this mod an ability to ban you from gathering tree with your bare hand. Now there are flint tools. Did you just have a wood to craft a pickaxe? Obtaining a tools is now harder because you need a lot more steps to be able to mine a stone. " Tinker Construct " will be the replacement of all vanila tools and most of a craftable tools on crafting table. With " Tinker Hegenomy " , it will forces all vanila tools to be uncraftable.',
                    diaplayname: username,
                    isliked: false
                }, {
                    imghref: 'images/img_user001_id003.png',
                    profilehref: 'images/profile_user001.png',
                    imgtitle: 'Invention by you along with disaster by mobs',
                    imgdescription: 'Technology and some farming facilities are given in this pack, letting you to create an endless possibilities for your base. It make this hardcore surviving easier to be accomplished. But not always. You need to find a way to keep your technology safe because mob can simply ruin them.  Don\'t be worry, because dropped items can\'t be destroyed by fire or explosion. Except explosion by creeper, it cause your things gone.  With the new item from Industry Forgoing, and other, you will be able to make your own factory for items farming. Some of an ores can be infinitely mined, but some are extremely hard to find and they are required to make an expensive tools. But if you are planing to play in multiplayer and PVP, you would found a large gap between a new players and the one who is alrealdy reached the mid game in the game. Since there are a lot of technology advancements in the game, players who have reached some point can just kill someone new in just a single hit. If you are new in a long-living server, you will find yourself a harder time to survive in a crowd of god-touched people. I expected this point in the game , so... deal with that.',
                    diaplayname: username,
                    isliked: false
                }, {
                    imghref: 'images/img_user001_id004.png',
                    profilehref: 'images/profile_user001.png',
                    imgtitle: 'Don\'t let zombie in',
                    imgdescription: 'Unwelcoming visitor will ruin your house and destroy your valuable items. - Epic siege mod    Zombies can place an unlimited TNT near you or your house. Surviving alone will be harder because you don\'t have enough eyes to take care of your base. - Epic siege mod',
                    diaplayname: username,
                    isliked: false
                }, {
                    imghref: 'images/img_user001_id005.png',
                    profilehref: 'images/profile_user001.png',
                    imgtitle: 'The world is not only for you.',
                    imgdescription: 'It such a great experience to play this with your friends or in multiplayer. Helping each other to survive together or killing everyone whom you see ahead. - Biome O\' planty Thank to Biome O Planty, The Beneath, better Nether, Recurrent Complex, and more. These mods add a whole new terrain generation and give you a whole new exploration experiences. There are a lot of structures placed on the world by Recurrent Complex, and I\'ve built many additional structures for this mod pack. With " Better Nether " mod , nether in this modpack will not be the same. Having " The Beneath " mod, one more deadly dimension added, and will be waiting for you to explore. ',
                    diaplayname: username,
                    isliked: false
                }, {
                    imghref: 'images/img_user001_id006.png',
                    profilehref: 'images/profile_user001.png',
                    imgtitle: 'A nice little summer on fire',
                    imgdescription: 'With optifine installed, you will be able to see the world in the way true gamers see it. But it might blow your eyes up in a lot of explosion and something...',
                    diaplayname: username,
                    isliked: false
                }

            ]
        }
    },
    methods: {
        likeThisPicture(pictureID) {
            this.imagesdata[pictureID].isliked = !this.imagesdata[pictureID].isliked;
        },
        searchByTitle(searchKey){
            for(let i = 0 ; i<=imagesdata.length ; i++ ){
                imagesdata[i].includes(searchKey);
            }
        }
    },
    computed: {
        coundlikeforeach(pictureID) {
            return 0; //Not implemented
        }
    }
}
Vue.createApp(gallery).mount('#gallery');

//Main gallery sector , a main display
const maingallerysector = {
    data() {
        return {
            profilehref: 'images/profile_user001.png',
            mainimghref: 'images/img_user001_maingallery.png',
            diaplayname: username,
            displayquote: userquote,
            displayfollowed: 132,
            followedbyyou: false}
    },
    methods: {
        clickfollowedbyyou() {
            this.followedbyyou = !this.followedbyyou;
            if(this.followedbyyou){
                this.displayfollowed += 1;
            }else{
                this.displayfollowed -= 1;
            }
            
        }
    }
}
Vue.createApp(maingallerysector).mount('#maingallerysector');


const mainsectorheader = {
    data() {
        return {
            sectordisplayname: username,
            gallerytitle: usergallerytitle,
            searchBarOn: false
        }
    },
    methods:{
        showSearchBar(){
            this.searchBarOn = true;
        },
        searchByTitle(){
            this.searchBarOn = false;
        }
    }
}
Vue.createApp(mainsectorheader).mount('#mainsectorheader');