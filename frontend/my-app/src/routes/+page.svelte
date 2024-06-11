<script>
      import { slide } from "svelte/transition";
    function scrollToTop(){
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


</script>
<style>
    
</style>
<main class=" overflow-x-hidden w-screen ">
    <div class=" w-screen h-screen border-b-dark_green text-text_color ">
        <div class=" w-full h-1/2 bg-main_green">
    
        </div>
        <div class=" w-full h-1/2 ">
            
            <div class=" absolute w-full h-56 ">
    
            </div>
            <div class=" absolute w-full h-44">
    
            </div>
            <div class="flex flex-row  justify-evenly items-center pt-24">
                <div class=" w-72 h-56 hover:bg-lys_main transition ease-in-out rounded-sm z-50 shadow-[0_35px_60px_20px_rgba(0,0,0,0.3)] hover:scale-105 ">
    
                </div> 
                <div class=" w-72 h-56 hover:bg-lys_main transition ease-in-out  rounded-sm z-50 shadow-[0_35px_60px_20px_rgba(0,0,0,0.3)] hover:scale-105">
    
                </div>
                <div class=" w-72 h-52 transition hover:bg-lys_main ease-in-out rounded-sm z-50 shadow-[0_35px_60px_20px_rgba(0,0,0,0.3)] hover:scale-105">
    
                </div>
            </div>
        </div>
    </div>
    <div class="flex w-full h-96 flex-col justify-center items-center border-2 text-dark_green">
        <div class="flex justify-center w-96 h-24">
            <span class=" text-center w-96 text-6xl">lorem ipsum</span>
            
        </div>
        <div class=" w-52 h-3 bg-dark_green"></div>
        <div class=" pt-5 text-center">
            <span class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </span>
        </div>
    </div>
    <div class="flex w-screen h-screen text-text_color border-2 justify-center items-center">
        <div class="flex w-11/12 text-text_color border-2 flex-col">
            <div class=" w-1/2 h-96">

            </div>
            <div class=" w-1/2 h-96">

            </div>
        </div>
    </div>
    <div class="flex w-screen h-10 justify-center items-center">
        <button on:click={scrollToTop} class="  hover:scale-110 transition ease-in-out"> to top</button>
    </div>
</main>