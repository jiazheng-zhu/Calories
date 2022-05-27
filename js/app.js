var app = new Vue({
    el: '#app',
    data() {
        return {
            food: [
                {
                    name: 'Chips',
                    calories: '333',
                    carbs: '321',
                    fat: '999',
                    protein: '223'
                },
                {
                    name: 'Tomato',
                    calories: '33',
                    carbs: '32',
                    fat: '12',
                    protein: '123'
                },
                {
                    name: 'Pork',
                    calories: '533',
                    carbs: '321',
                    fat: '832',
                    protein: '323'
                }
            ]
        }
    },
    computed: {
        totals: function () {
            var totalsC = {
                calories: 0,
                carbs: 0,
                fat: 0,
                protein: 0
            }
            for (let i = 0; i < this.food.length; i++) {
                totalsC.calories += Number(this.food[i].calories);
                totalsC.carbs += Number(this.food[i].carbs);
                totalsC.fat += Number(this.food[i].fat);
                totalsC.protein += Number(this.food[i].protein);
            }

            return totalsC;
        }
    },methods: {
        
        
        removeFood(itemIndex) {
            this.food.splice(itemIndex, 1);
        },
        
        }
    

})