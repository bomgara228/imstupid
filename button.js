        let butn = document.getElementById('myButton');
        let modal = document.getElementById('myModal');
        let clos = document.getElementsByClassName('close')[0];

        butn.onclick = function() {
            modal.style.display = 'block';
        }

        clos.onclick = function() {
            modal.style.display = 'none';
        }

        window.onclick = function(e){
            if (e.target == modal){
                modal.style.display = 'none'
            }
        }
        
        let vseprok = [
            {
                name:'Сделайте 100 кликов',
                nagrad: 'На 30 секунд дает в 3 раза больше денег',
                tr: 100
            }
        ];
        
        function gtfa(arr){
            for (item of arr){
                let div = document.createElement('div');

            }
        }