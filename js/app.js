var app = new Vue({
    el: '#app',
    data () {
        return {
            totals: {
                cal: null,
                fat: null,
                car: null,
                pro: null
            },
            newProd: {
                name: '',
                cal: 0,
                fat: 0,
                car: 0,
                pro: 0
            },
            productList: [
             {
                 name: 'Potato',
                 cal: 12,
                 fat: 3,
                 car: 4,
                 pro: 2
             }, 
             {
                name: 'Tomato',
                cal: 13,
                fat: 5,
                car: 7,
                pro: 9
            }, 
            {
                name: 'Onion',
                cal: 123,
                fat: 34,
                car: 455,
                pro: 266
            }  
            ]
        }
    },
    methods: {
        addNewProd() {
            this.productList.push({
                name: this.newProd.name,
                cal: Number(this.newProd.cal),
                fat: Number(this.newProd.fat),
                car: Number(this.newProd.car),
                pro: Number(this.newProd.pro)
            });
            this.newProd = {};
        },
        removeProd(itemIndex) {
            this.productList.splice(itemIndex, 1);
        },
        dataChanged(){
            for (var i = 0; i < this.productList.length; i++){
                this.totals.cal += this.productList[i].cal;
                this.totals.fat += this.productList[i].fat;
                this.totals.car += this.productList[i].car;
                this.totals.pro += this.productList[i].pro;
            }
        }
    }
})