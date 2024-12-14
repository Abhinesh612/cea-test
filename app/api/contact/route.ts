export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400 }
      );
    }

    const apiKey = process.env.CONTACT_API_KEY;
    console.log(apiKey);

    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'API Key is missing' }),
        { status: 500 }
      );
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: apiKey,
        name,
        email,
        message,
      }),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      return new Response(
        JSON.stringify({ success: true, message: 'Form submitted successfully' }),
        { status: 200 }
      );
    } else {
      return new Response(
        JSON.stringify({
          success: false,
          message: result.message || 'There was an issue with the submission',
        }),
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error sending form data to Web3Forms:", error);
    return new Response(
      JSON.stringify({ error: 'An error occurred while submitting the form' }),
      { status: 500 }
    );
  }
}
