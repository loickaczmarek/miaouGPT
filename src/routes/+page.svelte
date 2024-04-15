<script lang="ts">
    import {PromptAiRepository} from "./prompt-ai-repository";

    const promptAiRepository = new PromptAiRepository()
    let question = ""
    let response = ""

    async function sendAnswer() {
        response = await promptAiRepository.sendAnswer(question)
    }
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Miaou GPT" />
</svelte:head>

<section>
    <h1>Miaou GPT</h1>
    <div class="principal">
        <textarea bind:value={question} class="answer"></textarea>
        <button on:click={sendAnswer}>Envoyer</button>
        <div class="response">{response}</div>
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 0.6;
    }

    .principal {
        display: flex;
        flex-direction: column;
    }

    h1 {
        width: 100%;
        text-align: center;
    }

    textarea {
        width: 500px;
        height: 300px;
    }
</style>