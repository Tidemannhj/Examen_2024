<script>
      import { slide } from "svelte/transition";
    function scrollToTop(){
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


</script>

<main class=" overflow-x-hidden w-screen ">
    <div class=" w-screen h-screen border-b-dark_green text-text_color ">
        <div class="flex w-full h-1/2 bg-main_green flex-row">
            <div class="flex w-1/2 flex-col h-full justify-center items-center text-center sm:text-start">
                <span class=" w-1/2 mb-5 text-5xl"> Lorem ipsum </span>
                <span class=" w-1/2 " > Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
            </div> 
            <div class=" w-1/2 mt-24 h-full bg-cover" style="background-image: url(/s1grafisk.png);">

            </div>
        </div>
        <div class=" w-full h-1/2 ">
            
            <div class=" absolute w-full h-56 ">
    
            </div>
            <div class=" absolute w-full h-44 bg-main_green">
    
            </div>
            <div class="flex flex-row  justify-evenly items-center pt-24"> <!-- øvre bokser -->
                <div class=" w-72 h-56 hover:bg-lys_main bg-main_green transition ease-in-out rounded-sm z-50 shadow-[0_35px_60px_20px_rgba(0,0,0,0.3)] hover:scale-105 ">
    
                </div> 
                <div class=" w-72 h-56 hover:bg-lys_main bg-main_green transition ease-in-out  rounded-sm z-50 shadow-[0_35px_60px_20px_rgba(0,0,0,0.3)] hover:scale-105">
    
                </div>
                <div class=" w-72 h-52 transition hover:bg-lys_main bg-main_green  ease-in-out rounded-sm z-50 shadow-[0_35px_60px_20px_rgba(0,0,0,0.3)] hover:scale-105">
    
                </div>
            </div>
        </div>
    </div>
    <div class="flex w-full h-96 flex-col justify-center items-center border-2 text-dark_green"> <!-- side 2 -->
        <div class="flex justify-center w-96 h-24">
            <span class=" font-bold text-center w-96 text-6xl">lorem ipsum</span> <!-- side 2 header -->
            
        </div>
        <div class=" w-52 h-3 bg-dark_green "></div>
        <div class=" pt-5 text-center">
            <span class=" font-light text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </span>
        </div>  
    </div>
    <div class="flex w-screen h-screen text-text_color border-2 justify-center items-center">
        <div class="flex h-full w-11/12 text-dark_green border-2 flex-row "> <!-- side 2 inlegg -->
            <div class="flex w-1/2 h-full border-2 justify-center flex-col items-center ">   <!-- inlegg 1/2 -->
                <div>
                    <span class=" font-light text-xl ">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                </div>
                <div class=" m-5 w-11/12 h-96 bg-cover rounded-md " style="background-image: url(/placeholder1.png);">

                </div>
                <div class=" list-disc flex text-xl flex-col p-8 justify-center text-pretty font-mono w-11/12 h-56">
                    <span class="font-bold mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                    <li class=" hover:underline underline-offset-4">Lorem ipsum</li>
                    <li class="hover:underline underline-offset-4">Lorem ipsum</li>
                    <li class="hover:underline underline-offset-4">Lorem ipsum</li>
                    <li class="hover:underline underline-offset-4">Lorem ipsum</li>
                </div>
            </div>
            <div class=" w-1/2 h-full border-2">   <!-- inlegg 2/2 -->

            </div>
        </div>
    </div>
    <div class="flex w-screen h-10 justify-center items-center">
        <button on:click={scrollToTop} class="  hover:scale-110 transition ease-in-out"> to top</button>
    </div>

</main>