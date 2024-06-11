<script>
    import "../app.css";
  </script>
  
  <div class=" w-full h-23 absolute text-text_color ">
    <div class="flex w-full h-3 bg-green-800 text-xs items-center flex-row ">
      <div class="w-1/4">
        <div class="flex w-full h-3 bg-green-800 text-xs items-center justify-between pl-10 text-text_color">
          <div class=" bg-Mail.png"></div>
          <span>Lorem@impsum.com</span>
          <span>+47 832 99 812</span>
        </div>
      </div>
      <div class=" w-3/4">

      </div>

    </div>
    <div class="flex w-screen h-20 flex-row ">
      <div class="flex w-1/2 h-full border-red-300 border-2 p-5 justify-start items-center pl-16"> <!-- venstre header -->
          <span class=" text-text_color text-lg ">
            Lorem ipsum
          </span>
      </div>
      <div class="flex w-1/2 h-full border-red-300 border-2 text-text_color items-center justify-evenly"> <!-- høyre header -->
        <a href=""> Home </a>
        <a href=""> Lorem </a>
        <a href=""> Lorem </a>
        <a href=""> Lorem </a>

      </div>
    </div> 
    </div>
    

<slot />
  