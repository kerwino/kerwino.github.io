export async function GET() {
    return new Response(JSON.stringify({ msg: "Hello" }, null, 4), {
        status: 200,
    });
}
