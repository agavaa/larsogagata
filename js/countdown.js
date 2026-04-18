 var endDate = new Date("Jun 19, 2027 16:00:00").getTime();
      
      var update = setInterval(function() {

         const now = new Date().getTime();

         const diff = endDate - now;
         
         const days = Math.floor(diff/(1000 * 60 * 60 * 24));
         const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
         const seconds = Math.floor((diff % (1000 * 60)) / 1000);

         const c = document.getElementById('countdown'); 
         const cDays = document.getElementById('countdown--days'); 
         const cHours = document.getElementById('countdown--hours'); 
         const cMinutes = document.getElementById('countdown--minutes'); 
         const cSeconds = document.getElementById('countdown--seconds'); 

         cDays.innerHTML = `${days}`;
         cHours.innerHTML = `${hours}`;
         cMinutes.innerHTML = `${minutes}`;
         cSeconds.innerHTML = `${seconds}`;


         if (diff < 0) {
            clearInterval(update);
            c.innerHTML = "Takk for hyggelig tid sammen!"
         }


      }, 1000)