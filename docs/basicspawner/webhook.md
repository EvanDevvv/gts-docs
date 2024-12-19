---
sidebar_label: 'Discord Webhook'
title: 'How to Setup Discord Webhook'
sidebar_position: 3
---

---

# How to Set Up and Deploy Cloudflare Workers

## 1. **Sign Up for Cloudflare**
   To get started with Cloudflare Workers, you first need to sign up for a free Cloudflare account if you don’t already have one. Here's how:
   - Go to the [Cloudflare website](https://www.cloudflare.com/).
   - Click on **Sign Up** and follow the steps to create an account.
   - Once your account is created and you're logged in, proceed to the next step.

## 2. **Create a Cloudflare Worker**
   After logging into Cloudflare, follow these steps to create a new Worker:
   
   1. From your Cloudflare dashboard, click on the **Workers** tab on the left sidebar.
   2. Click the **Create a Worker** button to start a new Worker project.
   3. This will open a code editor where you can write and edit your worker’s code.

## 3. **Set Up Your Worker**
   Now, you'll set up your Cloudflare Worker:
   
   1. In the **Code Editor**, you'll see a default template with a basic worker function. Delete the default code.
   2. Copy the Cloudflare Worker code provided above and paste it into the editor.
   
   This code will listen for POST requests, process the incoming data, and send a rich embed to Discord via a webhook.
   
## 4. **Configure Your Worker**
   There are a few parts of the code that you need to adjust to suit your needs:

   - **Webhook URL:**
     Locate the following line in the code:
     ```js
     const discordWebhookUrl = 'https://discord.com/api/webhooks/';
     ```
     Replace the URL (`'https://discord.com/api/webhooks/'`) with your actual Discord webhook URL. 
     To get your Discord webhook URL:
     1. Open your Discord server and go to **Server Settings**.
     2. Click on **Integrations** and then **Webhooks**.
     3. Create a new webhook or copy an existing one.
     4. Paste the copied webhook URL in the above line of code.

   - **Test the Worker:** After pasting the code into the editor, click the **Save and Deploy** button to save your changes and deploy the worker. The worker will then be live and can receive POST requests to the endpoint.

## 5. **Deploy the Worker**
   To deploy your worker and make it available publicly, follow these steps:
   - In the Cloudflare Worker dashboard, after saving the code, click on the **Deploy** button.
   - Cloudflare will give you a **subdomain** under `workers.dev` where your worker can be accessed. This is the endpoint you’ll use to interact with your worker (e.g., `https://your-worker-subdomain.workers.dev/`).

## 6. **Monitor Your Worker**
   Cloudflare provides monitoring tools that let you track requests and see any errors that may occur. To access the logs:
   - Go to the **Workers** tab in the Cloudflare dashboard.
   - Click on your deployed worker and view the **Logs** section for request logs and error messages.

---

```lua showLineNumbers title="Cloudflare Worker"
export default {
  async fetch(request) {
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    try {
      const contentType = request.headers.get('Content-Type') || '';
      if (!contentType.includes('application/json')) {
        return new Response('Invalid content type', { status: 400 });
      }

      const { author, message, color, busNumber, username, userId, userTag, messageType, serverType, groupRole } = await request.json();

      if (!author || !message || !color || !username || !userId || !userTag || !messageType || !serverType || !groupRole) {
        return new Response(
          JSON.stringify({ error: 'Missing required fields' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }

      // Fetch thumbnail from Roblox Thumbnails API
      const thumbnailApiUrl = `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${userId}&size=420x420&format=Png&isCircular=false&thumbnailType=HeadShot`;
      const thumbnailResponse = await fetch(thumbnailApiUrl);

      if (!thumbnailResponse.ok) {
        return new Response(
          JSON.stringify({ error: 'Failed to fetch thumbnail from Roblox', details: await thumbnailResponse.text() }),
          { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
      }

      const thumbnailData = await thumbnailResponse.json();
      const thumbnailUrl = thumbnailData.data[0]?.imageUrl || 'https://via.placeholder.com/420';

      // Get current Unix timestamp
      const currentTimestamp = Math.floor(Date.now() / 1000);

      let description, fields, colorCode;

      if (messageType === 'spawn') {
        description = `A bus was spawned!`;
        fields = [
          {
            name: "Bus Number",
            value: busNumber,
            inline: true
          },
          {
            name: "Spawned By",
            value: `${username} (@${userTag})`,
            inline: true
          },
          {
            name: "Server Type",
            value: serverType,
            inline: true
          },
          {
            name: "Users Group Role",
            value: groupRole,
            inline: true
          },
          {
            name: "Spawned At",
            value: `<t:${currentTimestamp}:F>\n<t:${currentTimestamp}:R>`,
            inline: false
          }
        ];
      } else if (messageType === 'despawn') {
        description = `A bus was despawned!`;
        fields = [
          {
            name: "Bus Number",
            value: busNumber,
            inline: true
          },
          {
            name: "Despawned By",
            value: `${username} (@${userTag})`,
            inline: true
          },
           {
            name: "Server Type",
            value: serverType,
            inline: true
          },
          {
            name: "Users Group Role",
            value: groupRole,
            inline: true
          },
          {
            name: "Despawned At",
            value: `<t:${currentTimestamp}:F>\n<t:${currentTimestamp}:R>`,
            inline: false
          }
        ];
      }  else {
        return new Response(
          JSON.stringify({ error: `Unsupported messageType: ${messageType}` }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }

      switch (messageType) {
        case 'spawn':
            colorCode = 0x00ff00; // Green for spawn
            break;
        case 'refuelbus':
          colorCode = 0x0000ff; // Blue for refuelbus
            break;
        default:
          colorCode = 0xff0000; // Red as a fallback for any unknown type
            break;
    }

      // Create the Discord embed with footer
      const embedPayload = {
        embeds: [{
          author: {name: author},
          title: author,
          description: description,
          color: colorCode,
          fields,
          thumbnail: {
            url: thumbnailUrl
          },
          footer: {
            text: "Powered by GTS Assets"
          },
          timestamp: new Date().toISOString()
        }]
      };

      const discordWebhookUrl = 'https://discord.com/api/webhooks/';
      const discordResponse = await fetch(discordWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(embedPayload)
      });

      if (!discordResponse.ok) {
        return new Response(
          JSON.stringify({ error: 'Discord Error', details: await discordResponse.text() }),
          { status: discordResponse.status, headers: { 'Content-Type': 'application/json' } }
        );
      }

      return new Response(
        JSON.stringify({ status: 'Message sent successfully!' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    } catch (err) {
      return new Response(
        JSON.stringify({ error: err.message }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  },
};
```

:::note
Still need support? Join our [Discord Server](https://discord.gg/5k85S4KWSR) for help!
:::
