import Component from '@ember/component';
import CanvasJS from 'npm:canvasjs';
import axios from 'npm:axios';
import Pusher from 'npm:pusher-js';

let dataPoints = [
    {label: 'Nigeria', y:1},
    {label: 'Mexico', y:1},
    {label: 'Brazil', y:1},
    {label: 'Argetina', y:1}
]

export default Component.extend({
    
    init() {
        this._super(...arguments);
        
        const chart = new CanvasJS.Chart('vote-chart-container', {
            animationEnabled: true,
            theme: 'theme1',
            title: {
                text: 'The best fans'
            },
            data: [
                {
                    type: 'doughnut',
                    dataPoints: dataPoints
                }
            ]
        });
        
        chart.render();
        
        // Pusher
        var pusher = new Pusher('734ff5d8f1e5ed1dd419', {
            cluster: 'us2',
            encrypted: true
        });
        
        var channel = pusher.subscribe('poll');
        channel.bind('vote', (data) => {
            dataPoints = dataPoints.map(x => {
                if (x.label == data.fans) {
                    x.y += data.points;
                    return x;
                } else {
                    return x;
                }
            });
            chart.render()
        });        
    },
    
    actions: {
        getElement(e) {
            var id = e.target.id;
            axios.post('http://localhost:3000/vote', {id});
        }
    }  
});
