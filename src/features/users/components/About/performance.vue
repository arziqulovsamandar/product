<template>
    <div class="flex justify-center items-center flex-wrap w-full max-w-[1400px] mx-auto">
        <div class="xs:w-[50%] w-full xs:p-0 p-10">
            <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/about-5.png" alt="">
        </div>
        <div class="justify-start items-center px-10 w-full xs:w-[50%]">
            <p class="text-[24px] text-main-100 font-semibold">Our performance</p>
            <p class="text-[30px] font-semibold leading-8 mt-5">
                Your Partner for <br>
                e-commerce grocery solution
            </p>
            <p class="text-fortitle-100 mt-5">
                Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque <br> 
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi <br> 
                architecto
            </p>
            <p class="text-fortitle-100 mt-5">
                Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam <br>
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            </p>
        </div>
    </div>


    <div class="flex items-center justify-center mt-8 w-full max-w-[1430px] mx-auto">
        <div class="flex flex-wrap w-full mx-[15px]">
            <div v-for="item in minifor" class="xs:w-1/3 w-full px-3 mb-3 flex flex-col text-center xs:justify-start xs:text-start xs:mb-0">
                <p class="text-[32px] text-fortitle-200 font-semibold">
                    {{ item.name }}
                </p>
                <p class="text-[16px] text-fortitle-100 mt-3">
                    Volutpat diam ut venenatis tellus in metus. Nec dui nunc <br>
                    mattis enim ut tellus eros donec ac odio orci ultrices in. <br>
                    ellus eros donec ac odio orci ultrices in.
                </p>
            </div>
        </div>
    </div>
</template>



<script setup lang="ts">

    const minifor = [
        {
            name:"Who we are",
        },
        {
            name:"Our history",
        },
        {
            name:"Our mission"
        }
    ]
   

</script>

<style scoped>

</style>
