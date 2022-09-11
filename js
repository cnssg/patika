<script>
        var girilenSayi=document.querySelector("#gsayi");
        var sonuc=document.querySelector("#sonuc");
        var hesapla=document.querySelector("#hesapla");
        
        hesapla.onclick=function(){
            var adet = 0,toplam=0;
            var num=Number(gsayi.value);
            console.log(num);
            while(num != 0)
            {
               toplam=(num%10)+toplam;
               num =Math.floor(num / 10);
                ++adet;
            }
            
            sonuc.value=toplam;
        } 
        if(sonuc%2==0) {
            window.alert("Even";
        } else { 
            window.alert("Odd");
        }
    </script>
