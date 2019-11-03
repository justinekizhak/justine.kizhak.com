<script>
 import ContentLayout from './_content_layout.svelte';
</script>

<style>
 input, textarea {
     @apply w-full h-8 my-4 bg-gray-400;
 }
 textarea {
     @apply h-40;
 }
</style>

<svelte:head>
	<title>Contact | Justine kizhakkinedath</title>
</svelte:head>

<ContentLayout>
    <h1>Contact Me</h1>

    <form class="text-base" name="contact" method="POST" netlify-honeypot="bot-field"
          data-netlify="true" data-netlify-recaptcha="true">
        <p class="hidden">
            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>
        <p>
            <label>Your Name
            <input type="text" name="name" />
            </label>
        </p>
        <p>
            <label>Your Email
                <input type="email" name="email" />
            </label>
        </p>
        <p>
            <label>Message
                <textarea name="message"></textarea>
            </label>
        </p>
        <div data-netlify-recaptcha="true"></div>
        <div class="bg-main w-32 h-8 hover:shadow-main text-white">
            <button class="w-32 h-8" type="submit">Send</button>
        </div>
    </form>

</ContentLayout>
