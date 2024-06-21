<script lang="ts">
  import { page } from '$app/stores';
  import type { PageData } from './$types';

  $: curPage = parseInt($page.params.page);
  let pageInput: number;

  export let data: PageData;

  function changePage() {
    window.location.href = `/livros/${pageInput}`;
  }
</script>

<svelte:head>
  <title>Biblioteca | Página {curPage}</title>
</svelte:head>

<div class="p-4 w-fit flex items-center gap-4 mx-auto">
  {#if curPage !== 1}
    <a class="btn btn-sm" href="/livros/1">1</a>
  {/if}

  {#if curPage - 2 > 1}
    <p>...</p>
  {/if}

  {#if curPage - 1 > 1}
    <a class="btn btn-sm" href="/livros/{curPage - 1}">{curPage - 1}</a>
  {/if}

  <a class="btn btn-primary btn-sm" href="/livros/{curPage}">{curPage}</a>

  {#if curPage + 1 < data.pages}
    <a class="btn btn-sm" href="/livros/{curPage + 1}">{curPage + 1}</a>
  {/if}

  {#if curPage + 2 < data.pages}
    <p>...</p>
  {/if}

  {#if curPage !== data.pages}
    <a class="btn btn-sm" href="/livros/{data.pages}">{data.pages}</a>
  {/if}

  <input
    bind:value={pageInput}
    class="input input-bordered w-24"
    type="text"
    placeholder="Página"
    on:blur={changePage}
  />
</div>

{#if data.books.length === 0}
  <p class="text-center">Nenhum livro encontrado</p>
{/if}

<ul class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {#each data.books as book}
    <li>
      <img src="https://placehold.co/360x640" alt={book.title} class="w-full h-fit" />
      <h1 class="text-2xl">{book.title}</h1>
      <p>{book.author}</p>
      <p class="line-clamp-3">{book.synopsis}</p>
    </li>
  {/each}
</ul>
