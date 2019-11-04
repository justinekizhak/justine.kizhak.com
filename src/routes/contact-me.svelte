<script>
 import ContentLayout from './_content_layout.svelte';
</script>

<style>
</style>

<svelte:head>
	<title>Contact | Justine kizhakkinedath</title>
</svelte:head>

<ContentLayout>
    <h1>Contact Me</h1>

        <form action="https://getform.io/f/0375a567-86fc-481c-a31f-73a89cd16c46" method="POST">


            <p>
                <label>Your Name
                    <input type="text" name="name" required maxlength="255"
                           placeholder="John Doe" />
                </label>
            </p>
            <p>
                <label>Your Email
                    <input type="email" name="email" required placeholder="john@doe.com" />
                </label>
            </p>
            <p>
                <label>Message
                    <textarea name="message" required placeholder="Hi there" ></textarea>
                </label>
            </p>
            <div class="bg-main w-32 h-8 hover:shadow-main text-white">
                <button class="w-32 h-8" type="submit">Send</button>
            </div>
        </form>

</ContentLayout>
