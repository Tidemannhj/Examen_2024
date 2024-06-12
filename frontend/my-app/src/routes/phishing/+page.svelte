<script>
    function sendMail(){
    console.log()
    }
    
    </script>
    
<div class="w-screen h-screen flex justify-center items-center">
    <div class=" w-96 h-2/3">
        <div class="leftside">
  
        </div>
        <div class="rightside">
      
          <h1 class="">skriv inn navn</h1>
          <input class="input border-2" type="text" placeholder="navn" id="name">
          <h2>gmail</h2>
          <input class="input border-2" type="text" placeholder="example@example.example" id="email">
          <h2>skriv enn kort og beskrivende melding</h2>
          <textarea class="input" name="write message" id="message" cols="30" rows="5"></textarea>
          <h2>velg fil</h2>
          <input class="input" type="file" placeholder="choose a file" id="fileinput">
          <button class=" border-2 bg-text_color border-black rounded-md " on:click="{sendMail}" >Submitt</button>
      
        </div>
      </div>
</div>