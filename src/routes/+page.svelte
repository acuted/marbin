<script>
  import { onMount } from "svelte";
  let inputText = "";

  function formatText(text) {
    // First, escape any HTML to prevent XSS
    text = escapeHtml(text);
    
    // Then apply formatting
    return text
      .replace(/\*([^*]+)\*/g, '<strong>$1</strong>')
      .replace(/_([^_]+)_/g, '<em>$1</em>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  }

  function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
  }
  
  function downloadMarkdown() {
    const markdownContent = inputText
      .replace(/\*(.*?)\*/g, "**$1**")
      .replace(/_(.*?)_/g, "*$1*");
    const blob = new Blob([markdownContent], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "formatted_text.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
</script>

<main class="container">
  <!--
  <header class="head-page">
    <h1>Kat: A simple text editor that incorporates markdown details.</h1>
    <p style="text-align: center;">Write entire documents or small blocks of text you need in real time,<br> with stylish formatting available in markdown.</p>
  </header>
  -->

  <h1 style="font-size: 40px">Marbin</h1>

  <div class="container-text">
    {#if inputText}
      <p>{@html formatText(inputText)}</p>
    {:else}
      <p style="text-align: center; color: #cccc;">Written text will appear here</p>
    {/if}
  </div>

  <textarea
    bind:value={inputText}
    placeholder="Use *asterisks* for bold, _underscores_ for italic, and [text](link url) for links."  
  ></textarea>

  <button
    on:click={downloadMarkdown}
    class="save-button"
    title="Save as Markdown"
  >
  Download this file
  </button>

  <div>
    <div
      style="text-align: left; margin-top: 60px; border-top: 1px solid #cccc;"
    >
      <br />
      <a style="text-decoration: none;" href="./"
        >A simple text editor that incorporates a bit markdown details.</a
      >
    </div>
    <footer style="padding-bottom: 10px; text-align: center;">
      <p>
        <small
          >All rights reserved to <a href="https://github.com/acuted">@acuted</a
          > &copy; 2024</small
        >
      </p>
    </footer>
  </div>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

  .save-button {
    display: flex;
    align-items: center;
    transform: translate(308px, -30px);
    border: 2px solid #8f8f8f;
    background-color: #ffffff;
    border-radius: 5px;
    padding-left: 6px;
    padding-right: 6px;
    padding-top: 4px;
    padding-bottom: 4px;
    max-width: 137px;
    width: 100%;
    color: #161616;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;
    box-sizing: border-box;
    font-family: 'Inter';
  }

  .container-text {
    padding: 10px;
    max-width: 850px;
    width: 100%;
    margin: 0 auto;
    border: transparent;
    border-radius: 8px;
    background-color: transparent;
    max-height: 183px;
    overflow-y: scroll;
  }

  textarea {
    background-color: #424242;
    border-radius: 5px;
    border: 1px solid #3f3f3fcc;
    margin-bottom: 1rem;
    font-size: 1rem;
    max-width: 750px;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    resize: none;
    padding: 12px 10px;
    height: 45px;
    box-sizing: border-box;
    margin-top: 10px;
    color: #ffff;
    transition: background ease-in-out 0.3s;
    outline: 1px solid #252525;
    height: 183px;
  }

  textarea:hover {
    transition: background ease-in-out 0.3s;
    background-color: #252525;
  }

  p {
    font-size: 1.2rem;
    width: 100%;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: pre-wrap;
    margin: 0;
  }

  strong {
    font-weight: bold;
  }
</style>