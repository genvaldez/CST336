function displaySymbol($randomValue, $pos){
                
    switch($randomValue){
        case 0: $symbol="seven";
            break;
        case 1: $symbol="cherry";
             break;
        case 2: $symbol="lemon";
        }
    document.write("<img id='reel$pos' src='img/$symbol.png' alt='$symbol' title='$symbol' width='70'>");
                /*
                var image=document.getElementById("#img");
                if($randomValue==0){
                    image.src="img/seven.png";
                }else if($randomValue==1){
                    image.src="img/cherry.png";
                }else{
                    image.src="img/lemon.png";
                }
                */
    }
            
    function displayPoints($randomValue1, $randomValue2,$randomValue3, $randValue4 ){
        document.write("<div id='output'>");
            if($randomValue1 == $randomValue2 && $randomValue2 == $randomValue3){
            switch($randomValue1){
                case 0: $totalPoints = 1000;
                    document.write("<h1>Jackpot!</h1>");
                    break;
                case 1: $totalPoints = 500;
                    break;
                case 2: $totalPoints = 250;
                    break;
                case 3: $totalPoints = 900;
            }
            document.write("<h2>You won $totalPoints points!</h2>");
            }else{
                document.write("<h3> Try Again! </h3>");
                
            }
             document.write("</div>");
         }
            
          function play(){
            for($i=1; $i<4; $i++){
            ${"randomValue" . $i } = Math.random(0,3);
                displaySymbol(${"randomValue" . $i}, $i );
            }
            
            displayPoints($randomValue1, $randomValue2, $randomValue3, $randomValue4);
         }


