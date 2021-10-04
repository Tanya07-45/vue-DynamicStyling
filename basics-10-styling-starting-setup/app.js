const app = Vue.createApp({
data(){
return{ //here we keep track that which div is selected.
boxASelected: false,
boxBSelected: false,
boxCSelected: false,
};
},

methods:{
    boxSelected(box){
        if (box==='A'){
         this.boxASelected= !this.boxASelected;
        }else if (box==='B'){
            this.boxBSelected= !this.boxBSelected;
        }else if (box==='C'){
            this.boxCSelected= !this.boxCSelected;
        }
    }
},
});
app.mount('#styling');