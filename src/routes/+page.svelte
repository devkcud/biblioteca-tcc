<svelte:head>
  <title>Biblioteca</title>
</svelte:head>

<div class="h-screen flex flex-col gap-4 items-center justify-center">
  <h1 class="text-5xl">Bem-vindo!</h1>
  <p>Estamos preparando sua experiência. Pedimos que aguarde...</p>

  <a class="btn btn-primary" href="/livros">Ver livros</a>

  <form action="?/addbooks" method="POST">
    <button type="submit" class="btn btn-error">DEBUG: Adicionar livros</button>
  </form>
</div>
