<template>
    <div>
        <main class="grid place-items-center h-screen bg-gray-100">
            <section class="flex flex-col md:flex-row gap-11 py-10 px-5 bg-white rounded-md shadow-lg w-3/4 md:max-w-2xl">
                <div class="text-indigo-500 flex flex-col justify-between">
                <img src="https://images.stockx.com/Nike-Epic-React-Flyknit-2-White-Pink-Foam-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1603481985" alt="" />
                <div>
                    <small class="uppercase">choose size</small>
                <div class="flex flex-wrap md:flex-nowrap gap-1">
                    <a href="javascript:void(0);" class="grid place-items-center border px-3 py-2 hover:bg-indigo-500 hover:text-white transition">
                    <small>5</small>
                    </a>
                    <a href="javascript:void(0);" class="grid place-items-center border px-3 py-2 cursor-not-allowed text-gray-300 transition">
                    <small>6</small>
                    </a>
                    <a href="javascript:void(0);" class="grid place-items-center border px-3 py-2 hover:bg-indigo-500 hover:text-white transition">
                    <small>7</small>
                    </a>
                    <a href="javascript:void(0);" class="grid place-items-center border px-3 py-2 cursor-not-allowed text-gray-300 transition">
                    <small>8</small>
                    </a>
                    <a href="javascript:void(0);" class="grid place-items-center border px-3 py-2 cursor-not-allowed text-gray-300 transition">
                    <small>9</small>
                    </a>
                    <a href="javascript:void(0);" class="grid place-items-center border px-3 py-2 hover:bg-indigo-500 hover:text-white transition">
                    <small>10</small>
                    </a>
                    <a href="javascript:void(0);" class="grid place-items-center border px-3 py-2 hover:bg-indigo-500 hover:text-white transition">
                    <small>11</small>
                    </a>
                    <a href="javascript:void(0);" class="grid place-items-center border px-3 py-2 hover:bg-indigo-500 hover:text-white transition">
                    <small>12</small>
                    </a>
                </div>
                </div>
                </div>
                <div class="text-indigo-500">
                <small class="uppercase">women's running shoe</small>
                <h3 class="uppercase text-black text-2xl font-medium">nike epic react flyknit</h3>
                <h3 class="text-2xl font-semibold mb-7">$150</h3>
                <small class="text-black">The Nike Epic React Flyknit 1 provides crazy comfort that lasts as long as you can run. Its Nike React foam cushioning is responsive yet lightweight, durable yet soft. This attraction of opposites creates a sensation that not only enhances the feeling of moving forwards, but makes running feel fun, too.</small>
                <div class="flex gap-0.5 mt-4">
                    <button id="addToCartButton" class="bg-indigo-600 hover:bg-indigo-500 focus:outline-none transition text-white uppercase px-8 py-3">add to cart</button>
                    <button id="likeButton" class="bg-indigo-600 hover:bg-indigo-500 focus:outline-none transition text-white uppercase p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
            </svg>
                    </button>
                </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
export default {
    
}
</script>

<script>
    const likeButton = document.querySelector("#likeButton");
    const addToCartButton = document.querySelector("#addToCartButton");
    likeButton.addEventListener("click", ()=>{
        likeButton.classList.toggle("text-red-400")
    })
    addToCartButton.addEventListener("click", ()=>{
      const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Toast.fire({
  icon: 'success',
  title: 'Added to cart'
})
    })
</script>