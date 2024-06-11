<script>
    import "../app.css";
  </script>
  <main class=" overflow-x-hidden w-screen ">
    <div class=" w-full h-25 absolute text-text_color ">
      <div class="flex w-full h-3 bg-detail_green text-xs  flex-row ">
        <div class="w-1/4">
          <div class="flex w-full h-3 bg-detail_green text-opacity-0 sm:text-opacity-100 text-xs justify-end items-center  pl-5 text-text_color ">
            <span class=" mr-4">Lorem@impsum.com</span>
            <span>+47 832 99 812</span>
          </div>
        </div>
        <div class=" w-3/4">
  
        </div>
  
      </div>
      <div class="flex w-screen h-20 flex-row ">
        <div class="flex w-1/2 h-full  p-5 justify-start items-center pl-6 sm:pl-16"> <!-- venstre header -->
            <span class=" text-text_color sm:text-lg text-base ">
              Lorem ipsum
            </span>
        </div>
        <div class="flex w-1/2 h-full  text-text_color items-center justify-evenly"> <!-- høyre header -->
          <div class="flex w-1/2 sm:items-end sm:justify-around justify-between items-center flex-col  sm:flex-row"> 
            <a href="" class=" border-b-2 border-b-text_color rounded-b-sm"> Home </a>
            <a href="" class="flex items-center hover:underline-offset-4 hover:underline rounded-sm"> Lorem </a>
          </div>
          <div class="flex w-1/2 sm:items-start sm:justify-around flex-col sm:flex-row ">
            <a href="" class="hover:underline-offset-4 hover:underline"> Lorem </a>
            <a href="" class="hover:underline-offset-4 hover:underline"> Lorem </a>
          </div>
  
        </div>
      </div> 
      </div>
  </main>
  
    

<slot />
  