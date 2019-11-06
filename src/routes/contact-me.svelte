<script>
 import ContentLayout from './_content_layout.svelte';
</script>

<style>
</style>

<svelte:head>
	<title>Contact | Justine kizhakkinedath</title>
  <script src="https://kwes.io/js/kwes.js"></script>
</svelte:head>

<ContentLayout>
    <h1>Contact Me</h1>

    <div class="kwes-form">
        <form method="POST" action="https://kwes.io/api/foreign/forms/4VDCLEyoh7ceilsMlHl6"
              success-message="Thanks for contacting me" error-message="Oops! Your form has errors.">

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
    </div>

</ContentLayout>
